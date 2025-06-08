import LogoWrapper from "@/components/LogoWrapper";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div
        className={`w-full px-10 h-screen relative flex flex-col justify-between overflow-hidden scetions`}
        id="header"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full z-[4] mix-blend-difference">
          <Image
            src="/logoRender.png"
            width={0}
            height={0}
            alt="bg"
            sizes="100vw"
            className="w-auto h-[55vh] object-contain customShadow"
          />
          {/* <LogoWrapper /> */}
          {/* <video src="/0001-0060.mp4" autoPlay muted loop className="w-auto h-[55vh] object-cover customShadow" /> */}
        </div>
        {/* TEXT */}
        <div className="flex w-full h-full relative justify-between py-24">
          <div
            className={`relative w-fit textHeadLeft h-auto z-[2] flex flex-col justify-center text-[#fff] xl:text-6xl text-5xl tracking-tighter leading-[105%] mt-[-2rem]`}
          >
            <h2 className="mainFont2 uppercase scale-y-[1.1]">Talented</h2>
            <h2 className="mainFont2 uppercase scale-y-[1.1]">
              Developer with
            </h2>
          </div>

          <div
            className={`absolute right-7 top-[38%] shortMeTxt -translate-y-1/2 w-full max-w-[300px] uppercase text-lg z-[6] fontMain6 opacity-80`}
          >
            <p>
              Hi! I am Artem, Frontend, Game and Mobile Developer. I am up for
              everything, so feel free to ask.
            </p>
          </div>

          <div
            className={`absolute left-7 bottom-[38%] text-[rgb(255,255,255,.75)] chipsHeader translate-y-1/2 w-full flex items-center gap-4 uppercase text-lg z-[6] fontMain5`}
          >
            <a
              href=""
              download
              className="bg-[rgb(25,25,25,.75)] w-fit px-5 py-2 rounded-full flex items-center leading-[100%] z-[6]"
            >
              <span className="w-[9px] h-[9px] -top-[2px] mr-2 relative bg-[#99ff59] rounded-sm" />{" "}
              Download my CV
            </a>
            <p className="bg-[rgb(25,25,25,.75)] w-fit px-5 py-2 rounded-full flex items-center leading-[100%] z-[6]">
              <span className="w-[9px] h-[9px] -top-[2px] mr-2 relative bg-[#fff947] rounded-sm" />{" "}
              Doubt is a killer
            </p>
          </div>

          <div
            className={`relative w-fit textHeadRight h-auto z-[2] mt-[calc(6rem-2px)] flex flex-col justify-center text-[#fff] xl:text-6xl text-5xl tracking-tighter leading-[105%] text-right`}
          >
            <h2 className="mainFont2 uppercase scale-y-[1.1]">
              Modern Designs
            </h2>
            <h2 className="mainFont2 uppercase scale-y-[1.1]">and crafts</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
