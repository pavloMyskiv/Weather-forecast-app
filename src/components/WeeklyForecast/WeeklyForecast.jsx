import { rounder } from '../../utils/rounder';
import styles from './WeeklyForecast.module.scss';

export const WeeklyForecast = ({ weekForecast }) => {
  return (
    <div className={styles.weekly_forecast}>
      <h2>Weekly forecast</h2>
      <div className={styles.list}>
        {weekForecast.map((dailyForecast) => {
          const day = new Date(dailyForecast.dt * 1000).toLocaleDateString(
            'en-US',
            { weekday: 'short' }
          );
          const isToday =
            new Date(dailyForecast.dt * 1000).getDate() ===
            new Date().getDate();
          return (
            <div className={styles.list_item}>
              <h3>{isToday ? 'Today' : day}</h3>
              <div className={styles.weather}>
                <img
                  src={`http://openweathermap.org/img/w/${dailyForecast.weather[0].icon}.png`}
                  alt={dailyForecast.weather[0].description}
                />
                <p>{dailyForecast.weather[0].main}</p>
              </div>

              <p>
                {rounder(dailyForecast.temp.max)}/
                <span>{rounder(dailyForecast.temp.min)}</span> °C
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
