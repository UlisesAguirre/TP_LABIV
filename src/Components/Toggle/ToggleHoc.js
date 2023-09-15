import React, { useState } from 'react';
import ToggleComponent from './ToggleComponent';

const withToggle = WrappedComponent => {
  return function ToggleHOC(props) {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
      setIsVisible(prevVisible => !prevVisible);
    };

    return (
      <div>
        <WrappedComponent isVisible={isVisible} {...props} />
        
        <button onClick={toggleVisibility}>click!</button>
      </div>
    );
  };
};

export default withToggle(ToggleComponent);
