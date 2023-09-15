import React from 'react';

const TooltipComponent = ({ isHovered }) => {
  return (
    <div>
      <p>{isHovered ? 'Hola :D' : 'Pasa el mouse sobre esto'}</p>
    </div>
  );
};

export default TooltipComponent;
