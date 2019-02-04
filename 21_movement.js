//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_target(target, min = 0, max = 0) {
    let range = distance_to_point(target.real_x, target.real_y);
    if (!range || range > max || range < min || !range) xmove(target.real_x, target.real_y)
}

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_position(position) {
    xmove(position.x, position.y)
}

//Extra range to add to a monsters attack range, to give a little more wiggle room to the algorithm.
let rangeBuffer = 45;

//How far away we want to consider monsters for
let calcRadius = 150;

//What types of monsters we want to try to avoid
let avoidTypes = ["mole"];

let avoidPlayers = true;//Set to false to not avoid players at all
let playerBuffer = 30;//Additional Range around players
let avoidPlayersWhitelist = [];//Players want to avoid differently
let avoidPlayersWhitelistRange = 30; //Set to null here to not avoid whitelisted players
let playerRangeOverride = 65; //Overrides how far to avoid, set to null to use player range.
let playerAvoidIgnoreClasses = ["merchant"];//Classes we don't want to try to avoid

//Tracking when we send movements to avoid flooding the socket and getting DC'd
let lastMove;

//Whether we want to draw the various calculations done visually
let drawDebug = true;

setInterval(function () {
    if (drawDebug) {
        clear_drawings();
    }
    let goal = null;
    let phoenix;
    for (id in parent.entities) {
        let entity = parent.entities[id];

        if (entity.mtype == "phoenix") {
            goal = {x: entity.real_x, y: entity.real_y};
            break;
        }
    }
    //Try to avoid monsters,
    let avoiding = avoidMobs(goal);
    if (!avoiding && goal != null) {
        if (lastMove == null || new Date() - lastMove > 100) {
            move(goal.x, goal.y);
            lastMove = new Date();
        }
    }
}, 25);

function avoidMobs(goal) {
    let noGoal = false;
    if (goal == null || goal.x == null || goal.y == null) {
        noGoal = true;
    }
    if (drawDebug && !noGoal) {
        draw_circle(goal.x, goal.y, 25, 1, 0xDFDC22);
    }
    let maxWeight, maxWeightAngle;
    let movingTowards = false;
    let monstersInRadius = getMonstersInRadius();
    let avoidRanges = getAnglesToAvoid(monstersInRadius);
    let inAttackRange = isInAttackRange(monstersInRadius);
    if (!noGoal) {
        let desiredMoveAngle = angleToPoint(character, goal.x, goal.y);
        let movingTowards = angleIntersectsMonsters(avoidRanges, desiredMoveAngle);
        let distanceToDesired = distanceToPoint(character.real_x, character.real_y, goal.x, goal.y);
        let testMovePos = pointOnAngle(character, desiredMoveAngle, distanceToDesired);
        if (drawDebug) {
            draw_line(character.real_x, character.real_y, testMovePos.x, testMovePos.y, 1, 0xDFDC22);
        }
    }
    //If we can't just directly walk to the goal without being in danger, we have to try to avoid it
    if (inAttackRange || movingTowards || (!noGoal && !can_move_to(goal.x, goal.y))) {
        //Loop through the full 360 degrees (2PI Radians) around the character
        //We'll test each point and see which way is the safest to  go
        for (let i = 0; i < Math.PI * 2; i += Math.PI / 60) {
            let weight = 0;
            let position = pointOnAngle(character, i, 75);
            //Exclude any directions we cannot move to (walls and whatnot)
            if (can_move_to(position.x, position.y)) {
                //If a direction takes us away from a monster that we're too close to, apply some pressure to that direction to make it preferred
                let rangeWeight = 0;
                let inRange = false;
                for (id in monstersInRadius) {
                    let entity = monstersInRadius[id];
                    let monsterRange = getRange(entity);
                    let distToMonster = distanceToPoint(position.x, position.y, entity.real_x, entity.real_y);
                    let charDistToMonster = distanceToPoint(character.real_x, character.real_y, entity.real_x, entity.real_y);
                    if (charDistToMonster < monsterRange) {
                        inRange = true;
                    }
                    if (charDistToMonster < monsterRange && distToMonster > charDistToMonster) {
                        rangeWeight += distToMonster - charDistToMonster;
                    }
                }
                if (inRange) {
                    weight = rangeWeight;
                }
                //Determine if this direction would cause is to walk towards a monster's radius
                let intersectsRadius = angleIntersectsMonsters(avoidRanges, i);
                //Apply some selective pressure to this direction based on whether it takes us closer or further from our intended goal
                if (goal != null && goal.x != null && goal.y != null) {
                    let tarDistToPoint = distanceToPoint(position.x, position.y, goal.x, goal.y);
                    weight -= tarDistToPoint / 10;
                }
                //Exclude any directions which would make us walk towards a monster's radius
                if (intersectsRadius === false) {
                    //Update the current max weight direction if this one is better than the others we've tested
                    if (maxWeight == null || weight > maxWeight) {
                        maxWeight = weight;
                        maxWeightAngle = i;
                    }
                }
            }
        }
        //Move towards the direction which has been calculated to be the least dangerous
        let movePoint = pointOnAngle(character, maxWeightAngle, 20);
        if (lastMove == null || new Date() - lastMove > 100) {
            lastMove = new Date();
            move(movePoint.x, movePoint.y);
        }
        if (drawDebug) {
            draw_line(character.real_x, character.real_y, movePoint.x, movePoint.y, 2, 0xF20D0D);
        }
        return true;
    }
    else {
        return false;
    }

}

