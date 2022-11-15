"use strict";
(self["webpackChunkweather_page"] = self["webpackChunkweather_page"] || []).push([["index"],{

/***/ "./src/dom/dom.js":
/*!************************!*\
  !*** ./src/dom/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weather/forecast */ "./src/weather/forecast.js");
/* harmony import */ var _weather_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather/weather */ "./src/weather/weather.js");
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
// @ts-check

/* eslint-disable max-classes-per-file */

// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars


/**
 * Handles interfacing with the UI.
 */
var _temperatureElement = /*#__PURE__*/new WeakMap();
var _feelsLikeElement = /*#__PURE__*/new WeakMap();
var _weatherIconElement = /*#__PURE__*/new WeakMap();
var _descriptionElement = /*#__PURE__*/new WeakMap();
var _forecastAreaElement = /*#__PURE__*/new WeakMap();
var _getIconUrl = /*#__PURE__*/new WeakSet();
class DOM {
  /** @type {HTMLDivElement} */

  /** @type {HTMLDivElement} */

  /** @type {HTMLImageElement} */

  /** @type {HTMLDivElement} */

  /** @type {HTMLDivElement} */

  /**
   * Singleton instance access for the DOM.
   * @type {DOM}
   */

  /**
   * @param {Weather | null} initialWeatherData
   * @param {Forecast | null} initialForecastData
   */
  constructor(initialWeatherData, initialForecastData) {
    _classPrivateMethodInitSpec(this, _getIconUrl);
    _classPrivateFieldInitSpec(this, _temperatureElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _feelsLikeElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _weatherIconElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _descriptionElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _forecastAreaElement, {
      writable: true,
      value: void 0
    });
    // Singleton class.
    if (typeof DOM.instance !== 'undefined') return;
    _classPrivateFieldSet(this, _temperatureElement, /** @type {HTMLDivElement} */
    document.getElementById('temperature'));
    _classPrivateFieldSet(this, _feelsLikeElement, /** @type {HTMLDivElement} */
    document.getElementById('temperature-feels-like'));
    _classPrivateFieldSet(this, _weatherIconElement, /** @type {HTMLImageElement} */
    document.getElementById('weather-icon'));
    _classPrivateFieldSet(this, _descriptionElement, /** @type {HTMLDivElement} */
    document.getElementById('description'));
    _classPrivateFieldSet(this, _forecastAreaElement, /** @type {HTMLDivElement} */
    document.getElementById('forecast'));

    // If for some reason we didn't get initial data we will forego loading
    // weather data and display default placeholders.
    if (initialWeatherData === null || initialForecastData === null) {
      this.showError();
      return;
    }
    this.loadNewWeatherData(initialWeatherData, initialForecastData);
    DOM.instance = this;
  }
  showError() {
    const mainWeatherElement = /** @type {HTMLDivElement} */
    document.getElementById('main-weather');
    mainWeatherElement.innerHTML = 'Unable to get weather data. Try refreshing the page in a minute.';
  }

  /**
   * Populate the DOM with the provided weather data.
   *
   * @param {Weather} weatherData
   * @param {Forecast} forecastData
   */
  loadNewWeatherData(weatherData, forecastData) {
    this.updateTemperature(weatherData.temperature.actual);
    this.updateFeelsLike(weatherData.temperature.feelsLike);
    this.updateWeatherIcon(weatherData.icon);
    this.updateDescription(weatherData.description);
    this.updateForecastArea(forecastData);
  }

  /**
   * Update the main temperature display.
   *
   * @param {number | null} temperature
   */
  updateTemperature(temperature) {
    const temperatureString = (temperature === null || temperature === void 0 ? void 0 : temperature.toString()) ?? '__';
    _classPrivateFieldGet(this, _temperatureElement).textContent = `${temperatureString}°`;
  }

  /**
   * Update the "feels like" temperature in the main weather block.
   *
   * @param {number | null} feelsLike
   */
  updateFeelsLike(feelsLike) {
    const feelsLikeString = (feelsLike === null || feelsLike === void 0 ? void 0 : feelsLike.toString()) ?? '__';
    const newChild = document.createElement('div');
    newChild.textContent = `${feelsLikeString}°`;
    _classPrivateFieldGet(this, _feelsLikeElement).replaceChild(newChild, _classPrivateFieldGet(this, _feelsLikeElement).children[1]);
  }

  /**
   * Gets the URL for the icon associated with [iconId].
   *
   * @param {string} iconId
   */

  /**
   * Update the displayed icon in the main weather block.
   *
   * @param {string} iconId
   */
  updateWeatherIcon(iconId) {
    _classPrivateFieldGet(this, _weatherIconElement).src = _classPrivateMethodGet(this, _getIconUrl, _getIconUrl2).call(this, iconId);
  }

  /**
   * Update the weather description in the main weather block.
   *
   * @param {string} description
   */
  updateDescription(description) {
    const formattedDescription = description[0].toUpperCase() + description.slice(1);
    _classPrivateFieldGet(this, _descriptionElement).textContent = formattedDescription;
  }

  /**
   * Update the daily forecast block.
   *
   * @param {Forecast} forecast
   */
  updateForecastArea(forecast) {
    // Reset forecast widgets so it can be populated with new data.
    _classPrivateFieldGet(this, _forecastAreaElement).replaceChildren();
    forecast.days.forEach(day => {
      const forecastWidget = document.createElement('div');
      const dayElement = document.createElement('div');
      dayElement.textContent = day.day;
      forecastWidget.appendChild(dayElement);
      const iconElement = document.createElement('img');
      iconElement.src = _classPrivateMethodGet(this, _getIconUrl, _getIconUrl2).call(this, day.icon);
      forecastWidget.appendChild(iconElement);
      const temperatureElement = document.createElement('div');
      temperatureElement.textContent = `${day.temperature.high}°`;
      forecastWidget.appendChild(temperatureElement);
      _classPrivateFieldGet(this, _forecastAreaElement).appendChild(forecastWidget);
    });
  }
}
function _getIconUrl2(iconId) {
  return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
}
_defineProperty(DOM, "instance", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/dom/search_bar.js":
/*!*******************************!*\
  !*** ./src/dom/search_bar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_service_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weather_service/weather_service */ "./src/weather_service/weather_service.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom/dom.js");
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
// @ts-check

// eslint-disable-next-line no-unused-vars



/**
 * Manages the search bar that allows the user to search for a new location.
 */
var _searchBarElement = /*#__PURE__*/new WeakMap();
var _searchButtonElement = /*#__PURE__*/new WeakMap();
var _searchErrorElement = /*#__PURE__*/new WeakMap();
var _searchFormElement = /*#__PURE__*/new WeakMap();
var _weatherService = /*#__PURE__*/new WeakMap();
var _attachListeners = /*#__PURE__*/new WeakSet();
var _search = /*#__PURE__*/new WeakSet();
class SearchBar {
  /**
   * The input element for typing search locations.
   *
   * @type {HTMLInputElement}
   */

  /**
   * The button on the right of the input to submit a search.
   *
   * @type {HTMLButtonElement}
   */

  /**
   * Error displayed under search for failure.
   *
   * @type {HTMLDivElement}
   */

  /**
   * The form handling the search field.
   *
   * @type {HTMLFormElement}
   */

  /** @type {WeatherService} */

  /**
   * @param {string} initialLocationName
   * @param {WeatherService} weatherService
   */
  constructor(initialLocationName, weatherService) {
    _classPrivateMethodInitSpec(this, _search);
    _classPrivateMethodInitSpec(this, _attachListeners);
    _classPrivateFieldInitSpec(this, _searchBarElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _searchButtonElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _searchErrorElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _searchFormElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _weatherService, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _searchBarElement, /** @type {HTMLInputElement} */
    document.getElementById('search-bar'));
    this.updateLocationName(initialLocationName);
    _classPrivateFieldSet(this, _searchButtonElement, /** @type {HTMLButtonElement} */
    document.getElementById('search-button'));
    _classPrivateFieldSet(this, _searchErrorElement, /** @type {HTMLDivElement} */
    document.getElementById('search-error'));
    _classPrivateFieldSet(this, _searchFormElement, /** @type {HTMLFormElement} */
    document.getElementById('search-form'));
    _classPrivateFieldSet(this, _weatherService, weatherService);
    _classPrivateMethodGet(this, _attachListeners, _attachListeners2).call(this);
  }

  /**
   * Attach listeners for submit & clicking search button.
   */

  /**
   * Update the location name displayed inside the search box.
   *
   * @param {string | null} name
   */
  updateLocationName(name) {
    _classPrivateFieldGet(this, _searchBarElement).placeholder = name ?? '';
  }

  /**
   * Attempt to get new weather data for the search location.
   */
}
function _attachListeners2() {
  _classPrivateFieldGet(this, _searchFormElement).onsubmit = event => {
    _classPrivateMethodGet(this, _search, _search2).call(this);
    event.preventDefault();
    return false;
  };
  _classPrivateFieldGet(this, _searchButtonElement).onclick = () => _classPrivateMethodGet(this, _search, _search2).call(this);

  // Only show search button when input has focus.
  _classPrivateFieldGet(this, _searchBarElement).onfocus = () => {
    _classPrivateFieldGet(this, _searchButtonElement).style.opacity = '1';
  };
  _classPrivateFieldGet(this, _searchBarElement).onblur = () => {
    _classPrivateFieldGet(this, _searchButtonElement).style.opacity = '0';
  };
}
async function _search2() {
  const {
    value: location
  } = _classPrivateFieldGet(this, _searchBarElement);
  const weatherData = await _classPrivateFieldGet(this, _weatherService).getCurrentWeather(location);
  const gotWeatherData = weatherData !== null;
  _classPrivateFieldGet(this, _searchErrorElement).innerHTML = gotWeatherData ? '<br />' : 'Not found';
  if (!gotWeatherData) return;
  const forecastData = await _classPrivateFieldGet(this, _weatherService).getForecast(location);
  const gotForecastData = forecastData !== null;
  if (!gotForecastData) return;
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].instance.loadNewWeatherData(weatherData, forecastData);
  this.updateLocationName(weatherData.locationName);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./src/helpers/average.js":
/*!********************************!*\
  !*** ./src/helpers/average.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// @ts-check

// I wish I were an extension method.. ¯\_(ツ)_/¯
/**
 * Returns the average value of the provided array.
 *
 * @param {number[]} array
 */
function getAverage(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  const average = sum / array.length;
  return average;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAverage);

/***/ }),

