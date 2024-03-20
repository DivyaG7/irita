
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "../src/pages/Home"
import { Navbar } from './component/Navbar';
import { About } from './pages/About';
import { Membership } from './pages/Membership';
import { Programmes } from './pages/Programmes';
import { KeyInitiative } from './pages/Key_Initiative';
import { NewsEvents } from './pages/News_Events';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Membership' element={<Membership />} />
          <Route path='/NewsEvents' element={<NewsEvents />} />
          <Route path='/Programmes' element={<Programmes />} />
          <Route path='/KeyInitiative' element={<KeyInitiative />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
