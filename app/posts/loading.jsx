import React from "react";

const LoadingPosts = () => {
  return (
    <div className="mb-6 bg-white p-4 rounded-md shadow-lg animate-pulse">
      <div className="w-[200px] h-64 bg-gray-300 rounded-md mb-4"></div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-2xl font-semibold mb-2 h-6 bg-gray-300 rounded"></div>
          <div className="text-gray-600 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPosts;
