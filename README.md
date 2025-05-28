## Real-time Relative Time Refresh
### Context
The application displays a list of news articles, each showing the time since publication (e.g., "3 minutes ago") using a relative time format. However, the relative time does not update dynamically as time passes—the user must refresh the page to see updated values.

### Requirement
Update the application so that the relative time displayed for each news article is refreshed in real-time.

- The relative time (e.g., "a minute ago", "5 minutes ago") shown for each news item should automatically update as time passes.
- You must not make any changes to the following files:
  - src/news-data.ts (the mocked news data)
  - src/relative-time-format.ts (the relative time formatting utility)
