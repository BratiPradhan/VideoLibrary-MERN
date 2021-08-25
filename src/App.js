import { Routes, Route } from 'react-router-dom'

import { WrapperGrid } from './App.style'

import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'

import Home from './components/routes/Home';
import VideoListing from './components/routes/VideoListing';
import Video from './components/routes/Video';
import MyLearning from './components/routes/MyLearning';
import Login from './components/routes/Login';
import Register from './components/routes/Register';

function App() {
  return (
    <WrapperGrid>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/videos/*" element={<VideoListing/>}></Route>
        <Route path="/video/*" element={<Video/>}></Route>
        <Route path="/my-videos/*" element={<MyLearning/>}></Route>
      </Routes>

      <Footer/>

      </WrapperGrid>
  );
}

export default App;
