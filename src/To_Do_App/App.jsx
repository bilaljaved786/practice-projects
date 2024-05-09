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

  const UpdateHandle = (id, key, newValue) => {
    const updatedTasks = inputValue.map((task) => {
      if (task.id === id) {
        return { ...task, [key]: newValue };
      }
      return task;
    });
    setInputValue(updatedTasks);
    console.log("updated array", inputValue);
  };

  const DeleteHandle = (id) => {
    const index = inputValue.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newArray = [...inputValue.slice(0, index), ...inputValue.slice(index + 1)];
      setInputValue(newArray);
    }
  };

  const AddTodoTask = () => {
    let newTodoTask = {
      id: Math.floor(1 + Math.random() * (100 - 1)),
      task: inputRef.current.value,
    };

    if (newTodoTask.task !== "") {
      setInputValue((prevInputValue) => [...prevInputValue, newTodoTask]);
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
      <List delete={DeleteHandle} Update={UpdateHandle} todos={inputValue} />
    </div>
  );
}

export default App;
