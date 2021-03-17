import {Link} from 'react-router-dom';

function Header() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">O nas</Link></li>
                <li><Link to="/school">O šoli</Link></li>
            </ul>            
        </nav>
    );
}

export default Header;