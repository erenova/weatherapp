/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeQuery\": () => (/* binding */ makeQuery)\n/* harmony export */ });\n/* harmony import */ var _modules_weatherApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherApi */ \"./src/modules/weatherApi.js\");\n/* harmony import */ var _modules_randomCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/randomCity */ \"./src/modules/randomCity.js\");\n/* harmony import */ var _modules_domItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/domItems */ \"./src/modules/domItems.js\");\n\n\n\n// Dom Elements\n\n_modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.searchInput.setAttribute(\"placeholder\", (0,_modules_randomCity__WEBPACK_IMPORTED_MODULE_1__.randomCity)());\n//!Variables\n\n//* Base Functions\n\n(0,_modules_weatherApi__WEBPACK_IMPORTED_MODULE_0__.weatherFetch)();\n\n//! EventListeners\n\nfunction makeQuery(e) {\n  if (_modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.searchInput.value === \"\") {\n    (0,_modules_weatherApi__WEBPACK_IMPORTED_MODULE_0__.weatherFetch)(e);\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.searchInput.setAttribute(\"placeholder\", (0,_modules_randomCity__WEBPACK_IMPORTED_MODULE_1__.randomCity)());\n  } else {\n    (0,_modules_weatherApi__WEBPACK_IMPORTED_MODULE_0__.weatherFetch)(_modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.searchInput.value);\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.searchInput.value = \"\";\n  }\n}\n\n_modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.searchButton.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  makeQuery();\n});\n\n_modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.hamburgerMenuButton.addEventListener(\"click\", () => {\n  if (\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.menuItem.classList.contains !== \"active\" &&\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.wModal.classList.contains !== \"active\"\n  ) {\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.menuItem.classList.add(\"active\");\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.wModal.classList.add(\"active\");\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.menuItem.classList.remove(\"deactive\");\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.wModal.classList.remove(\"deactive\");\n  } else {\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.menuItem.classList.remove(\"active\");\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.wModal.classList.remove(\"active\");\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.menuItem.classList.add(\"deactive\");\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.wModal.classList.add(\"deactive\");\n  }\n});\n\ndocument.addEventListener(\"click\", (e) => {\n  if (\n    (_modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.menuItem.classList.contains(\"active\") &&\n      e.target === _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.wModal) ||\n    e.target === _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.closeMenuItem ||\n    e.target === _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.closeMenuItemB\n  ) {\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.menuItem.classList.remove(\"active\");\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.wModal.classList.remove(\"active\");\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.menuItem.classList.add(\"deactive\");\n    _modules_domItems__WEBPACK_IMPORTED_MODULE_2__.domObject.wModal.classList.add(\"deactive\");\n  }\n});\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/domItems.js":
/*!*********************************!*\
  !*** ./src/modules/domItems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domObject\": () => (/* binding */ domObject),\n/* harmony export */   \"wIO\": () => (/* binding */ wIO)\n/* harmony export */ });\nconst wIO = {\n  cityVal: document.getElementById(\"city-val\"),\n  tempVal: document.getElementById(\"temp-val\"),\n  humidityVal: document.getElementById(\"humidity-val\"),\n  feelsLikeVal: document.getElementById(\"feels-like-val\"),\n  minVal: document.getElementById(\"min\"),\n  maxVal: document.getElementById(\"max\"),\n  descriptionVal: document.getElementById(\"description-text\"),\n  dataValLangEng: document.querySelector('[data-val=\"eng\"]'),\n  dataValLangTur: document.querySelector('[data-val=\"tur\"]'),\n  dataValCel: document.querySelector('[data-val=\"cel\"]'),\n  dataValFah: document.querySelector('[data-val=\"fah\"]'),\n  menuSelection: document.getElementById(\"menu-selection-id\"),\n  humidityText: document.getElementById(\"humidity-text\"),\n  feelsLikeText: document.getElementById(\"feelslike-text\"),\n  tempText: document.getElementById(\"temp-minmax-text\"),\n};\n\nlet domObject = {\n  searchInput: document.getElementById(\"search-input\"),\n  searchButton: document.getElementById(\"search-button\"),\n  hamburgerMenuButton: document.getElementById(\"hamburger-menu-button\"),\n  wModal: document.getElementById(\"w-modal\"),\n  menuItem: document.getElementById(\"menu-item\"),\n  closeMenuItem: document.getElementById(\"close-menu\"),\n  closeMenuItemB: document.getElementById(\"close-menu-item\"),\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/domItems.js?");

/***/ }),

