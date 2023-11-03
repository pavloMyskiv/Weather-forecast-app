import SectionBox from '../../components/SectionBox';
import Title from '../../components/Title';
import styled from 'styled-components';
import Header from '../../components/Header';
import { DayForecast } from './components/DayForecast';
import { weeklyForecastText } from './utils/weeklyForecastText';
const StyledSectionBox = styled(SectionBox)`
  display: flex;
  flex-direction: column;
`;
const StyledList = styled.ul`
  flex: 1 1 auto;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
`;
export const WeeklyForecast = ({ weekForecast }) => {
  return (
    <StyledSectionBox>
      <Header>
        <Title>{weeklyForecastText.title}</Title>
      </Header>
      <StyledList>
        {weekForecast.map((dailyForecast) => {
          return <DayForecast key={dailyForecast.dt} forecast={dailyForecast} />;
        })}
      </StyledList>
    </StyledSectionBox>
  );
};
