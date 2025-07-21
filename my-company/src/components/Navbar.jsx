import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '0', margin: '0' }}>
        <h1> Test</h1>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>about</Link></li>
            <li><Link to={"/services"}>services</Link></li>
            <li><Link to={"/contact"}>contact</Link></li>
            
        </ul>
    </nav>
  );
}

export default Navbar;