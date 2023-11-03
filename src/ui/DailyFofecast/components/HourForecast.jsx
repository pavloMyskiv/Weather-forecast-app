import styled from 'styled-components';
import Text from '../../../components/Text';
import { rounder } from '../../../utils/rounder';
import Title from '../../../components/Title';
import { dailyForecastText } from '../utils/dailyForecastText';

const StyledHourForecast = styled.li`
  flex: 1 1 auto;
  padding: 15px 5px;
  width: 70px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: ${(props) => props.theme.border};
  &:last-child {
    border: none;
  }
  & img {
    flex: 1 1 auto;
    width: 4em;
    font-size: ${(props) => props.theme.fontSize.s};
    text-align: center;
    object-fit: contain;
  }
`;
export const HourForecast = ({ forecast }) => {
  const hour = new Date(forecast.dt * 1000).getHours();
  return (
    <StyledHourForecast>
      <Title fontSize="s">{`${hour}:00`}</Title>
      <img
        src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
        alt={forecast.weather[0].description}
      />
      <Text fontSize="l">
        {rounder(forecast.temp)}
        {dailyForecastText.item.param}
      </Text>
    </StyledHourForecast>
  );
};
