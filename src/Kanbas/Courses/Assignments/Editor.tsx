export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      {/* Course Name */}
      <h4>Course Name</h4>

      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value="A1 - ENV + HTML"
        />
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
          defaultValue="The assignment is available online. Submit a link to the landing page of"
        />
      </div>

      <div className="row">
        {/* Points */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
          <input id="wd-points" className="form-control" value={100} />
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

      {/* Submission Options */}
      <div className="row">
        <div className="col-md-6">
          <div className="form-check mb-2">
            <input type="checkbox" id="wd-text-entry" className="form-check-input" />
            <label htmlFor="wd-text-entry" className="form-check-label">
              Text Entry
            </label>
          </div>
          <div className="form-check mb-2">
            <input type="checkbox" id="wd-website-url" className="form-check-input" />
            <label htmlFor="wd-website-url" className="form-check-label">
              Website URL
            </label>
          </div>
          <div className="form-check mb-2">
            <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
            <label htmlFor="wd-media-recordings" className="form-check-label">
              Media Recordings
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-check mb-2">
            <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
            <label htmlFor="wd-student-annotation" className="form-check-label">
              Student Annotation
            </label>
          </div>
          <div className="form-check mb-2">
            <input type="checkbox" id="wd-file-upload" className="form-check-input" />
            <label htmlFor="wd-file-upload" className="form-check-label">
              File Upload
            </label>
          </div>
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
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="wd-due-date" className="form-label">
            Due Date
          </label>
          <input type="date" id="wd-due-date" className="form-control" />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="wd-available-from" className="form-label">
            Available From
          </label>
          <input type="date" id="wd-available-from" className="form-control" />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="wd-available-until" className="form-label">
            Available Until
          </label>
          <input type="date" id="wd-available-until" className="form-control" />
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="float-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
