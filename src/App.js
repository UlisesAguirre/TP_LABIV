import React from 'react';
import ToggleHOC from "./Components/Toggle/ToggleHoc"
import ToggleRenderProps from './Components/Toggle/ToggleRenderProp';
import TooltipHOC from "./Components/Tooltip/TooltipHoc"
import TooltipRenderProps from './Components/Tooltip/TooltipRenderProp';

import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <div>
        <h2>High Order Component</h2>
        <h3>Toggle</h3>
        <ToggleHOC>
        </ToggleHOC>

        <h3>Tooltip</h3>
        <TooltipHOC>
          
        </TooltipHOC>
      </div>
      <div>
        <h2>Render Props</h2>
        <h3>Toggle</h3>
        <ToggleRenderProps>
          {(isVisible, toggleVisibility) => (
            <div>
              <p> {isVisible ? 'El mensaje esta visible' : '**************'}</p>
              <button onClick={toggleVisibility}>click!</button>
            </div>
          )}
        </ToggleRenderProps>

        <h3>Tooltip </h3>
        <TooltipRenderProps>
          {isHovered => (
            <div>
              <p>{isHovered ? 'Hola :D' : 'Pasa el mouse sobre esto'}</p>
            </div>
          )}
        </TooltipRenderProps>
      </div>
    </div>
  );
};

export default App;
