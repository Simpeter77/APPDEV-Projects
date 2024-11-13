export default function FavoriteFood(props){
    const fruits = props.item
    const list = props.item.map((item) => (
        <>
        <li key={item.id}>Fruit: {item.name}, Color: {item.color}, Rating: {item.rating}</li>
        </>
    ))
    return(
        <>
        <h2>My favorite {props.type}</h2>
        <ul>{list}</ul>
        </>
    )
}