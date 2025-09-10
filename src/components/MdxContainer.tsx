type MdxContainerProps = {
  roots: any;
  slug?: string;
  sideMenu: React.ReactNode;
  children: React.ReactNode;
  hasSideMenu: boolean;
  heroImage?: {
    src?: string;
    width?: number;
    height?: number;
  };
};

const defaultImgSource = "/wiki-banner.avif";
function removeDashFromWord(word: string) {
  return word ? word.replace(/-/g, " ") : "";
}

export default async function MdxContainer({
  heroImage = { src: defaultImgSource, width: 800, height: 50 },
  sideMenu,
  roots = [],
  hasSideMenu = false,
  children,
  slug,
}: MdxContainerProps) {
  const [root, path] = Array.from(slug ?? "");

  return (
    <main>
      <div className="flex justify-center w-full bg-transparent rounded">
        {/* <Image
          className="w-full mb-5 object-cover"
          alt="wiki-banner"
          width={heroImage?.width || 800}
          height={heroImage?.height || 50}
          src={heroImage?.src != undefined ? heroImage.src : defaultImgSource}
        /> */}
        {root.length > 0 && path && (
          <h1 className="text-4xl text-center font-medium my-24 capitalize">
            {removeDashFromWord(root)} - {removeDashFromWord(path)}
          </h1>
        )}
      </div>

      <div
        id="content"
        className={`flex flex-col space-y-4 container m-auto ${
          roots && roots.length > 0
            ? "md:flex-row md:space-x-12"
            : "md:flex-col"
        } h-auto px-2`}
      >
        {hasSideMenu && (
          <div className="w-auto md:w-2/5 relative">{sideMenu}</div>
        )}
        <section className="h-auto w-full border-t md:border-l p-3 dark:border-slate-400">
          {children}
        </section>
      </div>
    </main>
  );
}
