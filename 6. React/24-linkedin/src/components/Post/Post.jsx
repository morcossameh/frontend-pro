import { getDateString } from "../../utils/dateUtils";
import styles from "./Post.module.css";

function Post({ post }) {
  const totalReactions = post.reactions.reduce(
    (acc, curr) => acc + curr.count,
    0
  );

  const hasStats =
    post.comments.numberOfComments > 0 ||
    post.reposts > 0 ||
    post.reactions.length > 0;

  let commentsRepostsStr = "";
  if (post.comments.numberOfComments > 0) {
    commentsRepostsStr += `${post.comments.numberOfComments} comments`;
  }
  if (post.comments.numberOfComments > 0 && post.reposts > 0) {
    commentsRepostsStr += " • ";
  }
  if (post.reposts > 0) {
    commentsRepostsStr += `${post.reposts} reposts`;
  }

  return (
    <article className={styles.post}>
      <div className={styles.postHeader}>
        <img
          src={post.person.profilePicture}
          alt={post.person.name}
          className='profile-pic-small'
        />
        <div className={styles.postAuthorInfo}>
          <h3>{post.person.name}</h3>
          <p>{post.person.title}</p>
          <p className={styles.postTime}>{getDateString(post.date, post.time)}</p>
        </div>
        <div className={styles.postMenu}>
          <span className="fas fa-ellipsis-h"></span>
          <span className="fas fa-times"></span>
        </div>
      </div>

      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className={styles.postEngagement}>
        {hasStats && (
          <div className={styles.engagementStats}>
            <div className="reaction-count">
              {post.reactions.map((reaction, index) => (
                <span key={index} className={`fas fa-${reaction.type}`}></span>
              ))}
              {totalReactions > 0 && <span>{totalReactions}</span>}
            </div>
            <div className={styles.commentCount}>{commentsRepostsStr}</div>
          </div>
        )}

        <div className={`${styles.engagementActions} ${!hasStats ? styles.noStats : ""}`}>
          <button className={styles.engagementBtn}>
            <span className="fas fa-thumbs-up"></span>
            <span>Like</span>
          </button>
          <button className={styles.engagementBtn}>
            <span className="fas fa-comment"></span>
            <span>Comment</span>
          </button>
          <button className={styles.engagementBtn}>
            <span className="fas fa-share"></span>
            <span>Repost</span>
          </button>
          <button className={styles.engagementBtn}>
            <span className="fas fa-paper-plane"></span>
            <span>Send</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default Post;
