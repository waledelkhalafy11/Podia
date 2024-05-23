import React from "react";

const Footer = () => {
  const footerData = [
    {
      name: "Platform",
      links: [
        "Pricing",
        "Sign up free",
        "Community",
        "Website builder",
        "Digital products",
        "Email marketing",
      ],
    },
    {
      name: "Support",
      links: [
        "Contact us",
        "Help center",
        "Hire a Podia pro",
        "Creator community",
        "Podia 101",
      ],
    },
    {
      name: "Features",
      links: [
        "Online courses",
        "Downloads",
        "Webinars",
        "Coaching",
        "All features",
      ],
    },
    {
      name: "Compare",
      links: [
        "Kajabi",
        "Teachable",
        "Thinkific",
        "Patreon",
        "Gumroad",
        "Podia alternatives",
      ],
    },
    {
      name: "Resources",
      links: [
        "Examples",
        "Demo",
        "Creator stories",
        "Blog",
        "Free tools",
        "All resources",
      ],
    },
    {
      name: "Podia",
      links: [
        "Jobs",
        "About",
        "Branding",
        "Reviews",
        "Refer-a-creator",
        "Affiliates",
      ],
    },
    {
      name: "Social",
      links: ["Twitter", "Facebook", "Community", "Instagram", "YouTube"],
    },
  ];
  return (
    <div className="bg-Pneaun">
      <div className="flex-warp justify-between items-left text-left py-20 max-w-[1420px] mx-auto px-24">
        {footerData.map((item) => (
          <>
            <div className="flex items-start text-xl font-Normal">
              <h1 className=" p-2 font-medium  text-black">{item.name}</h1>
              <ul className="pl-4 flex underline  text-gray-500">
                {item.links.map((l) => (
                  <li className="p-2 hover:text-Pblue">{l}</li>
                ))}
              </ul>
            </div>
          </>
        ))}

        <div className="flex">
          <h1 className=" p-2 font-normal  text-black">
            {" "}
            Podia Labs, Inc. © 2024
          </h1>

          <ul className="pl-4 flex underline  text-gray-500">
            <li className="p-2 hover:text-Pblue">Terms</li>
            <li className="p-2 hover:text-Pblue">Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
