import Theme from './styled/Theme';
import styled from 'styled-components';
import LocationSearchForm from './ui/LocationSearchForm';
import Weather from './pages/Weather';
import { useLazyGetLocationQuery } from './store/API/locationAPI.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faWind,
  faTemperatureHalf,
  faDroplet,
  faSun,
  faArrowDownLong,
  faEyeSlash,
  faCloud,
  faGlasses,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button';
import { useState } from 'react';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFromLocal, setInLocal } from './utils/localStorage.js';

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Serif', serif;
  font-size: 18px;
  background-color: ${(props) => props.theme.colors.background.app};
  color: ${(props) => props.theme.colors.text.major};

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;
const AppContainer = styled.div`
  overflow: hidden;
  margin: 0.5em;
  padding: 1em;
  max-width: 1200px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.background.major};

  @media (max-width: 767px) {
    margin: 0;
    width: 100%;
    border-radius: 0;
  }
`;

const App = () => {
  const modeKey = 'mode';
  const cityKey = 'city';
  const [darkmode, setMode] = useState(() => {
    if (getFromLocal(modeKey) || getFromLocal(modeKey) === false) {
      return getFromLocal(modeKey);
    } else {
      return true;
    }
  });
  let [getLocation, { data: cityData = [], isFetching, isSuccess, isError }] =
    useLazyGetLocationQuery();

  const searchStatus = {
    normal: 'Enter location',
    loading: 'Loading...',
    not_found: 'Not found!',
    error: 'Error!!!',
  };
  let label = searchStatus.normal;
  if (isFetching) {
    label = searchStatus.loading;
  } else if (isSuccess && cityData.length === 0) {
    label = searchStatus.not_found;
  } else if (isError) {
    label = searchStatus.error;
  }
  if (getFromLocal(cityKey) && cityData.length === 0) {
    cityData = getFromLocal(cityKey);
  }
  if (cityData.length !== 0 && cityData !== getFromLocal(cityKey)) {
    setInLocal(cityKey, cityData);
  }
  return (
    <Theme mode={darkmode}>
      <StyledApp>
        <AppContainer>
          <Header $justifyContent="space-around">
            <LocationSearchForm
              onFormSubmit={getLocation}
              label={label}
              isError={
                label === searchStatus.not_found || label === searchStatus.error
              }
            />
            <Button
              onClick={() => {
                const modeStatus = !darkmode;
                setMode(modeStatus);
                setInLocal(modeKey, modeStatus);
              }}
              color={darkmode ? '#fff942' : ''}
            >
              <FontAwesomeIcon icon="fa-lightbulb" />
            </Button>
          </Header>

          {cityData.length !== 0 && <Weather cityData={cityData} />}
        </AppContainer>
      </StyledApp>
    </Theme>
  );
};

export default App;

library.add(
  faWind,
  faTemperatureHalf,
  faDroplet,
  faSun,
  faArrowDownLong,
  faEyeSlash,
  faCloud,
  faGlasses,
  faLightbulb
);
