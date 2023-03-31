// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Train from './pages/Train'
import LiveStatus from './pages/livestatus'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/train' element={<Train />}></Route>
          <Route path='/trainLiveStatus' element={<LiveStatus />}></Route>

        </Routes>

      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
