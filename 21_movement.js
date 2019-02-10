// Handle moving to a target
// TODO: send_cm/on_cm stuff for map change
function moveToTarget(target, min = 0, max = 0) {
    let range;
    if (target) range = distanceToPoint(target.real_x, target.real_y) + 0.1;
    // If range is good stay
    if (range && (range <= max && range >= min)) return stop();
    // If smart moving past them stop
    if (range && smart.moving && range <= character.range) return stop();
    // If moving continue
    if (is_moving(character)) return;
    // Handle different map
    if (getCharacterData()[character.party].map !== character.map) return shibMove(getCharacterData()[character.party].map);
    // Handle same map but far away
    if (!range || !parent.entities[character.party] || range >= character.range * 4) {
        if (target) moveToCoords(target.real_x, target.real_y); else return shibMove(target);
    }
    // Handle close
    if (target && (range > max || range < min || !range)) moveToCoords(target.real_x + getRndInteger(((min + max) / 2) * -1, ((min + max) / 2)), target.real_y + getRndInteger(((min + max) / 2) * -1, ((min + max) / 2)));
}

// Handle moving to party leader
// TODO: send_cm/on_cm stuff for map change
let mapSwap = {};
function moveToLeader(min = 20, max = 25) {
    let leader = get_player(character.party);
    let range;
    if (leader) range = distanceToPoint(leader.real_x, leader.real_y) + 0.1;
    // If range is good stay
    if (range && (range <= max && range >= min)) return stop();
    // If smart moving past them stop
    if (range && smart.moving && range <= character.range) return stop();
    // Handle a map swap occuring
    if (mapSwap[character.name] && mapSwap[character.name] === character.map) {
        mapSwap[character.name] = undefined;
        return stop();
    }
    // If moving continue
    if (is_moving(character)) return;
    // Handle bank
    if (parent.party[character.party].map === 'bank') return shibMove('main');
    // Handle different map
    if (getCharacterData()[character.party].map !== character.map) {
        mapSwap[character.name] = getCharacterData()[character.party].map;
        return shibMove(getCharacterData()[character.party].map);
    }
    // Handle same map but far away
    if (!range || !parent.entities[character.party] || range >= character.range * 4) {
        if (leader) moveToCoords(leader.x, leader.y); else return shibMove(parent.party[character.party].x, parent.party[character.party].y);
    }
    // Handle close
    if (leader && (range > max || range < min || !range)) moveToCoords(leader.real_x + getRndInteger(((min + max) / 2) * -1, ((min + max) / 2)), leader.real_y + getRndInteger(((min + max) / 2) * -1, ((min + max) / 2))); else if (!leader) shibMove(parent.party[character.party].x + getRndInteger(((min + max) / 2) * -1, ((min + max) / 2)), parent.party[character.party].y + getRndInteger(((min + max) / 2) * -1, ((min + max) / 2)));
}

// Handle moving to merchant
function moveToMerchant(min = 1, max = 125) {
    let merchant;
    if (parent.party_list.length > 0) {
        for (let id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (entity && entity.ctype === 'merchant') merchant = entity;
        }
    }
    if (!merchant) {
        shibMove('main');
        return false;
    }
    let range = distanceToPoint(merchant.real_x, merchant.real_y) + 0.1;
    // If range is good stay
    if (range && (range <= max && range >= min)) {
        stop();
        return true;
    }
    // If smart moving past them stop
    if (range && smart.moving && range <= character.range) {
        stop();
        return false;
    }
    // If moving continue
    if (is_moving(character)) return false;
    // Handle close
    if (range > max || range < min || !range) {
        moveToCoords(merchant.real_x + getRndInteger(((min + max) / 2) * -1, ((min + max) / 2)), merchant.real_y + getRndInteger(((min + max) / 2) * -1, ((min + max) / 2)));
        return false;
    }
}

// Travel to an NPC
function travelToNPC(name) {
    let targetNPC = getNpc(name);
    let distance;
    if (targetNPC) distance = distanceToPoint(targetNPC.position[0], targetNPC.position[1]);
    if (!smart.moving && (!distance || !distance > 250)) {
        smart_move(name);
        return;
    }
    if (distance && distance < 150) {
        stop();
        return true;
    }
}

// Move to coords wrapper
function moveToPosition(position) {
    if (!position) return;
    moveToCoords(position.x, position.y)
}

// Checks if you can move via move then moves via smart_move if not
function moveToCoords(x, y) {
    if (can_move_to(x, y)) {
        if (smart.moving) stop();
        move(x, y);
    }
    if (is_moving(character)) return;
    else smart_move({x: x, y: y});
}

// smart_move wrapper
function shibMove(destination, second = undefined) {
    if (!is_moving(character)){
        smart_move(destination, second);
    }
}

