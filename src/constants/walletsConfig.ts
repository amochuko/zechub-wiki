export interface WalletProps {
  name: string;
  description: string;
  path: string;
  image: string;
}

const config: Array<WalletProps> = [
  {
    name: "Mobile Wallets",
    description:
      "Mobile wallets allow you to access your Zcash anywhere and on the go.",
    path: "/mobile-wallets",
    image: "https://i.ibb.co/RCJ1TyF/Mobile-Phones.png",
  },
  {
    name: "Desktop Wallets",
    description:
      "Desktop wallets are downloadable applications that provide access to Zcash from Windows, MacOS, or Linux.",
    path: "/desktop-wallets",
    image: "https://i.ibb.co/dr0b9K0/Desktop-Wallets.png",
  },
  {
    name: "Hardware Wallets",
    description:
      "Hardware wallets stores your Zcash securely offline physical device.",
    path: "/hardware-wallets",
    image: "https://i.ibb.co/4Yn6Svg/Hardware-Wallets.png",
  },
  {
    name: "Web Wallets",
    description:
      "Web wallets are wallets that you can access from your browser. They give a users a web interface to interact with their funds.",
    path: "/web-wallets",
    image: "https://i.ibb.co/b5WZhkX/Web-Wallets.png",
  },
];

export default config;
