var devices = require('../../../models/devices')

exports.post = function(req, res) {
    res.send(devices.add(req.headers["x-chip-id"]))
}

exports.get = function(req, res) {
    res.send(devices.getAll())
}