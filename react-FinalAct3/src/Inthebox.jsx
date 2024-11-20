import React from 'react';


export default function InTheBox(props) {
  function renderItems() {
    return props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }

  return (
    <div className="in-the-box">
      <h1>In the Box</h1>
      <ul>
        {renderItems()}
      </ul>
    </div>
  );
}