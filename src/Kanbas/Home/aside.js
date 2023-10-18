import React from "react";

function CourseAside() {
  return (
    <aside className="home_side d-none d-lg-flex">
      <h2>Course Status</h2>
      <div className="butts">
        <button className="btn btn-secondary p-2">
          <i className="fas fa-ban" style={{ color: "red" }}></i>
          Unpublish
        </button>
        <button className="btn btn-success p-2">
          <i className="fas fa-check-circle" style={{ color: "white" }}></i>
          Published
        </button>
      </div>
      <ul className="list-group side">
        <a href="#">
          <li className="list-group-item list-group-item-dark">
            <i className="fa fa-file-import"></i>
            Import Existing Content
          </li>
        </a>
        <a href="#">
          <li className="list-group-item list-group-item-dark">
            <i className="fa fa-arrow-circle-right"></i>
            Import From Commons
          </li>
        </a>
        <a href="#">
          <li className="list-group-item list-group-item-dark">
            <i className="fa fa-crosshairs"></i>
            Choose Home Page
          </li>
        </a>
        <a href="#">
          <li className="list-group-item list-group-item-dark">
            <i className="fa fa-chart-simple"></i>
            View Course Stream
          </li>
        </a>
        <a href="#">
          <li className="list-group-item list-group-item-dark">
            <i className="fa fa-bullhorn"></i>
            New Announcement
          </li>
        </a>
        <a href="#">
          <li className="list-group-item list-group-item-dark">
            <i className="fa fa-chart-simple"></i>
            New Analytics
          </li>
        </a>
        <a href="#">
          <li className="list-group-item list-group-item-dark">
            <i className="fa fa-bell"></i>
            View Course Notifications
          </li>
        </a>
      </ul>
      <div className="coming_up">
        <h3>Coming Up</h3>
      </div>
      <a className="calendar" href="#">
        View Calendar
      </a>
      <ul className="side">
        <li className="list-group-item">
          <a href="#">
            Lecture CS5450.12631.202410 Sep 7 at 11:45am
          </a>
        </li>
        <li className="list-group-item">
          <a href="#">
            Lecture CS5450.12631.202410 Sep 11 at 11:45am
          </a>
        </li>
        <li className="list-group-item">
          <a href="#">
            CS5610 06 SP23 Lecture Sep 11 at 6pm
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default CourseAside;