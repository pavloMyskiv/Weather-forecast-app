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
  const [getLocation, { data: cityData = [], isFetching, isSuccess, isError }] =
    useLazyGetLocationQuery();
  const searchStatus = {
    normal: 'Enter location',
    loading: 'Loading...',
    undefinded_city: 'Undefinded city!',
    error: 'Error!!!',
  };
  let label = searchStatus.normal;
  if (isFetching) {
    label = searchStatus.loading;
  } else if (isSuccess && cityData.length === 0) {
    label = searchStatus.undefinded_city;
  } else if (isError) {
    label = searchStatus.error;
  }
  return (
    <div className="App">
      <div className="container">
        <LocationSearchForm
          onFormSubmit={getLocation}
          label={label}
          isError={
            label === searchStatus.undefinded_city ||
            label === searchStatus.error
          }
        />
        {cityData.length !== 0 && <Weather cityData={cityData} />}
      </div>
    </div>
  );
};

export default App;

library.add(faWind, faTemperatureHalf, faDroplet, faSun);
