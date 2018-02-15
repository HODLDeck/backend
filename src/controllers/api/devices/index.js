var devices = require('../../../models/devices')

exports.post = function(req, res) {
    res.send(devices.add())
}