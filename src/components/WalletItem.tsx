// components/WalletItem.tsx
import React from "react";
import { Icon } from "@/components/ui/Icon";
import { MdDevices, MdPool, MdChecklist, MdOpenInNew as OpenNew } from "react-icons/md";
import Link from "next/link";

interface WalletItemProps {
  title: string;
  link: string;
  logo: string;
  tags: Tag[];
}

interface Tag {
  category: string;
  values: string[];
}
type CategoryKey = "Devices" | "Pools" | "Features";
// Mapping of categories to icons
const categoryIcons = {
  Devices: MdDevices,
  Pools: MdPool,
  Features: MdChecklist,
};
const WalletItem: React.FC<WalletItemProps> = ({ title, link, logo, tags }) => {
  return (
    <div className="wallet-item h-full flex flex-col gap-4 items-start border rounded-lg shadow-lg bg-white dark:bg-gray-800 p-5">
      <div className="col-span-12 grid grid-cols-12 gap-4 items-start h-full">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-12 row-span-1 md:col-span-6 md:row-span-2 bg-gray-100 dark:bg-gray-200 p-2 h-full flex items-center"
        >
          <img className="w-full" src={logo} alt={`${title} Logo`} />
        </a>
        <div className="col-span-12 row-span-1 md:col-span-6">
          <div className="wallet-meta">
            <div className="flex justify-between items-center w-full">
              <h5 className="text-xl md:text-2xl my-4 font-bold text-slate-700 dark:text-slate-200 flex-grow">
                {title}
              </h5>
              <Link
                href={link}
                className="px-4 py-2 border border-slate-500 dark:border-slate-400 text-slate-500 dark:text-slate-400 text-xs hover:text-white hover:bg-slate-500 rounded-lg transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open 
                <Icon
                    icon={OpenNew}
                    className="inline-block ms-2"
                    size="small"
                  />
              </Link>
            </div>
            {tags.map((tag, index) => (
              <React.Fragment key={index}>
                {tag.category === "Features" && <hr className="my-2" />}
                <div className={`wallet-tag tag-${tag.category}`}>
                  <Icon
                    icon={categoryIcons[tag.category as CategoryKey]}
                    title={tag.category}
                    className="icon-class"
                    size="medium"
                  />
                  {tag.values.map((value, valueIndex) => (
                    <div
                      key={valueIndex}
                      className="wallet-tag-item bg-slate-200 dark:bg-slate-900"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletItem;
