import { configureStore } from '@reduxjs/toolkit';
import { rootReducer as reducer } from './rootReduser';
import { locationAPI } from './API/locationAPI';
import { weatherAPI } from './API/weatherAPI';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      locationAPI.middleware,
      weatherAPI.middleware
    ),
});
