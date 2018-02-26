var devices = require('../../../models/devices')

exports.post = function(req, res) {
    res.send(devices.add(req.headers["x-chip-id"], req.headers["x-stellar-wallet"]) + "\r\n")
}

exports.get = function(req, res) {
    res.send(devices.getAll())
}