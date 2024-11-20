import React from 'react';
import PropTypes from 'prop-types';

export default function SetupInstructions(props) {
  function renderInstructions() {
    return props.instructions.map((section, index) => (
      <div key={index}>
        <h2>{section.section}</h2>
        <ol>
          {section.steps.map((step, stepIndex) => (
            <li key={stepIndex}>{step}</li>
          ))}
        </ol>
      </div>
    ));
  }

  return (
    <div className="setup-instructions">
      <h1>Setup Instructions</h1>
      {renderInstructions()}
    </div>
  );
}

SetupInstructions.propTypes = {
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      section: PropTypes.string.isRequired,
      steps: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};
