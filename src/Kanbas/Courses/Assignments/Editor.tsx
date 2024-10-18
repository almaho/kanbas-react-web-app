import { useParams, Link } from "react-router-dom"; // Use react-router-dom for Link
import * as db from "../../Database"; // Assuming assignments are part of the Database module
import { useState, useEffect } from "react";

// Define the assignment type
interface Assignment {
  _id: string;
  title: string;
  description?: string;
  course: string;
  due: string;
  start: string;
  points: number;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>(); // Get course ID and assignment ID from URL params
  const { assignments } = db; // Get assignments from the database
  const [assignment, setAssignment] = useState<Assignment | null>(null);

  // Fetch the assignment details based on the ID from the URL
  useEffect(() => {
    const selectedAssignment = assignments.find(
      (assignment) => assignment._id === aid && assignment.course === cid
    );
    if (selectedAssignment) {
      setAssignment(selectedAssignment);
    }
  }, [cid, aid, assignments]);

  if (!assignment) {
    return <div>Loading...</div>; // Show loading state if the assignment is not found yet
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      {/* Course Name */}
      <h4>Course: {cid}</h4>

      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input id="wd-name" className="form-control" value={assignment.title} readOnly />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={4}
          defaultValue={assignment.description || "No description available"}
        />
      </div>

      <div className="row">
        {/* Points */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
          <input id="wd-points" className="form-control" value={assignment.points || 100} />
        </div>

        {/* Assignment Group */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
          <select id="wd-group" className="form-control">
            <option>Assignment</option>
            <option>Quiz 2</option>
          </select>
        </div>
      </div>

      <div className="row">
        {/* Display Grade As */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade As
          </label>
          <select id="wd-display-grade-as" className="form-control">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
            <option value="letter">Letter Grade</option>
          </select>
        </div>

        {/* Submission Type */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
          <select id="wd-submission-type" className="form-control">
            <option value="online">Online</option>
            <option value="paper">Paper</option>
          </select>
        </div>
      </div>

      {/* Assign To, Due Date, Available From, Available Until */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign To
          </label>
          <input
            id="wd-assign-to"
            className="form-control"
            placeholder="Student names"
            value="All students"
            readOnly
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="wd-due-date" className="form-label">
            Due Date
          </label>
          <input type="date" id="wd-due-date" className="form-control" value="2024-10-10" />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="wd-available-from" className="form-label">
            Available From
          </label>
          <input type="date" id="wd-available-from" className="form-control" value="2024-09-20" />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="wd-available-until" className="form-label">
            Available Until
          </label>
          <input type="date" id="wd-available-until" className="form-control" value="2024-10-20" />
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="float-end">
        <Link to={`/courses/${cid}/assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <Link to={`/courses/${cid}/assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}
