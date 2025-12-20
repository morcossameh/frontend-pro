import styles from './Card.module.css'
import PropTypes from "prop-types";

function Card({image, country = "Unknown", yearBuilt, stillExists}) {

  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={image}
      />
      <div className={styles.cardContent}>
        <p>Country: {country}</p>
        <p>Year Built: {yearBuilt}</p>
        <p>Still Exists: {stillExists ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default Card;


Card.propTypes = {
  image: PropTypes.string.isRequired,
  country: PropTypes.string,
  yearBuilt: PropTypes.number.isRequired,
  stillExists: PropTypes.bool
}

