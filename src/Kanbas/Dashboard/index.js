import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  //const courses = db.courses;
  /*const [courses, setCourses] = useState(db.courses);
  
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() % 100000}]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = (thisCourse) => {
    const newCourse = courses.map((item) =>
      (item._id === course._id ? thisCourse : item));
    setCourses(newCourse);
  }
*/

  return (
    <main className="dash-board-content"
    style={{margin: 0}}>
      <div style={{display: "flex"}}>
      <div className="webdev">
        <h1>Dashboard</h1>
        <p>This is the front page of canvas.</p>
        <div className="flex-container">
          <div className="row d-flex">
            {courses.map((course) => (
              <div
                key={course._id}
                className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center"
                style={{margin: "0 25px"}}
              >
                <Link to={`/Kanbas/Courses/${course._id}`}>
                  <div className="class_card">
                    <div
                      className="card-color"
                      style={{ backgroundColor: course.color }}
                    >
                      <FontAwesomeIcon
                        icon={faEllipsisV}
                        className="float-right fa-xl m-4"
                        style={{ color: 'white', float: "right" }}
                      />
                    </div>
                    <div
                      className="card-description"
                      style={{ color: course.color }}
                    >
                      <h4>{course.name}</h4>
                      <div className='d-flex'>
                        <p className>ID: {course._id}</p>
                        <p className>Number: {course.number}</p>
                      </div>
                      <p>Start Date: {course.startDate}</p>
                      <p>End Date: {course.endDate}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          
          </div>
        </div>
      </div>
      <div style={{marginTop: "60px"}}>
          <h5>Course</h5>
          <div className="float-end">
                <button className='btn btn-success m-1' onClick={addNewCourse}>Add</button>
                <button className='btn btn-info m-1' onClick={()=> updateCourse(course)}>
                  Update </button>
          </div>
          <input value={course.name} className="form-control"  onChange={(e) => setCourse({ ...course, name: e.target.value }) }  />
          <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          <input value={course.startDate} className="form-control" type="date"  onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
          <div className="list-group">
            <li className="list-group-item">
            </li>
          {courses.map((course) => (
            <Link key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="list-group-item">
              {course.name}
              <div className='float-end'>
                <button className='btn btn-danger m-1' onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course);
                }}
  >
                  Delete </button>
                <button className='btn btn-primary m-1' onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                  Edit </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
}

export default Dashboard;