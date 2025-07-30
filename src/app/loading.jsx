import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="loader"></div>
      {/* <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p>Loading...</p>
      </div> */}
    </div>
  );
};

export default loading;
