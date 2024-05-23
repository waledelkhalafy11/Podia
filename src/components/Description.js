import React from "react";
import cartIco from "../Assets/icons/digital_products-icon-cart.svg";
import logIco from "../Assets/icons/digital_products-icon-login.svg";
import upIco from "../Assets/icons/digital_products-icon-upload.svg";

const descData = [
  {
    head: " Checkout and sales are handled for you.",
    paragraph:
      "Podia lets you make your sales page, take payments, and give your customers access all in one place. Host and sell your products without needing to figure out a handful of new tools",
    ico: cartIco,
  },
  {
    head: " Your customers log in, and your products are there for them",
    paragraph:
      "Your Podia site handles access to products for you. Everything is in one place. When your customers buy a product, they get a log in. After that, they can see all the products they’ve bought from you.",
    ico: logIco,
  },
  {
    head: "Upload your product. Make your sales page. Done.",
    paragraph:
      "You could sell a digital product by this afternoon. Podia handles hosting, sales pages, checkout, and delivery. All you need is something to sell.",
    ico: upIco,
  },
];

const Description = () => {
  return (
    <>
      <div className="flex-warp justify-between items-center text-center py-9 max-w-[1420px] mx-auto px-4">
        <h2 className="pt-15 lg:px-40 text-gray-800 font-[400] font-serif text-4xl">
          Checkout and sales are handled for you
          <p className="font-normal pt-4 lg:px-20 text-xl text-gray-500 font-sans">
            Podia lets you make your sales page, take payments, and give your
            customers access all in one place. Host and sell your products
            without needing to figure out a handful of new tools.
          </p>
        </h2>
      </div>

      <div className="flex-warp lg:pt-20 lg:flex justify-between items-center py-9 max-w-[1240px] mx-auto px-4">
        {descData.map((des) => (
          <>
            <div className="basis-1/3 place-content-center justify-items-center mx-2">
              <div className="h-20 justify-end">
                <img className="mx-auto mb-2" src={des.ico} />
              </div>

              <h4 className="pt-15 text-center text-gray-800 font-[400] font-serif text-xl">
                {des.head}
                <p className="font-normal justify-start min-h-40 pt-1  text-lg text-gray-500 font-sans">
                  {des.paragraph}
                </p>
              </h4>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Description;
