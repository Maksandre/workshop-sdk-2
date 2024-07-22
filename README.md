<!-- TODO rewrite when the SDK package published -->

# Prepare

1. Install packages and submodules

```sh
make
```

2. Create `.env` from `.env.example`. Set your account's mnemonic phrase and top up it's balance using [faucet bot](https://t.me/unique2faucet_opal_bot)

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