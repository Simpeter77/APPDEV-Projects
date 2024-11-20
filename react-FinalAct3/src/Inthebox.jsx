import React from 'react';
export default function InTheBox(props) {
  function renderItems() {
    return props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }

  return (
    <div className="in-the-box">
    <img src={props.kbx.img} alt="KBX keyboard"/>
      <h1>In the Box</h1>
      <ul>
        {renderItems()}
      </ul>
    </div>
  );
}