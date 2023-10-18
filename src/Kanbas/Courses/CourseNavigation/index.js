import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades", "Piazza", "Zoom Meetings", "Quizzes"];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="second-nav" style={{ width: 150}}>
    <ul style={{paddingLeft: 0}}>
      {links.map((link, index) => (
        <li>
            <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}
            style={pathname.includes(link) ? { borderLeft: "2px solid black", paddingLeft: 2, fontWeight: "bold"} : {paddingLeft: 2}}
            >
            {link}
            </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default CourseNavigation;