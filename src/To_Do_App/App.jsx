import { useRef, useState } from "react";
import "../App.css";
import List from "./List";

function App() {
  
  const submitHandle = (e) => {
    e.preventDefault();
  };

  let inputRef = useRef();

  const [inputValue, setInputValue] = useState([
    {
      id: Math.floor(1 + Math.random() * (100 - 1)),
      task: "Math",
    },
    {
      id: Math.floor(1 + Math.random() * (100 - 1)),
      task: "Computer",
    },
  ]);

  const AddTodoTask = () => {
    let newTodoTask = {
      id: Math.floor(1 + Math.random() * (100 - 1)),
      task: inputRef.current.value,
    };

    console.log("new todo task added", newTodoTask);

    if (newTodoTask.task !== "") {
      setInputValue((prevInputValue) => [...prevInputValue, newTodoTask]); // last enter task is not in the logged
    }
    console.log("value in array", inputValue);
  };

  return (
    <div className="App">
      <h1>To Do App</h1>
      <form onSubmit={submitHandle}>
        <input type="text" ref={inputRef} placeholder="enter todo task" />
        &nbsp;
        <button onClick={AddTodoTask}>Add task</button>
      </form>

      <List todos={inputValue} />
    </div>
  );
}

export default App;
