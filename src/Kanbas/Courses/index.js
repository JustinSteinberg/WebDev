import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "../../Kanbas/Home";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/');
  const currentTab = pathSegments[pathSegments.length - 1];

  return (
    <div>
      <div className="page_header">
        <h3 class="page_header_home">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">Course {course.name}</li>
                <li class="breadcrumb-item active">{currentTab}</li>
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
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;