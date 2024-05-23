import React from "react";
import coursesImg from "../Assets/img/digital_products-courses.png";
import downloadImg from "../Assets/img/digital_products-downloads.png";
import coachingImg from "../Assets/img/digital_products-coaching.png";
import webinarsImg from "../Assets/img/digital_products-webinars.png";
import starImg from "../Assets/img/Stars__1_.png";

const productsData = [
  {
    name: "ONLINE COURSES",
    heading: "Beautiful online courses you can build in moments",
    paragraph:
      "Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you.",
    link: "Learn more about courses",
    img: coursesImg,
    custName: "Joy Cho, Oh Joy! Academy",
    feedback:
      "I’ve wanted to offer e-courses for a while but always felt overwhelmed with how to set it up. Podia has made it super easy.",
  },
  {
    name: "DIGITAL DOWNLOADS",
    heading: "Ebooks, templates, and any file type you can think of",
    paragraph:
      "Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type.",
    link: "Learn more about downloads",
    img: downloadImg,
    custName: "Matt & Steph, Plant-based food bloggers",
    feedback:
      "We didn’t have to stress about technical details or custom coding. Using Podia made selling our first eBook quick, efficient, and fun",
  },
  {
    name: "COACHING",
    heading:
      "One-on-one coaching and consultations, with billing managed for you",
    paragraph:
      "Sometimes your students want one-on-one attention. Podia makes it easy for you to charge for coaching sessions and consultations.",
    link: "Learn more about coaching",
    img: coachingImg,
    custName: "Shawn Leamon, Divorce and Your Money",
    feedback:
      "Podia just works. It’s easy to use and includes everything you need to sell digital products. I’ve tried all the alternatives, and Podia is hard to beat.",
  },
  {
    name: "WEBINARS",
    heading:
      "Webinars and workshops with registration and payment in one place",
    paragraph:
      "How can you charge for your webinars and workshops? Do it from your Podia site. Set up a paid webinar product and your customers can register straight from your website.",
    link: "Learn more about webinars",
    img: webinarsImg,
    custName: null,
    feedback: null,
  },
];

const Products = () => {
  return (
    <>
      <div className="flex-warp justify-between items-center text-center py-20 max-w-[1420px] mx-auto px-4">
        <h2 className="pt-15 lg:pt-32 text-gray-800 font-[400] font-serif text-4xl">
          What kinds of products can you sell with Podia?
          <p className="font-normal pt-4 lg:px-20 text-xl text-gray-500 font-sans">
            Podia gives you the flexibility to sell whatever you want. That
            means you have more ways to grow your creator business.
          </p>
        </h2>
      </div>

      {productsData.map((p) => (
        <>
          <div className="flex-warp lg:pt-15 lg:flex justify-between items-center py-9 max-w-[1240px] mx-auto px-4">
            <div className="basis-1/2 mx-2">
              <p className="font-bold text-gray-500 font-sans">{p.name}</p>
              <h1 className="pt-5 text-gray-800 font-medium font-serif text-4xl">
                {p.heading}
              </h1>
              <h1 className="py-2 text-gray-500 font-normal font-sans text-xl">
                {p.paragraph}
              </h1>
              <button className="my-5 px-6 py-3 text-xl font-sans font-medium text-Pblue rounded-full   hover:cursor-pointer">
                {p.link} <span className="">→</span>
              </button>
            </div>
            <div className="basis-1/2 m-4">
              <img src={p.img} />
            </div>
          </div>
          {p.feedback ? (
            <>
              <img className="mx-auto pt-20 w-40" src={starImg} />
              <div className="flex-warp justify-between items-center text-center py-4 max-w-[1420px] mx-auto px-4">
                <h4 className="pt-15 lg:px-52 text-gray-800 font-normal font-serif text-xl">
                  {p.feedback}
                  <p className="font-normal pt-4 lg:px-20 text-xl text-gray-500 font-sans">
                    {p.custName}
                  </p>
                </h4>
              </div>
            </>
          ) : null}
        </>
      ))}
    </>
  );
};

export default Products;
