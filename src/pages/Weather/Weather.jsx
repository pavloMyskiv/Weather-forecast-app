import React from 'react';
import CurrentWeather from '../../components/CurrentWeather';
import DailyForecast from '../../components/DailyFofecast';
import { useGetWeatherQuery } from '../../store/API/weatherAPI';
import styles from './Weather.module.scss';
import AirConditions from '../../components/AirConditions';
import WeeklyForecast from '../../components/WeeklyForecast';

export const Weather = ({ cityData }) => {
  const currentCityData = cityData[0];
  const { data: cityWeatherData = [], isLoading } = useGetWeatherQuery({
    lat: currentCityData.lat,
    lon: currentCityData.lon,
  });
  console.log(cityWeatherData);

  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div className={styles.weather}>
      <main>
        <CurrentWeather
          cityName={currentCityData.name}
          currentWeather={cityWeatherData.current}
        />
        <DailyForecast todayForecast={cityWeatherData.hourly} />
        <AirConditions currentAirCondition={cityWeatherData.current} />
      </main>
      <aside>
        <WeeklyForecast weekForecast={cityWeatherData.daily} />
      </aside>
    </div>
  );
};
