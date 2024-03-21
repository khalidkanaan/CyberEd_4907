import React from 'react';
import Module from '../../pages/ModulePage'
import Slide1 from '../SafeBrowsing/slides/Slide1';

function SafeBrowsing() {
    return (
      <Module backLink="/" nextLink="/">
        <div id="slide">
          <Slide1 />
        </div>
      </Module>
    );
  }
  
  export default SafeBrowsing;