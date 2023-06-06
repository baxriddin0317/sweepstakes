import Link from "next/link";
import React from "react";
// import SolapeFooter from 'components/SolapeFooter';
// import BottomBar from 'components/mobile/BottomBar';
// import SolapeTopBar from '../components/SolapeTopBar';

export default function Home() {
  return (
    <div className={`flex-1 bg-th-bkg-1 text-th-fgd-1 transition-all`}>
      <header
        style={{
          padding: 0,
          minHeight: 64,
          height: "unset",
          zIndex: "50",
          position: "relative",
        }}>
        {/* <SolapeTopBar /> */}
      </header>
      <div className="max-w-[1536px] mx-auto flex-col py-8 px-4 xl:px-20">
        {/* head */}
        <div className="flex items-center flex-wrap justify-start">
          <h1
            className="text-xl text-white font-semibold sm:w-auto w-full
            sm:mb-0 mb-3 sm:text-let text-center">
            Swap Sweepstakes
          </h1>
          <div
            className={
              "flex md:ml-10 bg-orange-500 rounded-lg px-4 py-2 font-bold relative z-40 text-white text-xl"
            }>
            JUNE 2023
          </div>
          <div className="flex justify-end flex-grow">
            <button
              className={
                "flex bg-th-bkg-3 rounded-lg px-4 py-2 font-bold relative z-40 text-md text-th-fgd-1 hover:text-orange-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-th-bkg-4 disabled:text-th-fgd-4 md:hover:brightness-[1.1] md:disabled:hover:brightness-100"
              }>
              <a
                href="https://solape.io/"
                className="text-white"
                rel="noopener noreferrer">
                Return
              </a>
              <img
                src="/solape_images/raffleimages/back-arrow.png"
                alt="Crown"
                className="ml-3 h-4"
              />
            </button>
          </div>
        </div>
        {/* info cards */}
        <div className="flex flex-wrap justify-center gap-6 w-full py-5">
          <div className="mt-5 w-full lg:w-4/12 md:w-2/5 md:px-1 sm:px-10">
            <div
              className="rounded h-full
                overflow-hidden bg-th-bkg-3">
              <div
                className="px-4 py-3 flex flex-wrap
                    items-center bg-th-bkg-2">
                <h3 className="text-white font-bold text-lg">General Info</h3>
                <img
                  src="/solape_images/raffleimages/info.png"
                  alt="Info"
                  className="ml-3 h-6"
                />
              </div>
              <div className="py-3 px-4 text-sm" style={{ color: "#FFE5CC" }}>
                <p className="mb-2">
                  <span className="text-orange-500 font-bold">Swap </span>
                  any amount of SPL tokens on solape.io and automatically enter
                  the draw to win our monthly Sweepstakes!
                </p>
                <p className="mb-2">The more you swap, the greater the odds.</p>
                <p>
                  Winners are announced below & on our socials at the end of
                  each month.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 w-full lg:w-4/12 md:w-2/5 md:px-1 sm:px-10">
            <div
              className="rounded h-full 
                overflow-hidden"
              style={{ backgroundColor: "#121616" }}>
              <div className="py-3 px-4 text-sm" style={{ color: "#121616" }}>
                <div className="relative">
                  <div className="reward text-center relative">
                    <img
                      src="/solape_images/raffleimages/gift.png"
                      alt="Reward"
                      className="w-6 mx-auto"
                    />
                  </div>
                  <div className="text-lg">
                    <h2
                      className="font-semibold
                                "
                      style={{ color: "#FFCB99" }}>
                      PRIZES - RAFFLE #1
                    </h2>
                    <ul
                      className="text-white font-extrabold
                                italic
                                pt-6 pl-8 numbered">
                      <li className="mb-1 text-xl md:text-2xl">Okay Bear</li>
                      <li className="mb-1 text-xl md:text-2xl">TFF</li>
                      <li className="mb-1 text-xl md:text-2xl">The Heist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-5 w-full lg:w-2/12 md:w-1/2 md:px-1 px-10
            sm:block hidden">
            <div
              className="rounded h-full
                overflow-hidden"
              style={{ backgroundColor: "#1C2222" }}>
              <div
                className="px-4 py-3 flex flex-wrap
                    items-center"
                style={{ backgroundColor: "#121616" }}>
                <h3 className="text-white font-bold text-sm">Past Winners</h3>
                <img
                  src="/solape_images/raffleimages/crown.png"
                  alt="Crown"
                  className="ml-3 h-4"
                />
              </div>
              <div className="py-3 px-4 text-sm">
                <p className="mb-2 font-bold" style={{ color: "#FFE5CC" }}>
                  2023
                </p>
                <p className="mb-2">
                  <ul
                    className="list-style-disc pl-4 text-white
                            mb-3">
                    <li>April</li>
                    <li>May</li>
                    <li>June</li>
                    <li>July</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* img cards */}
        <div className="flex flex-wrap gap-6 py-10 px-5 sm:px-10 lg:px-40">
          <div className="max-w-md mx-auto rounded-xl md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <div className="img-border shadow-orange">
                  <img
                    src="/solape_images/raffleimages/image1.png"
                    alt="Image 1"
                    className="w-full"
                  />
                  <div
                    className="px-4 pt-5 pb-3"
                    style={{ backgroundColor: "#121616" }}>
                    <h3 className="font-bold text-md text-white">Winner:</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto rounded-xl md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <div className="img-border">
                  <img
                    src="/solape_images/raffleimages/image2.png"
                    alt="Image 2"
                    className="w-full"
                  />
                  <div
                    className="px-4 pt-5 pb-3"
                    style={{ backgroundColor: "#121616" }}>
                    <h3 className="font-bold text-md text-white">Winner:</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto rounded-xl md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <div className="img-border shadow-orange">
                  <img
                    src="solape_images/raffleimages/image3.png"
                    alt="Image 3"
                    className="w-full"
                  />
                  <div
                    className="px-4 pt-5 pb-3"
                    style={{ backgroundColor: "#121616" }}>
                    <h3 className="font-bold text-md text-white">Winner:</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-5 w-full md:w-4/12 sm:w-1/2 px-3 py-3
            sm:hidden
            block">
            <div
              className=" rounded h-full
                overflow-hidden"
              style={{ backgroundColor: "#1C2222" }}>
              <div
                className=" px-4 py-3 flex flex-wrap
                    items-center"
                style={{ backgroundColor: "#121616" }}>
                <h3 className="text-white font-bold text-sm">Past Winners</h3>
                <img
                  src="/solape_images/raffleimages/crown.png"
                  alt="Crown"
                  className="ml-3 h-4"
                />
              </div>
              <div className="py-3 px-4 text-sm" style={{ color: "#FFE5CC" }}>
                <p className="mb-2 font-bold">2023</p>
                <p className="mb-2">
                  <ul
                    className="list-style-disc pl-4 text-white
                            mb-3">
                    <li>April</li>
                    <li>May</li>
                    <li>June</li>
                    <li>July</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card link */}
        <div className="text-center py-5">
          <p className="text-lg" style={{ color: "#C5C5C5" }}>
            For more information, please check our
            <Link
              href="https://www.discord.gg/solape/"
              className=" link-underline
                font-bold">
              {" "}
              Discord
            </Link>
            .
          </p>
        </div>
        {/* end part */}
        <div className="lg:px-60 md:px-40 px-10 py-10 sm:block hidden">
          <div
            className="particles px-4 py-2 flex
            justify-between"
            style={{ backgroundColor: "#1C2222" }}>
            <h3 className="text-white font-bold text-lg mt-1">
              Want to join the raffle?
            </h3>
            <button className="bg-green-500 rounded-md text-white px-3 text-sm font-bold py-1">
              {" "}
              <a
                href="https://solape.io/"
                className="text-white"
                rel="noopener noreferrer">
                Swap Here
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* <BottomBar /> */}
      {/* <SolapeFooter /> */}
    </div>
  );
}
