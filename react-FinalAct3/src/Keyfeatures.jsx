export default function Keyfeatures(props){
    function renderFeatures(){
        return(
            <>
            {props.features.map((item,index) =>(
                <>
                <li key={index}>{item}</li>
                </>
            ))}
            </>
        )
    }
    return(
        <div className="key-features">
            <h1>Key Features</h1>
            <ul>
                {renderFeatures()}
            </ul>
        </div>
    )
}