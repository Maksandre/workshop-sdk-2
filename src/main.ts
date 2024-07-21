import {UniqueChain} from 'sdk/packages/thin-client/dist';
import {Sr25519Account} from "@unique-nft/sr25519";
import {config} from './config';

const main = async () => {
  const account = Sr25519Account.fromUri(config.mnemonic!);

  const uniqueChain = UniqueChain({
    baseUrl: config.baseUrl!, 
    account,
  });

  const balance = await uniqueChain.balance.get(account);
  console.log(balance);
}

main().catch(e => {
  console.log('oops');
});
