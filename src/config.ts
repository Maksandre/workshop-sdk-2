import * as dotenv from 'dotenv';
dotenv.config();

const getConfig = () => {
  const {CLIENT_BASE_URL, SUBSTRATE_MNEMONIC, PINATA_SECRET, PINATA_API_KEY} = process.env;

  if (!CLIENT_BASE_URL || !SUBSTRATE_MNEMONIC || !PINATA_SECRET || !PINATA_API_KEY)
    throw Error("configuration: did you forget to set .env?");

  return {
    mnemonic: SUBSTRATE_MNEMONIC,
    baseUrl: CLIENT_BASE_URL,
    pinata: {
      apiKey: PINATA_API_KEY,
      secret: PINATA_SECRET,
    }
  }
}

export const config = getConfig();
