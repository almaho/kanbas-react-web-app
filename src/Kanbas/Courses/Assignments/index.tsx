import { FaSearch, FaPlus } from "react-icons/fa";
import { MdAssignment } from "react-icons/md"; // Icons for assignments
import { BiCalendar } from "react-icons/bi"; // Icon for calendar
import { AiOutlineStar } from "react-icons/ai"; // Icon for points
import ModuleControlButtons from "./ModuleControlButtons"; // Import Module Control Buttons
import LessonControlButtons from "./LessonControlButtons"; // Import Lesson Control Buttons
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-4">
      {/* Search and Buttons Row */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search Input with Icon */}
        <div className="position-relative" style={{ width: "300px" }}>
          <FaSearch
            className="position-absolute"
            style={{ left: "10px", top: "10px", fontSize: "1.2rem" }}
          />
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            className="form-control ps-5"
          />
        </div>

        {/* Control Buttons for Group and Assignment */}
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Title with Module Control Buttons */}
      <h3 id="wd-assignments-title" className="mb-3">
        <BsGripVertical className="me-2 fs-3" />
        ASSIGNMENTS <ModuleControlButtons />
      </h3>

      {/* Assignments List */}
      <ul id="wd-assignment-list" className="list-unstyled">
        <li className="wd-assignment-list-item border p-3 mb-2 rounded">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="me-2" />
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A1 - ENV + HTML
                </a>
              </h5>
              <small className="text-muted">
                <BiCalendar className="me-1" /> Due: 2024-10-10 |
                <span className="mx-1">Start: 2024-09-20 |</span>
                <AiOutlineStar className="me-1" /> Points: 50
              </small>
            </div>
            <LessonControlButtons />
          </div>
        </li>

        <li className="wd-assignment-list-item border p-3 mb-2 rounded">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="me-2" />
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/234"
                >
                  A2 - CSS + BOOTSTRAP
                </a>
              </h5>
              <small className="text-muted">
                <BiCalendar className="me-1" /> Due: 2024-10-15 |
                <span className="mx-1">Start: 2024-09-25 |</span>
                <AiOutlineStar className="me-1" /> Points: 50
              </small>
            </div>
            <LessonControlButtons />
          </div>
        </li>

        <li className="wd-assignment-list-item border p-3 mb-2 rounded">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="me-2" />
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/345"
                >
                  A3 - JAVASCRIPT + REACT
                </a>
              </h5>
              <small className="text-muted">
                <BiCalendar className="me-1" /> Due: 2024-10-20 |
                <span className="mx-1">Start: 2024-09-30 |</span>
                <AiOutlineStar className="me-1" /> Points: 50
              </small>
            </div>
            <LessonControlButtons />
          </div>
        </li>
      </ul>
    </div>
  );
}