/***/ "./src/helpers/most_occurrences.js":
/*!*****************************************!*\
  !*** ./src/helpers/most_occurrences.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// @ts-check

// I wish I were an extension method.. ¯\_(ツ)_/¯
/**
 * Returns whatever occurs most frequently in the provided array.
 *
 * @param {array} array
 */
function getMostOccurrences(array) {
  return array.sort((a, b) => array.filter(e => e === a).length - array.filter(e => e === b).length).pop();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMostOccurrences);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/dom */ "./src/dom/dom.js");
/* harmony import */ var _dom_search_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/search_bar */ "./src/dom/search_bar.js");
/* harmony import */ var _weather_service_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather_service/weather_service */ "./src/weather_service/weather_service.js");
// @ts-check

/* eslint-disable no-unused-vars */




async function main() {
  const weatherService = new _weather_service_weather_service__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const weather = await weatherService.getCurrentWeather('Ottawa');
  const forecast = await weatherService.getForecast('Ottawa');
  const dom = new _dom_dom__WEBPACK_IMPORTED_MODULE_0__["default"](weather, forecast);
  const searchBar = new _dom_search_bar__WEBPACK_IMPORTED_MODULE_1__["default"]((weather === null || weather === void 0 ? void 0 : weather.locationName) ?? '', weatherService);
}
main();

/***/ }),

/***/ "./src/weather/forecast.js":
/*!*********************************!*\
  !*** ./src/weather/forecast.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_average__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/average */ "./src/helpers/average.js");
/* harmony import */ var _helpers_most_occurrences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/most_occurrences */ "./src/helpers/most_occurrences.js");
/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temperature */ "./src/weather/temperature.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather */ "./src/weather/weather.js");
/* harmony import */ var _wind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wind */ "./src/weather/wind.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// @ts-check

/* eslint-disable no-param-reassign */







/**
 * Data class for a 5-day weather forecast.
 */
var _kDateRegex = /*#__PURE__*/new WeakMap();
class Forecast {
  /**
   * @type {Weather[]}
   */

  constructor(json) {
    _defineProperty(this, "days", []);
    _classPrivateFieldInitSpec(this, _kDateRegex, {
      writable: true,
      value: /\d\d\d\d-\d\d-\d\d/
    });
    let convertedDayChunks = /** @type {Weather[]} */
    json.list.map(day => _weather__WEBPACK_IMPORTED_MODULE_3__["default"].fromJson(day));

    /** @type {Array<Array<Weather>>} */
    const dayArrays = [];

    // Add each chunk that is for the same day to an array inside [days] so that
    // at the end each unique day is contained in 1 array.
    while (convertedDayChunks.length !== 0) {
      const dayOfWeek = convertedDayChunks[0].day;
      dayArrays.push(convertedDayChunks.filter(dayChunk => dayChunk.day === dayOfWeek));
      convertedDayChunks = convertedDayChunks.filter(dayChunk => dayChunk.day !== dayOfWeek);
    }
    dayArrays.forEach(dayArray => {
      this.days.push(Forecast.weatherFromHourlySnapshots(dayArray));
    });
    this.days.forEach(day => {
      day.locationName = json.city.name;
    });
  }

  /**
   * Convert an array of [Weather] representing different times in a day into a
   * single day's [Weather].
   *
   * Necessary because Open Weather Map only provides forecast data for free
   * accounts in 5-day, 3-hour increments rather than the expected daily
   * forcast.
   *
   * @param {Weather[]} dayChunks
   * @return {Weather}
   */
  static weatherFromHourlySnapshots(dayChunks) {
    // Create values for the single day weather.
    // eslint-disable-next-line prefer-destructuring
    const description = dayChunks[0].description;
    const humidity = Math.max(...dayChunks.map(day => day.humidity));
    const icon = (0,_helpers_most_occurrences__WEBPACK_IMPORTED_MODULE_1__["default"])(dayChunks.map(day => day.icon));
    const actualTemperature = (0,_helpers_average__WEBPACK_IMPORTED_MODULE_0__["default"])(dayChunks.map(day => day.temperature.actual));
    const feelsLike = (0,_helpers_average__WEBPACK_IMPORTED_MODULE_0__["default"])(dayChunks.map(day => day.temperature.feelsLike));
    const highTemperature = Math.max(...dayChunks.map(day => day.temperature.high));
    const lowTemperature = Math.min(...dayChunks.map(day => day.temperature.low));
    const temperature = new _temperature__WEBPACK_IMPORTED_MODULE_2__["default"](actualTemperature, feelsLike, highTemperature, lowTemperature);
    const windSpeed = (0,_helpers_average__WEBPACK_IMPORTED_MODULE_0__["default"])(dayChunks.map(day => day.wind.speed));
    const windGusts = (0,_helpers_average__WEBPACK_IMPORTED_MODULE_0__["default"])(dayChunks.map(day => day.wind.gusts ?? 0));
    const wind = new _wind__WEBPACK_IMPORTED_MODULE_4__["default"](windSpeed, windGusts);
    const weather = new _weather__WEBPACK_IMPORTED_MODULE_3__["default"](dayChunks[0].day, description, humidity, icon, '', temperature, wind);
    return weather;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forecast);

/***/ }),

/***/ "./src/weather/temperature.js":
/*!************************************!*\
  !*** ./src/weather/temperature.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// @ts-check

/**
 * Data class for the temperature portion of a weather report.
 */
class Temperature {
  /**
   * The actual temperature not counting conditions like wind, humidity, etc.
   *
   * @type {number}
   */

  /**
   * The perceived temperature counting conditions like wind, humidity, etc.
   *
   * @type {number}
   */

  /**
   * The highest expected temperature for the day.
   *
   * @type {number}
   */

  /**
   * The lowest expected temperature for the day.
   *
   * @type {number}
   */

