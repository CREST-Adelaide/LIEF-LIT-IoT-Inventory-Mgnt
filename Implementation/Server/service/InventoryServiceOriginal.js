'use strict';


/**
 * Add device to inventory
 *
 * body Body Add device with given name, owner and location
 * returns inline_response_200_1
 **/
exports.addDevice = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Checkin device into inventory
 *
 * id Integer Checkin device of given ID
 * returns inline_response_200_1
 **/
exports.checkinDevice = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Checkout device from inventory
 *
 * id Integer Checkout device of given ID
 * returns inline_response_200_1
 **/
exports.checkoutDevice = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List devices in inventory
 *
 * returns inline_response_200
 **/
exports.listDevices = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "name" : "name",
  "location" : "location",
  "id" : 0,
  "state" : "state"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Look up device information
 *
 * id Integer Look up information of given ID
 * returns inline_response_200
 **/
exports.lookUpDevices = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "name" : "name",
  "location" : "location",
  "id" : 0,
  "state" : "state"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify device information
 *
 * id Integer Modify information of given ID
 * body Body_1 Modify device information with given name, owner and location
 * returns inline_response_200_1
 **/
exports.modifyDevice = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove device from inventory
 *
 * id Integer Remove device of given ID
 * returns inline_response_200_1
 **/
exports.removeDevice = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Request device checkin into inventory
 *
 * id Integer Request device checkin of given ID
 * returns inline_response_200_1
 **/
exports.requestCheckin = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

