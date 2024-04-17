import React, { useState } from "react"; // Importem React i la funció useState per a gestionar l'estat
import Form from "./components/Form"; // Importem el component Form

function App() {
  // Definim l'estat inicial de l'aplicació
  const [tipusEstudiant, setTipusEstudiant] = useState("no-graduat"); // Establim el tipus d'estudiant per defecte com a "no-graduat"
  const [placesNoGraduats, setPlacesNoGraduats] = useState(60); // Establim el nombre de places per a no graduats
  const [placesGraduats, setPlacesGraduats] = useState(40); // Establim el nombre de places per a graduats

  // Funció que s'executa quan es canvia el valor del selector de tipus d'estudiant
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value); // Actualitzem el tipus d'estudiant amb el valor seleccionat
  };

  // Funció que s'executa quan es fa submit al formulari
  const handleFormSubmit = () => {
    // Si l'estudiant és "no-graduat", disminuïm en 1 el nombre de places per a no graduats
    // Si no, disminuïm en 1 el nombre de places per a graduats
    tipusEstudiant === "no-graduat"
      ? setPlacesNoGraduats(placesNoGraduats - 1)
      : setPlacesGraduats(placesGraduats - 1);
  };

  // Funció per a actualitzar el nombre de places disponibles
  const setPlacesDisponibles = (updatedPlaces) => {
    // Si l'estudiant és "no-graduat", actualitzem el nombre de places per a no graduats
    // Si no, actualitzem el nombre de places per a graduats
    tipusEstudiant === "no-graduat"
      ? setPlacesNoGraduats(updatedPlaces)
      : setPlacesGraduats(updatedPlaces);
  };

  // Calculem el nombre total de places disponibles
  const placesTotalsDisponibles = placesNoGraduats + placesGraduats;

  // Renderitzem l'aplicació
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">
        <label className="mr-2">Selecciona Tipus d'Estudiant:</label>
        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="no-graduat">No Graduat</option>
          <option value="graduat">Graduat</option>
        </select>
      </div>
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        onFormSubmit={handleFormSubmit}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={
          tipusEstudiant === "no-graduat" ? placesNoGraduats : placesGraduats
        }
      />
      <p>Places restants per a No-Graduats: {placesNoGraduats}</p>
      <p>Places restants per a Graduats: {placesGraduats}</p>
      <p>Places totals disponibles: {placesTotalsDisponibles}</p>
    </div>
  );
}

export default App;
