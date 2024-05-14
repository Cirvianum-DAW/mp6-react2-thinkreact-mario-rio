import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  // State variables for form inputs and welcome message
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onFormSubmit function with form data
    props.onFormSubmit(firstName, lastName, email);
    // Update welcome message
    setWelcomeMessage(`Benvingut, ${firstName} ${lastName}`);
    // Update available places
    props.setPlacesDisponibles(props.placesActuals - 1);
    // Clear form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  // Determine form title based on selected student type
  let formTitle = '';
  if (props.tipusEstudiantSelect === 'no-graduat') {
    formTitle = "Detalls d'estudiant no graduat";
  } else if (props.tipusEstudiantSelect === 'graduat') {
    formTitle = "Detalls d'estudiant graduat";
  }

  return (
    <div>
      <form
        className="mx-auto mb-4 max-w-md rounded bg-white px-8 pb-8 pt-6 shadow-md"
        onSubmit={handleSubmit}
      >
        {/* Form title */}
        <h1 className="mb-4 text-2xl font-bold">{formTitle}</h1>
        {/* First name input */}
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Nom:
        </label>
        <input
          className="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          name="fname"
          value={firstName} // Controlled component: value is set to firstName state
          onChange={(e) => setFirstName(e.target.value)} // Update firstName state on change
        />
        {/* Last name input */}
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Cognom:
        </label>
        <input
          className="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          name="lname"
          value={lastName} // Controlled component: value is set to lastName state
          onChange={(e) => setLastName(e.target.value)} // Update lastName state on change
        />
        {/* Email input */}
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Email:
        </label>
        <input
          className="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="email"
          name="email"
          value={email} // Controlled component: value is set to email state
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
        />
        {/* Submit button */}
        <input
          className="focus:shadow-outline mb-4 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
          value="Submit"
        />
        {/* Welcome message */}
        <label className="block w-full p-2 text-4xl" id="studentMsg">
          {welcomeMessage}
        </label>
        {/* Display available places based on selected student type */}
        {props.tipusEstudiantSelect === 'no-graduat' && (
          <p>
            Places disponibles per a <b>No Graduats: {props.placesActuals}</b>
          </p>
        )}
        {props.tipusEstudiantSelect === 'graduat' && (
          <p>
            Places disponibles per a <b>Graduats: {props.placesActuals}</b>
          </p>
        )}
      </form>
    </div>
  );
}

// PropTypes for type checking
Form.propTypes = {
  tipusEstudiantSelect: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  setPlacesDisponibles: PropTypes.func.isRequired,
  placesActuals: PropTypes.number.isRequired,
};

export default Form;
