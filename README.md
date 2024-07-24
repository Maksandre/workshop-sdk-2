<!-- TODO rewrite when the SDK package published -->

# Unique SDK v2

# Prerequisites

You will need installed:
- node.js 18 or higher
- npm or yarn
- docker and docker compose

# Prepare

1. Install packages and submodules

```sh
make
```

2. Create `.env` from `.env.example`. Set your account's mnemonic phrase and top up it's balance using [faucet bot](https://t.me/unique2faucet_opal_bot)

3. Generate Pinata API Key

Go to https://app.pinata.cloud/ register and get your own API key. Add it to `.env` file.


3. Run http proxy

```sh
make proxy
```

4. Check the proxy is [up and running](http://localhost:3000/documentation).

## Ready to 

Install packages

```sh
yarn add @unique-nft/sr25519
```