function getRange(entity) {
    let monsterRange;
    if (entity.type != "character") {
        monsterRange = parent.G.monsters[entity.mtype].range + rangeBuffer;
    }
    else {
        if (avoidPlayersWhitelist.includes(entity.id) && avoidPlayersWhitelistRange != null) {
            monsterRange = avoidPlayersWhitelistRange;
        }
        else if (playerRangeOverride != null) {
            monsterRange = playerRangeOverride + playerBuffer;
        }
        else {
            monsterRange = entity.range + playerBuffer;
        }
    }

    return monsterRange;
}

function isInAttackRange(monstersInRadius) {
    for (id in monstersInRadius) {
        let monster = monstersInRadius[id];
        let monsterRange = getRange(monster);
        let charDistToMonster = distanceToPoint(character.real_x, character.real_y, monster.real_x, monster.real_y);
        if (charDistToMonster < monsterRange) {
            return true;
        }
    }
    return false;
}

function angleIntersectsMonsters(avoidRanges, angle) {
    for (id in avoidRanges) {
        let range = avoidRanges[id];
        let between = isBetween(range[1], range[0], angle);
        if (between) {
            return true;
        }
    }
    return false;
}

function getAnglesToAvoid(monstersInRadius) {
    let avoidRanges = [];
    if (monstersInRadius.length > 0) {
        for (id in monstersInRadius) {
            let monster = monstersInRadius[id];
            let monsterRange = getRange(monster);
            let tangents = findTangents({x: character.real_x, y: character.real_y}, {
                x: monster.real_x,
                y: monster.real_y,
                radius: monsterRange
            });
            //Tangents won't be found if we're within the radius
            if (!isNaN(tangents[0].x)) {
                let angle1 = angleToPoint(character, tangents[0].x, tangents[0].y);
                let angle2 = angleToPoint(character, tangents[1].x, tangents[1].y);

                if (angle1 < angle2) {
                    avoidRanges.push([angle1, angle2]);
                }
                else {
                    avoidRanges.push([angle2, angle1]);
                }
                if (drawDebug) {
                    draw_line(character.real_x, character.real_y, tangents[0].x, tangents[0].y, 1, 0x17F20D);
                    draw_line(character.real_x, character.real_y, tangents[1].x, tangents[1].y, 1, 0x17F20D);
                }
            }
            if (drawDebug) {
                draw_circle(monster.real_x, monster.real_y, monsterRange, 1, 0x17F20D);
            }
        }
    }
    return avoidRanges;
}

function getMonstersInRadius() {
    let monstersInRadius = [];

    for (id in parent.entities) {
        let entity = parent.entities[id];
        let distanceToEntity = distanceToPoint(entity.real_x, entity.real_y, character.real_x, character.real_y);
        let range = getRange(entity);
        if (entity.type === "monster" && avoidTypes.includes(entity.mtype)) {
            let monsterRange = getRange(entity);
            if (distanceToEntity < calcRadius) {
                monstersInRadius.push(entity);
            }
        }
        else {
            if (avoidPlayers && entity.type === "character" && !entity.npc && !playerAvoidIgnoreClasses.includes(entity.ctype)) {
                if (!avoidPlayersWhitelist.includes(entity.id) || avoidPlayersWhitelistRange != null) {
                    if (distanceToEntity < calcRadius || distanceToEntity < range)
                        monstersInRadius.push(entity);
                }
            }
        }
    }
    return monstersInRadius;
}


function normalizeAngle(angle) {
    return Math.atan2(Math.sin(angle), Math.cos(angle));
}

//Source: https://stackoverflow.com/questions/11406189/determine-if-angle-lies-between-2-other-angles
function isBetween(angle1, angle2, target) {
    if (angle1 <= angle2) {
        if (angle2 - angle1 <= Math.PI) {
            return angle1 <= target && target <= angle2;
        } else {
            return angle2 <= target || target <= angle1;
        }
    } else {
        if (angle1 - angle2 <= Math.PI) {
            return angle2 <= target && target <= angle1;
        } else {
            return angle1 <= target || target <= angle2;
        }
    }
}

//Source: https://stackoverflow.com/questions/1351746/find-a-tangent-point-on-circle
function findTangents(point, circle) {
    let dx = circle.x - point.x;
    let dy = circle.y - point.y;
    let dd = Math.sqrt(dx * dx + dy * dy);
    let a = Math.asin(circle.radius / dd);
    let b = Math.atan2(dy, dx);

    let t = b - a;

    let ta = {x: circle.x + (circle.radius * Math.sin(t)), y: circle.y + (circle.radius * -Math.cos(t))};

    t = b + a;
    let tb = {x: circle.x + circle.radius * -Math.sin(t), y: circle.y + circle.radius * Math.cos(t)}


    return [ta, tb];
}

function offsetToPoint(x, y) {
    let angle = angleToPoint(x, y) + Math.PI / 2;
    return angle - characterAngle();
}

function pointOnAngle(entity, angle, distance) {
    let circX = entity.real_x + (distance * Math.cos(angle));
    let circY = entity.real_y + (distance * Math.sin(angle));

    return {x: circX, y: circY};
}

function entityAngle(entity) {
    return (entity.angle * Math.PI) / 180;
}

function angleToPoint(entity, x, y) {
    let deltaX = entity.real_x - x;
    let deltaY = entity.real_y - y;

    return Math.atan2(deltaY, deltaX) + Math.PI;
}

function characterAngle() {
    return (character.angle * Math.PI) / 180;
}

function distanceToPoint(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}