import React from 'react';

export default function Maintenance(props) {
  function renderMaintenance() {
    return (
      <>
        {props.maintenance.map((item, index) => (
          <div key={index}>
            <h2>{item.section}</h2>
            <ul>
              {item.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
    <img src={props.kbx.img} alt="KBX keyboard"/>
      <h1>Maintenance and Care</h1>
      {renderMaintenance()}
    </>
  );
}
