import Image from "next/image";
import React from "react";
import HomeWrapper from "../common/components/HomeWrapper";

const ProductsDetail = () => {
  return (
    <HomeWrapper>
      <div className="flex">
        <div className="max-w-[500px]">
          <h1 className="text-[#7B0323] text-5xl font-serif">Drink It</h1>
          <p className="text-gray-800 leading-7 space-y-6 font-league">
            SKYY Vodka is the number one premium vodka in the United States and
            the fifth premium vodka in the world. Through the process of
            quadruple distillation and triple filtration we obtain a vodka of
            proven, exceptional quality and softness. Starting with the
            distinctive SKYY cobalt blue Vodka bottle and award-winning
            communication campaigns, SKYY is synonymous with quality, refinement
            and style
          </p>
        </div>
        <div>
          <Image src="/home/bottle1.jpg" width={400} height={700} alt="" />
        </div>
      </div>
    </HomeWrapper>
  );
};

export default ProductsDetail;
