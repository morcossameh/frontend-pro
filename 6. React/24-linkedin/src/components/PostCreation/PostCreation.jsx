import { useState } from "react";
import styles from "./PostCreation.module.css";
import { currentUser } from "../../data/posts";

function PostCreation({ onCreatePost }) {
  const [postContent, setPostContent] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const content = postContent.trim();
      if (content === "") return;

      const newPost = {
        id: Date.now(),
        person: currentUser,
        content: content,
        reactions: [],
        date: new Date().toISOString().split("T")[0],
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        comments: {
          numberOfComments: 0,
        },
        reposts: 0,
      };

      onCreatePost(newPost);
      setPostContent("");
    }
  };

  return (
    <div className={styles.postCreation}>
      <div className={styles.postInputSection}>
        <img
          src={currentUser.profilePicture}
          alt="Profile"
          className="profile-pic-small"
        />
        <input
          type="text"
          placeholder="Start a post"
          className={styles.postInput}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className={styles.postOptions}>
        <button className={styles.postOption}>
          <span className="fas fa-video"></span>
          <span>Video</span>
        </button>
        <button className={styles.postOption}>
          <span className="fas fa-image"></span>
          <span>Photo</span>
        </button>
        <button className={styles.postOption}>
          <span className="fas fa-newspaper"></span>
          <span>Write article</span>
        </button>
      </div>
    </div>
  );
}

export default PostCreation;
