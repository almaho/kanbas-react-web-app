import { stringify } from "querystring";
import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "1",
    name: "React Basics",
    description: "Introduction to React concepts",
    course: "Web Development",
  });

 

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* Assignment Section */}
      <h4>Modifying Assignment Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/assignment/title/${assignment.title}`}
      >
        Update Assignment Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <hr />

      <h4>Retrieving Assignment</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />

      <h4>Retrieving Assignment Title</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Assignment Title
      </a>
      <hr />

      {/* Module Section */}
      <h4>Modifying Module Name</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
      >
        Update Module Name
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <hr />

      <h4>Modifying Module Description</h4>
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
      >
        Update Module Description
      </a>
      <input
        className="form-control w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />
       {/* Assignment Score */}
       <h4>Modifying Assignment Score</h4>
       <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}
      >
        Update Assignment Score
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
      />
      <hr />
      {/* Assignment completed */}
      <h4>Modifying Assignment Completed</h4>
       <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}
      >
        Update Assignment Completed
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-completed"
        defaultValue= {assignment.completed.toString()}
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked  })}
      />
      <hr />
    </div>
  );
}
