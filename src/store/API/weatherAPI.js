import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const callParams = {
  units: 'metric',
};

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_WEATHER_API}`,
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lon }) =>
        `?lat=${lat}&lon=${lon}&units=${callParams.units}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherAPI;
