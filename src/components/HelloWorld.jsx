import React from 'react';

// Functional component for rendering a button that alerts 'Hello World!' on click
function HelloWorld() {
  // Function to handle button click event
  const handleClick = () => {
    alert('Hello World!'); // Display alert message when button is clicked
  };

  // JSX structure for the component
  return (
    <div className="App">
      {/* Button element with onClick event listener */}
      <button onClick={handleClick}>React</button>
    </div>
  );
}

// Export the component for use in other parts of the application
export default HelloWorld;
