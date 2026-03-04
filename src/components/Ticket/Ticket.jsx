import React from "react";

const Ticket = ({ ticket }) => {
  // const{title}=ticket;
  console.log(ticket);
  return (
    // <div>
    //     <h1> Title:{ticket.title}</h1>
    //     <p>dis:{ticket.description}</p>
    //     <span>status: {ticket.status}</span>
    //     <button className='btn'>solve</button>
    // </div>
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 border border-gray-200 mb-4">

      {/* Top Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">
          {ticket.title}
        </h2>

        <span
          className={`px-3 py-1 text-xs sm:text-sm rounded-full font-medium w-fit
          ${
            ticket.status === "Open"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {ticket.description}
      </p>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-500">

        {/* Left */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="font-medium">#{ticket.id}</span>

          <span
            className={`font-semibold
            ${
              ticket.priority === "HIGH"
                ? "text-red-500"
                : ticket.priority === "MEDIUM"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {ticket.priority} PRIORITY
          </span>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">
          <span>{ticket.customer}</span>
          <span className="flex items-center gap-1">
            📅 {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
