const SEARCH_URL = "https://api.openbrewerydb.org/v1/breweries/search";

export async function fetchBreweries(query) {
  const params = new URLSearchParams({ query: query }).toString();
  const response = await fetch(`${SEARCH_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Open Brewery DB returned HTTP ${response.status}`);
  }

  return response.json();
}