// Node.js SDK for Hello-Message

const { ethers } = require('ethers');
const { v4: uuidv4 } = require('uuid');

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
   * Generate a signed "hello" message with a nonce.
   * @returns {Object} - An object containing the message, nonce, and signature.
   */
  async generateHelloMessage() {
    const nonce = uuidv4();
    const message = `hello:${nonce}`;
    const messageHash = ethers.utils.hashMessage(message);
    const signature = await this.wallet.signMessage(ethers.utils.arrayify(messageHash));
    return { message, nonce, signature };
  }

  /**
   * Verify a signed "hello" message with a nonce.
   * @param {string} signature - The signed "hello" message.
   * @param {string} message - The original "hello" message with nonce.
   * @param {string} address - The Ethereum address to verify against.
   * @returns {boolean} - True if the signature is valid, false otherwise.
   */
  static verifyHelloMessage(signature, message, address) {
    try {
      const messageHash = ethers.utils.hashMessage(message);
      const recoveredAddress = ethers.utils.verifyMessage(ethers.utils.arrayify(messageHash), signature);
      return recoveredAddress.toLowerCase() === address.toLowerCase();
    } catch (error) {
      console.error('Error verifying signature:', error);
      return false;
    }
  }
}

module.exports = Hello;
