var randomWords = require('random-words');
var StrKey = require('stellar-base').StrKey;
var devices = {}
var keymap={}

exports.getAll = function() {
    return devices;
}

exports.add = function(chipid) {
    if (!chipid) throw new Error("Invalid Chip ID")
    if (typeof(keymap[chipid]) !== "undefined") {
        return keymap[chipid]
    }
    var key = randomWords(3).join("-")
    devices[key]= {
        "key":key,
        "chip":chipid,
        "wallet":""
    }
    keymap[chipid]=key
    return key
}

exports.setAddress = function(key, address) {
    if (!StrKey.isValidEd25519PublicKey(address)) {
        throw new Error('not a valid address is invalid');
    }
    if (typeof devices[key] === "undefined") {
        throw new Error('device does not exist');
    }
    devices[key]["address"] = address
}

exports.getAddress = function(key) {
    if (typeof devices[key]["address"] == "undefined" || devices[key]["address"]=="") {
        throw new Error("Address for "+key+" has not been set")
    }
    return devices[key]["address"]
}
