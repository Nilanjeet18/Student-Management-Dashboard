import { useState } from "react";

function StudentForm({ addStudent })
{
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [marks, setMarks] = useState("");
  const [PRN, setPRN] = useState("");
  const [Contact, setContact] = useState("");
  const [bloodgp, setbloodgp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent({
      id: Date.now(),
      name,
      className,
      marks,
      PRN,
      Contact,
      bloodgp
    });

    setName("");
    setClassName("");
    setMarks("");
    setPRN("");
    setContact("");
    setbloodgp("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Marks"
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Student PRN"
          value={PRN}
          onChange={(e) => setPRN(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Student Contact Number"
          value={Contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Student Blood Group"
          value={bloodgp}
          onChange={(e) => setbloodgp(e.target.value)}
          required
        />
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;
