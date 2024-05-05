import React from "react";

export default function StudentList({ students }) {
  return (
    <>
      {students.map((stu) => {
        return (
          <div key={stu.id} style={{ color: "blue", background: "yellow" }}>
            <h1>{stu.id}</h1>
            <h1>{stu.name}</h1>
            <h1>{stu.age}</h1>
            <img
              style={{ width: "150px", height: "150px", borderRadius: "80px" }}
              src={stu.img}
              alt="student_image"
            />
          </div>
        );
      })}
    </>
  );
}