/***/ "./src/modules/randomCity.js":
/*!***********************************!*\
  !*** ./src/modules/randomCity.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomCity\": () => (/* binding */ randomCity)\n/* harmony export */ });\nfunction randomCity() {\n  const cities = [\n    \"Kabul\",\n    \"Tirana\",\n    \"Algiers\",\n    \"Andorra la Vella\",\n    \"Luanda\",\n    \"Saint John's\",\n    \"Buenos Aires\",\n    \"Yerevan\",\n    \"Canberra\",\n    \"Vienna\",\n    \"Baku\",\n    \"Nassau\",\n    \"Manama\",\n    \"Dhaka\",\n    \"Bridgetown\",\n    \"Minsk\",\n    \"Brussels\",\n    \"Belmopan\",\n    \"Porto-Novo\",\n    \"Thimphu\",\n    \"La Paz\",\n    \"Sarajevo\",\n    \"Gaborone\",\n    \"Brasília\",\n    \"Bandar Seri Begawan\",\n    \"Sofia\",\n    \"Ouagadougou\",\n    \"Bujumbura\",\n    \"Phnom Penh\",\n    \"Yaoundé\",\n    \"Ottawa\",\n    \"Bangui\",\n    \"N'Djamena\",\n    \"Santiago\",\n    \"Beijing\",\n    \"Bogotá\",\n    \"Moroni\",\n    \"Kinshasa\",\n    \"Brazzaville\",\n    \"San José\",\n    \"Yamoussoukro\",\n    \"Zagreb\",\n    \"Havana\",\n    \"Nicosia\",\n    \"Prague\",\n    \"Copenhagen\",\n    \"Djibouti\",\n    \"Roseau\",\n    \"Santo Domingo\",\n    \"Dili\",\n    \"Quito\",\n    \"Cairo\",\n    \"San Salvador\",\n    \"Malabo\",\n    \"Asmara\",\n    \"Tallinn\",\n    \"Mbabane\",\n    \"Addis Ababa\",\n    \"Suva\",\n    \"Helsinki\",\n    \"Paris\",\n    \"Libreville\",\n    \"Banjul\",\n    \"Tbilisi\",\n    \"Berlin\",\n    \"Accra\",\n    \"Athens\",\n    \"Saint George's\",\n    \"Guatemala City\",\n    \"Conakry\",\n    \"Bissau\",\n    \"Georgetown\",\n    \"Port-au-Prince\",\n    \"Tegucigalpa\",\n    \"Budapest\",\n    \"Reykjavik\",\n    \"New Delhi\",\n    \"Jakarta\",\n    \"Tehran\",\n    \"Baghdad\",\n    \"Dublin\",\n    \"Jerusalem\",\n    \"Rome\",\n    \"Kingston\",\n    \"Tokyo\",\n    \"Amman\",\n    \"Astana\",\n    \"Nairobi\",\n    \"Tarawa\",\n    \"Pyongyang\",\n    \"Seoul\",\n    \"Kuwait City\",\n    \"Bishkek\",\n    \"Vientiane\",\n    \"Riga\",\n    \"Beirut\",\n    \"Maseru\",\n    \"Monrovia\",\n    \"Tripoli\",\n    \"Vaduz\",\n    \"Vilnius\",\n    \"Luxembourg\",\n    \"Skopje\",\n    \"Antananarivo\",\n    \"Lilongwe\",\n    \"Kuala Lumpur\",\n    \"Male\",\n    \"Bamako\",\n    \"Valletta\",\n    \"Majuro\",\n    \"Nouakchott\",\n    \"Port Louis\",\n    \"Mexico City\",\n    \"Palikir\",\n    \"Chisinau\",\n    \"Monaco\",\n    \"Ulaanbaatar\",\n    \"Podgorica\",\n    \"Rabat\",\n    \"Maputo\",\n    \"Naypyidaw\",\n    \"Windhoek\",\n    \"Kathmandu\",\n    \"Amsterdam\",\n    \"Wellington\",\n    \"Managua\",\n    \"Niamey\",\n    \"Abuja\",\n    \"Oslo\",\n    \"Muscat\",\n    \"Islamabad\",\n    \"Panama City\",\n    \"Port Moresby\",\n    \"Asunción\",\n    \"Lima\",\n    \"Manila\",\n    \"Warsaw\",\n    \"Lisbon\",\n    \"Doha\",\n    \"Bucharest\",\n    \"Moscow\",\n    \"Kigali\",\n    \"Basseterre\",\n    \"Castries\",\n    \"Kingstown\",\n    \"Apia\",\n    \"San Marino\",\n    \"São Tomé\",\n    \"Riyadh\",\n    \"Dakar\",\n    \"Belgrade\",\n    \"Victoria\",\n    \"Freetown\",\n    \"Singapore\",\n    \"Bratislava\",\n    \"Ljubljana\",\n    \"Honiara\",\n    \"Mogadishu\",\n    \"Pretoria\",\n    \"Juba\",\n    \"Madrid\",\n    \"Colombo\",\n    \"Khartoum\",\n    \"Paramaribo\",\n    \"Stockholm\",\n    \"Bern\",\n    \"Damascus\",\n    \"Taipei\",\n    \"Dushanbe\",\n    \"Dodoma\",\n    \"Bangkok\",\n    \"Lomé\",\n    \"Nuku'alofa\",\n    \"Port of Spain\",\n    \"Tunis\",\n    \"Ankara\",\n    \"Ashgabat\",\n    \"Funafuti\",\n    \"Kampala\",\n    \"Kyiv\",\n    \"Abu Dhabi\",\n    \"London\",\n    \"Washington D.C.\",\n    \"Montevideo\",\n    \"Tashkent\",\n    \"Port Vila\",\n    \"Vatican City\",\n    \"Caracas\",\n    \"Hanoi\",\n    \"Sana'a\",\n    \"Lusaka\",\n    \"Harare\",\n    \"Istanbul\",\n  ];\n  let randomProcess = Math.floor(Math.random() * cities.length);\n  return cities[randomProcess];\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/randomCity.js?");

/***/ }),

