import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import React from "react";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid, aid } = useParams();
  const isAdding = !aid;
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const assignmentData = assignments.find((assignment: any) => assignment._id === aid && assignment.course === cid);
  const [assignment, setAssignment] = useState(
    assignmentData || {
      title: "", description: "", course: cid,
      points: 100, dueDate: "", availableFrom: "", availableUntil: ""
    }
  );

  return (
    <div id="assignment-editor" className="container shadow-lg p-4 rounded" style={{ maxWidth: "750px" }}>
      <h2 className="mb-4 text-center">{isAdding ? "Create New Assignment" : "Edit Assignment"}</h2>
      <div className="row mb-3">
        <label htmlFor="assignment-name" className="col-md-3 col-form-label fw-bold">Name</label>
        <div className="col-md-9">
          <input
            type="text"
            id="assignment-name"
            className="form-control"
            value={assignment.title}
            onChange={e => setAssignment({ ...assignment, title: e.target.value })}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="assignment-desc" className="col-md-3 col-form-label fw-bold">Description</label>
        <div className="col-md-9">
          <textarea
            id="assignment-desc"
            className="form-control"
            rows={3}
            value={assignment.description}
            onChange={e => setAssignment({ ...assignment, description: e.target.value })}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="assignment-points" className="col-md-3 col-form-label fw-bold">Points</label>
        <div className="col-md-9">
          <input
            type="number"
            id="assignment-points"
            className="form-control"
            value={assignment.points}
            onChange={e => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-md-3 col-form-label fw-bold" htmlFor="assignment-group">Group</label>
        <div className="col-md-9">
          <select id="assignment-group" className="form-select">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECTS</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-md-3 col-form-label fw-bold" htmlFor="display-grade">Grade Display</label>
        <div className="col-md-9">
          <select id="display-grade" className="form-select">
            <option>Percentage</option>
            <option>Letter Grade</option>
            <option>Pass/Fail</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-md-3 col-form-label fw-bold" htmlFor="submission-type">Submission Type</label>
        <div className="col-md-9">
          <select id="submission-type" className="form-select">
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-md-3 col-form-label fw-bold">Assign To</label>
        <div className="col-md-9">
          <input
            type="text"
            className="form-control mb-2"
            id="assign-to"
            defaultValue="Everyone"
          />
          <div className="d-flex gap-3">
            <div>
              <label className="form-label fw-light">Due Date</label>
              <input
                type="date"
                className="form-control"
                id="due-date"
                value={assignment.dueDate}
                onChange={e => setAssignment({ ...assignment, dueDate: e.target.value })}
              />
            </div>
            <div>
              <label className="form-label fw-light">Available From</label>
              <input
                type="date"
                className="form-control"
                id="available-from"
                value={assignment.availableFrom}
                onChange={e => setAssignment({ ...assignment, availableFrom: e.target.value })}
              />
            </div>
            <div>
              <label className="form-label fw-light">Until</label>
              <input
                type="date"
                className="form-control"
                id="available-until"
                value={assignment.availableUntil}
                onChange={e => setAssignment({ ...assignment, availableUntil: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              if (isAdding) dispatch(addAssignment(assignment));
              else dispatch(updateAssignment(assignment));
              navigate(`/Kanbas/Courses/${cid}/Assignments`);
            }}
          >
            Save
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-secondary w-100"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
