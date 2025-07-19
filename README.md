# Service worker + Tagesschau API

This project explores how to use a service worker to implement a cache-first strategy when fetching news from the Tagesschau API.

### Features
- Loads and displays news articles using the [Tagesschau public API](https://www.tagesschau.de/api2/).
- Implements a cache-first approach using a service worker.
- Supports offline access: the web can still show previously loaded news even if the network is poor or unavailable (e.g., server down or offline mode).

### Demo
[screen-capture.webm](https://github.com/user-attachments/assets/aa8b564c-724f-4fad-83ea-7c4bb2e2ffd7)


### 🚧 Notes
- The initial content must be loaded at least once to be available offline.
- This project is intended for learning and experimenting with service workers and caching strategies.
