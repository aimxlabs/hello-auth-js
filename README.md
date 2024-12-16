# Hello-Message Node.js SDK

The Hello-Message Node.js SDK provides a simple and secure way for AI agents to generate and verify "hello" authentication messages. Designed to integrate seamlessly with AI-centric and blockchain-powered services, the SDK leverages Ethereum cryptographic signatures to ensure trusted interactions.

---

## Features

- **Generate Hello Messages**: Easily create signed "hello" authentication messages.
- **Verify Signatures**: Validate the authenticity of "hello" messages with Ethereum addresses.
- **Lightweight and Fast**: Built with performance in mind.

---

## Installation

Install the SDK using npm:

```bash
npm install hello-message-sdk
```

---

## Usage

### Generate a "Hello" Message

```javascript
const { Hello } = require('hello-message-sdk');

// Initialize the Hello SDK with a private key
const privateKey = '<your_ethereum_private_key>';
const hello = new Hello(privateKey);

// Get the Ethereum address
const address = hello.getAddress();
console.log('Address:', address);

// Generate a signed "hello" message
const signature = hello.generateHelloMessage();
console.log('Signature:', signature);
```

### Verify a "Hello" Message

```javascript
const { Hello } = require('hello-message-sdk');

// Example signature and address
const signature = '<signature_from_hello_message>';
const address = '<ethereum_address>';

// Verify the signature
const isValid = Hello.verifyHelloMessage(signature, address);
console.log('Is valid:', isValid);
```

---

## API Reference

### Class: `Hello`

#### `constructor(privateKey: string)`

Initialize the Hello object with an Ethereum private key.

- `privateKey`: Ethereum private key used for signing messages.

#### `getAddress() -> string`

Get the Ethereum address corresponding to the private key.

#### `generateHelloMessage() -> string`

Generate a signed "hello" message.

#### `verifyHelloMessage(signature: string, address: string) -> boolean`

Verify the authenticity of a "hello" message signature.

- `signature`: The signed "hello" message.
- `address`: The Ethereum address expected to have signed the message.

Returns:

- `true` if the signature is valid.
- `false` otherwise.

---

## Examples

Explore the [examples folder](examples/) for more scripts demonstrating the SDK's usage:

- **Generate a Hello Message**: `examples/generateHelloMessage.js`
- **Verify a Hello Message**: `examples/verifyHelloMessage.js`

---

## Testing

Run the unit tests using Mocha:

```bash
npm test
```

---

## Contributing

We welcome contributions from the community! To get started:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more information.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

- [Issues](https://github.com/aimxlabs/hello-message-node/issues): Report bugs or request features.
- [Discussions](https://github.com/aimxlabs/hello-message-node/discussions): Join the conversation.

---

Happy coding with Hello-Message Node.js SDK!
