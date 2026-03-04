import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="bg-gray-200 py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* In Progress */}
    <div
      className="relative rounded-lg text-white text-center py-12 overflow-hidden
      bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 shadow-md"
    >
      {/* wave overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>

      <p className="text-lg font-medium relative z-10">In-Progress</p>
      <h2 className="text-5xl font-bold mt-2 relative z-10">1</h2>
    </div>

    {/* Resolved */}
    <div
      className="relative rounded-lg text-white text-center py-12 overflow-hidden
      bg-gradient-to-r from-green-500 via-green-500 to-teal-600 shadow-md"
    >
      {/* wave overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>

      <p className="text-lg font-medium relative z-10">Resolved</p>
      <h2 className="text-5xl font-bold mt-2 relative z-10">0</h2>
    </div>

  </div>
</div>
        </div>
    );
};

export default Banner;