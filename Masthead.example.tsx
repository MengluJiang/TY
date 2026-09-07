import React from 'react';
import Masthead from './Masthead';

// Example usage of the Masthead component based on Figma design
export default function MastheadExample() {
  return (
    <div>
      {/* Default Masthead as specified in Figma */}
      <Masthead 
        overflowMenu={true} 
        hamburger={false} 
        status={false} 
        notification={false} 
        navigationButtons={true} 
        utilityIcons={true} 
        screenSize="Large" 
        darkMode={false} 
      />
      
      {/* Alternative configurations */}
      <Masthead 
        screenSize="Medium"
        navigationButtons={false}
      />
      
      <Masthead 
        screenSize="Small"
        status={true}
        notification={true}
      />
    </div>
  );
}