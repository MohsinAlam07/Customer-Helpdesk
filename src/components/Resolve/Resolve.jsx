import React from "react";

const Resolve = ({ resovle }) => {
  return (
    <div className=" p-4 rounded-lg mt-4">
      
      <h3 className="text-2xl sm:text-3xl font-bold p-4 sm:p-5 text-gray-500">
        Resolved Tasks 
      </h3>
     



      <div className="flex flex-col gap-3">
        {resovle.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No resolve yet
          </p>
        ) : (
          resovle.map((re, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-700 text-sm">{re?.title}</p>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Resolve;