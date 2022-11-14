// @ts-check

import DOM from './dom/dom';
import WeatherService from './weather_service/weather_service';

async function main() {
  const weatherService = new WeatherService();
  const weather = await weatherService.getCurrentWeather('Ottawa');
  const forecast = await weatherService.getForecast('Ottawa');
  // eslint-disable-next-line no-unused-vars
  const dom = new DOM(weather, forecast);
}

main();
