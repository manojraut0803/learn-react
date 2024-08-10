import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  // State for managing edit mode and edit text
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditMode(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    dispatch(updateTodo({ id, text: editText }));
    setEditMode(null); // Exit edit mode after updating
  };

  return (
    <>
      <div className="py-8">Todos</div>
      <hr />
      {todos.map((todo) => (
        <div key={todo.id}>
          {editMode === todo.id ? (

            // Edit Mode
            <form onSubmit={(e) => handleUpdate(e, todo.id)}>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <div>
                <button className="px-3" type="submit" >Save</button>
                <button className="px-3" type="button" onClick={() => setEditMode(null)}> Cancel</button>
              </div>
            </form>
          ) : (
            // Display Mode
            <>
              {todo.text} <br />
              <button onClick={() => handleEdit(todo)}>Edit</button><br />
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </>
          )}
          <hr />
        </div>
      ))}
    </>
  );
}

export default Todos;
