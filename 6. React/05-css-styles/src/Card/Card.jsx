import styles from './Card.module.css'

function Card() {
  const cardStyle = {
    borderRadius: '20px',
    backgroundColor: '#fff',
    width: '300px',
    minHeight: '400px',
    margin: '20px',
    overflow: 'hidden',
    display: 'inline-block',
  }

  return (
    <div style={cardStyle}>
      <img
        className={styles.cardImage}
        src="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
      />
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitle}>Beatiful Nature</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          accusamus odit ratione perferendis ab iusto sint corporis deleniti
          repudiandae, facere beatae voluptatum suscipit rerum at error illo
          nostrum nobis praesentium.
        </p>
      </div>
    </div>
  );
}

export default Card;
