import { useState } from "react";
import "../App.css";
import { Data } from "./Data.js";
import StudentList from "./StudentList.jsx";

function App() {
  console.log("data", Data);

  const [studentData, setStudentData] = useState(Data);
  return (
    <div className="App">
      <StudentList students={studentData} />
      <button onClick={() => setStudentData([])}>Clear All Students</button>
    </div>
  );
}

export default App;
