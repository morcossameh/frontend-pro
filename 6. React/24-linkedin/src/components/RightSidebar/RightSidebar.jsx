import styles from "./RightSidebar.module.css";

function RightSidebar() {
  const suggestions = [
    {
      name: "Irina Stanescu",
      badge: true,
      description:
        "Engineering Leader • High Performance Coach in Tech • Ex-...",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Mohamed Hammad",
      badge: false,
      description: "Chief Software Architect at Softec International",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "GitHub",
      badge: false,
      description: "Company • Software Development",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
  ];

  return (
    <aside className={styles.rightSidebar}>
      {/* Today's Puzzle */}
      <div className={styles.widget}>
        <h3>Today's puzzle</h3>
        <div className={styles.puzzleContent}>
          <div className={styles.puzzleIcon}>
            <span className="fas fa-puzzle-piece"></span>
          </div>
          <div className={styles.puzzleInfo}>
            <h4>Zip - a quick brain teaser</h4>
            <p>Solve in 60s or less!</p>
            <p className={styles.puzzleStats}>27 connections played</p>
          </div>
          <span className="fas fa-chevron-right"></span>
        </div>
      </div>

      {/* Add to your feed */}
      <div className={styles.widget}>
        <div className={styles.widgetHeader}>
          <h3>Add to your feed</h3>
          <span className="fas fa-info-circle"></span>
        </div>

        {suggestions.map((suggestion, index) => (
          <div key={index} className={styles.suggestionItem}>
            <img
              src={suggestion.image}
              alt={suggestion.name}
              className='profile-pic-small'
            />
            <div className={styles.suggestionInfo}>
              <h4>
                {suggestion.name}
              </h4>
              <p>{suggestion.description}</p>
              <button className={styles.followBtn}>
                <span className="fas fa-plus"></span>
                Follow
              </button>
            </div>
          </div>
        ))}

        <a href="#" className={styles.viewAllLink}>
          View all recommendations →
        </a>
      </div>

      {/* Ad Section */}
      <div className={`${styles.widget} ${styles.adWidget}`}>
        <div className={styles.adHeader}>
          <span>Ad</span>
          <span className="fas fa-ellipsis-h"></span>
        </div>
        <p>Target those who matter most to your business on LinkedIn Ads</p>
        <div className={styles.adImage}>
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop"
            alt="LinkedIn Ad"
          />
        </div>
        <p className={styles.adDescription}>
          Reach your ideal companies and key decision makers
        </p>
        <button className={styles.startNowBtn}>Start now</button>
      </div>
    </aside>
  );
}

export default RightSidebar;
