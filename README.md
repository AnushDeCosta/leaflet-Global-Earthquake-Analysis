# Seismic Sentinel: An Interactive Atlas of Global Earthquakes

![Earthquake](https://github.com/AnushDeCosta/leaflet-Global-Earthquake-Analysis/assets/67308030/c041164d-fdbf-4a56-b0df-56dda58e4dde)

## Introduction
This revolved around the creation of an interactive map for illustrating earthquake data. This challenge necessitated the application of Leaflet.js, along with HTML/CSS/JavaScript, to present data from the United States Geological Survey (USGS) concerning global earthquake locations and magnitudes. The primary objective of the project was to establish an aesthetically pleasing, interactive map that enabled users to scrutinize earthquake data via diverse markers, popups, and overlays.

There are two key components to the Module 15 Challenge:
1. Construction of a Leaflet-based map that charts all earthquakes from the supplied data set according to their longitude and latitude.
2. Bonus - Inclusion of additional map layers to the earthquake map, featuring tectonic plate boundaries and a secondary data set on earthquakes.
The D3 library was employed to connect to the geojson API for initial data from URL https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson and from URL https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json for Part 2.

## Construction of a Map Using Leaflet
A Leaflet map was constructed to plot all earthquakes from the given dataset according to their longitude and latitude. The process commenced with the importation of requisite libraries, including Leaflet, to facilitate the map's creation. The dataset was subsequently loaded into the script using the appropriate method and stored in a variable for easy access.

Next, the map was created by determining the initial zoom level and center location. The TileLayer was incorporated into the map to provide the base layer for the visualization. This TileLayer was configured to load without errors and enabled the display of the map tiles on the screen.

To plot earthquake locations, data from the dataset was iterated through to retrieve the longitude and latitude for each quake. Markers were established using Leaflet's marker function and positioned at the respective coordinates on the map. Marker sizes were designed to reflect the earthquake's magnitude, offering a vivid visual depiction of the data.

To supply additional data about each quake, a tooltip was attached to each marker. This tooltip presented the magnitude, location, and depth of the earthquake, providing an expanded view of the data points.

Ultimately, to enhance the informational value of the visualization, each marker's color was adjusted based on the depth of the earthquake. A legend was incorporated into the map to clearly explain the color coding and the depth ranges each color represented.

## Bonus
In this section, several map layers were added to the earthquake map, including tectonic plate boundaries. The map was once again created using the Leaflet library in JavaScript. Map layers were defined using tile layers from OpenStreetMap and Esri WorldTopoMap. The earthquake data was again sourced from the US Geological Survey and plotted as circle markers using the createMarker function. The tectonic plate boundaries data was sourced from a GitHub repository and added as a GeoJSON layer with a black outline. The layers were organized using a layer control object that enables users to switch between base and overlay layers. A legend was constructed to showcase the color code for earthquake depths. The resulting map illustrates the earthquake locations, magnitudes, depths, and tectonic plate boundaries.

## Getting Started / How to Use
- Clone the repository.
- Open each `index.html` file in a web browser.

## Tools
- VSCode
- HTML
- Javascript
- Leaflet
- D3.js
- CSS
- Web Browser (Google Chrome)

## Files
### - Part 1
- HTML File
  - [index.html](./Leaflet-Part-1/index.html)

- Main Javascript
  - [logic.js](./Leaflet-Part-1/static/js/logic.js)

### - Part 2 (Bonus)
- HTML File
  - [index.html](./Leaflet-Part-2/index.html)

- Main Javascript
  - [logic.js](./Leaflet-Part-2/static/js/logic.js)
