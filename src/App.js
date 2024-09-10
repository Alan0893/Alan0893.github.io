import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home.js"; // About Me
import Experience from './pages/Experience.js';
import Projects from './pages/Projects';

import Background from './components/Background';
import Courses from './pages/Courses';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Background>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/work-experience' element={<Experience />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/courses' element={<Courses />} />
          <Route path='*'  element={<NotFound />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
