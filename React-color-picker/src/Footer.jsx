export default function Footer(){
    // stateless function - no hooks, no function, no states
    return(
        <footer>
            <hr />
            <p>&copy; {new Date().getFullYear()} My color Picker Website || Written by: James Peter Gonzaga</p>
        </footer>
    );
}