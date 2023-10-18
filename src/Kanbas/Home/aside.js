import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faArrowCircleRight, faCrosshairs, faChartSimple, faBullhorn, faBell, faBan, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function CourseAside() {
  return (
    <aside className="home_side d-none d-lg-flex">
        <h2>Course Status</h2>
        <div className="butts">
        <button className="btn btn-secondary p-2" style={{ marginRight: 5 }}>
            <FontAwesomeIcon icon={faBan} style={{ color: "red", marginRight: 5 }} />
            Unpublish
        </button>
        <button className="btn btn-success p-2">
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white", marginRight: 5  }} />
            Published
        </button>
        </div>
        <ul className="list-group side">
            <a href="#">
                <li className="list-group-item list-group-item-dark">
                    <FontAwesomeIcon icon={faFileImport} style={{marginRight: 5, color: "black"}} />
                    Import Existing Content
                </li>
            </a>
            <a href="#">
                <li className="list-group-item list-group-item-dark">
                    <FontAwesomeIcon icon={faArrowCircleRight} style={{marginRight: 5, color: "black"}} />
                    Import From Commons
                </li>
            </a>
            <a href="#">
                <li className="list-group-item list-group-item-dark">
                    <FontAwesomeIcon icon={faCrosshairs} style={{marginRight: 5, color: "black"}}/>
                    Choose Home Page
                </li>
            </a>
            <a href="#">
                <li className="list-group-item list-group-item-dark">
                    <FontAwesomeIcon icon={faChartSimple} style={{marginRight: 5, color: "black"}}/>
                    View Course Stream
                </li>
            </a>
            <a href="#">
                <li className="list-group-item list-group-item-dark">
                    <FontAwesomeIcon icon={faBullhorn} style={{marginRight: 5, color: "black"}}/>
                    New Announcement
                </li>
            </a>
            <a href="#">
                <li className="list-group-item list-group-item-dark">
                    <FontAwesomeIcon icon={faBell} style={{marginRight: 5, color: "black"}}/>
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