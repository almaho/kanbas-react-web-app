import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      {/* Button for "40% of Total" */}
      <button className="btn btn-outline-secondary fs-6" style={{ marginRight: "10px" }}>
        40% of Total
      </button>
      <BsPlus className="fs-4" style={{ marginLeft: "10px" }} />
      <IoEllipsisVertical className="fs-4" style={{ marginLeft: "10px" }} />
    </div>
  );
}
