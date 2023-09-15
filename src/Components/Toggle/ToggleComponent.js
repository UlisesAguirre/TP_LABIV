import React from 'react';

const ToggleComponent = ({ isVisible }) => {
  return (
    <div>
      <p>{isVisible ?  '**************' : 'El mensaje esta visible' }</p>
    </div>
  );
};

export default ToggleComponent;
