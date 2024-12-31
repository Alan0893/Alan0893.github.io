import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home.js";
import Experience from './pages/Experience.js';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Assignments from './pages/Assignments';

import Courses from './pages/Courses';

import Background from './components/global/Background';
import NotFound from './components/global/NotFound';

function App() {
  return (
    <HashRouter>
      <Background>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/work-experience' element={<Experience />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
          { /*<Route exact path='/assignments' element={<Assignments />} /> */ }
          <Route exact path='/courses' element={<Courses />} />
          <Route path='*'  element={<NotFound />} />
        </Routes>
      </Background>
    </HashRouter>
  );
}

export default App;
