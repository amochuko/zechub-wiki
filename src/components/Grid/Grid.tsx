// components/ProjectGrid.tsx
import React from "react";
import ProjectCards from "../ProjectCards/ProjectCards";
import styles from "./Grid.module.css";

const projects = [
  {
    title: "Maya Protocol",
    description:
      "Maya is a decentralized exchange (DEX) system that enables trading of cryptocurrencies across different blockchains.... ",
    link: "https://zechub.wiki/guides/maya-protocol",
    imageUrl:
      "https://zechub.wiki/_next/image?url=%2Fcontent-banners%2Fbannerguides.png&w=1920&q=75",
  },
  {
    title: "Zavax Redbridge",
    description: "The Zcash-Avalanche Red-Bridge is a decentralized bridge that enables interoperability between the Zcash (ZEC) and Avalanche (AVAX) blockchains,...",
    link: "https://zechub.wiki/guides/zcash-avalanche-redbridge#content",
    imageUrl:
      "https://images.ctfassets.net/jg6lo9a2ukvr/27nB85zQBKXGOyMzsGpH6r/0fc7d99bc7a53a90002614480e16f4c9/AVAX-TokenLaunch-Blog-Header.png?fm=webp",
  },
  {
    title: "Zaino Indexer",
    description: "Description for Zaino Indexer... ",
    link: "https://zechub.wiki/zcash-tech/zaino-indexer#content",
    imageUrl:
      "https://zechub.wiki/_next/image?url=%2Fcontent-banners%2Fbannertech.png&w=1920&q=75",
  },
  {
    title: "Zcash Shielded Assets",
    description:
      "Zcash Shielded Assets (ZSA) are a proposed improvement to the the Zcash protocol that would enable the creation,... ",
    link: "https://zechub.wiki/zcash-tech/zcash-shielded-assets#content",
    imageUrl: "https://i.ibb.co/0VfMFB5/image-2023-11-18-160742427.png",
  },
  {
    title: "Hybrid Proof of Stake (Crosslink)",
    description:
      "The Crosslink protocol is a proposed design for Zcash hybrid Proof-of-Work/Proof-of-Stake (PoW/PoS) stage,...",
    link: "https://zechub.wiki/zcash-tech/crosslink_protocol#content",
    imageUrl: "https://i.ibb.co/6HZpChV/image-2025-01-01-141008115.png",
  },
];

const Grid: React.FC = () => {
  return (
    <div className={styles.project_grid}>
      {projects.map((project, index) => (
        <ProjectCards
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          imageSrc={project.imageUrl}
        />
      ))}
    </div>
  );
};

export default Grid;
