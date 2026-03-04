import React from "react";

const Tasks = ({ task,handleResolve }) => {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold p-4 sm:p-5 text-gray-500">
        Task Status
      </h3>

      <div className="bg-gray-100 p-4 rounded-lg flex flex-col gap-3">

        {task.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Select a card to add task
          </p>
        ) : (
          task.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <p className="text-gray-700 text-sm mb-4">
                {t.title}
              </p>

              <button onClick={()=>handleResolve(t)} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium">
                Complete
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Tasks;