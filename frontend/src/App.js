import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { JobDetails } from './pages/JobDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="jobs/:_id" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
