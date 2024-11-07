import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { addTodo as addTodoAction, updateTodo as updateTodoAction, setTodo as setTodoAction } from "./todosReducer"

// Define TodoType based on the structure of each todo item
interface TodoType {
  id: string;
  title: string;
}

// Define the props for the TodoForm component
interface TodoFormProps {
  currentTodo: TodoType;
  setTodo: (todo: TodoType) => void;
  addTodo: (todo: TodoType) => void;
  updateTodo: (todo: TodoType) => void;
}

export default function TodoForm({ currentTodo, setTodo, addTodo, updateTodo }: TodoFormProps) {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todosReducer.todos);
  const { todo } = useSelector((state: any) => state.todosReducer);


  // Local state to manage input
  const [input, setInput] = useState(currentTodo.title);

  const handleAddTodo = () => {
    const newTodo: TodoType = { id: new Date().getTime().toString(), title: input };
    dispatch(addTodoAction(newTodo));
    setInput(""); // Clear the input field
  };

  const handleUpdateTodo = () => {
    const updatedTodo: TodoType = { ...currentTodo, title: input };
    dispatch(updateTodoAction(updatedTodo));
    setInput(""); 
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <li className="list-group-item">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter todo title"
      />
      
      <button
        onClick={handleAddTodo}
        id="wd-add-todo-click"
      >
        Add
      </button>
      <button onClick= {handleUpdateTodo} id="wd-update-todo-click">Update</button>
      
    </li>
  );
}