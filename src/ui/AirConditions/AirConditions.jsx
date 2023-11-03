import SectionBox from '../../components/SectionBox';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Title from '../../components/Title';
import styled from 'styled-components';
import { airConditionText } from './utils/airConditionText';
import { ConditionItem } from './components/ConditionItem';
import Popup from '../../components/Popup';
import { useState } from 'react';

const StyledGridBox = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  @media (max-width: 767px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AirConditions = ({ currentAirCondition }) => {
  const [activePopup, setActivePopup] = useState(false);
  const getTime = (time) => {
    const date = new Date(time * 1000);
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hours}:${minutes}`;
  };
  return (
    <>
      <SectionBox>
        <Header $justifyContent="space-between">
          <Title>{airConditionText.title}</Title>
          <Button
            onClick={() => setActivePopup(true)}
            color="inherit"
            $background="button_blue"
          >
            {airConditionText.button.open}
          </Button>
        </Header>
        <StyledGridBox>
          <ConditionItem
            condition={currentAirCondition.feels_like}
            text={airConditionText.item.feels_like}
          />
          <ConditionItem
            condition={currentAirCondition.wind_speed}
            text={airConditionText.item.wind_speed}
          />
          <ConditionItem
            condition={currentAirCondition.humidity}
            text={airConditionText.item.humidity}
          />
          <ConditionItem
            condition={currentAirCondition.clouds}
            text={airConditionText.item.clouds}
          />
        </StyledGridBox>
      </SectionBox>
      <Popup
        isActive={activePopup}
        disActive={() => {
          setActivePopup(false);
        }}
      >
        <Header $justifyContent="space-between">
          <Title>{airConditionText.title}</Title>
          <Button
            onClick={() => setActivePopup(false)}
            color="inherit"
            $background="button_red"
          >
            {airConditionText.button.close}
          </Button>
        </Header>
        <StyledGridBox>
          <ConditionItem
            condition={currentAirCondition.feels_like}
            text={airConditionText.item.feels_like}
          />
          <ConditionItem
            condition={currentAirCondition.clouds}
            text={airConditionText.item.clouds}
          />
          <ConditionItem
            condition={currentAirCondition.visibility}
            text={airConditionText.item.visibility}
          />
          <ConditionItem
            condition={currentAirCondition.wind_speed}
            text={airConditionText.item.wind_speed}
          />
          <ConditionItem
            condition={currentAirCondition.humidity}
            text={airConditionText.item.humidity}
          />
          <ConditionItem
            condition={currentAirCondition.pressure}
            text={airConditionText.item.pressure}
          />
          <ConditionItem
            condition={getTime(currentAirCondition.sunrise)}
            text={airConditionText.item.sunrise}
          />
          <ConditionItem
            condition={getTime(currentAirCondition.sunset)}
            text={airConditionText.item.sunset}
          />
          <ConditionItem
            condition={currentAirCondition.uvi}
            text={airConditionText.item.uvi}
          />
        </StyledGridBox>
      </Popup>
    </>
  );
};
