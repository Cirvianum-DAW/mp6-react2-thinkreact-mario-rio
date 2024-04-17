import React, { useState } from "react"; // Importem React i useState de la llibreria 'react'
import PropTypes from "prop-types"; // Importem PropTypes per a la validació de les props

// Definim un component funcional anomenat Form
function Form(props) {
  // Definim l'estat local per a firstName, lastName i welcomeMessage
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  // Definim una funció handleSubmit que s'executa quan es fa submit al formulari
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitem que la pàgina es recarregui
    setWelcomeMessage(`Benvingut, ${firstName} ${lastName}`); // Actualitzem el missatge de benvinguda
    props.onFormSubmit(); // Cridem la funció onFormSubmit passada com a prop
    props.setPlacesDisponibles(props.placesActuals - 1); // Actualitzem les places disponibles
  };

  // Determinem el títol del formulari basat en el valor de tipusEstudiantSelect
  let formTitle = "";
  if (props.tipusEstudiantSelect === "no-graduat") {
    formTitle = "Detalls d'estudiant no graduat";
  } else if (props.tipusEstudiantSelect === "graduat") {
    formTitle = "Detalls d'estudiant graduat";
  }

  // Retornem el JSX del component
  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto"
        onSubmit={handleSubmit} // Assignem la funció handleSubmit com a gestor d'events de submit
      >
        <h1 className="text-2xl font-bold mb-4">{formTitle}</h1>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nom:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="fname"
          onChange={(e) => setFirstName(e.target.value)} // Actualitzem l'estat de firstName quan l'usuari escriu
        />
        <br />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cognom:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="lname"
          onChange={(e) => setLastName(e.target.value)} // Actualitzem l'estat de lastName quan l'usuari escriu
        />
        <br />
        <br />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          type="submit"
          value="Submit"
        />
        <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
          {welcomeMessage}
        </label>
      </form>
      <p>Places restants: {props.placesActuals}</p>
    </div>
  );
}

// Definim les propTypes per a la validació de les props
Form.propTypes = {
  tipusEstudiantSelect: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  setPlacesDisponibles: PropTypes.func.isRequired,
  placesActuals: PropTypes.number.isRequired,
};

export default Form;
