import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";

function App() 
{
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  // Load from LocalStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students"));
    if (data) setStudents(data);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-screen bg-blue-200 p-6 text-black">
      <h1 className="text-3xl font-bold text-center mb-6 text-violet-700">
        Student Management Dashboard
      </h1>

      <StudentForm addStudent={addStudent} />
      <SearchBar setSearch={setSearch} />
      <StudentList students={filteredStudents} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