  /**
   * @param {number} actual
   * @param {number} feelsLike
   * @param {number} high
   * @param {number} low
   */
  constructor(actual, feelsLike, high, low) {
    _defineProperty(this, "actual", void 0);
    _defineProperty(this, "feelsLike", void 0);
    _defineProperty(this, "high", void 0);
    _defineProperty(this, "low", void 0);
    this.actual = Math.round(actual);
    this.feelsLike = Math.round(feelsLike);
    this.high = Math.round(high);
    this.low = Math.round(low);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Temperature);

/***/ }),

/***/ "./src/weather/weather.js":
/*!********************************!*\
  !*** ./src/weather/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperature */ "./src/weather/temperature.js");
/* harmony import */ var _wind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wind */ "./src/weather/wind.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/* eslint-disable prefer-destructuring */
// @ts-check




/**
 * The weekday names, since the API returns the day of the week as an int - this
 * maps those ints to the appropriate string representation. Eg [0] = 'Sun'.
 */
const kWeekDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Data class representing a weather report.
 */
class Weather {
  /**
   * The day of the week, eg 'Sun', 'Mon', etc.
   *
   * Only populated for daily forecast.
   *
   * @type {string}
   */

  /**
   * Description of the weather, eg 'Broken clouds', 'Thunder storms', etc.
   *
   * @type {string}
   */

  /** @type {number} */

  /**
   * The icon associated with this weather report, eg clouds, sun, etc.
   *
   * @type {string}
   */

  /**
   * The name of the location for the given weather report, eg 'Ottawa, 'London'
   *
   * @type {string}
   */

  /** @type {Temperature} */

  /** @type {Wind} */

  /**
   * @param {string} day
   * @param {string} description
   * @param {number} humidity
   * @param {string} icon
   * @param {string} locationName
   * @param {Temperature} temperature
   * @param {Wind} wind
   */
  constructor(day, description, humidity, icon, locationName, temperature, wind) {
    _defineProperty(this, "day", void 0);
    _defineProperty(this, "description", void 0);
    _defineProperty(this, "humidity", void 0);
    _defineProperty(this, "icon", void 0);
    _defineProperty(this, "locationName", void 0);
    _defineProperty(this, "temperature", void 0);
    _defineProperty(this, "wind", void 0);
    this.day = day;
    this.description = description;
    this.humidity = humidity;
    this.icon = icon;
    this.locationName = locationName;
    this.temperature = temperature;
    this.wind = wind;
  }

  /**
   * Create an instance from the provided [json].
   *
   * @param {object} json
   */
  static fromJson(json) {
    let day;
    if (json.dt_txt) {
      const date = new Date(json.dt_txt);
      day = kWeekDayNames[date.getDay()];
    }
    const description = json.weather[0].description;
    const humidity = json.main.humidity;
    const icon = json.weather[0].icon;
    const locationName = json.name;
    const temperature = new _temperature__WEBPACK_IMPORTED_MODULE_0__["default"](json.main.temp, json.main.feels_like, json.main.temp_max, json.main.temp_min);
    const wind = new _wind__WEBPACK_IMPORTED_MODULE_1__["default"](json.wind.speed, json.wind.gust);
    return new Weather(day ?? '', description, humidity, icon, locationName, temperature, wind);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);

/***/ }),

/***/ "./src/weather/wind.js":
/*!*****************************!*\
  !*** ./src/weather/wind.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// @ts-check

/**
 * Data class for the wind portion of a weather report.
 */
class Wind {
  /** @type {number} */

  /** @type {number | null} */

  /**
   * @param {number} speed
   * @param {number | undefined} [gusts]
   */
  constructor(speed, gusts) {
    _defineProperty(this, "speed", void 0);
    _defineProperty(this, "gusts", void 0);
    this.speed = speed;
    this.gusts = typeof gusts === 'number' ? gusts : null;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wind);

/***/ }),

/***/ "./src/weather_service/weather_service.js":
/*!************************************************!*\
  !*** ./src/weather_service/weather_service.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weather/weather */ "./src/weather/weather.js");
/* harmony import */ var _weather_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather/forecast */ "./src/weather/forecast.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
// @ts-check




/**
 * Provides an interface to get weather data.
 */
