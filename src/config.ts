import * as dotenv from 'dotenv';
dotenv.config();

const getConfig = () => {
  const {CLIENT_BASE_URL, SUBSTRATE_MNEMONIC} = process.env;

  if (!CLIENT_BASE_URL || !SUBSTRATE_MNEMONIC)
    throw Error("configuration: did you forget to set .env?");

  return {
    mnemonic: SUBSTRATE_MNEMONIC,
    baseUrl: CLIENT_BASE_URL,
  }
}

export const config = getConfig();
