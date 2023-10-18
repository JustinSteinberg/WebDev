import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import db from '../Database';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const courses = db.courses;

  return (
    <main className="dash-board-content"
    style={{margin: 0}}>
      <div className="webdev">
        <h1>Dashboard</h1>
        <p>This is the front page of canvas.</p>
        <div className="flex-container">
          <div className="row d-flex">
            {courses.map((course) => (
              <div
                key={course._id}
                className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center"
                style={{margin: "0 10px"}}
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
    </main>
  );
}

export default Dashboard;