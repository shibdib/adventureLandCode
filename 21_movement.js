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
    if (parent.party[character.party] && parent.party[character.party].map !== character.map) return shibMove(parent.party[character.party].map);
    // Handle same map but far away
    if (!range || !parent.entities[character.party] || range >= character.range * 4) {
        if (target) moveToCoords(target.real_x, target.real_y); else return shibMove(target);
    }
    // Handle close
    if (target && (range > max || range < min || !range)) moveToCoords(target.real_x + getRndInteger(((min + max)/2) * -1, ((min + max)/2)), target.real_y + getRndInteger(((min + max)/2) * -1, ((min + max)/2)));
}

// Handle moving to party leader
// TODO: send_cm/on_cm stuff for map change
function moveToLeader (min = 5, max = 10) {
    let leader = get_player(character.party);
    let range;
    if (leader) range = distanceToPoint(leader.real_x, leader.real_y) + 0.1;
    // If range is good stay
    if (range && (range <= max && range >= min)) return stop();
    // If smart moving past them stop
    if (range && smart.moving && range <= character.range) return stop();
    // If moving continue
    if (is_moving(character)) return;
    // Handle different map
    if (parent.party[character.party] && parent.party[character.party].map !== character.map) return shibMove(parent.party[character.party].map);
    // Handle same map but far away
    if (!range || !parent.entities[character.party] || range >= character.range * 4) {
        if (leader) moveToCoords(leader.x, leader.y); else return shibMove(parent.party[character.party].x, parent.party[character.party].y);
    }
    // Handle close
    if (leader && (range > max || range < min || !range)) moveToCoords(leader.real_x + getRndInteger(((min + max)/2) * -1, ((min + max)/2)), leader.real_y + getRndInteger(((min + max)/2) * -1, ((min + max)/2))); else if (!leader) shibMove(parent.party[character.party].x + getRndInteger(((min + max)/2) * -1, ((min + max)/2)), parent.party[character.party].y + getRndInteger(((min + max)/2) * -1, ((min + max)/2)));
}

// Move to coords wrapper
function moveToPosition(position) {
    moveToCoords(position.x, position.y)
}

// Checks if you can move via move then moves via smart_move if not
function moveToCoords(x, y) {
    if(can_move_to(x,y)) {
        if (smart.moving) stop();
        move(x,y);
    }
    if (is_moving(character)) return;
    else smart_move({x:x,y:y});
}

// smart_move wrapper
function shibMove(destination, y = undefined) {
    if (is_moving(character)) return;
    smart_move(destination, y);
}

// Kite from your current target and also take into account an avoid array
function getKitePosition(target, avoidArray, rangeToTarget = character.range * 0.95) {
    let range = distanceToPoint(target.real_x, target.real_y);
    main:
    for (let x = 0; x < 500; x++) {
        let xChange = getRndInteger(-character.range, character.range);
        let yChange = getRndInteger(-character.range, character.range);
        if (can_move_to(character.real_x + xChange, character.real_y + yChange)) {
            let newRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, target.real_x, target.real_y);
            // Handle avoiding others
            let closestAvoid, maxRange;
            if (avoidArray && avoidArray.length) {
                for (let avoid of avoidArray) {
                    if (avoid.id === target.id) continue;
                    let avoidRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, avoid.real_x, avoid.real_y);
                    if (!closestAvoid || avoidRange < closestAvoid) closestAvoid = avoidRange;
                    if (!maxRange || maxRange < avoid.range) maxRange = avoid.range;
                }
            }
            if (newRange > range && newRange >= rangeToTarget * 0.5 && newRange <= rangeToTarget && (!closestAvoid || closestAvoid > maxRange)) return {x: character.real_x + xChange, y: character.real_y + yChange};
        }
    }
}