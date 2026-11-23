import { fetchBreweries } from "./api.js";

const typeSelect = document.querySelector("#brewery-type");
const status = document.querySelector("#status");
const list = document.querySelector("#breweries");

let breweries = [];

function renderBreweries() {
  const selectedType = typeSelect.value;
  const visibleBreweries = selectedType
    ? breweries.filter(brewery => brewery.brewery_type === selectedType)
    : breweries;

  const items = visibleBreweries.map(brewery => {
    const item = document.createElement("li");
    const name = document.createElement("strong");
    const details = [
      brewery.brewery_type,
      brewery.city,
      brewery.state_province
    ].filter(part => part).join(" · ");

    name.textContent = brewery.name;
    item.append(name, ` — ${details}`);
    return item;
  });

  list.replaceChildren(...items);
  status.textContent = items.length
    ? `Showing ${items.length} of ${breweries.length} breweries.`
    : "No breweries found.";
}

async function loadBreweries() {
  status.textContent = "Loading Kelowna breweries…";

  try {
    breweries = await fetchBreweries("kelowna");
  } catch (error) {
    status.textContent = "Could not load breweries. Reload the page to try again.";
    console.error(error);
    return;
  }

  const types = [];

  breweries.forEach(brewery => {
    const type = brewery.brewery_type;

    if (type && !types.includes(type)) {
      types.push(type);
    }
  });

  types.sort();

  types.forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeSelect.append(option);
  });

  typeSelect.disabled = types.length === 0;
  renderBreweries();
}

typeSelect.addEventListener("change", renderBreweries);
loadBreweries();