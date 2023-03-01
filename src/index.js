import { weatherFetch } from "./modules/weatherApi";
import { randomCity } from "./modules/randomCity";
import { domObject } from "./modules/domItems";
// Dom Elements

domObject.searchInput.setAttribute("placeholder", randomCity());
//!Variables

//* Base Functions

weatherFetch();

//! EventListeners

function makeQuery(e) {
  if (domObject.searchInput.value === "") {
    weatherFetch(e);
    domObject.searchInput.setAttribute("placeholder", randomCity());
  } else {
    weatherFetch(domObject.searchInput.value);
    domObject.searchInput.value = "";
  }
}

domObject.searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  makeQuery();
});

domObject.hamburgerMenuButton.addEventListener("click", () => {
  if (
    domObject.menuItem.classList.contains !== "active" &&
    domObject.wModal.classList.contains !== "active"
  ) {
    domObject.menuItem.classList.add("active");
    domObject.wModal.classList.add("active");
    domObject.menuItem.classList.remove("deactive");
    domObject.wModal.classList.remove("deactive");
  } else {
    domObject.menuItem.classList.remove("active");
    domObject.wModal.classList.remove("active");
    domObject.menuItem.classList.add("deactive");
    domObject.wModal.classList.add("deactive");
  }
});

document.addEventListener("click", (e) => {
  if (
    (domObject.menuItem.classList.contains("active") &&
      e.target === domObject.wModal) ||
    e.target === domObject.closeMenuItem ||
    e.target === domObject.closeMenuItemB
  ) {
    domObject.menuItem.classList.remove("active");
    domObject.wModal.classList.remove("active");
    domObject.menuItem.classList.add("deactive");
    domObject.wModal.classList.add("deactive");
  }
});

export { makeQuery };
