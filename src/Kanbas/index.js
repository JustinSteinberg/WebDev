import {Link} from "react-router-dom"
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation"; 
import '../home.css';
import {Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
      <div className="d-flex">
        <div>
          <KanbasNavigation/>
        </div>
        <div className="home-content">
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard/>} />
                <Route path="Courses/:courseId/*" element={<Courses/>} />
            
            </Routes>
        </div>
      </div>
    );
  }
  export default Kanbas;