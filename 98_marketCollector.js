let apiKey = "";

// Price Check Loop
let priceDetails = {};
setInterval(function () {
    cachePriceInfo();
    sendMarketData();
}, 15000);

function cachePriceInfo() {
    let merchants = Object.values(parent.entities).filter(mob => is_character(mob) && mob.ctype === "merchant" && mob.stand);
    priceDetails.providerName = character.name;
    priceDetails.region = parent.server_region;
    priceDetails.realmID = parent.server_identifier;
    for (let merchant of merchants) {
        for (let s = 1; s <= 16; s++) {
            let slot = merchant.slots['trade' + s];
            if (slot) {
                let level = '';
                if (slot.level) level = slot.level;
                if (slot.b) {
                    if (!priceDetails[slot.name + '.' + level]) {
                        priceDetails[slot.name + '.' + level] = {
                            bhigh: slot.price,
                            blow: slot.price,
                            bseen: 1
                        }
                    } else {
                        let details = priceDetails[slot.name + '.' + level];
                        let seen = details.bseen + 1;
                        let high = details.bhigh;
                        if (high < slot.price) high = slot.price;
                        let low = details.blow;
                        if (low > slot.price) low = slot.price;
                        details.bhigh = high;
                        details.blow = low;
                        details.bseen = seen;
                        priceDetails[slot.name + '.' + level] = details;
                    }
                } else {
                    if (!priceDetails[slot.name + '.' + level]) {
                        priceDetails[slot.name + '.' + level] = {
                            shigh: slot.price,
                            slow: slot.price,
                            sseen: 1
                        }
                    } else {
                        let details = priceDetails[slot.name + '.' + level];
                        let seen = details.sseen + 1;
                        let high = details.shigh;
                        if (high < slot.price) high = slot.price;
                        let low = details.slow;
                        if (low > slot.price) low = slot.price;
                        details.shigh = high;
                        details.slow = low;
                        details.sseen = seen;
                        priceDetails[slot.name + '.' + level] = details;
                    }
                }
            }
        }
    }
}

function sendMarketData() {
    if (!Object.keys(priceDetails).length) return;
    let request = new XMLHttpRequest();
    request.open("POST", "http://almarket.shibdib.info/receiveData");
    var data = {
        apiKey: apiKey,
        priceDetails: priceDetails
    };
    priceDetails = {};
    request.send(data);
}