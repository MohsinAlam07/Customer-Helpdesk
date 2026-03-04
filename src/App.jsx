
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'

const ticketPromise=fetch('./ticket.json').then(res=>res.json())

function App() {


  return (
    <>
     
      
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6">

  {/* Left Side (Tickets - 75%) */}
  <div className="w-full lg:w-3/4">
    <Suspense fallback={<h2>Ticket issue is loading</h2>}>
      <Tickets ticketPromise={ticketPromise}></Tickets>
    </Suspense>
  </div>

  {/* Right Side (Sidebar - 25%) */}
  <div className="w-full lg:w-1/4 bg-gray-200 p-6 rounded-lg">
    <h2>div b</h2>
  </div>

</div>
      <Footer></Footer>
      
      
      
    </>
  )
}

export default App
