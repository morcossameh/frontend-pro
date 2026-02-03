import styles from "./header.module.css";

function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <span className={`fab fa-linkedin ${styles.faLinkedin}`}></span>
        <div className={styles.searchContainer}>
          <span className="fas fa-search"></span>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>

        <nav className={styles.headerNav}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>
            <span className="fas fa-home"></span>
            <span>Home</span>
          </a>
          <a href="#" className={styles.navItem}>
            <span className="fas fa-user-friends"></span>
            <span>My Network</span>
          </a>
          <a href="#" className={styles.navItem}>
            <span className="fas fa-briefcase"></span>
            <span>Jobs</span>
          </a>
          <a href="#" className={styles.navItem}>
            <span className="fas fa-comment-dots"></span>
            <span>Messaging</span>
          </a>
          <a href="#" className={styles.navItem}>
            <span className="fas fa-bell"></span>
            <span>Notifications</span>
            <span className={styles.notificationBadge}>1</span>
          </a>
          <a href="#" className={styles.navItem}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Profile"
              className='profile-pic-small'
            />
            <span>
              Me <span className="fas fa-caret-down"></span>
            </span>
          </a>
          <div className={styles.navDivider}></div>
          <a href="#" className={styles.navItem}>
            <span className="fas fa-th"></span>
            <span>
              For Business <span className="fas fa-caret-down"></span>
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
