import React from 'react';

function Specification(props) {
  return (
    <div className='specification'>
    <h1>Specifications</h1>
    <br />
      <ul>
        <li><strong>Switch Type:</strong> {props.kbx.switchType}</li>
        <li><strong>Key Layout:</strong> {props.kbx.keyLayout}</li>
        <li><strong>Backlighting:</strong> {props.kbx.backlighting}</li>
        <li><strong>Connectivity:</strong> {props.kbx.connectivity}</li>
        <li><strong>Dimensions:</strong> {props.kbx.dimensions}</li>
        <li><strong>Weight:</strong> {props.kbx.weight}</li>
        <li><strong>Cable Length:</strong> {props.kbx.cableLength}</li>
        <li><strong>Additional Features:</strong> {props.kbx.additionalFeatures}</li>
      </ul>
    </div>
    
  );
}

export default Specification;
