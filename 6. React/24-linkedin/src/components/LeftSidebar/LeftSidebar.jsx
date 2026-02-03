import styles from "./LeftSidebar.module.css";

function LeftSidebar() {
  return (
    <aside className={styles.leftSidebar}>
      <div className={styles.profileCard}>
        <div className={styles.profileBanner}></div>
        <div className={styles.profileInfo}>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Profile"
            className={styles.profilePic}
          />
          <h2>John Doe</h2>
          <p>Software Engineer at Meta</p>
          <p className={styles.location}>California, United States</p>
          <div className={styles.companyInfo}>
            <span className="fas fa-building"></span>
            <span>Meta</span>
          </div>
        </div>
        <div className={styles.sidebarMenu}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Profile viewers</span>
            <span className={styles.statNumber}>51</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Post impressions</span>
            <span className={styles.statNumber}>16</span>
          </div>
        </div>
        <div className={styles.sidebarMenu}>
          <p>Access exclusive tools & insights</p>
          <div className={styles.premiumLinkSection}>
            <span className={`fas fa-square ${styles.premiumIcon}`}></span>
            <span>Retry Premium for EGP0</span>
          </div>
        </div>
        <div className={styles.sidebarMenu}>
          <a className={styles.menuItem}>
            <span className="fas fa-bookmark"></span>
            <span>Saved items</span>
          </a>
          <div className={styles.menuItem}>
            <span className={`fas fa-users ${styles.menuItemIcon}`}></span>
            <span>Groups</span>
          </div>
          <div className={styles.menuItem}>
            <span className="fas fa-newspaper"></span>
            <span>Newsletters</span>
          </div>
          <div className={styles.menuItem}>
            <span className="fas fa-calendar"></span>
            <span>Events</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default LeftSidebar;
