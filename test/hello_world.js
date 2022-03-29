const HelloWorld = artifacts.require("HelloWorld");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HelloWorld", ([alice, bob, cain]) => {
  const INITIAL_MESSAGE = "Meu primeira mensagem na blockchain";
  const UPDATE_MESSAGE = "Hello World - Blockchain";

  beforeEach(async function(){
    this.contract = await HelloWorld.deployed();
  });

  it("retrieving initial message from blockchain", async function () {    
    assert.equal(INITIAL_MESSAGE, (await this.contract.sayHello()));
  });

  it(`update message on blockchain ${UPDATE_MESSAGE}`, async function () {    
    await this.contract.updateGreeting(UPDATE_MESSAGE, {
      from: alice
    });
    assert.equal(UPDATE_MESSAGE, (await this.contract.sayHello()));
  });
});
