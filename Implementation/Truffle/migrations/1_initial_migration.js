var Migrations = artifacts.require("Migrations");
var Inventory = artifacts.require("Inventory");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Inventory);
};