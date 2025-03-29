import Image from "next/image";
import React from "react";
import HomeWrapper from "../../common/components/HomeWrapper";

const About = () => {
  return (
    <HomeWrapper>
      <div className="relative">
        <div className="flex flex-wrap items-start gap-10">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full lg:w-[400px] relative">
            <Image
              src="/home/about.jpg"
              layout="responsive"
              width={735}
              height={1103}
              alt="about"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 items-center">
            <div className="text-black text-3xl font-semibold mb-6">
              Welcome to{" "}
              <span className="font-bold text-[#7B0323] text-5xl font-serif">
                Drink It
              </span>{" "}
              Nepal
            </div>
            <div className="text-gray-800 leading-7 space-y-6 font-league">
              <p>
                Established in 2020, we are proud to be a trusted distributor of
                premium wines and artisanal gin. Our mission is to bring the
                finest selections from renowned wineries and distilleries to
                your table, ensuring exceptional quality and taste in every
                bottle.
              </p>
              <p>
                With a passion for excellence and a deep understanding of the
                industry, we have cultivated partnerships with top producers to
                offer a curated portfolio that caters to connoisseurs and casual
                enthusiasts alike. Whether you’re looking for a sophisticated
                vintage wine or a refreshing, handcrafted gin, we are your go-to
                source.
              </p>
              <p>
                We are committed to providing unparalleled service and
                supporting our customers in creating unforgettable moments.
                Explore our collection and let us help you elevate your
                celebrations, gatherings, and everyday indulgences with the
                perfect pour. Raise a glass with us to quality, authenticity,
                and the joy of sharing exceptional drinks!
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default About;
