// @ts-check

/* eslint-disable no-unused-vars */

import DOM from './dom/dom';
import SearchBar from './dom/search_bar';
import WeatherService from './weather_service/weather_service';

async function main() {
  const weatherService = new WeatherService();
  const weather = await weatherService.getCurrentWeather('Ottawa');
  const forecast = await weatherService.getForecast('Ottawa');

  const dom = new DOM(weather, forecast);
  const searchBar = new SearchBar(weather?.locationName ?? '', weatherService);
}

main();
