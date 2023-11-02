import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "../../Kanbas/Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses({courses}) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/');
  const currentTab = pathSegments[pathSegments.length - 1];

  return (
    <div>
      <div className="page_header">
        <h3 className="page_header_home">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Course {course.name}</li>
                <li className="breadcrumb-item active">{currentTab}</li>
            </ol>
        </h3>
      </div>
      <div className="sub-content">
        <CourseNavigation />
      </div>
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "100px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;