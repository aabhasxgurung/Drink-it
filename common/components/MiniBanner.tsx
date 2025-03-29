import Image from "next/image";
import React from "react";

const logo = [
  {
    id: 1,
    logo: "logo",
    img: "/home/hapusalogo.png",
  },
  {
    id: 2,
    logo: "logo",
    img: "/home/sulalogo.png",
  },
  {
    id: 3,
    logo: "logo",
    img: "/home/Luxardologo.jpg",
  },
  {
    id: 4,
    logo: "logo",
    img: "/home/download.png",
  },
];

const MiniBanner = () => {
  return (
    <>
      {/* <h1 className="text-[#7B0323] text-5xl font-serif z-50 text-center ">
        Explore Our Premium Brands
        </h1>
        <div className="flex w-full justify-center items-center mt-6">
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
          </div> */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h1 className="text-[#7B0323] text-5xl z-50 text-center mb-12">
            Explore Our Premium Brands
          </h1>

          <div className="flex gap-6 items-center justify-center">
            {logo.map((logo) => (
              <div key={logo.id}>
                <Image
                  src={logo.img}
                  width={200}
                  height={200}
                  alt={logo.logo}
                  className="h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniBanner;
