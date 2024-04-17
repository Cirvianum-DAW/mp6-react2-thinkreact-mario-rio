import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState('no-graduat');
  const [placesNoGraduats, setPlacesNoGraduats] = useState(60); // Places per a No-Graduats
  const [placesGraduats, setPlacesGraduats] = useState(40); // Places per a Graduats

  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  const handleFormSubmit = () => {
    tipusEstudiant === 'no-graduat'
      ? setPlacesNoGraduats(placesNoGraduats - 1)
      : setPlacesGraduats(placesGraduats - 1);
  };

  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === 'no-graduat'
      ? setPlacesNoGraduats(updatedPlaces)
      : setPlacesGraduats(updatedPlaces);
  };

  const handleRadioChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  const placesTotalsDisponibles = placesNoGraduats + placesGraduats;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <h2 className="rounded-md bg-blue-200 px-4 py-2 text-blue-800">
        Formulari d'inscripció d'estudiants
      </h2>
      <div className="tipusEstudiant flex items-center">
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
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        onFormSubmit={handleFormSubmit}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={
          tipusEstudiant === 'no-graduat' ? placesNoGraduats : placesGraduats
        }
      />
      <p>Places restants per a No-Graduats: {placesNoGraduats}</p>
      <p>Places restants per a Graduats: {placesGraduats}</p>
      <p>Places totals disponibles: {placesTotalsDisponibles}</p>
    </div>
  );
}

export default App;
