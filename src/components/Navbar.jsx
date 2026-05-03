import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>VS</div>
      <div className={styles.links}>
        <a href="#home">Home</a>
        <a href="#works">Works</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#discover" className={styles.discover}>Discover more ↗</a>
      </div>
    </nav>
  );
};

export default Navbar;
