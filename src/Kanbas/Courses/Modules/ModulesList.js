import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { faAlignCenter, faDirections } from "@fortawesome/free-solid-svg-icons";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <>
      {
       modules.filter((module) => module.course === courseId).map((module, index) => (
            <ul className="list-group mb-3 mr-3"
            style={{marginRight: 15}}>
                <li key={index} className={`list-group-item list-group-item-secondary`}
                style={{display: "flex", flexDirection: "column", justifySelf: "center"}}
                >
                    <h3>{module.name}</h3>
                    <p>{module.description}</p>
                </li>
           </ul>
      ))
      }
      </>
  );
}

export default ModuleList;