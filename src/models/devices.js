var randomWords = require('random-words');
var StrKey = require('stellar-base').StrKey;
var devices = {}

exports.getAll = function() {
    return devices;
}

exports.add = function(chipid) {
    var key = randomWords(3).join("-")
    devices[key]= {"chip":chipid}
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
