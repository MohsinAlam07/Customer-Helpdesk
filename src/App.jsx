import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickets/Tickets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";

import Tasks from "./components/Tasks/Tasks";
import Resolve from "./components/Resolve/Resolve";

const ticketPromise = fetch("./ticket.json").then((res) => res.json());

function App() {
  const [task, setTask] = useState([]);
  const [resovle, setResolve] = useState([]);
  const handleResolve = (completedTask) => {
 
    const newResolve = [...resovle, completedTask];
    setResolve(newResolve);

    toast.success("Resolved the Task");
    const remainingTask = task.filter((t) => t.id !== completedTask.id);
    setTask(remainingTask);
  };
  const handleTask = (ticket) => {
    console.log(ticket);
    const newTask = [...task, ticket];
    setTask(newTask);
    toast.info("The task in progress");
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner resovle={resovle} task={task}></Banner>
      <div className="flex flex-col w-11/12 mx-auto lg:flex-row gap-6 p-4 lg:p-6">
       
        <div className="w-full  mx-auto lg:w-3/4">
          <Suspense fallback={
    <div className="flex justify-center items-center h-40">
      <span className="loading loading-ball loading-xl"></span>
    </div>
  }>
            <Tickets
              ticketPromise={ticketPromise}
              handleTask={handleTask}
            ></Tickets>
          </Suspense>
        </div>

        
        <div className="w-full lg:w-1/4 items-center space-y-2">
          <Tasks task={task} handleResolve={handleResolve}></Tasks>
          <Resolve resovle={resovle}></Resolve>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