/***/ "./src/modules/weatherApi.js":
/*!***********************************!*\
  !*** ./src/modules/weatherApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weatherFetch\": () => (/* binding */ weatherFetch)\n/* harmony export */ });\n/* harmony import */ var _randomCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomCity */ \"./src/modules/randomCity.js\");\n/* harmony import */ var _domItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domItems */ \"./src/modules/domItems.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n\n_domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.menuSelection.addEventListener(\"click\", () => {\n  if (_domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.dataValLangTur.checked === true && languageSelection === 0) {\n    languageSelection = 1;\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.humidityText.innerText = \"Nem:\";\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.feelsLikeText.innerText = \"Hissedilen:\";\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.tempText.innerText = \"Sıcaklık min/max:\";\n    (0,_index__WEBPACK_IMPORTED_MODULE_2__.makeQuery)(_domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.cityVal.innerText);\n  } else if (_domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.dataValLangEng.checked === true && languageSelection === 1) {\n    languageSelection = 0;\n    (0,_index__WEBPACK_IMPORTED_MODULE_2__.makeQuery)(_domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.cityVal.innerText);\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.humidityText.innerText = \"Humidity:\";\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.feelsLikeText.innerText = \"Feels like:\";\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.tempText.innerText = \"temp Min/Max:\";\n  }\n\n  if (_domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.dataValFah.checked === true && tempScales === 0) {\n    tempScales = 1;\n    (0,_index__WEBPACK_IMPORTED_MODULE_2__.makeQuery)(_domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.cityVal.innerText);\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.tempVal.classList.remove(\"celsius-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.feelsLikeVal.classList.remove(\"celsius-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.minVal.classList.remove(\"celsius-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.maxVal.classList.remove(\"celsius-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.tempVal.classList.add(\"fahrenheit-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.feelsLikeVal.classList.add(\"fahrenheit-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.minVal.classList.add(\"fahrenheit-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.maxVal.classList.add(\"fahrenheit-selector\");\n  } else if (_domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.dataValCel.checked === true && tempScales === 1) {\n    tempScales = 0;\n    (0,_index__WEBPACK_IMPORTED_MODULE_2__.makeQuery)(_domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.cityVal.innerText);\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.tempVal.classList.remove(\"fahrenheit-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.feelsLikeVal.classList.remove(\"fahrenheit-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.minVal.classList.remove(\"fahrenheit-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.maxVal.classList.remove(\"fahrenheit-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.tempVal.classList.add(\"celsius-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.feelsLikeVal.classList.add(\"celsius-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.minVal.classList.add(\"celsius-selector\");\n    _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.maxVal.classList.add(\"celsius-selector\");\n  }\n});\n\nlet languageSelection = 0;\nlet tempScales = 0;\nlet API_KEY = \"a055a31ad52ff33e427c426d8fe2eacb\";\nlet lang = [\"en\", \"tr\"];\nlet tempUnit = [\"metric\", \"standard\"];\nasync function weatherFetch(cityInput = (0,_randomCity__WEBPACK_IMPORTED_MODULE_0__.randomCity)()) {\n  try {\n    let response = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${API_KEY}&lang=${lang[languageSelection]}&units=${tempUnit[tempScales]}`\n    );\n    let parseJson = await response.json();\n    if (parseJson.cod !== \"404\") {\n      console.log(parseJson);\n      _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.cityVal.innerText = parseJson.name;\n      _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.tempVal.innerText = Math.floor(parseJson.main.temp);\n      _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.humidityVal.innerText = parseJson.main.humidity;\n      _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.feelsLikeVal.innerText = Math.floor(parseJson.main.feels_like);\n      _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.minVal.innerText = Math.floor(parseJson.main.temp_min);\n      _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.maxVal.innerText = Math.floor(parseJson.main.temp_max);\n      _domItems__WEBPACK_IMPORTED_MODULE_1__.wIO.descriptionVal.innerText = parseJson.weather[0].description;\n    } else {\n    }\n  } catch (error) {\n    console.error(error);\n    console.log(\"API düzgün bir şekilde çekilemedi.\");\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weatherApi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;