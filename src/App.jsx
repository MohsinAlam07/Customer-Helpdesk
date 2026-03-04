import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickets/Tickets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tasks from "./components/Tasks/Tasks";

const ticketPromise = fetch("./ticket.json").then((res) => res.json());

function App() {
  const [task, setTask] = useState([]);
  const handleTask = (ticket) => {
    console.log(ticket)
    const newTask=[...task,ticket];
    setTask(newTask);
    
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex flex-col w-11/12 mx-auto lg:flex-row gap-6 p-4 lg:p-6">
        {/* Left Side (Tickets - 75%) */}
        <div className="w-full  mx-auto lg:w-3/4">
          <Suspense fallback={<h2>Ticket issue is loading</h2>}>
            <Tickets ticketPromise={ticketPromise}
            
             handleTask={handleTask}
            
            >

            </Tickets>
          </Suspense>
        </div>

        {/* Right Side (Sidebar - 25%) */}
        <div className="w-full lg:w-1/4 items-center">
          <h2>
            <Tasks task={task}></Tasks>
          </h2>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
