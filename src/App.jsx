// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Train from './pages/Train'
import LiveStatus from './pages/livestatus'
import Pnr from './pages/Pnr'

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
