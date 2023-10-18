import React from "react";
import ModuleList from "../Courses/Modules/ModulesList";
import CourseAside from "./aside";
import ModuleButtons from "../Courses/Modules/ModuleButtons";

function Home() {
  return (
    <div>
      <div className="d-flex">
        <div className="d-block" style={{flex: 1}}>
            <ModuleButtons/>
            <ModuleList />
        </div>
        <CourseAside/>
      </div>
    </div>
  );
}
export default Home;