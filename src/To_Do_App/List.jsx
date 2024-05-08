import React from "react";
import "../App.css";

export default function List({ todos }) {
  return (
    <div className="App">
      <pre>{JSON.stringify(todos)}</pre>
      <br />
      {todos.map((todo) => (
        <div>
          <table style={{ border: "1px solid black" }}>
            <tbody>
              <tr key={todo.id}>
                <td>{todo.task}</td>
                <td>
                  <button onClick={() => {alert(todo.id)}}>Delete</button>
                </td>
                <td>
                  <button>Update</button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
      ))}
    </div>
  );
}
