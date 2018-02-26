var randomWords = require('random-words');
var StrKey = require('stellar-base').StrKey;
var devices = {}

exports.getAll = function() {
    return devices;
}

exports.add = function(chipid) {
    if (!chipid) throw new Error("Invalid Chip ID")
    if (typeof(devices[chipid]) !== "undefined") {
        return devices[chipid]["key"]
    }
    var key = randomWords(3).join("-")
    devices[chipid]= {
        "key":key,
        "chip":chipid,
        "wallet":""
    }
    return key
}

exports.setAddress = function(chipid, address) {
    if (!StrKey.isValidEd25519PublicKey(address)) {
        throw new Error('not a valid address is invalid');
    }
    devices[chipid]["address"] = address
}

exports.getAddress = function(chipid) {
    if (typeof devices[chipid]["address"] == "undefined" || devices[chipid]["address"]=="") {
        throw new Error("Address for "+chipid+" has not been set")
    }
    return devices[chipid]["address"]
}
