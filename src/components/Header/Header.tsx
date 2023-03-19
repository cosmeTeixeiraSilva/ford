import { Link } from "react-router-dom";
import './style.css'

const Header = () => {

    return (
        <div className="header">
            <h1>SUV Ford Territory 2023 - Venha Conhecer.</h1>
            <ul className="menu">
                <li><Link to="/"><a>Home</a></Link></li>
                <li><Link to="/Video"><a>Video</a></Link></li>
                <li><Link to="/Contato"><a>Contato</a></Link></li>
            </ul>
        </div>
    )

}
export default Header;