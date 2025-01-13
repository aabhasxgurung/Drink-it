import Image from "next/image";
import React from "react";
import HomeWrapper from "./HomeWrapper";

const logo = [
  {
    id: 1,
    logo: "logo",
    img: "/home/hapusalogo.png",
  },
  {
    id: 2,
    logo: "logo",
    img: "/home/sula.jpeg",
  },
  {
    id: 3,
    logo: "logo",
    img: "/home/Luxardologo.jpg",
  },
];

const MiniBanner = () => {
  return (
    <HomeWrapper>
      <div className="flex w-full justify-center items-center">
        <div className="flex gap-7">
          {logo.map((logo) => (
            <div key={logo.id} className="px-4 text-white">
              <Image
                src={logo.img}
                width={200}
                height={200}
                alt={logo.logo}
                className="h-20 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <h1>Explore Our Premium Brands</h1>
    </HomeWrapper>
  );
};

export default MiniBanner;
