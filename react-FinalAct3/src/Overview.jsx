function Overview(props){
    return(
        <div className="overview">
            <img src={props.kbx.img} alt="KBX keyboard"/>
            <h1>{props.kbx.name}</h1> <br />
            <p>{props.kbx.description}</p>
        </div>
    )
}
export default Overview