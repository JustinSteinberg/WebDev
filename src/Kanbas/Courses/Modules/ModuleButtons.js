import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function ModuleButtons() {
  return (
    <div>
      <div className="d-flex justify-content-end" style={{ marginRight: 15 }}>
        <ul id="buttons">
          <li>
            <button className="btn btn-secondary">
              Collapse All
            </button>
          </li>
          <li>
            <button className="btn btn-secondary">
              View Progress
            </button>
          </li>
          <li>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'black', padding: "0 5px" }} />
                Publish All
              </button>
            </div>
          </li>
          <li>
            <button className="btn btn-danger">
              Module
            </button>
          </li>
          <li>
            <button className="btn btn-secondary">
              <FontAwesomeIcon icon={faEllipsisV} style={{ padding: "0 5px" }} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModuleButtons;