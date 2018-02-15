var randomWords = require('random-words');
var StrKey = require('stellar-base').StrKey;
var devices = {}

exports.getAll = function() {
    return Object.keys(devices);
}

exports.add = function() {
    var key = randomWords(4).join("-")
    devices[key]= {}
    return key;
}

exports.setAddress = function(key, address) {
    if (!StrKey.isValidEd25519PublicKey(address)) {
        throw new Error('not a valid address is invalid');
    }
    devices[key]["address"] = address
}

exports.getAddress = function(key) {
    if (typeof devices[key]["address"] == "undefined") {
        throw new Error("Address for "+key+" has not been set")
    }
    return devices[key]["address"]
}
