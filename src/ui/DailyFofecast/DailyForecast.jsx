import Header from '../../components/Header';
import Title from '../../components/Title';
import SectionBox from '../../components/SectionBox';
import styled from 'styled-components';
import { HourForecast } from './components/HourForecast';
import { dailyForecastText } from './utils/dailyForecastText';

const StyledListContainer = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
`;
const StyledList = styled.ul`
  width: 288%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const DailyForecast = ({ todayForecast }) => {
  return (
    <SectionBox>
      <Header>
        <Title>{dailyForecastText.title}</Title>
      </Header>
      <StyledListContainer>
        <StyledList>
          {todayForecast.slice(0, 24).map((hourForecast) => {
            return <HourForecast key={hourForecast.dt} forecast={hourForecast} />;
          })}
        </StyledList>
      </StyledListContainer>
    </SectionBox>
  );
};
