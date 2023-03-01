const wIO = {
  cityVal: document.getElementById("city-val"),
  tempVal: document.getElementById("temp-val"),
  humidityVal: document.getElementById("humidity-val"),
  feelsLikeVal: document.getElementById("feels-like-val"),
  minVal: document.getElementById("min"),
  maxVal: document.getElementById("max"),
  descriptionVal: document.getElementById("description-text"),
  dataValLangEng: document.querySelector('[data-val="eng"]'),
  dataValLangTur: document.querySelector('[data-val="tur"]'),
  dataValCel: document.querySelector('[data-val="cel"]'),
  dataValFah: document.querySelector('[data-val="fah"]'),
  menuSelection: document.getElementById("menu-selection-id"),
  humidityText: document.getElementById("humidity-text"),
  feelsLikeText: document.getElementById("feelslike-text"),
  tempText: document.getElementById("temp-minmax-text"),
};

let domObject = {
  searchInput: document.getElementById("search-input"),
  searchButton: document.getElementById("search-button"),
  hamburgerMenuButton: document.getElementById("hamburger-menu-button"),
  wModal: document.getElementById("w-modal"),
  menuItem: document.getElementById("menu-item"),
  closeMenuItem: document.getElementById("close-menu"),
  closeMenuItemB: document.getElementById("close-menu-item"),
};
export { wIO, domObject };
