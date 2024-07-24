import {config} from './config';
import { getAccountFromMnemonic } from './1_account';
import { connectSdk } from './2_connect';
import { uploadFileToIPFS } from './3_ipfs';
import path from 'path';

const main = async () => {
  const account = getAccountFromMnemonic(config.mnemonic);
  const unique = await connectSdk(config.baseUrl, account);

  const balanceRequest = await unique.balance.get({address: account.address});
  console.log("Account's total balance:", balanceRequest.total);

  await unique.balance.transfer({
    to: "5DXbZHeBJY7JgTinBvAUC8KM8xSB9dAnmZHD335688CDYyie",
    amount: "1000"
  })

  // const coverImage = await uploadFileToIPFS(path.resolve('./src/images/img1.png'));
  // console.log(coverImage);

  // const nftImage = await uploadFileToIPFS(path.resolve('./src/images/img2.png'));
  // console.log(nftImage);

  const coverImage = 'https://gateway.pinata.cloud/ipfs/QmTkhTg5S5zrqJL3UsKtyiFi8fcMT3Cao9uKtadp3Ckh7m';
  const nftImage = 'https://gateway.pinata.cloud/ipfs/QmTkhTg5S5zrqJL3UsKtyiFi8fcMT3Cao9uKtadp3Ckh7m';

  const {result} = await unique.collection.create({
    name: "Test",
    description: "Test collection",
    symbol: "TST",
    info: {cover_image: {url: coverImage}},
    // mode: 'Fungible',
    tokenPropertyPermissions: [
      {key: 'A', permission: {mutable: true, collectionAdmin: true, tokenOwner: true}},
      {key: 'B', permission: {mutable: false, collectionAdmin: false, tokenOwner: false}},
    ]
  });

  const mintNftTx = await unique.token.mintNFTs({
    collectionId: result.collectionId,
    tokens: [
      {data: {image: nftImage, }},
      {data: {image: nftImage}},
    ]
  });

  const [nft1, nft2] = mintNftTx.result;
  console.log('Minted tokens:', nft1.tokenId, nft2.tokenId);

  // const nft = await unique.token.get({tokenId: 1, collectionIdOrAddress: collectionId});

  // console.log(nft);
}

main().catch(e => {
  console.log('oops, something went wrong');
  throw e;
});
