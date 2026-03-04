
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
     
      
      <Navbar></Navbar>
      <Banner></Banner>
       <div className="flex gap-6 p-6">
        <div className="bg-gray-200 p-6 w-3/4 rounded-lg">
          <h2>div a</h2>
        </div>

        <div className="bg-gray-200 p-6 w-1/4 rounded-lg">
          <h2>div b</h2>
        </div>
      </div>
      <Footer></Footer>
      
      
      
    </>
  )
}

export default App
