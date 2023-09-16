/** @format */

import { combineReducers } from '@reduxjs/toolkit';
import { locationAPI } from './API/locationAPI';
import { weatherAPI } from './API/weatherAPI';

export const rootReducer = combineReducers({
  [locationAPI.reducerPath]: locationAPI.reducer,
  [weatherAPI.reducerPath]: weatherAPI.reducer,
});
