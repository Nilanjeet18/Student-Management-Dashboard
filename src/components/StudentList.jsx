function StudentList({ students, deleteStudent })
{
  return (
    <div className="bg-white p-4 rounded shadow">
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Class</th>
            <th className="border p-2">Marks</th>
            <th className="border p-2">PRN</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Blood Group</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center p-4">
                No students found
              </td>
            </tr>
          )}

          {students.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.className}</td>
              <td className="border p-2">{s.marks}</td>
              <td className="border p-2">{s.PRN}</td>
              <td className="border p-2">{s.Contact}</td>
              <td className="border p-2">{s.bloodgp}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => deleteStudent(s.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
