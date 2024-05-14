import React, { useState } from 'react';
import Form from './components/Form';
import StudentList from './components/StudentList';

function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState('no-graduat');
  const [placesNoGraduats, setPlacesNoGraduats] = useState(60);
  const [placesGraduats, setPlacesGraduats] = useState(40);
  const [students, setStudents] = useState([]);

  const handleFormSubmit = (firstName, lastName, email) => {
    const newStudent = {
      firstName,
      lastName,
      email,
      type: tipusEstudiant === 'no-graduat' ? 'No Graduat' : 'Graduat',
    };
    setStudents([...students, newStudent]);

    tipusEstudiant === 'no-graduat'
      ? setPlacesNoGraduats(placesNoGraduats - 1)
      : setPlacesGraduats(placesGraduats - 1);
  };

  const handleRadioChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* Heading for the form */}
      <div>
        <h2 className="mb-4 rounded-md bg-blue-200 px-4 py-2 text-blue-800">
          Formulari d'inscripció d'estudiants
        </h2>
        <div className="flex gap-8">
          <div>
            <div className="tipusEstudiant mb-4 flex items-center">
              <input
                type="radio"
                id="no-graduat"
                name="tipusEstudiant"
                value="no-graduat"
                checked={tipusEstudiant === 'no-graduat'}
                onChange={handleRadioChange}
              />
              <label htmlFor="no-graduat" className="mr-1">
                No Graduat
              </label>
              <input
                type="radio"
                id="graduat"
                name="tipusEstudiant"
                value="graduat"
                checked={tipusEstudiant === 'graduat'}
                onChange={handleRadioChange}
              />
              <label htmlFor="graduat" className="ml-1">
                Graduat
              </label>
            </div>
            {/* Form component */}
            <Form
              tipusEstudiantSelect={tipusEstudiant}
              onFormSubmit={handleFormSubmit}
              placesActuals={
                tipusEstudiant === 'no-graduat'
                  ? placesNoGraduats
                  : placesGraduats
              }
            />
          </div>
        </div>
      </div>
      {/* Student list component */}
      <div className="max-h-80 overflow-auto">
        <StudentList students={students} />
      </div>
    </div>
  );
}

export default App;
