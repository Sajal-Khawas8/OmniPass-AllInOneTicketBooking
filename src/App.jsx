// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/jsx/Footer'
import Navbar from './components/jsx/Navbar'
import Home from './pages/jsx/Home'
import About from './pages/jsx/About'
import Train from './pages/jsx/Train'
import LiveStatus from './pages/jsx/LiveStatus'
import Pnr from './pages/jsx/Pnr'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/train' element={<Train />}></Route>
          <Route path='/trainLiveStatus' element={<LiveStatus />}></Route>
          <Route path='/trainPnrStatus' element={<Pnr />}></Route>

        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
