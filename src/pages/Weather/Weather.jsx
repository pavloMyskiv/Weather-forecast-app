import React from 'react';
import styled from 'styled-components';
import { useGetWeatherQuery } from '../../store/API/weatherAPI';
import CurrentWeather from '../../ui/CurrentWeather';
import DailyForecast from '../../ui/DailyFofecast';
import AirConditions from '../../ui/AirConditions';
import WeeklyForecast from '../../ui/WeeklyForecast';
import Loader from '../../components/Loader';

const StyledWeatherLayout = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 65% 35%;
  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
  & main {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    @media (max-width: 767px) {
      padding: 0;
    }
  }
  & main section:first-child {
    flex: 1 1 auto;
  }
  & aside {
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: stretch;
    @media (max-width: 767px) {
      padding: 0;
    }
  }
`;

export const Weather = ({ cityData }) => {
  const currentCityData = cityData[0];
  const { data: cityWeatherData = [], isFetching } = useGetWeatherQuery({
    lat: currentCityData.lat,
    lon: currentCityData.lon,
  });

  if (isFetching) {
    return <Loader />;
  }
  return (
    <StyledWeatherLayout>
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
    </StyledWeatherLayout>
  );
};
