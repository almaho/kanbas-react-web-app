import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, editModule, updateModule, deleteModule } from "./reducer"; // Import Redux actions
import { FaGripVertical } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState<string>("");
  const dispatch = useDispatch();
  const modules = useSelector((state: any) => state.modulesReducer.modules); // Retrieve modules from Redux store

  const handleAddModule = () => {
    dispatch(addModule({ name: moduleName, course: cid })); // Dispatch addModule action with moduleName and course ID
    setModuleName(""); // Clear moduleName after adding
  };

  return (
    <div className="main-content">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={handleAddModule} />

      <ul className="list-group">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li key={module._id} className="list-group-item module-item border border-gray mb-4">
              <div className="d-flex justify-content-between align-items-center module-row">
                <div className="d-flex align-items-center">
                  <FaGripVertical className="me-2 grip-icon" />
                  {module.editing ? (
                    <input
                      className="form-control w-50 d-inline-block"
                      value={module.name}
                      onChange={(e) =>
                        dispatch(updateModule({ ...module, name: e.target.value })) // Dispatch updateModule for name change
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false })); // Dispatch updateModule to finalize editing
                        }
                      }}
                      autoFocus
                    />
                  ) : (
                    <h5 className="mb-0 module-name">{module.name}</h5>
                  )}
                </div>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => dispatch(deleteModule(moduleId))} // Dispatch deleteModule on deletion
                  editModule={(moduleId) => dispatch(editModule(moduleId))} // Dispatch editModule to set editing mode
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}