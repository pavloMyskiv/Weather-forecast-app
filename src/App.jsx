import './App.scss';
import Weather from './pages/Weather';

import LocationSearchForm from './components/LocationSearchForm';
import { useLazyGetLocationQuery } from './store/API/locationAPI.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faWind,
  faTemperatureHalf,
  faDroplet,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [getLocation, { data: cityData = [], isFetching, isSuccess }] =
    useLazyGetLocationQuery();
  const searchStatus = {
    normal: 'Enter location',
    loading: 'Loading...',
    error: 'Error!!!',
  };
  const label = isFetching
    ? searchStatus.loading
    : isSuccess && cityData.length === 0
    ? searchStatus.error
    : searchStatus.normal;

  return (
    <div className="App">
      <div className="container">
        <LocationSearchForm onFormSubmit={getLocation} label={label} />
        {cityData.length !== 0 && <Weather cityData={cityData} />}
      </div>
    </div>
  );
};

export default App;

library.add(faWind, faTemperatureHalf, faDroplet, faSun);
