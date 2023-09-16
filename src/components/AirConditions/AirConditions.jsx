import styles from './AirConditions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AirConditions = ({ currentAirCondition }) => {
  return (
    <section className={styles.air_conditions}>
      <h3>Air conditions</h3>
      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <FontAwesomeIcon icon="fa-temperature-half" />
          <h4>Feels like</h4>
          <p>{currentAirCondition.feels_like} °C</p>
        </div>
        <div className={styles.grid_item}>
          <FontAwesomeIcon icon="fa-wind" />
          <h4>Wind</h4>
          <p>{currentAirCondition.wind_speed} km/h</p>
        </div>
        <div className={styles.grid_item}>
          <FontAwesomeIcon icon="fa-droplet" />
          <h4>Humidity</h4>
          <p>{currentAirCondition.humidity} %</p>
        </div>
        <div className={styles.grid_item}>
          <FontAwesomeIcon icon="fa-sun" />
          <h4>UV index</h4>
          <p>{currentAirCondition.uvi}</p>
        </div>
      </div>
    </section>
  );
};
