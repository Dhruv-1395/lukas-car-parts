import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Componats/Navbar';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
       <Routes>
         {/* <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} /> */}
       </Routes>
     </Router>
    </div>
  );
}

export default App;
