import { rounder } from '../../utils/rounder';
import Text from '../../components/Text';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight:bold;
  margin: 0.2em 0;
`;
const StyledSection = styled.section`
  margin-top: 8px;
  padding: 1em 2em;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(3, 1fr);
  & img {
    height: 100%;
    min-height: 100px;
    object-fit: contain;
    grid-row: 1 / span 3;
    grid-column: 2 / span 1;
    font-size: ${(props) => props.theme.fontSize.s};
    text-align: center;
  }
`;

export const CurrentWeather = ({ cityName, currentWeather }) => {
  return (
    <StyledSection>
      <StyledH1>{cityName}</StyledH1>
      <Text fontSize="s" color="minor">
        {currentWeather.weather[0].main}
      </Text>
      <img
        src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
        alt={currentWeather.weather[0].description}
      />
      <Text fontSize="xxl">{rounder(currentWeather.temp)}°C</Text>
    </StyledSection>
  );
};
