import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGauge, faBook, faCalendarDays, faInbox, faClock, faFilm, faCircleArrowRight, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"

function KanbasNavigation() {
  //Array of main navigation links
  const links = [
    { label: "Account", to: "/Kanbas/Account" },
    { label: "Dashboard", to: "/Kanbas/Dashboard" },
    { label: "Courses", to: "/Kanbas/Courses" },
    { label: "Calendar", to: "/Kanbas/Calendar" },
    { label: "Inbox", to: "/Kanbas/Inbox" },
    { label: "History", to: "/Kanbas/History" },
    { label: "Studio", to: "/Kanbas/Studio" },
    { label: "Commons", to: "/Kanbas/Commons" },
    { label: "Help", to: "/Kanbas/Help" },
  ];

  //Corresponding icons to links
  const iconMap = {
    Account: faUser,
    Dashboard: faGauge,
    Courses: faBook,
    Calendar: faCalendarDays,
    Inbox: faInbox,
    History: faClock,
    Studio: faFilm,
    Commons: faCircleArrowRight,
    Help: faQuestionCircle,
  };

  const { pathname } = useLocation();

  return (
    <nav className="my_dashboard">
      <div className="nav-one">
        <ul className="kanbas-nav pt-1">
          <li>
            <img className="NU_logo" src="../images/NU_Logo.png" alt="NU Logo" />
          </li>
          {links.map((link, index) => (
            <li key={index} id={link.label}
            style={{
                background: pathname.includes(link.to) ? "white" : "",
                color: pathname.includes(link.to) ? "red" : "white",
              }}
            >
              <Link
                to={link.to}
                className="dashboard-link"
                style={{
                  color: pathname.includes(link.to) ? "red" : "white",
                }}
              >
                
                  <FontAwesomeIcon icon={iconMap[link.label]}
                  style={{
                    color: "red",
                  }}
                  size="2xl"
                />{" "}
                <br />
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="../../public/kanbas/assignments/index.html"
              id="back_to_assignments"
              className="dashboard-link"
            >
              Back To Assignments
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default KanbasNavigation;