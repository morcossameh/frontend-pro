import { useState } from "react";
import { initialPosts } from "../../data/posts";
import styles from "./CenterContent.module.css";
import Post from "../Post/Post";
import PostCreation from "../PostCreation/PostCreation";

function CenterContent() {
  const [posts, setPosts] = useState(initialPosts);

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <section className={styles.centerContent}>
      <PostCreation onCreatePost={handleCreatePost} />

      <div className={styles.sortSection}>
        <span>Sort by:</span>
        <select className={styles.sortDropdown}>
          <option>Top</option>
          <option>Recent</option>
        </select>
      </div>

      <section className={styles.postsContainer}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
}

export default CenterContent;
