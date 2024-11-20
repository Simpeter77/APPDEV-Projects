export default function Troubleshoot(props) {
  function renderTroubleshoot() {
    return (
      <>
        {props.troubleshoot.map((item, index) => (
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
      <h1>Troubleshooting</h1>
      {renderTroubleshoot()}
    </>
  );
}
