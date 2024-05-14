// StudentList.jsx
import React from 'react';

function StudentList({ students }) {
  return (
    <div className="mt-8">
      {/* Heading for the student list */}
      <h2 className="mb-4 text-2xl font-bold">Llista d'Estudiants</h2>
      {/* Border around the table with shadow */}
      <div className="rounded-lg border shadow-lg">
        <table className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg">
          {/* Table header */}
          <thead className="bg-blue-500 text-white">
            <tr>
              <th
                scope="col"
                className="px-8 py-4 text-left text-lg font-semibold tracking-wider"
              >
                Nom
              </th>
              <th
                scope="col"
                className="px-8 py-4 text-left text-lg font-semibold tracking-wider"
              >
                Cognom
              </th>
              <th
                scope="col"
                className="px-8 py-4 text-left text-lg font-semibold tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-8 py-4 text-left text-lg font-semibold tracking-wider"
              >
                Tipus
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="divide-y divide-gray-200 bg-white">
            {/* Iterate over the students array to render each student */}
            {students.map((student, index) => (
              <tr key={index}>
                {/* Student information cells */}
                <td className="whitespace-nowrap px-8 py-4 text-lg text-gray-900">
                  {student.firstName}
                </td>
                <td className="whitespace-nowrap px-8 py-4 text-lg text-gray-900">
                  {student.lastName}
                </td>
                <td className="whitespace-nowrap px-8 py-4 text-lg text-gray-900">
                  {student.email}
                </td>
                <td className="whitespace-nowrap px-8 py-4 text-lg text-gray-900">
                  {student.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
