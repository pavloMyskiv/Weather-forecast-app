import styles from './WeeklyForecast.module.scss';

export const WeeklyForecast = ({ weekForecast }) => {
  return (
    <div className={styles.weekly_forecast}>
      <h3>Weekly forecast</h3>
      <div className={styles.list}>
        {weekForecast.map((dailyForecast) => {
          const day = new Date(dailyForecast.dt * 1000).toLocaleDateString(
            'en-US',
            { weekday: 'short' }
          );
          return (
            <div className={styles.list_item}>
              <p>
                {new Date(dailyForecast.dt * 1000).getDate() ===
                new Date().getDate()
                  ? 'Today'
                  : day}
              </p>
              <div className={styles.weather}>
                <img
                  src={`http://openweathermap.org/img/w/${dailyForecast.weather[0].icon}.png`}
                  alt={dailyForecast.weather[0].description}
                />
                <p>{dailyForecast.weather[0].main}</p>
              </div>

              <p>
                {Math.round(dailyForecast.temp.max)}/<span>{Math.round(dailyForecast.temp.min)}</span> °C
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
