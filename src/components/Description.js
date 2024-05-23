import React from "react";
import cartIco from "../Assets/icons/digital_products-icon-cart.svg";
import logIco from "../Assets/icons/digital_products-icon-login.svg";
import upIco from "../Assets/icons/digital_products-icon-upload.svg";

const Description = () => {
  return (
    <>
      <div className="flex-warp justify-between items-center text-center py-9 max-w-[1420px] mx-auto px-4">
        <h2 className="pt-15 lg:px-40 text-gray-800 font-[400] font-serif text-4xl">
          All you have to do is make the product. Podia takes care of the
          details for you.
          <p className="font-normal pt-4 lg:px-20 text-xl text-gray-500 font-sans">
            Podia lets you make your sales page, take payments, and give your
            customers access all in one place. Host and sell your products
            without needing to figure out a handful of new tools.
          </p>
        </h2>
      </div>
      <div className="flex-warp lg:pt-20 lg:flex justify-between items-center py-9 max-w-[1240px] mx-auto px-4">
        <div className="basis-1/3 place-content-center justify-items-center mx-2">
          <img className="mx-auto mb-2" src={cartIco} />

          <h4 className="pt-15 text-center  text-gray-800 font-[400] font-serif text-xl">
            Checkout and sales are handled for you
            <p className="font-normal pt-1  text-lg text-gray-500 font-sans">
              You don’t have to figure out a bunch of tools or website embeds.
              Just connect a payment provider and your Podia site takes care of
              payments for you..
            </p>
          </h4>
        </div>
        <div className="basis-1/3 place-content-center justify-items-center mx-2">
          <img className="mx-auto mb-2" src={logIco} />

          <h4 className="pt-15 text-center  text-gray-800 font-[400] font-serif text-xl">
            Your customers log in, and your products are there for them
            <p className="font-normal pt-1  text-lg text-gray-500 font-sans">
              Your Podia site handles access to products for you. Everything is
              in one place. When your customers buy a product, they get a log
              in. After that, they can see all the products they’ve bought from
              you.
            </p>
          </h4>
        </div>
        <div className="basis-1/3 place-content-center justify-items-center mx-2">
          <img className="mx-auto mb-2" src={upIco} />

          <h4 className="pt-15 text-center  text-gray-800 font-[400] font-serif text-xl">
            Upload your product. Make your sales page. Done.
            <p className="font-normal pt-1  text-lg text-gray-500 font-sans">
              You could sell a digital product by this afternoon. Podia handles
              hosting, sales pages, checkout, and delivery. All you need is
              something to sell
            </p>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Description;
