import styled from 'styled-components';
import Title from '../../../components/Title';
import Text from '../../../components/Text';
import { rounder } from '../../../utils/rounder';
import { weeklyForecastText } from '../utils/weeklyForecastText';

const StylesDayForecast = styled.li`
  margin: 6px;
  text-align: center;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  align-items: center;
  border-bottom: ${(props) => props.theme.border};
  &:last-child {
    border: none;
  }
  & img {
    font-size: ${(props) => props.theme.fontSize.s};
    text-align: center;
    object-fit: contain;
  }
`;
const StyleWeather = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledTemperature = styled.div`
  display: flex;
  justify-content: center;
`;
export const DayForecast = ({ forecast }) => {
  const day = new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
  });
  const isToday =
    new Date(forecast.dt * 1000).getDate() === new Date().getDate();
  return (
    <StylesDayForecast>
      <Title fontSize="s">
        {isToday ? weeklyForecastText.item.today : day}
      </Title>
      <StyleWeather>
        <img
          src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
          alt={forecast.weather[0].description}
        />
        <p>{forecast.weather[0].main}</p>
      </StyleWeather>
      <StyledTemperature>
        <Text>{rounder(forecast.temp.max)}</Text>/
        <Text color="minor">{rounder(forecast.temp.min)}</Text>
        {weeklyForecastText.item.param}
      </StyledTemperature>
    </StylesDayForecast>
  );
};
