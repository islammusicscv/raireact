import {Link} from 'react-router-dom';

function About() {
    return(
        <div className="about">
            <h4>Moje ime je Islam</h4>
            <h3>VSŠ je najjača šola!</h3>
            <Link to="/">Nazaj</Link>
        </div>
    );
}

export default About;