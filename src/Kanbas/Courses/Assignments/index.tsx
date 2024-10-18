import { useParams } from "react-router";
import * as db from "../../Database";
import { FaSearch, FaPlus } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Assignments() {
  const { cid } = useParams(); // Get course ID from URL

  // Debugging: Log course ID
  console.log("Course ID from URL:", cid);

  const { assignments } = db;  // Fetch assignments from the database

  // Debugging: Log all assignments to check structure
  console.log("All assignments:", assignments);

  // Filter assignments for the current course
  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  // Debugging: Log filtered assignments
  console.log("Filtered assignments for course:", cid, filteredAssignments);

  return (
    <div id="wd-assignments" className="p-4">
      {/* Search and control buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="position-relative" style={{ width: "300px" }}>
          <FaSearch className="position-absolute" style={{ left: "10px", top: "10px", fontSize: "1.2rem" }} />
          <input id="wd-search-assignment" placeholder="Search for Assignments" className="form-control ps-5" />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Title with module control buttons */}
      <h3 id="wd-assignments-title" className="mb-3">
        <BsGripVertical className="me-2 fs-3" />
        ASSIGNMENTS <ModuleControlButtons />
      </h3>

      {/* Check if there are any assignments for this course */}
      {filteredAssignments.length > 0 ? (
        <ul id="wd-assignment-list" className="list-unstyled">
          {filteredAssignments.map((assignment) => (
            <li key={assignment._id} className="wd-assignment-list-item border p-3 mb-2 rounded">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdAssignment className="me-2" />
                    <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                      {assignment.title}
                    </a>
                  </h5>
                  <small className="text-muted">
                    <BiCalendar className="me-1" /> Due: {assignment.due || "TBD"} |
                    <span className="mx-1">Start: {assignment.start || "TBD"} |</span>
                    <AiOutlineStar className="me-1" /> Points: {assignment.points || "0"}
                  </small>
                </div>
                <LessonControlButtons />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No assignments found for this course.</p>
      )}
    </div>
  );
}
