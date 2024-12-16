// Test file for Hello SDK
const { expect } = require('chai');
const Hello = require('../src/hello');

// Example test private key
const PRIVATE_KEY = '0x4c0883a6910395b1e8dcd7db363c124593f3e8e62e4a8c32ef45b3ef82317b03';
const ADDRESS = '0x90f8bf6A479f320ead074411a4B0e7944Ea8c9C1';

describe('Hello SDK', () => {
  let hello;

  beforeEach(() => {
    hello = new Hello(PRIVATE_KEY);
  });

  it('should return the correct Ethereum address', () => {
    const address = hello.getAddress();
    expect(address).to.equal(ADDRESS);
  });

  it("should generate a valid 'hello' signature", () => {
    const signature = hello.generateHelloMessage();
    expect(signature).to.be.a('string');
    expect(signature.length).to.be.greaterThan(0);
  });

  it("should verify a valid 'hello' signature", () => {
    const signature = hello.generateHelloMessage();
    const isValid = Hello.verifyHelloMessage(signature, ADDRESS);
    expect(isValid).to.be.true;
  });

  it('should fail verification for an invalid signature', () => {
    const invalidSignature = '0x123456789abcdef';
    const isValid = Hello.verifyHelloMessage(invalidSignature, ADDRESS);
    expect(isValid).to.be.false;
  });
});
