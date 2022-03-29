const HelloWorld = artifacts.require("HelloWorld");

module.exports = async function(_deployer) {
  await _deployer.deploy(HelloWorld);
};
