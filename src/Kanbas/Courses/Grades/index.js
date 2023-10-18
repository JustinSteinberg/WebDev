import db from "../../Database";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faFileExport, faGear, faFilter } from '@fortawesome/free-solid-svg-icons';


function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  const buttonStyle = {marginRight: 10};
  return (
    
    <div>
      <h1>Grades</h1>
      <div className="d-flex justify-content-end">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle mr-1" style={buttonStyle}>Gradebook</button>
        <div className="dropdown-menu" >
          <select className="form-select">
            <option>Gradebook</option>
          </select>
        </div>
      </div>
      <button className="btn btn-secondary mr-1" style={buttonStyle}>
        <FontAwesomeIcon icon={faFileImport} />
        Import
      </button>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle mr-1" style={buttonStyle}>
          <FontAwesomeIcon icon={faFileExport} />
          Export
        </button>
        <div className="dropdown-menu">
          <select className="form-select">
            <option>Export</option>
          </select>
        </div>
      </div>
      <button className="btn btn-secondary" style={buttonStyle}>
        <FontAwesomeIcon icon={faGear} />
      </button>
    </div>
    <form>
      <div className="d-flex justify-content-start inputs_names">
        <div className="d-flex flex-column input_name" style={buttonStyle}>
          <label htmlFor="student_name">Student Names</label>
          <input className="form-control pr-3" type="text" id="student_name" name="student_name" placeholder="Search Students"/>
        </div>
        <div className="d-flex flex-column mr-5 input_assignment" style={buttonStyle}>
          <label htmlFor="assignment_names">Assignment Names</label>
          <input className="form-control pr-3" type="text" id="assignment_names" name="assignment_names" placeholder="Search Assignments" />
        </div>
      </div>
      <button type="submit" className="form-control btn btn-secondary apply_filter p-2"
      style={{width: "20%"}}>
        <FontAwesomeIcon icon={faFilter} />
        Apply Filter
      </button>
    </form>
      <div className="table-responsive" style={{marginRight: 10}}>
        <table className="table table-striped">
          <thead style={{textAlign: "center"}}>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>


          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

