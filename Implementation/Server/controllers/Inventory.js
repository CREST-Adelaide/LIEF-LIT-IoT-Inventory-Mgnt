'use strict';

var utils = require('../utils/writer.js');
var Inventory = require('../service/InventoryService');

module.exports.addDevice = function addDevice (req, res, next) {
  var body = req.swagger.params['body'].value;
  Inventory.addDevice(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.checkinDevice = function checkinDevice (req, res, next) {
  var id = req.swagger.params['id'].value;
  Inventory.checkinDevice(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.checkoutDevice = function checkoutDevice (req, res, next) {
  var id = req.swagger.params['id'].value;
  Inventory.checkoutDevice(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listDevices = function listDevices (req, res, next) {
  Inventory.listDevices()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lookUpDevices = function lookUpDevices (req, res, next) {
  var id = req.swagger.params['id'].value;
  Inventory.lookUpDevices(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyDevice = function modifyDevice (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Inventory.modifyDevice(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeDevice = function removeDevice (req, res, next) {
  var id = req.swagger.params['id'].value;
  Inventory.removeDevice(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestCheckin = function requestCheckin (req, res, next) {
  var id = req.swagger.params['id'].value;
  Inventory.requestCheckin(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
