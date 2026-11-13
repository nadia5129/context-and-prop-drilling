# Weather Desk

The starter project for the SDEV 355 lab on prop drilling and the Context API.

A small weather dashboard for four cities. It works, but the temperature units
and the selected city are passed down through components that never use them.
In the lab you replace those props with context, one step at a time.

## Running it

```bash
npm install
npm run dev
```

Then open the address Vite prints, usually http://localhost:5173.

## What is where

| file | what it does |
|---|---|
| `src/App.jsx` | the routes, the units, and the selected city |
| `src/components/Layout.jsx` | the frame every page is drawn inside |
| `src/components/Header.jsx` | the title, clock, page links, city picker and units toggle |
| `src/components/TodayPage.jsx` | `/`: current conditions and the hourly forecast |
| `src/components/WeekPage.jsx` | `/week`: the seven-day forecast |
| `src/components/Temperature.jsx` | shows one temperature in the chosen units |
| `src/data/forecasts.json` | the forecast for each city, in °C |

The forecasts are a local file, so the app needs no API key and no network.

## The finished version

The `solution` branch holds the app as it is at the end of the lab:

```bash
git checkout solution
```