// Kite from your current target and also take into account an avoid array
let alreadyStored = {};
function getKitePosition(target, avoidArray, rangeToTarget = character.range * 0.95) {
    let range;
    if (target) range = distanceToPoint(target.real_x, target.real_y);
    for (let x = 0; x < 1500; x++) {
        let xChange = getRndInteger(-150, 150);
        let yChange = getRndInteger(-character.range, character.range);
        if (can_move_to(character.real_x + xChange, character.real_y + yChange)) {
            let newRange;
            if (target)  newRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, target.real_x, target.real_y);
            // Handle avoiding others
            let closestAvoid, currentClosestAvoid, maxRange;
            if (avoidArray && avoidArray.length) {
                for (let avoid of avoidArray) {
                    if (target && avoid.id === target.id) continue;
                    let avoidRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, avoid.real_x, avoid.real_y);
                    let currentAvoidRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, avoid.real_x, avoid.real_y);
                    if (!closestAvoid || avoidRange < closestAvoid) closestAvoid = avoidRange;
                    if (!currentClosestAvoid || currentAvoidRange < currentClosestAvoid) currentClosestAvoid = avoidRange;
                    if (G.monsters[avoid.mtype] && (!maxRange || maxRange < G.monsters[avoid.mtype].range)) maxRange = G.monsters[avoid.mtype].range;
                }
            }
            // Return original if still good otherwise check a new one
            if ((!target || (range >= rangeToTarget * 0.8 && range <= rangeToTarget)) && (!currentClosestAvoid || currentClosestAvoid > maxRange * 4)) {
                return undefined;
            } else if ((!target || (newRange >= rangeToTarget * 0.8 && newRange <= rangeToTarget)) && (!closestAvoid || closestAvoid > maxRange * 4)) {
                let newPos = {
                    x: character.real_x + xChange,
                    y: character.real_y + yChange
                };
                if (!alreadyStored[character.name]) {
                    alreadyStored[character.name] = {x:newPos.x,y:newPos.y,t:Date.now()};
                } else if (alreadyStored[character.name] && alreadyStored[character.name].t + 1200 < Date.now()) {
                    alreadyStored[character.name] = {x:newPos.x,y:newPos.y,t:Date.now()};
                    return newPos;
                } else {
                    return alreadyStored[character.name];
                }
            }
        }
    }
    return undefined;
}

// Stay safe
function kite() {
    let nearbyHostiles = nearbyAggressors();
    if (!nearbyHostiles.length) return;
    // Check if we should move
    let currentClosestAvoid, maxRange, nearest;
    for (let avoid of nearbyHostiles) {
        let currentAvoidRange = distanceBetweenPoints(character.real_x, character.real_y, avoid.real_x, avoid.real_y);
        if (!currentClosestAvoid || currentAvoidRange < currentClosestAvoid) {
            nearest = avoid;
            currentClosestAvoid = currentAvoidRange;
        }
        if (G.monsters[avoid.mtype] && (!maxRange || maxRange < G.monsters[avoid.mtype].range)) maxRange = G.monsters[avoid.mtype].range;
    }
    if (!nearest || currentClosestAvoid >= maxRange) return;
    let safePositions = [];
    for (let x = 0; x < 1500; x++) {
        let xChange = getRndInteger(-150, 150);
        let yChange = getRndInteger(-150, 150);
        if (can_move_to(character.real_x + xChange, character.real_y + yChange) && distanceBetweenPoints(character.real_x, character.real_y, nearest.real_x, nearest.real_y) >= maxRange * 1.05) {
            safePositions.push({x: character.real_x + xChange, y: character.real_y + yChange})
        }
    }
    if (!safePositions.length) return;
    let sorted = sortCoordsByDistance(safePositions);
    if (smart.moving) stop('move');
    move(sorted[0].x, sorted[0].y);
}

// Try to move tackled away from other threats
function moveTackled(target, avoidArray) {
    for (let x = 0; x < 500; x++) {
        let xChange = getRndInteger(-50, 50);
        let yChange = getRndInteger(-50, 50);
        if (can_move_to(character.real_x + xChange, character.real_y + yChange)) {
            // Handle avoiding others
            let closestAvoid, currentClosestAvoid, maxRange;
            if (avoidArray && avoidArray.length) {
                for (let avoid of avoidArray) {
                    if (target && avoid.id === target.id) continue;
                    let avoidRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, avoid.real_x, avoid.real_y);
                    let currentAvoidRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, avoid.real_x, avoid.real_y);
                    if (!closestAvoid || avoidRange < closestAvoid) closestAvoid = avoidRange;
                    if (!currentClosestAvoid || currentAvoidRange < currentClosestAvoid) currentClosestAvoid = avoidRange;
                    if (G.monsters[avoid.mtype] && (!maxRange || maxRange < G.monsters[avoid.mtype].range)) maxRange = G.monsters[avoid.mtype].range;
                }
            }
            // Return original if still good otherwise check a new one
            if (!currentClosestAvoid || currentClosestAvoid > maxRange * 8) {
                return undefined;
            } else if (!closestAvoid || closestAvoid > maxRange * 8) {
                let newPos = {
                    x: character.real_x + xChange,
                    y: character.real_y + yChange
                };
                if (!alreadyStored[character.name]) {
                    alreadyStored[character.name] = {x:newPos.x,y:newPos.y,t:Date.now()};
                } else if (alreadyStored[character.name] && alreadyStored[character.name].t + 1200 < Date.now()) {
                    alreadyStored[character.name] = {x:newPos.x,y:newPos.y,t:Date.now()};
                    return newPos;
                } else {
                    return alreadyStored[character.name];
                }
            }
        }
    }
    return undefined;
}