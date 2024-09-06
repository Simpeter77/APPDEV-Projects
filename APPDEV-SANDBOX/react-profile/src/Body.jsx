import PropTypes from 'prop-types';

export default function Body(props) {
    return (
        <div>
            <div className="container">
                <div className="images">
                    <img className="bg-photo" src="https://wallpapercave.com/wp/wp4663852.jpg" alt="" /><br />
                    <img className="profile-pic" src="https://i0.wp.com/short-biography.com/wp-content/uploads/dwayne-johnson-the-rock/Dwayne-Johnson.jpg?fit=2048%2C2048&ssl=1" alt="profile picture" />
                </div>
                <h1>Name: {props.name}</h1>
                <h1>"{props.quoute}"</h1>
                <h2>Birthday: {props.dob}</h2>
                <h2>Age: {props.age}</h2>
                <h3>Program: {props.program}</h3>
                <h3>Status: {props.isEnrolled ? "Officially Enrolled" : "Dropped"}</h3>
            </div>
            <hr />
            <div class="hobby">
            <h3>What I like to do:</h3>
                <li><h3>Running</h3></li>
                <li><h3>Table Tennis</h3></li>
                <li><h3>Basketball</h3></li>
                <li><h3>Gaming</h3></li>
                <li><h3>Soccer</h3></li>
            <br />
            <br />
            <br />
            <br />
            </div>
        </div>
    );
}

Body.propTypes = {
    name: PropTypes.string,
    quoute: PropTypes.string,
    dob: PropTypes.string,
    age: PropTypes.number,
    program: PropTypes,
    isEnrolled: PropTypes.bool,
};