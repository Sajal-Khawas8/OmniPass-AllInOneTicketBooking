// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/jsx/Footer'
import Navbar from './components/jsx/Navbar'
import Home from './pages/jsx/Home'
import About from './pages/jsx/About'
import Train from './pages/jsx/Train'
import LiveStatus from './pages/jsx/LiveStatus'
import Pnr from './pages/jsx/Pnr'
import ComingSoon from './pages/jsx/ComingSoon'
import Flight from './pages/jsx/Flight'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/bookTrainTickets' element={<Train />}></Route>
          <Route path='/checkTrainLiveStatus' element={<LiveStatus />}></Route>
          <Route path='/checkPnrStatus' element={<Pnr />}></Route>
          <Route path='/bookFlightTickets' element={<Flight />}></Route>
          <Route path='/bookHotelRooms' element={<ComingSoon />}></Route>
          <Route path='/bookMetroTickets' element={<ComingSoon />}></Route>
          <Route path='/bookBusTickets' element={<ComingSoon />}></Route>
          <Route path='/bookMovieTickets' element={<ComingSoon />}></Route>

        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
