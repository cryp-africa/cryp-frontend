/**
 *
 * @return {any}
 */
export function getNftData() {
  const heroImage = "/images/nft/nft-hero.png";

  const PopularNFTSData = [
    {
      id: 1,
      thumbail: "/images/nft/pop-thumb.png",
      avatarUrl: "/images/nft/pop-nft1.png",
      productName: "Beta Clone #77867",
      price: 23000,
    },
    {
      id: 2,
      thumbail: "/images/nft/pop-thumb.png",
      avatarUrl: "/images/nft/pop-nft2.png",
      productName: "Beta Clone #77867",
      price: 23000,
    },
    {
      id: 3,
      thumbail: "/images/nft/pop-thumb.png",
      avatarUrl: "/images/nft/pop-nft3.png",
      productName: "Beta Clone #77867",
      price: 23000,
    },
  ];

  return { PopularNFTSData, heroImage };
}
