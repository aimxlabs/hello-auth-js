// Node.js SDK for Hello-Message

const { ethers } = require('ethers');

class Hello {
  /**
   * Initialize the Hello SDK with a private key.
   * @param {string} privateKey - The Ethereum private key for signing messages.
   */
  constructor(privateKey) {
    if (!privateKey) {
      throw new Error('Private key is required to initialize Hello SDK.');
    }
    this.privateKey = privateKey;
    this.wallet = new ethers.Wallet(privateKey);
  }

  /**
   * Get the Ethereum address associated with the private key.
   * @returns {string} - Ethereum address.
   */
  getAddress() {
    return this.wallet.address;
  }

  /**
   * Generate a signed "hello" message.
   * @returns {string} - Signed message.
   */
  generateHelloMessage() {
    const message = 'hello';
    const messageHash = ethers.utils.hashMessage(message);
    const signature = this.wallet.signMessage(ethers.utils.arrayify(messageHash));
    return signature;
  }

  /**
   * Verify a signed "hello" message.
   * @param {string} signature - The signed "hello" message.
   * @param {string} address - The Ethereum address to verify against.
   * @returns {boolean} - True if the signature is valid, false otherwise.
   */
  static verifyHelloMessage(signature, address) {
    const message = 'hello';
    const messageHash = ethers.utils.hashMessage(message);
    const recoveredAddress = ethers.utils.verifyMessage(ethers.utils.arrayify(messageHash), signature);
    return recoveredAddress.toLowerCase() === address.toLowerCase();
  }
}

module.exports = Hello;