var _kApiKey = /*#__PURE__*/new WeakMap();
var _units = /*#__PURE__*/new WeakMap();
class WeatherService {
  constructor() {
    _classPrivateFieldInitSpec(this, _kApiKey, {
      writable: true,
      value: '9566c510f80fe0553c609abe9c13319a'
    });
    _classPrivateFieldInitSpec(this, _units, {
      writable: true,
      value: 'metric'
    });
  }
  /**
   * Fetches weather data for the provided [location].
   *
   * @param {string} location
   * @return {Promise<Weather | null>}
   */
  async getCurrentWeather(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${_classPrivateFieldGet(this, _kApiKey)}&units=${_classPrivateFieldGet(this, _units)}`);
    if (response.status === 404) return null;
    const data = await response.json();
    const weather = _weather_weather__WEBPACK_IMPORTED_MODULE_0__["default"].fromJson(data);
    return weather;
  }
  async getForecast(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${_classPrivateFieldGet(this, _kApiKey)}&units=metric`);
    const data = await response.json();
    const forecast = new _weather_forecast__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    return forecast;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherService);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEMsY0FBYyxDQUFDO0VBQUE7SUFBQTtNQUFBO01BQUEsT0FHUjtJQUFrQztJQUFBO01BQUE7TUFBQSxPQUVwQztJQUFRO0VBQUE7RUFFakI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsTUFBTWlCLGlCQUFpQixDQUFDRCxRQUFRLEVBQUU7SUFDaEMsTUFBTThELFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLHFEQUFvRC9ELFFBQVMsVUFBTyxzQkFDbkUsSUFBSSxXQUNMLFVBQU8sc0JBQUUsSUFBSSxTQUFRLEVBQUMsQ0FDeEI7SUFFRCxJQUFJOEQsUUFBUSxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUV4QyxNQUFNQyxJQUFJLEdBQUcsTUFBTUgsUUFBUSxDQUFDckMsSUFBSSxFQUFFO0lBQ2xDLE1BQU1MLE9BQU8sR0FBR3BGLGlFQUFnQixDQUFDaUksSUFBSSxDQUFDO0lBQ3RDLE9BQU83QyxPQUFPO0VBQ2hCO0VBRUEsTUFBTWpCLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFO0lBQzFCLE1BQU04RCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUN6QixzREFBcUQvRCxRQUFTLFVBQU8sc0JBQ3BFLElBQUksV0FDTCxlQUFjLENBQ2hCO0lBQ0QsTUFBTWlFLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNyQyxJQUFJLEVBQUU7SUFDbEMsTUFBTXBELFFBQVEsR0FBRyxJQUFJdEMseURBQVEsQ0FBQ2tJLElBQUksQ0FBQztJQUNuQyxPQUFPNUYsUUFBUTtFQUNqQjtBQUNGO0FBRUEsaUVBQWVXLGNBQWMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvcnVubmVyL3dvcmsvd2VhdGhlcl9wYWdlL3dlYXRoZXJfcGFnZS9zcmMvZG9tL2RvbS5qcyIsImZpbGU6Ly8vL2hvbWUvcnVubmVyL3dvcmsvd2VhdGhlcl9wYWdlL3dlYXRoZXJfcGFnZS9zcmMvZG9tL3NlYXJjaF9iYXIuanMiLCJmaWxlOi8vLy9ob21lL3J1bm5lci93b3JrL3dlYXRoZXJfcGFnZS93ZWF0aGVyX3BhZ2Uvc3JjL2hlbHBlcnMvYXZlcmFnZS5qcyIsImZpbGU6Ly8vL2hvbWUvcnVubmVyL3dvcmsvd2VhdGhlcl9wYWdlL3dlYXRoZXJfcGFnZS9zcmMvaGVscGVycy9tb3N0X29jY3VycmVuY2VzLmpzIiwiZmlsZTovLy8vaG9tZS9ydW5uZXIvd29yay93ZWF0aGVyX3BhZ2Uvd2VhdGhlcl9wYWdlL3NyYy9pbmRleC5qcyIsImZpbGU6Ly8vL2hvbWUvcnVubmVyL3dvcmsvd2VhdGhlcl9wYWdlL3dlYXRoZXJfcGFnZS9zcmMvd2VhdGhlci9mb3JlY2FzdC5qcyIsImZpbGU6Ly8vL2hvbWUvcnVubmVyL3dvcmsvd2VhdGhlcl9wYWdlL3dlYXRoZXJfcGFnZS9zcmMvd2VhdGhlci90ZW1wZXJhdHVyZS5qcyIsImZpbGU6Ly8vL2hvbWUvcnVubmVyL3dvcmsvd2VhdGhlcl9wYWdlL3dlYXRoZXJfcGFnZS9zcmMvd2VhdGhlci93ZWF0aGVyLmpzIiwiZmlsZTovLy8vaG9tZS9ydW5uZXIvd29yay93ZWF0aGVyX3BhZ2Uvd2VhdGhlcl9wYWdlL3NyYy93ZWF0aGVyL3dpbmQuanMiLCJmaWxlOi8vLy9ob21lL3J1bm5lci93b3JrL3dlYXRoZXJfcGFnZS93ZWF0aGVyX3BhZ2Uvc3JjL3dlYXRoZXJfc2VydmljZS93ZWF0aGVyX3NlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWNoZWNrXG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEZvcmVjYXN0IGZyb20gJy4uL3dlYXRoZXIvZm9yZWNhc3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgV2VhdGhlciBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xuXG4vKipcbiAqIEhhbmRsZXMgaW50ZXJmYWNpbmcgd2l0aCB0aGUgVUkuXG4gKi9cbmNsYXNzIERPTSB7XG4gIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9ICovXG4gICN0ZW1wZXJhdHVyZUVsZW1lbnQ7XG5cbiAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi9cbiAgI2ZlZWxzTGlrZUVsZW1lbnQ7XG5cbiAgLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50fSAqL1xuICAjd2VhdGhlckljb25FbGVtZW50O1xuXG4gIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9ICovXG4gICNkZXNjcmlwdGlvbkVsZW1lbnQ7XG5cbiAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi9cbiAgI2ZvcmVjYXN0QXJlYUVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbiBpbnN0YW5jZSBhY2Nlc3MgZm9yIHRoZSBET00uXG4gICAqIEB0eXBlIHtET019XG4gICAqL1xuICBzdGF0aWMgaW5zdGFuY2U7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7V2VhdGhlciB8IG51bGx9IGluaXRpYWxXZWF0aGVyRGF0YVxuICAgKiBAcGFyYW0ge0ZvcmVjYXN0IHwgbnVsbH0gaW5pdGlhbEZvcmVjYXN0RGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoaW5pdGlhbFdlYXRoZXJEYXRhLCBpbml0aWFsRm9yZWNhc3REYXRhKSB7XG4gICAgLy8gU2luZ2xldG9uIGNsYXNzLlxuICAgIGlmICh0eXBlb2YgRE9NLmluc3RhbmNlICE9PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgdGhpcy4jdGVtcGVyYXR1cmVFbGVtZW50ID0gLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi8gKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJylcbiAgICApO1xuICAgIHRoaXMuI2ZlZWxzTGlrZUVsZW1lbnQgPSAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqLyAoXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUtZmVlbHMtbGlrZScpXG4gICAgKTtcbiAgICB0aGlzLiN3ZWF0aGVySWNvbkVsZW1lbnQgPSAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnR9ICovIChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWljb24nKVxuICAgICk7XG4gICAgdGhpcy4jZGVzY3JpcHRpb25FbGVtZW50ID0gLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi8gKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcbiAgICApO1xuICAgIHRoaXMuI2ZvcmVjYXN0QXJlYUVsZW1lbnQgPSAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqLyAoXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3QnKVxuICAgICk7XG5cbiAgICAvLyBJZiBmb3Igc29tZSByZWFzb24gd2UgZGlkbid0IGdldCBpbml0aWFsIGRhdGEgd2Ugd2lsbCBmb3JlZ28gbG9hZGluZ1xuICAgIC8vIHdlYXRoZXIgZGF0YSBhbmQgZGlzcGxheSBkZWZhdWx0IHBsYWNlaG9sZGVycy5cbiAgICBpZiAoaW5pdGlhbFdlYXRoZXJEYXRhID09PSBudWxsIHx8IGluaXRpYWxGb3JlY2FzdERhdGEgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkTmV3V2VhdGhlckRhdGEoaW5pdGlhbFdlYXRoZXJEYXRhLCBpbml0aWFsRm9yZWNhc3REYXRhKTtcblxuICAgIERPTS5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBzaG93RXJyb3IoKSB7XG4gICAgY29uc3QgbWFpbldlYXRoZXJFbGVtZW50ID0gLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi8gKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td2VhdGhlcicpXG4gICAgKTtcbiAgICBtYWluV2VhdGhlckVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgICdVbmFibGUgdG8gZ2V0IHdlYXRoZXIgZGF0YS4gVHJ5IHJlZnJlc2hpbmcgdGhlIHBhZ2UgaW4gYSBtaW51dGUuJztcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZSB0aGUgRE9NIHdpdGggdGhlIHByb3ZpZGVkIHdlYXRoZXIgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtXZWF0aGVyfSB3ZWF0aGVyRGF0YVxuICAgKiBAcGFyYW0ge0ZvcmVjYXN0fSBmb3JlY2FzdERhdGFcbiAgICovXG4gIGxvYWROZXdXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSwgZm9yZWNhc3REYXRhKSB7XG4gICAgdGhpcy51cGRhdGVUZW1wZXJhdHVyZSh3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZS5hY3R1YWwpO1xuICAgIHRoaXMudXBkYXRlRmVlbHNMaWtlKHdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlLmZlZWxzTGlrZSk7XG4gICAgdGhpcy51cGRhdGVXZWF0aGVySWNvbih3ZWF0aGVyRGF0YS5pY29uKTtcbiAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKHdlYXRoZXJEYXRhLmRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZUZvcmVjYXN0QXJlYShmb3JlY2FzdERhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgbWFpbiB0ZW1wZXJhdHVyZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlciB8IG51bGx9IHRlbXBlcmF0dXJlXG4gICAqL1xuICB1cGRhdGVUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZSkge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlU3RyaW5nID0gdGVtcGVyYXR1cmU/LnRvU3RyaW5nKCkgPz8gJ19fJztcbiAgICB0aGlzLiN0ZW1wZXJhdHVyZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0ZW1wZXJhdHVyZVN0cmluZ33CsGA7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBcImZlZWxzIGxpa2VcIiB0ZW1wZXJhdHVyZSBpbiB0aGUgbWFpbiB3ZWF0aGVyIGJsb2NrLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlciB8IG51bGx9IGZlZWxzTGlrZVxuICAgKi9cbiAgdXBkYXRlRmVlbHNMaWtlKGZlZWxzTGlrZSkge1xuICAgIGNvbnN0IGZlZWxzTGlrZVN0cmluZyA9IGZlZWxzTGlrZT8udG9TdHJpbmcoKSA/PyAnX18nO1xuICAgIGNvbnN0IG5ld0NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtmZWVsc0xpa2VTdHJpbmd9wrBgO1xuICAgIHRoaXMuI2ZlZWxzTGlrZUVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgbmV3Q2hpbGQsXG4gICAgICB0aGlzLiNmZWVsc0xpa2VFbGVtZW50LmNoaWxkcmVuWzFdLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgVVJMIGZvciB0aGUgaWNvbiBhc3NvY2lhdGVkIHdpdGggW2ljb25JZF0uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uSWRcbiAgICovXG4gICNnZXRJY29uVXJsKGljb25JZCkge1xuICAgIHJldHVybiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uSWR9QDJ4LnBuZ2A7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBkaXNwbGF5ZWQgaWNvbiBpbiB0aGUgbWFpbiB3ZWF0aGVyIGJsb2NrLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvbklkXG4gICAqL1xuICB1cGRhdGVXZWF0aGVySWNvbihpY29uSWQpIHtcbiAgICB0aGlzLiN3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gdGhpcy4jZ2V0SWNvblVybChpY29uSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgd2VhdGhlciBkZXNjcmlwdGlvbiBpbiB0aGUgbWFpbiB3ZWF0aGVyIGJsb2NrLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICovXG4gIHVwZGF0ZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZm9ybWF0dGVkRGVzY3JpcHRpb24gPVxuICAgICAgZGVzY3JpcHRpb25bMF0udG9VcHBlckNhc2UoKSArIGRlc2NyaXB0aW9uLnNsaWNlKDEpO1xuICAgIHRoaXMuI2Rlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZERlc2NyaXB0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZGFpbHkgZm9yZWNhc3QgYmxvY2suXG4gICAqXG4gICAqIEBwYXJhbSB7Rm9yZWNhc3R9IGZvcmVjYXN0XG4gICAqL1xuICB1cGRhdGVGb3JlY2FzdEFyZWEoZm9yZWNhc3QpIHtcbiAgICAvLyBSZXNldCBmb3JlY2FzdCB3aWRnZXRzIHNvIGl0IGNhbiBiZSBwb3B1bGF0ZWQgd2l0aCBuZXcgZGF0YS5cbiAgICB0aGlzLiNmb3JlY2FzdEFyZWFFbGVtZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgZm9yZWNhc3QuZGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIGNvbnN0IGZvcmVjYXN0V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIGNvbnN0IGRheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRheUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXkuZGF5O1xuICAgICAgZm9yZWNhc3RXaWRnZXQuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpY29uRWxlbWVudC5zcmMgPSB0aGlzLiNnZXRJY29uVXJsKGRheS5pY29uKTtcbiAgICAgIGZvcmVjYXN0V2lkZ2V0LmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcblxuICAgICAgY29uc3QgdGVtcGVyYXR1cmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wZXJhdHVyZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXkudGVtcGVyYXR1cmUuaGlnaH3CsGA7XG4gICAgICBmb3JlY2FzdFdpZGdldC5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLiNmb3JlY2FzdEFyZWFFbGVtZW50LmFwcGVuZENoaWxkKGZvcmVjYXN0V2lkZ2V0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET007XG4iLCIvLyBAdHMtY2hlY2tcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgV2VhdGhlclNlcnZpY2UgZnJvbSAnLi4vd2VhdGhlcl9zZXJ2aWNlL3dlYXRoZXJfc2VydmljZSc7XG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tJztcblxuLyoqXG4gKiBNYW5hZ2VzIHRoZSBzZWFyY2ggYmFyIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIHNlYXJjaCBmb3IgYSBuZXcgbG9jYXRpb24uXG4gKi9cbmNsYXNzIFNlYXJjaEJhciB7XG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgZWxlbWVudCBmb3IgdHlwaW5nIHNlYXJjaCBsb2NhdGlvbnMuXG4gICAqXG4gICAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgI3NlYXJjaEJhckVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFRoZSBidXR0b24gb24gdGhlIHJpZ2h0IG9mIHRoZSBpbnB1dCB0byBzdWJtaXQgYSBzZWFyY2guXG4gICAqXG4gICAqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudH1cbiAgICovXG4gICNzZWFyY2hCdXR0b25FbGVtZW50O1xuXG4gIC8qKlxuICAgKiBFcnJvciBkaXNwbGF5ZWQgdW5kZXIgc2VhcmNoIGZvciBmYWlsdXJlLlxuICAgKlxuICAgKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9XG4gICAqL1xuICAjc2VhcmNoRXJyb3JFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgZm9ybSBoYW5kbGluZyB0aGUgc2VhcmNoIGZpZWxkLlxuICAgKlxuICAgKiBAdHlwZSB7SFRNTEZvcm1FbGVtZW50fVxuICAgKi9cbiAgI3NlYXJjaEZvcm1FbGVtZW50O1xuXG4gIC8qKiBAdHlwZSB7V2VhdGhlclNlcnZpY2V9ICovXG4gICN3ZWF0aGVyU2VydmljZTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGluaXRpYWxMb2NhdGlvbk5hbWVcbiAgICogQHBhcmFtIHtXZWF0aGVyU2VydmljZX0gd2VhdGhlclNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxMb2NhdGlvbk5hbWUsIHdlYXRoZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy4jc2VhcmNoQmFyRWxlbWVudCA9IC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi8gKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKVxuICAgICk7XG4gICAgdGhpcy51cGRhdGVMb2NhdGlvbk5hbWUoaW5pdGlhbExvY2F0aW9uTmFtZSk7XG4gICAgdGhpcy4jc2VhcmNoQnV0dG9uRWxlbWVudCA9IC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovIChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJylcbiAgICApO1xuICAgIHRoaXMuI3NlYXJjaEVycm9yRWxlbWVudCA9IC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9ICovIChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZXJyb3InKVxuICAgICk7XG4gICAgdGhpcy4jc2VhcmNoRm9ybUVsZW1lbnQgPSAvKiogQHR5cGUge0hUTUxGb3JtRWxlbWVudH0gKi8gKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mb3JtJylcbiAgICApO1xuICAgIHRoaXMuI3dlYXRoZXJTZXJ2aWNlID0gd2VhdGhlclNlcnZpY2U7XG5cbiAgICB0aGlzLiNhdHRhY2hMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggbGlzdGVuZXJzIGZvciBzdWJtaXQgJiBjbGlja2luZyBzZWFyY2ggYnV0dG9uLlxuICAgKi9cbiAgI2F0dGFjaExpc3RlbmVycygpIHtcbiAgICB0aGlzLiNzZWFyY2hGb3JtRWxlbWVudC5vbnN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy4jc2VhcmNoKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICB0aGlzLiNzZWFyY2hCdXR0b25FbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB0aGlzLiNzZWFyY2goKTtcblxuICAgIC8vIE9ubHkgc2hvdyBzZWFyY2ggYnV0dG9uIHdoZW4gaW5wdXQgaGFzIGZvY3VzLlxuICAgIHRoaXMuI3NlYXJjaEJhckVsZW1lbnQub25mb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuI3NlYXJjaEJ1dHRvbkVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9O1xuXG4gICAgdGhpcy4jc2VhcmNoQmFyRWxlbWVudC5vbmJsdXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLiNzZWFyY2hCdXR0b25FbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGxvY2F0aW9uIG5hbWUgZGlzcGxheWVkIGluc2lkZSB0aGUgc2VhcmNoIGJveC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSBuYW1lXG4gICAqL1xuICB1cGRhdGVMb2NhdGlvbk5hbWUobmFtZSkge1xuICAgIHRoaXMuI3NlYXJjaEJhckVsZW1lbnQucGxhY2Vob2xkZXIgPSBuYW1lID8/ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHQgdG8gZ2V0IG5ldyB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBzZWFyY2ggbG9jYXRpb24uXG4gICAqL1xuICBhc3luYyAjc2VhcmNoKCkge1xuICAgIGNvbnN0IHsgdmFsdWU6IGxvY2F0aW9uIH0gPSB0aGlzLiNzZWFyY2hCYXJFbGVtZW50O1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgdGhpcy4jd2VhdGhlclNlcnZpY2UuZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24pO1xuICAgIGNvbnN0IGdvdFdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGEgIT09IG51bGw7XG4gICAgdGhpcy4jc2VhcmNoRXJyb3JFbGVtZW50LmlubmVySFRNTCA9IGdvdFdlYXRoZXJEYXRhXG4gICAgICA/ICc8YnIgLz4nXG4gICAgICA6ICdOb3QgZm91bmQnO1xuICAgIGlmICghZ290V2VhdGhlckRhdGEpIHJldHVybjtcblxuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHRoaXMuI3dlYXRoZXJTZXJ2aWNlLmdldEZvcmVjYXN0KGxvY2F0aW9uKTtcbiAgICBjb25zdCBnb3RGb3JlY2FzdERhdGEgPSBmb3JlY2FzdERhdGEgIT09IG51bGw7XG4gICAgaWYgKCFnb3RGb3JlY2FzdERhdGEpIHJldHVybjtcblxuICAgIERPTS5pbnN0YW5jZS5sb2FkTmV3V2VhdGhlckRhdGEod2VhdGhlckRhdGEsIGZvcmVjYXN0RGF0YSk7XG4gICAgdGhpcy51cGRhdGVMb2NhdGlvbk5hbWUod2VhdGhlckRhdGEubG9jYXRpb25OYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iLCIvLyBAdHMtY2hlY2tcblxuLy8gSSB3aXNoIEkgd2VyZSBhbiBleHRlbnNpb24gbWV0aG9kLi4gwq9cXF8o44OEKV8vwq9cbi8qKlxuICogUmV0dXJucyB0aGUgYXZlcmFnZSB2YWx1ZSBvZiB0aGUgcHJvdmlkZWQgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJyYXlcbiAqL1xuZnVuY3Rpb24gZ2V0QXZlcmFnZShhcnJheSkge1xuICBjb25zdCBzdW0gPSBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgY29uc3QgYXZlcmFnZSA9IHN1bSAvIGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuIGF2ZXJhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEF2ZXJhZ2U7XG4iLCIvLyBAdHMtY2hlY2tcblxuLy8gSSB3aXNoIEkgd2VyZSBhbiBleHRlbnNpb24gbWV0aG9kLi4gwq9cXF8o44OEKV8vwq9cbi8qKlxuICogUmV0dXJucyB3aGF0ZXZlciBvY2N1cnMgbW9zdCBmcmVxdWVudGx5IGluIHRoZSBwcm92aWRlZCBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICovXG5mdW5jdGlvbiBnZXRNb3N0T2NjdXJyZW5jZXMoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5XG4gICAgLnNvcnQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgYXJyYXkuZmlsdGVyKChlKSA9PiBlID09PSBhKS5sZW5ndGggLVxuICAgICAgICBhcnJheS5maWx0ZXIoKGUpID0+IGUgPT09IGIpLmxlbmd0aCxcbiAgICApXG4gICAgLnBvcCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNb3N0T2NjdXJyZW5jZXM7XG4iLCIvLyBAdHMtY2hlY2tcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuaW1wb3J0IERPTSBmcm9tICcuL2RvbS9kb20nO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL2RvbS9zZWFyY2hfYmFyJztcbmltcG9ydCBXZWF0aGVyU2VydmljZSBmcm9tICcuL3dlYXRoZXJfc2VydmljZS93ZWF0aGVyX3NlcnZpY2UnO1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCB3ZWF0aGVyU2VydmljZSA9IG5ldyBXZWF0aGVyU2VydmljZSgpO1xuICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgd2VhdGhlclNlcnZpY2UuZ2V0Q3VycmVudFdlYXRoZXIoJ090dGF3YScpO1xuICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IHdlYXRoZXJTZXJ2aWNlLmdldEZvcmVjYXN0KCdPdHRhd2EnKTtcblxuICBjb25zdCBkb20gPSBuZXcgRE9NKHdlYXRoZXIsIGZvcmVjYXN0KTtcbiAgY29uc3Qgc2VhcmNoQmFyID0gbmV3IFNlYXJjaEJhcih3ZWF0aGVyPy5sb2NhdGlvbk5hbWUgPz8gJycsIHdlYXRoZXJTZXJ2aWNlKTtcbn1cblxubWFpbigpO1xuIiwiLy8gQHRzLWNoZWNrXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbmltcG9ydCBnZXRBdmVyYWdlIGZyb20gJy4uL2hlbHBlcnMvYXZlcmFnZSc7XG5pbXBvcnQgZ2V0TW9zdE9jY3VycmVuY2VzIGZyb20gJy4uL2hlbHBlcnMvbW9zdF9vY2N1cnJlbmNlcyc7XG5pbXBvcnQgVGVtcGVyYXR1cmUgZnJvbSAnLi90ZW1wZXJhdHVyZSc7XG5pbXBvcnQgV2VhdGhlciBmcm9tICcuL3dlYXRoZXInO1xuaW1wb3J0IFdpbmQgZnJvbSAnLi93aW5kJztcblxuLyoqXG4gKiBEYXRhIGNsYXNzIGZvciBhIDUtZGF5IHdlYXRoZXIgZm9yZWNhc3QuXG4gKi9cbmNsYXNzIEZvcmVjYXN0IHtcbiAgLyoqXG4gICAqIEB0eXBlIHtXZWF0aGVyW119XG4gICAqL1xuICBkYXlzID0gW107XG5cbiAgI2tEYXRlUmVnZXggPSAvXFxkXFxkXFxkXFxkLVxcZFxcZC1cXGRcXGQvO1xuXG4gIGNvbnN0cnVjdG9yKGpzb24pIHtcbiAgICBsZXQgY29udmVydGVkRGF5Q2h1bmtzID0gLyoqIEB0eXBlIHtXZWF0aGVyW119ICovIChcbiAgICAgIGpzb24ubGlzdC5tYXAoKGRheSkgPT4gV2VhdGhlci5mcm9tSnNvbihkYXkpKVxuICAgICk7XG5cbiAgICAvKiogQHR5cGUge0FycmF5PEFycmF5PFdlYXRoZXI+Pn0gKi9cbiAgICBjb25zdCBkYXlBcnJheXMgPSBbXTtcblxuICAgIC8vIEFkZCBlYWNoIGNodW5rIHRoYXQgaXMgZm9yIHRoZSBzYW1lIGRheSB0byBhbiBhcnJheSBpbnNpZGUgW2RheXNdIHNvIHRoYXRcbiAgICAvLyBhdCB0aGUgZW5kIGVhY2ggdW5pcXVlIGRheSBpcyBjb250YWluZWQgaW4gMSBhcnJheS5cbiAgICB3aGlsZSAoY29udmVydGVkRGF5Q2h1bmtzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgZGF5T2ZXZWVrID0gY29udmVydGVkRGF5Q2h1bmtzWzBdLmRheTtcbiAgICAgIGRheUFycmF5cy5wdXNoKFxuICAgICAgICBjb252ZXJ0ZWREYXlDaHVua3MuZmlsdGVyKChkYXlDaHVuaykgPT4gZGF5Q2h1bmsuZGF5ID09PSBkYXlPZldlZWspLFxuICAgICAgKTtcbiAgICAgIGNvbnZlcnRlZERheUNodW5rcyA9IGNvbnZlcnRlZERheUNodW5rcy5maWx0ZXIoXG4gICAgICAgIChkYXlDaHVuaykgPT4gZGF5Q2h1bmsuZGF5ICE9PSBkYXlPZldlZWssXG4gICAgICApO1xuICAgIH1cblxuICAgIGRheUFycmF5cy5mb3JFYWNoKChkYXlBcnJheSkgPT4ge1xuICAgICAgdGhpcy5kYXlzLnB1c2goRm9yZWNhc3Qud2VhdGhlckZyb21Ib3VybHlTbmFwc2hvdHMoZGF5QXJyYXkpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIGRheS5sb2NhdGlvbk5hbWUgPSBqc29uLmNpdHkubmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIGFycmF5IG9mIFtXZWF0aGVyXSByZXByZXNlbnRpbmcgZGlmZmVyZW50IHRpbWVzIGluIGEgZGF5IGludG8gYVxuICAgKiBzaW5nbGUgZGF5J3MgW1dlYXRoZXJdLlxuICAgKlxuICAgKiBOZWNlc3NhcnkgYmVjYXVzZSBPcGVuIFdlYXRoZXIgTWFwIG9ubHkgcHJvdmlkZXMgZm9yZWNhc3QgZGF0YSBmb3IgZnJlZVxuICAgKiBhY2NvdW50cyBpbiA1LWRheSwgMy1ob3VyIGluY3JlbWVudHMgcmF0aGVyIHRoYW4gdGhlIGV4cGVjdGVkIGRhaWx5XG4gICAqIGZvcmNhc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7V2VhdGhlcltdfSBkYXlDaHVua3NcbiAgICogQHJldHVybiB7V2VhdGhlcn1cbiAgICovXG4gIHN0YXRpYyB3ZWF0aGVyRnJvbUhvdXJseVNuYXBzaG90cyhkYXlDaHVua3MpIHtcbiAgICAvLyBDcmVhdGUgdmFsdWVzIGZvciB0aGUgc2luZ2xlIGRheSB3ZWF0aGVyLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF5Q2h1bmtzWzBdLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gTWF0aC5tYXgoLi4uZGF5Q2h1bmtzLm1hcCgoZGF5KSA9PiBkYXkuaHVtaWRpdHkpKTtcbiAgICBjb25zdCBpY29uID0gZ2V0TW9zdE9jY3VycmVuY2VzKGRheUNodW5rcy5tYXAoKGRheSkgPT4gZGF5Lmljb24pKTtcblxuICAgIGNvbnN0IGFjdHVhbFRlbXBlcmF0dXJlID0gZ2V0QXZlcmFnZShcbiAgICAgIGRheUNodW5rcy5tYXAoKGRheSkgPT4gZGF5LnRlbXBlcmF0dXJlLmFjdHVhbCksXG4gICAgKTtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBnZXRBdmVyYWdlKFxuICAgICAgZGF5Q2h1bmtzLm1hcCgoZGF5KSA9PiBkYXkudGVtcGVyYXR1cmUuZmVlbHNMaWtlKSxcbiAgICApO1xuICAgIGNvbnN0IGhpZ2hUZW1wZXJhdHVyZSA9IE1hdGgubWF4KFxuICAgICAgLi4uZGF5Q2h1bmtzLm1hcCgoZGF5KSA9PiBkYXkudGVtcGVyYXR1cmUuaGlnaCksXG4gICAgKTtcbiAgICBjb25zdCBsb3dUZW1wZXJhdHVyZSA9IE1hdGgubWluKFxuICAgICAgLi4uZGF5Q2h1bmtzLm1hcCgoZGF5KSA9PiBkYXkudGVtcGVyYXR1cmUubG93KSxcbiAgICApO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gbmV3IFRlbXBlcmF0dXJlKFxuICAgICAgYWN0dWFsVGVtcGVyYXR1cmUsXG4gICAgICBmZWVsc0xpa2UsXG4gICAgICBoaWdoVGVtcGVyYXR1cmUsXG4gICAgICBsb3dUZW1wZXJhdHVyZSxcbiAgICApO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZ2V0QXZlcmFnZShkYXlDaHVua3MubWFwKChkYXkpID0+IGRheS53aW5kLnNwZWVkKSk7XG4gICAgY29uc3Qgd2luZEd1c3RzID0gZ2V0QXZlcmFnZShkYXlDaHVua3MubWFwKChkYXkpID0+IGRheS53aW5kLmd1c3RzID8/IDApKTtcbiAgICBjb25zdCB3aW5kID0gbmV3IFdpbmQod2luZFNwZWVkLCB3aW5kR3VzdHMpO1xuXG4gICAgY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyKFxuICAgICAgZGF5Q2h1bmtzWzBdLmRheSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgaHVtaWRpdHksXG4gICAgICBpY29uLFxuICAgICAgJycsXG4gICAgICB0ZW1wZXJhdHVyZSxcbiAgICAgIHdpbmQsXG4gICAgKTtcblxuICAgIHJldHVybiB3ZWF0aGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmVjYXN0O1xuIiwiLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogRGF0YSBjbGFzcyBmb3IgdGhlIHRlbXBlcmF0dXJlIHBvcnRpb24gb2YgYSB3ZWF0aGVyIHJlcG9ydC5cbiAqL1xuY2xhc3MgVGVtcGVyYXR1cmUge1xuICAvKipcbiAgICogVGhlIGFjdHVhbCB0ZW1wZXJhdHVyZSBub3QgY291bnRpbmcgY29uZGl0aW9ucyBsaWtlIHdpbmQsIGh1bWlkaXR5LCBldGMuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBhY3R1YWw7XG5cbiAgLyoqXG4gICAqIFRoZSBwZXJjZWl2ZWQgdGVtcGVyYXR1cmUgY291bnRpbmcgY29uZGl0aW9ucyBsaWtlIHdpbmQsIGh1bWlkaXR5LCBldGMuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBmZWVsc0xpa2U7XG5cbiAgLyoqXG4gICAqIFRoZSBoaWdoZXN0IGV4cGVjdGVkIHRlbXBlcmF0dXJlIGZvciB0aGUgZGF5LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgaGlnaDtcblxuICAvKipcbiAgICogVGhlIGxvd2VzdCBleHBlY3RlZCB0ZW1wZXJhdHVyZSBmb3IgdGhlIGRheS5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGxvdztcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjdHVhbFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmVlbHNMaWtlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFjdHVhbCwgZmVlbHNMaWtlLCBoaWdoLCBsb3cpIHtcbiAgICB0aGlzLmFjdHVhbCA9IE1hdGgucm91bmQoYWN0dWFsKTtcbiAgICB0aGlzLmZlZWxzTGlrZSA9IE1hdGgucm91bmQoZmVlbHNMaWtlKTtcbiAgICB0aGlzLmhpZ2ggPSBNYXRoLnJvdW5kKGhpZ2gpO1xuICAgIHRoaXMubG93ID0gTWF0aC5yb3VuZChsb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBlcmF0dXJlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8vIEB0cy1jaGVja1xuXG5pbXBvcnQgVGVtcGVyYXR1cmUgZnJvbSAnLi90ZW1wZXJhdHVyZSc7XG5pbXBvcnQgV2luZCBmcm9tICcuL3dpbmQnO1xuXG4vKipcbiAqIFRoZSB3ZWVrZGF5IG5hbWVzLCBzaW5jZSB0aGUgQVBJIHJldHVybnMgdGhlIGRheSBvZiB0aGUgd2VlayBhcyBhbiBpbnQgLSB0aGlzXG4gKiBtYXBzIHRob3NlIGludHMgdG8gdGhlIGFwcHJvcHJpYXRlIHN0cmluZyByZXByZXNlbnRhdGlvbi4gRWcgWzBdID0gJ1N1bicuXG4gKi9cbmNvbnN0IGtXZWVrRGF5TmFtZXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuXG4vKipcbiAqIERhdGEgY2xhc3MgcmVwcmVzZW50aW5nIGEgd2VhdGhlciByZXBvcnQuXG4gKi9cbmNsYXNzIFdlYXRoZXIge1xuICAvKipcbiAgICogVGhlIGRheSBvZiB0aGUgd2VlaywgZWcgJ1N1bicsICdNb24nLCBldGMuXG4gICAqXG4gICAqIE9ubHkgcG9wdWxhdGVkIGZvciBkYWlseSBmb3JlY2FzdC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGRheTtcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gb2YgdGhlIHdlYXRoZXIsIGVnICdCcm9rZW4gY2xvdWRzJywgJ1RodW5kZXIgc3Rvcm1zJywgZXRjLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZGVzY3JpcHRpb247XG5cbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIGh1bWlkaXR5O1xuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyB3ZWF0aGVyIHJlcG9ydCwgZWcgY2xvdWRzLCBzdW4sIGV0Yy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGljb247XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBsb2NhdGlvbiBmb3IgdGhlIGdpdmVuIHdlYXRoZXIgcmVwb3J0LCBlZyAnT3R0YXdhLCAnTG9uZG9uJ1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9jYXRpb25OYW1lO1xuXG4gIC8qKiBAdHlwZSB7VGVtcGVyYXR1cmV9ICovXG4gIHRlbXBlcmF0dXJlO1xuXG4gIC8qKiBAdHlwZSB7V2luZH0gKi9cbiAgd2luZDtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRheVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGh1bWlkaXR5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbk5hbWVcbiAgICogQHBhcmFtIHtUZW1wZXJhdHVyZX0gdGVtcGVyYXR1cmVcbiAgICogQHBhcmFtIHtXaW5kfSB3aW5kXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBkYXksXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaHVtaWRpdHksXG4gICAgaWNvbixcbiAgICBsb2NhdGlvbk5hbWUsXG4gICAgdGVtcGVyYXR1cmUsXG4gICAgd2luZCxcbiAgKSB7XG4gICAgdGhpcy5kYXkgPSBkYXk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIHRoaXMubG9jYXRpb25OYW1lID0gbG9jYXRpb25OYW1lO1xuICAgIHRoaXMudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcbiAgICB0aGlzLndpbmQgPSB3aW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBmcm9tIHRoZSBwcm92aWRlZCBbanNvbl0uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBqc29uXG4gICAqL1xuICBzdGF0aWMgZnJvbUpzb24oanNvbikge1xuICAgIGxldCBkYXk7XG4gICAgaWYgKGpzb24uZHRfdHh0KSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoanNvbi5kdF90eHQpO1xuICAgICAgZGF5ID0ga1dlZWtEYXlOYW1lc1tkYXRlLmdldERheSgpXTtcbiAgICB9XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBqc29uLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgaHVtaWRpdHkgPSBqc29uLm1haW4uaHVtaWRpdHk7XG4gICAgY29uc3QgaWNvbiA9IGpzb24ud2VhdGhlclswXS5pY29uO1xuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGpzb24ubmFtZTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IG5ldyBUZW1wZXJhdHVyZShcbiAgICAgIGpzb24ubWFpbi50ZW1wLFxuICAgICAganNvbi5tYWluLmZlZWxzX2xpa2UsXG4gICAgICBqc29uLm1haW4udGVtcF9tYXgsXG4gICAgICBqc29uLm1haW4udGVtcF9taW4sXG4gICAgKTtcbiAgICBjb25zdCB3aW5kID0gbmV3IFdpbmQoanNvbi53aW5kLnNwZWVkLCBqc29uLndpbmQuZ3VzdCk7XG5cbiAgICByZXR1cm4gbmV3IFdlYXRoZXIoXG4gICAgICBkYXkgPz8gJycsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGh1bWlkaXR5LFxuICAgICAgaWNvbixcbiAgICAgIGxvY2F0aW9uTmFtZSxcbiAgICAgIHRlbXBlcmF0dXJlLFxuICAgICAgd2luZCxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XG4iLCIvLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBEYXRhIGNsYXNzIGZvciB0aGUgd2luZCBwb3J0aW9uIG9mIGEgd2VhdGhlciByZXBvcnQuXG4gKi9cbmNsYXNzIFdpbmQge1xuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgc3BlZWQ7XG5cbiAgLyoqIEB0eXBlIHtudW1iZXIgfCBudWxsfSAqL1xuICBndXN0cztcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkXG4gICAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBbZ3VzdHNdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzcGVlZCwgZ3VzdHMpIHtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5ndXN0cyA9IHR5cGVvZiBndXN0cyA9PT0gJ251bWJlcicgPyBndXN0cyA6IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZDtcbiIsIi8vIEB0cy1jaGVja1xuXG5pbXBvcnQgV2VhdGhlciBmcm9tICcuLi93ZWF0aGVyL3dlYXRoZXInO1xuaW1wb3J0IEZvcmVjYXN0IGZyb20gJy4uL3dlYXRoZXIvZm9yZWNhc3QnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGFuIGludGVyZmFjZSB0byBnZXQgd2VhdGhlciBkYXRhLlxuICovXG5jbGFzcyBXZWF0aGVyU2VydmljZSB7XG4gIC8vIEZyZWUgQVBJIGtleSBmb3IgT3BlbiBXZWF0aGVyIE1hcCwgZG9lcyBub3QgcmVxdWlyZSBwcm90ZWN0aW9uLlxuICAvLyBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9cbiAgI2tBcGlLZXkgPSAnOTU2NmM1MTBmODBmZTA1NTNjNjA5YWJlOWMxMzMxOWEnO1xuXG4gICN1bml0cyA9ICdtZXRyaWMnO1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHdlYXRoZXIgZGF0YSBmb3IgdGhlIHByb3ZpZGVkIFtsb2NhdGlvbl0uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFdlYXRoZXIgfCBudWxsPn1cbiAgICovXG4gIGFzeW5jIGdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7XG4gICAgICAgIHRoaXMuI2tBcGlLZXlcbiAgICAgIH0mdW5pdHM9JHt0aGlzLiN1bml0c31gLFxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gV2VhdGhlci5mcm9tSnNvbihkYXRhKTtcbiAgICByZXR1cm4gd2VhdGhlcjtcbiAgfVxuXG4gIGFzeW5jIGdldEZvcmVjYXN0KGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke1xuICAgICAgICB0aGlzLiNrQXBpS2V5XG4gICAgICB9JnVuaXRzPW1ldHJpY2AsXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KGRhdGEpO1xuICAgIHJldHVybiBmb3JlY2FzdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyU2VydmljZTtcbiJdLCJuYW1lcyI6WyJGb3JlY2FzdCIsIldlYXRoZXIiLCJET00iLCJjb25zdHJ1Y3RvciIsImluaXRpYWxXZWF0aGVyRGF0YSIsImluaXRpYWxGb3JlY2FzdERhdGEiLCJpbnN0YW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93RXJyb3IiLCJsb2FkTmV3V2VhdGhlckRhdGEiLCJtYWluV2VhdGhlckVsZW1lbnQiLCJpbm5lckhUTUwiLCJ3ZWF0aGVyRGF0YSIsImZvcmVjYXN0RGF0YSIsInVwZGF0ZVRlbXBlcmF0dXJlIiwidGVtcGVyYXR1cmUiLCJhY3R1YWwiLCJ1cGRhdGVGZWVsc0xpa2UiLCJmZWVsc0xpa2UiLCJ1cGRhdGVXZWF0aGVySWNvbiIsImljb24iLCJ1cGRhdGVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwidXBkYXRlRm9yZWNhc3RBcmVhIiwidGVtcGVyYXR1cmVTdHJpbmciLCJ0b1N0cmluZyIsInRleHRDb250ZW50IiwiZmVlbHNMaWtlU3RyaW5nIiwibmV3Q2hpbGQiLCJjcmVhdGVFbGVtZW50IiwicmVwbGFjZUNoaWxkIiwiY2hpbGRyZW4iLCJpY29uSWQiLCJzcmMiLCJmb3JtYXR0ZWREZXNjcmlwdGlvbiIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmb3JlY2FzdCIsInJlcGxhY2VDaGlsZHJlbiIsImRheXMiLCJmb3JFYWNoIiwiZGF5IiwiZm9yZWNhc3RXaWRnZXQiLCJkYXlFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpY29uRWxlbWVudCIsInRlbXBlcmF0dXJlRWxlbWVudCIsImhpZ2giLCJXZWF0aGVyU2VydmljZSIsIlNlYXJjaEJhciIsImluaXRpYWxMb2NhdGlvbk5hbWUiLCJ3ZWF0aGVyU2VydmljZSIsInVwZGF0ZUxvY2F0aW9uTmFtZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uc3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uY2xpY2siLCJvbmZvY3VzIiwic3R5bGUiLCJvcGFjaXR5Iiwib25ibHVyIiwidmFsdWUiLCJsb2NhdGlvbiIsImdldEN1cnJlbnRXZWF0aGVyIiwiZ290V2VhdGhlckRhdGEiLCJnZXRGb3JlY2FzdCIsImdvdEZvcmVjYXN0RGF0YSIsImxvY2F0aW9uTmFtZSIsImdldEF2ZXJhZ2UiLCJhcnJheSIsInN1bSIsInJlZHVjZSIsImEiLCJiIiwiYXZlcmFnZSIsImxlbmd0aCIsImdldE1vc3RPY2N1cnJlbmNlcyIsInNvcnQiLCJmaWx0ZXIiLCJlIiwicG9wIiwibWFpbiIsIndlYXRoZXIiLCJkb20iLCJzZWFyY2hCYXIiLCJUZW1wZXJhdHVyZSIsIldpbmQiLCJqc29uIiwiY29udmVydGVkRGF5Q2h1bmtzIiwibGlzdCIsIm1hcCIsImZyb21Kc29uIiwiZGF5QXJyYXlzIiwiZGF5T2ZXZWVrIiwicHVzaCIsImRheUNodW5rIiwiZGF5QXJyYXkiLCJ3ZWF0aGVyRnJvbUhvdXJseVNuYXBzaG90cyIsImNpdHkiLCJkYXlDaHVua3MiLCJodW1pZGl0eSIsIk1hdGgiLCJtYXgiLCJhY3R1YWxUZW1wZXJhdHVyZSIsImhpZ2hUZW1wZXJhdHVyZSIsImxvd1RlbXBlcmF0dXJlIiwibWluIiwibG93Iiwid2luZFNwZWVkIiwid2luZCIsInNwZWVkIiwid2luZEd1c3RzIiwiZ3VzdHMiLCJyb3VuZCIsImtXZWVrRGF5TmFtZXMiLCJkdF90eHQiLCJkYXRlIiwiRGF0ZSIsImdldERheSIsInRlbXAiLCJmZWVsc19saWtlIiwidGVtcF9tYXgiLCJ0ZW1wX21pbiIsImd1c3QiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=