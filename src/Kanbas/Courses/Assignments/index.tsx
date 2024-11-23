import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { BiBible } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setAssignments, deleteAssignment } from "./reducer";
import ModuleControlButton from "./ModuleControlButtons";
import * as client from "./client"

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const fetchAssignments = async () => {
    try {
        dispatch(setAssignments( await client.fetchAssignmentsForCourse(cid as string) ));
    } catch (error) {
        console.error(error);
    }
};
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const isFaculty = currentUser.role === "FACULTY";
  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
};

  return (
    <div id="assignments-section" className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ maxWidth: "380px" }}>
          <span className="input-group-text bg-light">
            <FaSearch />
          </span>
          <input
            id="search-assignments"
            placeholder="Search Assignments"
            className="form-control"
          />
        </div>
        {isFaculty && (
          <div className="btn-group">
            <button
              id="add-assignment-group"
              className="btn btn-outline-secondary me-2 d-flex align-items-center"
            >
              <FaPlus className="me-2" /> New Group
            </button>
            <a
              href={`#${pathname}/Editor`}
              className="btn btn-outline-danger d-flex align-items-center"
            >
              <FaPlus className="me-2" /> New Assignment
            </a>
          </div>
        )}
      </div>

      <header
        className="d-flex justify-content-between align-items-center bg-secondary text-white p-3 rounded"
      >
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-3 fs-4" />
          <span className="me-2 fs-6">&#9660;</span>
          <strong>Assignments</strong>
        </div>
        <div className="badge bg-light text-dark px-3 py-2">
          40% of Total
          <FaPlus className="ms-3 fs-5" />
        </div>
      </header>

      <ul id="assignment-list" className="list-group mt-3">
        {assignments
          .map((assignment: any) => (
            <li
              key={assignment._id}
              className="assignment-item d-flex justify-content-between align-items-center p-3 border rounded mb-2 shadow-sm"
            >
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-3 text-muted fs-4" />
                <BiBible className="me-3 text-primary fs-4" />
                <div>
                  {isFaculty ? (
                    <a
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="h5 text-decoration-none text-dark"
                    >
                      {assignment.title}
                    </a>
                  ) : (
                    <h5 className="text-dark">{assignment.title}</h5>
                  )}
                  <small className="text-muted d-block mt-1">
                    <span className="text-danger">Multiple Modules</span> |
                    <strong> From:</strong> {assignment.availableFrom} |
                    <strong> Until:</strong> {assignment.availableUntil} |
                    <strong> Due:</strong> {assignment.dueDate} |
                    {assignment.points} pts
                  </small>
                </div>
              </div>
              <ModuleControlButton
                deleteAssignment={() => dispatch(deleteAssignment(assignment._id))}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
