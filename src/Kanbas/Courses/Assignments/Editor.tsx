export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* Assignment Group */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>Assignment</option>
              <option>Quiz 2</option>
            </select>
          </td>
        </tr>
        {/* Display Grade As */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
              <option value="letter">Letter Grade</option>
            </select>
          </td>
        </tr>
        {/* Submission Type */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
              <option value="paper">Paper</option>
            </select>
          </td>
        </tr>

        {/* Text Entry */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
          <td>
            <input type="checkbox" id="wd-text-entry" />
          </td>
        </tr>

        {/* Website URL */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
          <td>
            <input type="checkbox" id="wd-website-url" />
          </td>
        </tr>

        {/* Media Recordings */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
          <td>
            <input type="checkbox" id="wd-media-recordings" />
          </td>
        </tr>

        {/* Student Annotation */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
          <td>
            <input type="checkbox" id="wd-student-annotation" />
          </td>
        </tr>
        {/* File Upload */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
          <td>
            <input type="checkbox" id="wd-file-upload" />
          </td>
        </tr>

        {/* Assign To */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <input id="wd-assign-to" placeholder="Student names" />
          </td>
        </tr>
          {/* Assign To */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <input id="wd-assign-to" placeholder="Student names" />
          </td>
        </tr>
        {/* Due Date */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due Date</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" />
          </td>
        </tr>

        {/* Available From */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available From</label>
          </td>
          <td>
            <input type="date" id="wd-available-from" />
          </td>
        </tr>

        {/* Available Until */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Available Until</label>
          </td>
          <td>
            <input type="date" id="wd-available-until" />
          </td>
        </tr>
      </table>
    </div>
);}
