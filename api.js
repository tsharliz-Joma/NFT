import { Network, Alchemy } from "alchemy-sdk";

export const settings = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);
// Get all NFTs owner - async
export const gatherApiData = async (ownerAddy, limit) => {
  try {
    const grabNfts = await alchemy.nft.getNftsForOwner(ownerAddy);
    const userOwnedNfts = grabNfts.ownedNfts;
    const nonFungibleTokens = userOwnedNfts.slice(0, limit);
    const nftCount = `${limit} of ${grabNfts.totalCount} NFTs`;
    return {
      nonFungibleTokens,
      nftCount,
    };
  } catch (error) {
    console.error(error);
  }
};
