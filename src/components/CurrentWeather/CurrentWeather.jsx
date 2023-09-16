import styles from './CurrentWeather.module.scss';

export const CurrentWeather = ({ cityName, currentWeather }) => {
  return (
    <section className={styles.current_weather}>
      <h2>{cityName}</h2>
      <p className={styles.condition}>{currentWeather.weather[0].main}</p>
      <img
        className={styles.image}
        src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
        alt={currentWeather.weather[0].description}
      />
      <p className={styles.temp}>{currentWeather.temp}°C</p>
    </section>
  );
};
