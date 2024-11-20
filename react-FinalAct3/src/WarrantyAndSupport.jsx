import React from 'react';
export default function WarrantyAndSupport(props) {
  function renderWarranty() {
    return (
      <>
        {props.warranty.map((item, index) => (
          <div key={index}>
            <h2>{item.section}</h2>
            <ul>
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
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
      <h1>Warranty and Support</h1>
      {renderWarranty()}
    </>
  );
}
