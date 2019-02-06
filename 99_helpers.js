function can_use(name) {
    if (G.skills[name] && G.skills[name].class && !in_arr(character.ctype,G.skills[name].class)) return false; // checks the class
    if (G.skills[name] && G.skills[name].level && character.level < G.skills[name].level) return false; // checks the level
    if (G.skills[name] && G.skills[name].mp && character.mp < G.skills[name].mp) return false; // checks mp
    return parent.can_use(name);  // checks the cooldown
}

function checkEntityForBuff(entity, buff) {
    if (!entity.s) return false;
    return Object.keys(entity.s).includes(buff);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function distance_to_point(x, y) {
    return Math.sqrt(Math.pow(character.real_x - x, 2) + Math.pow(character.real_y - y, 2));
}

function distanceToEntity(target) {
    return Math.sqrt(Math.pow(character.real_x - target.real_x, 2) + Math.pow(character.real_y - target.real_y, 2));
}

function distance_between_points(x, y, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}