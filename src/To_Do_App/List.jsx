import React, { useRef } from "react";
import "../App.css";

export default function List(props) {

 let inputTarget = useRef();
  return (
    <div style={{ marginLeft: "300px", marginTop: "80px" }}>
      {props.todos.map((todo) => (
        <table style={{ border: "1px solid black" }}>
          <tbody>
            <tr key={todo.id}>
              <input text="text" ref={inputTarget} value={todo.task} onChange={(e) => {props.Update(todo.id, 'task', e.target.value);}}/>
              <td><button onClick={() => {props.delete(todo.id);}}>Delete</button></td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}
