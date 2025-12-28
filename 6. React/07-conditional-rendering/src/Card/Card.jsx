import styles from './Card.module.css'
import PropTypes from "prop-types";

function Card({image, country, yearBuilt, stillExists}) {

  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={image}
      />
      <div className={styles.cardContent}>
        {country && <p>Country: {country}</p>}
        {yearBuilt && <p>Year Built: {yearBuilt}</p>}
        <p>Still Exists: {stillExists ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default Card;


Card.propTypes = {
  image: PropTypes.string.isRequired,
  country: PropTypes.string,
  yearBuilt: PropTypes.number,
  stillExists: PropTypes.bool
}

