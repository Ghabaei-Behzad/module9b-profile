// Behzad Ghabaei 
// CS 81 - JavaScript
// Assignment 9B - UserProfile.jsx
// Instructor Seno
// Feb 6 2026

/*
* This version of our program has a toggle mode available
* that allows a dark back ground or white back ground with a button click
* First we import React and useState as the hook for our program.
*/
import React, { useState } from 'react';

/* 
*
* The properties (props) are declased here in a destructured array.
* for useState(false) we know they are for [initializing, and a setter].
* another wat to write this 
* is: function UserProfile(props) {
       const ...
      return (
      <div style={cardStyle}>
      </div>
        );
       }

*/

  const UserProfile = (props) => {
  // 1. State to track if dark mode is active
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Define style variables based on the current mode
  // all of these are done with ternary operations. hex #333333 is dark
  // and hex #ffffff is white.
  const theme = {
    backgroundColor: isDarkMode ? '#2c3e50' : '#ffffff',
    color: isDarkMode ? '#ecf0f1' : '#333333',
    cardBorder: isDarkMode ? '1px solid #444' : '1px solid #ddd',
    subTextColor: isDarkMode ? '#bdc3c7' : '#666666',
    buttonBg: isDarkMode ? '#f1c40f' : '#34495e',
    buttonText: isDarkMode ? '#2c3e50' : '#ffffff',
  };
// These css statements style the card. They are mostly self explanatory.
  const cardStyle = {
    border: theme.cardBorder,
    borderRadius: '15px',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: theme.backgroundColor, // Dynamic
    color: theme.color, // Dynamic
    transition: '0.3s ease' // Smooth color transition
  };
  
  // These css statements style the button. 
  // The emoji changes, the text color, and back ground color, must change with each click.
  // theme has been declared as "const theme" above.
  
  const buttonStyle = {
    marginTop: '15px',
    padding: '8px 16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: theme.buttonBg,
    color: theme.buttonText,
    fontWeight: 'bold'
  };

    /*  
    * This is where the props are located. Wrapped in <div>. The style will be 
    * cardStyle. Next <img> tag has an OR statement if true displays an emoji.
    * objectFit: 'cover' maintains a fit for a round portrait.
    * functionality is returned. Next <h2> is displayed with an OR statement. "Alex Doe"
    * is the second imaginary character. Next <p> is underneith, the short bio description.
    * Finally the <button> toggles light or dark mode in the function setIsDarkMode().
    * It uses a ternary operator. If isDrakMode() is true then display 'light mode'
    */
  return (
    <div style={cardStyle}>
      <img 
        src={props.image || "data:image/jpeg;base64,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"}  
        alt="Profile" 
        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h2>{props.name || "Alex Doe"}</h2>
      <p style={{ color: theme.subTextColor }}>{props.bio || "Frontend Developer"}</p>
      
      {/* 3. Button to toggle state */}
      <button style={buttonStyle} onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

// export default makes a component available for import.
export default UserProfile;









