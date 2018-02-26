var devices = require('../../../models/devices')

exports.post = function(req, res) {
    res.send(devices.add())
}

exports.get = function(req, res) {
    res.send(devices.getAll())
}