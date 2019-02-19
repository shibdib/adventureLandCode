// Handle moving to a target
// TODO: send_cm/on_cm stuff for map change
function moveToTarget(target, min = 0, max = character.range * 0.7) {
    if (target) {
        let range = distanceToPoint(target.real_x, target.real_y) + 0.1;
        // If range is good stay
        if (range <= max * 0.7 && range >= min) return stop();
        // Move to coords
        shibMove({x: target.x, y: target.y, range: (min + max) / 2});
    } else {
        shibMove({x: target.x, y: target.y, range: (min + max) / 2});
    }
}

// Handle moving to party leader
let mapSwap = {};
function moveToLeader(min = 20, max = 25) {
    // Handle a map swap occuring
    if (mapSwap[character.name] && mapSwap[character.name] === character.map) {
        mapSwap[character.name] = undefined;
        return stop();
    }
    let leader = get_player(character.party);
    let locationData = getCharacterData()[character.party] || parent.party[character.party];
    if (leader) {
        let range = distanceToPoint(leader.real_x, leader.real_y) + 0.1;
        // If range is good stay
        if (range <= max * 0.7 && range > min) return stop();
        shibMove({x: locationData.x, y: locationData.y, range: (min + max) / 2});
    } else {
        // Handle different map
        if (locationData.map !== character.map) {
            // Handle bank
            if (locationData.map === 'bank') return shibMove('main');
            mapSwap[character.name] = locationData.map;
            return shibMove(locationData.map);
        } else {
            shibMove({x: locationData.x, y: locationData.y, range: (min + max) / 2});
        }
    }
}

// Patrol a map
let onPatrol = {};

function patrolMap(mapName = undefined) {
    let patrolData = onPatrol[character.name] || {};
    if (!patrolData.map) patrolData.map = mapName || random_one(Object.keys(patrolRoutes));
    if (!patrolData.route) patrolData.route = patrolRoutes[patrolData.map];
    if (!searchRoute) searchRoute = patrolRoutes[eventMap];
    if (!is_moving(character)) {
        if (!patrolData.route.length) {
            if (!mapName) patrolData.map = undefined;
            return patrolData.route = undefined;
        }
        if (!kite()) shibMove({x: patrolData.route[0].x, y: patrolData.route[0].y, map: patrolData.map});
        patrolData.route.shift();
    }
}

// smart_move wrapper
function shibMove(destination, onComplete = undefined) {
    if (!destination) return;
    // Handle coordinates
    if (destination.x && destination.y) {
        if (destination.range) {
            if (character.x > destination.x) destination.x += destination.range; else destination.x += -destination.range;
            if (character.y > destination.y) destination.y += destination.range; else destination.y += -destination.range;
        }
        if (can_move_to(destination.x, destination.y)) {
            return move(destination.x, destination.y);
        } else {
            // If moving to coords and they don't match reset
            if (smart.moving && destination.x && smart.moving && (!smart.x || !smart.y || !smart.x.between(destination.x - 250, destination.x + 250) || !smart.y.between(destination.y - 250, destination.y + 250))) stop('move');
            if (!smart.moving) smart_move(destination, onComplete);
        }
    } else {
        if (smart.moving) {
            // If moving to a map and it doesn't match your destination reset
            if (G.maps[destination] && smart.moving && smart.map !== destination) stop('move');
            // If moving to coords and they don't match reset
            if (destination.x && smart.moving && (!smart.x || !smart.y || smart.x !== destination.x || smart.y !== destination.y)) stop('move');
        } else {
            smart_move(destination, onComplete);
        }
    }
}

// Stay safe
let nearestHostile = {};
function kite(target = undefined) {
    let nearbyHostiles = nearbyAggressors(200, true).filter((a) => !a.target && !a.rip);
    if (!nearbyHostiles.length) return false;
    if (target) {
        nearbyHostiles = nearbyHostiles.filter((h) => h.id !== target.id);
    } else if ((character.ctype === 'rogue' || character.ctype === 'warrior') && get_target()) {
        nearbyHostiles = nearbyHostiles.filter((h) => h.id !== get_target().id);
    } else if (character.ctype === 'warrior' && getEntitiesTargeting()[0]) {
        nearbyHostiles = nearbyHostiles.filter((h) => h.id !== getEntitiesTargeting()[0].id);
    }
    // Check if we should move
    let currentClosestAvoid, nearest;
    for (let avoid of nearbyHostiles) {
        let currentAvoidRange = distanceBetweenPoints(character.real_x, character.real_y, avoid.real_x, avoid.real_y);
        if (!currentClosestAvoid || currentAvoidRange < currentClosestAvoid) {
            nearest = avoid;
            currentClosestAvoid = currentAvoidRange;
        }
    }
    if (!nearestHostile[character.name]) nearestHostile[character.name] = nearest.id;
    let avoidRange = 125;
    if (is_monster(nearest) && G.monsters[nearest.mtype].range > avoidRange) avoidRange = G.monsters[nearest.mtype].range;
    if (!nearest || currentClosestAvoid >= avoidRange * 1.1) {
        character.kiting = undefined;
        return false;
    }
    if (smart.moving) stop('move');
    let x, y;
    if (character.kiting && is_moving(character) && nearestHostile[character.name] === nearest.id) return true; else character.kiting = undefined;
    nearestHostile[character.name] = nearest.id;
    draw_circle(nearest.x, nearest.y, 90 * 1.1, 1, '#b30000');
    if (character.x > nearest.x) x = 90 * 1.1; else x = -90 * 1.1;
    if (character.y > nearest.y) y = 90 * 1.1; else y = -90 * 1.1;
    x += getRndInteger(-5, 5);
    y += getRndInteger(-5, 5);
    if (can_move_to(character.x + x, character.y + y)) {
        draw_line(character.x, character.y, character.x + x, character.y + y);
        character.kiting = true;
        shibMove({x: character.x + x, y: character.y + y});
    }
    return true;
}

// Calc angle for kiting https://gist.github.com/conorbuck/2606166
/**
 * @return {number}
 */
function CalcAngle(px, py, ax, ay) {
    return Math.atan2(ay - py, ax - px) * 180 / Math.PI;
}