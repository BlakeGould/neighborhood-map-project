To run the application, download the repo from https://github.com/gouldbf/neighborhood-map-project and open index.html in your browser.

Using the app:
- Click a marker to reveal current weather for a crag (API restricts to 10 calls per minute, so don't get too carried away).
- Type in the search box to refine results, delete characters to expand results.
- Once you know the current weather, pick a crag and go climb!

Design Decisions:
- Simultaneous display of multiple infoWindows is allowed so that the user can compare weather conditions of multiple crags at the same time.
- Marker bounce is set to toggle instead of timeout as a visual reminder of which crags the user has already checked the weather for.

Feedback:
Contact gouldbf@gmail.com with feedback.