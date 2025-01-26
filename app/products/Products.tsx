"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Bottles } from "./_constant/Product";
import Modal from "../common/components/Modal";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    title: string;
    image: string;
    description: string;
    background?: string;
  }>({
    title: "",
    image: "",
    description: "",
    background: "",
  });

  const openModal = (bottle: {
    name: string;
    img: string;
    description: string;
    background?: string;
  }) => {
    setModalData({
      title: bottle.name,
      image: bottle.img,
      description: bottle.description,
      background: bottle.background || "", // Pass background (gradient or image)
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <h1 className="text-[#7B0323] text-5xl font-serif z-50 text-center">
          Discover Our Iconic Products
        </h1>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-20 py-20">
        {Bottles.map((bottle, i) => (
          <div
            key={i}
            className="relative group w-[280px]"
            onClick={() => openModal(bottle)}
          >
            <div className="rounded-xl">
              <Image
                src={bottle.img}
                width={200}
                height={300}
                alt={bottle.name}
                className="w-[280px] h-[400px] object-cover rounded-xl hover:scale-110 transition-all"
              />
              <h2 className="font-serif text-[#7B0323] text-center text-3xl py-9">
                {bottle.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalData.title}
        image={modalData.image}
        description={modalData.description}
        background={modalData.background} // Pass the background to Modal
      />
    </div>
  );
};

export default Products;
