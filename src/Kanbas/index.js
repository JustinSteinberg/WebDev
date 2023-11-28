import KanbasNavigation from "./KanbasNavigation"; 
import '../home.css';
import {Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { findNonSerializableValue } from "@reduxjs/toolkit";

function Kanbas() {

  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/api/courses`;
  console.log(`API BASE HERE: ${API_BASE}`);
  //const URL = "http://localhost:4000/api/courses";


  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  ///Old Function without Server
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: (new Date().getTime() % 10000).toString() }]);
  };

  //New function with server
  const addCourse = async() => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
    setCourse({name: ""});
  }

  //Old delete courses without server
  const deleteCourseOld = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

//delete courses with delete http request to server
  const deleteCourse = async(course) => {
    const response = await axios.delete(`${URL}/${course._id}`);
    setCourses(courses.filter((c) => c._id !== course._id))
  };

//old update course without server
  const updateCourseOld = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

//new updateCourse with put HTTP request to server
  const updateCourse = async (course) => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(courses.map((c) => {
      if (c._id === course._id){
        return course;
      }
      else{
        return c;
      }
    }));
    setCourse({name: ""});
  }

    return (
      <Provider store={store}>
        <div className="d-flex">
          <div>
            <KanbasNavigation/>
          </div>
          <div className="home-content">
              <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={    
                  <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
                  } />
                  <Route path="Courses/:courseId/*" element={<Courses/>} />
              
              </Routes>
          </div>
        </div>
      </Provider>
    );
  }
  export default Kanbas;