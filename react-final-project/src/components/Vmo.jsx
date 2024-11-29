import React from "react";
export default function Vmo(props){
    function renderVMO() {
        return (
            <>
                {props.item.map((vmo) => (
                    <div key={vmo.id}>
                        <li className="vmo-header">{vmo.name}</li>
                        <ul>
                            {vmo.description.map((desc, index) => (
                                <li key={index}>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </>
        );
    }
    return(
        <>
            <div className="vmo-container">
                {renderVMO()}
            </div>
        </>
    )
}