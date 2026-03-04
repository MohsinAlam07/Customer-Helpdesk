import React from "react";
import backgroundImage from "../../assets/vector1.png";
import img from "../../assets/vector2.png";

const Banner = ({ task, resovle }) => {
  return (
    <div>
      <div className="w-11/12 mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
          <div
            className="relative rounded-lg text-white text-center py-12 overflow-hidden shadow-md bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage}), linear-gradient(to right,#7c3aed,#6366f1)`,
              backgroundSize: "",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
            }}
          >
           
            <img
              src={img}
              className="absolute top-0 right-0 w-48 opacity-40"
              alt=""
            />

            <p className="text-lg font-medium relative z-10">In-Progress</p>
            <h2 className="text-5xl font-bold mt-2 relative z-10">
              {task.length}
            </h2>
          </div>

        
          <div
            className="relative rounded-lg text-white text-center py-12 overflow-hidden shadow-md bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage}), linear-gradient(to right,#22c55e,#0f766e)`,
            }}
          >
           
            <img
              src={img}
              className="absolute top-0 right-0 w-48 opacity-40"
              alt=""
            />

            <p className="text-lg font-medium relative z-10">Resolved</p>
            <h2 className="text-5xl font-bold mt-2 relative z-10">
              {resovle.length}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
