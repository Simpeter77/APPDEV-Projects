import React from "react";

export default function About(props) {
    function renderVMO() {
        return (
           <>
            {props.item.map((vmo) => (
                <>
                <li key = {vmo.id}>{vmo.name}</li>
                <ol>
                {vmo.description.map((desc,index) => (
                            <li key={index}>{desc}</li>
                    ))}
                </ol>  
                </>
            ))}
           </>
        );
    }

    return (
        <>
            <div className="vmo-container">
                {renderVMO()}
            </div>
        </>
    );
}
