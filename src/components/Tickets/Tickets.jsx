import React from 'react';
import { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ticketPromise}) => {
    const tickets=use(ticketPromise);
   
    return (
       <div>
        <h2 className="text-2xl sm:text-3xl font-bold p-4 sm:p-5 text-gray-500">Customer Tickets</h2>
         <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4 sm:px-5">
           {
            tickets.map(ticket=><Ticket key={ticket.id} ticket={ticket}></Ticket>)
           }
            
        </div>
       </div>
    );
};

export default Tickets;