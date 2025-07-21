import { Link } from "react-router-dom"

// Style objects
const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '1rem 0',
    margin: '0'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  logo: {
    color: '#fff',
    margin: '0'
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    gap: '2rem'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 1rem'
  }
};

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <h1 style={styles.logo}>My Company</h1>
        <ul style={styles.navList}>
          <li><Link to={"/"} style={styles.navLink}>Home</Link></li>
          <li><Link to={"/about"} style={styles.navLink}>About</Link></li>
          <li><Link to={"/services"} style={styles.navLink}>Services</Link></li>
          <li><Link to={"/contact"} style={styles.navLink}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;