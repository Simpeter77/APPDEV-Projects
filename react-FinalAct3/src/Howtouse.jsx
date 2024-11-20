export default function Howtouse(props){
    function renderHow(){
        return(
            <>
            {props.how.map((item)=>(
                <div className="">
                    <h2>{item.section}</h2>
                    <ul>
                        {item.steps.map((step) =>(
                            <li>{step}</li>
                        ))}
                    </ul>
                </div>
            ))}
            </>
        )
    }
    return(
        <>
        <h1>How to Use</h1>
        {renderHow()}   
        </>
    )
}