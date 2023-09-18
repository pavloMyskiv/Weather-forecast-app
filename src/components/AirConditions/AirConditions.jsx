import styles from './AirConditions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rounder } from '../../utils/rounder';

export const AirConditions = ({ currentAirCondition }) => {
  return (
    <section className={styles.air_conditions}>
      <h2>Air conditions</h2>
      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <FontAwesomeIcon icon="fa-temperature-half" />
          <h3>Feels like</h3>
          <p>{rounder(currentAirCondition.feels_like)} °C</p>
        </div>
        <div className={styles.grid_item}>
          <FontAwesomeIcon icon="fa-wind" />
          <h3>Wind</h3>
          <p>{rounder(currentAirCondition.wind_speed)} km/h</p>
        </div>
        <div className={styles.grid_item}>
          <FontAwesomeIcon icon="fa-droplet" />
          <h3>Humidity</h3>
          <p>{rounder(currentAirCondition.humidity)} %</p>
        </div>
        <div className={styles.grid_item}>
          <FontAwesomeIcon icon="fa-sun" />
          <h3>UV index</h3>
          <p>{rounder(currentAirCondition.uvi)}</p>
        </div>
      </div>
    </section>
  );
};
