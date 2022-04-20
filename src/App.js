import React from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';
import retro from './img/retrowave_video.mp4';



function App() {

 return (
  <div className='page'>
    <video autoPlay muted loop id="myVideo" src= {retro}>
    </video>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/play" element={<PlayPage/>}/>
      <Route path="/game" element={<GamePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  </BrowserRouter> 
  </div>
 )

}

export default App;
