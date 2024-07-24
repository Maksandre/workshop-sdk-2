import pinataSDK from '@pinata/sdk';
import { config } from './config';
import fs from 'fs';
import path from 'path';

export const uploadFileToIPFS = async (fileAbsolutePath: string) => {
  // Initialize Pinata SDK with your API key and secret
  const pinata = new pinataSDK(config.pinata.apiKey, config.pinata.secret);

  try {
    const fileStream = fs.createReadStream(fileAbsolutePath);
    const fileName = path.basename(fileAbsolutePath);
    
    const result = await pinata.pinFileToIPFS(fileStream, {
        pinataMetadata: {
            name: fileName
        }
    });

    return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
  } catch (error) {
    console.error('Error uploading file to IPFS:', error);
    throw error;
  }
}