import React, { useState } from 'react';
import TooltipComponent from './TooltipComponent';

const withTooltip = WrappedComponent => {
  return function TooltipHOC(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <WrappedComponent isHovered={isHovered} {...props} />
      </div>
    );
  };
};

export default withTooltip(TooltipComponent);

