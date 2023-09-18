import styles from './CurrentWeather.module.scss';
import { rounder } from '../../utils/rounder';

export const CurrentWeather = ({ cityName, currentWeather }) => {
  return (
    <section className={styles.current_weather}>
      <h1>{cityName}</h1>
      <p className={styles.condition}>{currentWeather.weather[0].main}</p>
      <img
        src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
        alt={currentWeather.weather[0].description}
      />
      <p className={styles.temp}>{rounder(currentWeather.temp)} °C</p>
    </section>
  );
};
