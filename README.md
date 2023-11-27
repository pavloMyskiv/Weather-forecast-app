# weather-farecast-app
[try here](https://pavlomyskiv.github.io/weather-forecast-app/)

## Description
This React application is a weather app that utilizes the OpenWeatherMap API to provide real-time weather information. Users can input the name of a city, and the app displays the current temperature, atmospheric conditions, a 24-hour weather forecast, and a 7-day weather forecast. Additionally, the app supports a dark mode theme and is responsive to different screen sizes.

## Technologies Used
- **RTK Query**: Used for efficient data fetching and state management.
- **Styled-components**: Employed for styling components with a dynamic and responsive design.
- **React Hook Forms**: Implemented for handling form input and validation.
- **Font Awesome**: Integrated for adding scalable vector icons.

## Installation
1. Clone the repository.
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
2. Install dependencies.
    ```bash
    npm install
3. Set up environment variables. Create a .env file in the root of the project and add the following variables:

    ```env
    REACT_APP_OPEN_WEATHER_MAP_KEY=your_openweathermap_api_key
    REACT_APP_LOCATION_API=https://api.openweathermap.org/geo/1.0/direct
    REACT_APP_WEATHER_API=https://api.openweathermap.org/data/3.0/onecall
4. Start the development server.

    ```bash
    npm start

## Features
* **Current Weather**: Display the current temperature and atmospheric conditions for the specified city.

* **Hourly Forecast**: Show a 24-hour weather forecast for the selected city.

* **7-Day Forecast**: Provide a week-long weather forecast for the chosen location.

* **Dark Mode**: Toggle between light and dark themes for better user experience.

* **Responsive Design**: Adapt to various screen sizes for a seamless user interface.

## Usage
1. Open the application in a web browser.
2. Enter the name of the city in the input field.
3. Click the submit button to fetch and display weather information.
4. Explore the different sections for current weather, hourly forecast, and 7-day forecast.
5. Toggle between light and dark themes using the theme switcher.
## Acknowledgements
This app relies on the OpenWeatherMap API for weather data. Obtain your API key from [OpenWeatherMap](https://openweathermap.org/) and set it in the environment variables.