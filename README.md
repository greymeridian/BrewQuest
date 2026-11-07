# BrewQuest 🍺

A Canadian brewery discovery app and personal tasting journal, built for the COSC 219 Client-side Web Systems final project at Okanagan College.

**Authors:** Ronald Lorette and Felipe Rebello
**Status:** Planning (M1 Proposal)

## About

BrewQuest will help users discover breweries by name, city, or province using live data from Open Brewery DB. Users will be able to filter results by brewery type, save a wishlist, and record visits with personal ratings and tasting notes.

The initial focus is Canadian breweries, including Kelowna.

## Planned Features

- Search for breweries by name, city, or province.
- Filter results by brewery type.
- Save breweries to a wishlist.
- Record visits, ratings, and tasting notes.
- Persist wishlists and journal entries using `localStorage`.
- Provide responsive layouts and keyboard-accessible controls.
- Display loading, empty, loaded, and error states.

Maps, user accounts, and shared reviews are outside the initial scope.

## Technology

- HTML
- CSS
- JavaScript modules
- Fetch API
- Browser `localStorage`

The application will run entirely in the browser, with no backend or database.

## Data Source

BrewQuest will use **Open Brewery DB**, a free public API that requires no API key.

- [API documentation](https://api.openbrewerydb.org/docs/)
- [API source code](https://github.com/openbrewerydb/openbrewerydb-laravel-api)

A browser-console `fetch` test successfully returned seven Kelowna brewery records, confirming JavaScript access and local coverage. Brewery information may be incomplete or outdated.

## Running the Project

The application has not been implemented yet.

Once the initial application is available:

1. Clone or download this repository.
2. Open the project in Visual Studio Code.
3. Serve `index.html` using Live Server.
4. Open the local address provided by Live Server.

An internet connection will be required to retrieve brewery data. No API credentials will be needed.

**Live deployment:** Not yet available. A GitHub Pages link will be added before final submission.

## Design Note

We plan to store wishlists and journal entries in `localStorage` because the project runs entirely in the browser and should preserve progress between visits. We considered `sessionStorage`, but its shorter lifetime would not suit a personal journal. Accounts and cloud storage are outside the project scope, so saved entries will remain specific to the browser and device used and may be lost if browser data is cleared.

## Accessibility Statement

Accessibility testing has not yet been performed because the application is in the planning stage.

We plan to test keyboard navigation, visible focus, form labels, heading structure, colour contrast, and announcements for updated results and errors. We will also run an automated accessibility audit. This section will be updated with the tools used, results, and known limitations.

## AI Use Statement

OpenAI ChatGPT was used to brainstorm project ideas and research candidate APIs.

This statement will be updated to reflect any further AI assistance. Both authors are responsible for understanding and explaining all submitted work.

## Division of Work

| Contributor    | Planned responsibilities                                     |
| -------------- | ------------------------------------------------------------ |
| Ronny Lorette  | API requests, search, filtering, and brewery details         |
| Felipe Rebello | Wishlist, visit journal, ratings, notes, and persistence     |
| Both           | Code review, integration, responsive design, accessibility testing, documentation, GitHub Pages deployment, and the demo |

Both partners will write HTML, CSS, and JavaScript within their features. This section will be updated to reflect actual contributions.

## Licence

## Licence

No licence is currently provided for this project. Ronny and Felipe may agree on a licence and add a `LICENSE` file in the future.
