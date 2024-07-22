import {UniqueChain} from '@unique-nft/sdk';
import {Sr25519Account} from "@unique-nft/sr25519";
import {config} from './config';

const main = async () => {
  const account = Sr25519Account.fromUri(config.mnemonic);

  const uniqueChain = UniqueChain({
    baseUrl: config.baseUrl, 
    account,
  });

  const balance = await uniqueChain.balance.get(account);
  console.log(balance);

  const collection = await uniqueChain.collection.create({
    name: "Test", description: "Test collection", symbol: "TSTc",
  });

  await uniqueChain.token.mintNFTs({
    collectionId: collection.result.collectionId,
    tokens: [
      {data: {image: "https://ipfs.unique.network/ipfs/QmbJ7CGZ2GxWMp7s6jy71UGzRsMe4w3KANKXDAExYWdaFR"}}
    ]
  })
}

main().catch(e => {
  console.log('oops, something went wrong');
  throw e;
});
