import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {FaTrash} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import {useSelector} from "react-redux";


export default function ModuleControlButton({deleteAssignment}: {
    deleteAssignment: () => void;
}) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === "FACULTY";
    return (
    
        <div className="float-end">
          
          <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment()}/>

          <GreenCheckmark />
        
          <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
