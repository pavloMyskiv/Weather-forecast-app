import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const callParams = {
  limit: '1',
};

export const locationAPI = createApi({
  reducerPath: 'locationAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_LOGATION_API}`,
  }),
  endpoints: (builder) => ({
    getLocation: builder.query({
      query: (city) =>
        `?q=${city}&limit=${callParams.limit}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}`,
    }),
  }),
});

export const { useLazyGetLocationQuery } = locationAPI;
