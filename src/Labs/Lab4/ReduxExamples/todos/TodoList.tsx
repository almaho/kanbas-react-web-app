import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { addTodo, updateTodo, setTodo } from "./todosReducer"; 
import "./Styles.css"

export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm
          addTodo={(todo) => dispatch(addTodo(todo))}
          updateTodo={(todo) => dispatch(updateTodo(todo))}
          setTodo={(todo) => dispatch(setTodo(todo))}
          currentTodo={{ id: "", title: "" }} // Default values for currentTodo
        />
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}