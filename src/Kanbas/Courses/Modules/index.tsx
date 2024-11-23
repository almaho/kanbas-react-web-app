import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer"; // Import Redux actions
import { FaGripVertical } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState<string>("");
  const dispatch = useDispatch();
  const modules = useSelector((state: any) => state.modulesReducer.modules); // Retrieve modules from Redux store
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };



  const handleAddModule = () => {
    dispatch(addModule({ name: moduleName, course: cid })); // Dispatch addModule action with moduleName and course ID
    setModuleName(""); // Clear moduleName after adding
  };
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div className="main-content">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={createModuleForCourse} />

      <ul className="list-group">
        {modules
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
                          saveModule({ ...module, editing: false });
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
                  deleteModule={(moduleId) => removeModule(moduleId)} // Dispatch deleteModule on deletion
                  editModule={(moduleId) => dispatch(editModule(moduleId))} // Dispatch editModule to set editing mode
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}