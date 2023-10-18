import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faEllipsisV, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const buttonStyle = {float: "Right", marginRight: 10};
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="assignments pb-3">
      <input
        className="pr-3 pt-2 pb-2 w-25 form-control d-inline"
        type="text"
        id="assignment_search"
        name="assignment_search"
        placeholder="Search for Assignments"
      />
      <div style={{float: "right"}}>
        <button className="btn btn-secondary float-right" style={buttonStyle}>
            <FontAwesomeIcon icon={faEllipsisV} />
        </button>
        <button className="btn btn-danger float-right mr-1" style={buttonStyle}>
            <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
            Assignment
        </button>
        <button className="btn btn-secondary float-right mr-1" style={buttonStyle}>
            <FontAwesomeIcon icon={faPlus} style={{ color: "black" }} />
            Group
        </button>
      </div>
    </div>

      <ul className="list-group work_list" style={{paddingRight: 10}}>
        <li className="list-group-item list-group-item-dark p-3 align-items-center ml-1" style={{borderLeft: "1px solid gray"}}>
           <strong>Assignments</strong>
        </li>
        {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="list-group-item d-flex align-items-center" style={{borderLeft: "2px solid green"}}>
            <FontAwesomeIcon icon={faGripVertical} className="float-left ml-1" 
            style={{paddingRight: 20}}/>
            <div className="pl-3 flex-grow-1" style={{alignItems: "center"}}>
              <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                <strong>{assignment.title}</strong>
                <br /> Mutiple Modules
              </Link>
              <span>! Not available yet</span>
              <FontAwesomeIcon icon={faEllipsisV} style={{float: "right", paddingRight:"10px"}} />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="float-right mr-3"
                style={{ color: "#29c758", float: "right", paddingRight: "10px" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;


