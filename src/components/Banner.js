import React from "react";

const Banner = () => {
  return (
    <div className="flex-warp justify-between items-center text-center py-20 max-w-[1420px] mx-auto px-24">
      <div className="rounded-lg bg-Pblack ">
        <h2 className="pt-15  text-Pgray font-[500] p-12 font-serif text-4xl">
          Get your free Podia account
          <p className="font-normal pt-4 lg:px-20 text-lg text-Pgray font-sans">
            Join the 150,000+ creators who use Podia to create websites, sell
            digital products, and build online communities.
          </p>
          <button className="bg-Ppurple my-5 px-6 py-3 text-xl font-sans font-medium text-white rounded-full hover:bg-blue-500  hover:cursor-pointer">
            Sign up free{" "}
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
