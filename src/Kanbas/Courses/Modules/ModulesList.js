import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const flexStyle = {display: "flex", flexDirection: "column", justifySelf: "center", width: "100%"};

  return (
    <>
     <ul className="list-group mb-3 mr-3"
            style={{marginRight: 15}}>
                    <li className="list-group-item">
        <button className="btn btn-success m-1" onClick={() => dispatch(addModule({...module, course: courseId})) }>Add</button>
        <button className="btn btn-info m-1" onClick={() => dispatch(updateModule(module))}> Update </button>

        <input className="form-control" value={module.name}
          onChange={(e) => dispatch(setModule({
            ...module, name: e.target.value }))}
        />
        <textarea className="form-control" value={module.description}
          onChange={(e) => dispatch(setModule({
            ...module, description: e.target.value }))}
        />
      </li>

      {
       modules.filter((module) => module.course === courseId).map((module, index) => (
        
        <li key={index} className={`list-group-item list-group-item-secondary`}
        >
            <div style={{display: "flex"}}>
              <div style={flexStyle}>
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
              </div>
                <button className="btn btn-danger float-end" style={{height: "50%", marginRight: 5}}
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <button className="btn btn-success float-end" style={{height: "50%"}}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

            </div>

        </li>
      ))
      }
      </ul>

      </>
  );
}

export default ModuleList;