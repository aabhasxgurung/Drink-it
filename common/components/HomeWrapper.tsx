import React from "react";

interface HomeWrapperProps {
  children: React.ReactNode;
  className?: string; // Optional to customize styling for specific sections
}

const HomeWrapper: React.FC<HomeWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default HomeWrapper;
