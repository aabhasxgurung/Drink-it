import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description?: string; // Make description optional
  background?: string;
}
const Modal: React.FC<ModalProps & { background?: string }> = ({
  isOpen,
  onClose,
  title,
  image,
  description,
  background,
}) => {
  if (!isOpen) return null;

  const isImageBg = background?.startsWith("url"); // Check if the background is an image URL

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-10"
      style={{
        background: isImageBg
          ? `${background} center/cover no-repeat` // Use image as background
          : background || "radial-gradient(circle, white 30%, #333 70%)", // Use radial gradient as fallback
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <div className=" w-full h-[80vh] bg-transparent flex items-center px-6 z-50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl font-bold hover:scale-110 transition-transform"
        >
          &times;
        </button>

        {/* Left Section - Text */}
        <div className="text-white flex-1 space-y-6">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
          <button className="px-6 py-3 bg-white text-black rounded-md text-lg font-semibold hover:bg-gray-300 transition">
            Visit Website
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-end">
          <img src={image} alt={title} className="max-h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
