import React, { useState } from 'react';

const ToggleRenderProps = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevVisible => !prevVisible);
  };

  return children(isVisible, toggleVisibility);
};

export default ToggleRenderProps;
