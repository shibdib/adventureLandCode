// Handle moving to a target
// TODO: send_cm/on_cm stuff for map change
function moveToTarget(target, min = 0, max = character.range * 0.9) {
    let range;
    if (target) range = distanceToPoint(target.real_x, target.real_y) + 0.1;
    // If range is good stay
    if (range && (range <= max && range >= min)) return stop();
    // If smart moving past them stop
    if (range && smart.moving && range <= 100) return stop();
    // If moving continue
    if (smart.moving) return;
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
    if (smart.moving) return;
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
    } else if (is_moving(character)) {
        return;
    } else {
        smart_move({x: x, y: y});
    }
}

// smart_move wrapper
function shibMove(destination, second = undefined) {
    if (!is_moving(character)){
        smart_move(destination, second);
    }
}

// Stay safe
let kitePos = {};
function kite(target = undefined) {
    if (kitePos[character.name]) {
        if (distanceBetweenPoints(kitePos[character.name].x, kitePos[character.name].y, character.x, character.y) > 3) {
            return moveToCoords(kitePos[character.name].x, kitePos[character.name].y);
        } else {
            kitePos[character.name] = undefined;
        }
    }
    let nearbyHostiles = nearbyAggressors(250, true);
    if (target) nearbyHostiles = nearbyHostiles.filter((h) => h.id !== target.id);
    if (!nearbyHostiles.length) return;
    // Check if we should move
    let currentClosestAvoid, nearest;
    for (let avoid of nearbyHostiles) {
        let currentAvoidRange = distanceBetweenPoints(character.real_x, character.real_y, avoid.real_x, avoid.real_y);
        if (!currentClosestAvoid || currentAvoidRange < currentClosestAvoid) {
            nearest = avoid;
            currentClosestAvoid = currentAvoidRange;
        }
    }
    if (!nearest || currentClosestAvoid >= G.monsters[nearest.mtype].range * 2.75) return;
    draw_circle(nearest.x, nearest.y, G.monsters[nearest.mtype].range * 2.75, 1, '#b30000');
    let angle = CalcAngle(character.x, character.y, nearest.x, nearest.y);
    let x = Math.cos(angle);
    let y = Math.sin(angle);
    if (character.x > nearest.x) x += G.monsters[nearest.mtype].range * 2; else x -= G.monsters[nearest.mtype].range * 2;
    if (character.y > nearest.y) y += G.monsters[nearest.mtype].range * 2; else y -= G.monsters[nearest.mtype].range * 2;
    if (can_move_to(character.x + x, character.y + y)) {
        if (smart.moving) stop('move');
        kitePos[character.name] = {x: character.x + x, y: character.y + y};
        return moveToCoords(character.x + x, character.y + y);
    } else {
        for (let a = 0; a < 100; a++) {
            let randX = getRndInteger(-40, 40);
            let randY = getRndInteger(-40, 40);
            if (can_move_to(character.x + x + randX, character.y + y + randY)) {
                if (smart.moving) stop('move');
                kitePos[character.name] = {x: character.x + x, y: character.y + y};
                return moveToCoords(character.x + x, character.y + y);
            }
        }
    }
}

// Calc angle for kiting https://gist.github.com/conorbuck/2606166
/**
 * @return {number}
 */
function CalcAngle(px, py, ax, ay) {
    return Math.atan2(ay - py, ax - px) * 180 / Math.PI;
}