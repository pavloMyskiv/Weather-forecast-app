import styles from './DailyForecast.module.scss';
import { rounder } from '../../utils/rounder';

export const DailyForecast = ({ todayForecast }) => {
  return (
    <section className={styles.daily_forecast}>
      <h3>Daily forecast</h3>
      <div className={styles.list_container}>
        <div className={styles.list}>
          {todayForecast.slice(0, 24).map((hourForecast) => {
            const hour = new Date(hourForecast.dt * 1000).getHours();
            return (
              <div className={styles.list_item} key={hourForecast.dt}>
                <h3>{`${hour}:00`}</h3>
                <img
                  src={`http://openweathermap.org/img/w/${hourForecast.weather[0].icon}.png`}
                  alt={hourForecast.weather[0].description}
                />
                <p>{rounder(hourForecast.temp)} °C</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
