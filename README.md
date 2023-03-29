# Leaflet-Challenge

# BootCamp - Module 15 Challeneg

Student Name - Anush De Costa Module 15 Challenge Name - Leaflet-Challenge

## Introduction

The task for Module 15 challenge was to creating an interactive map to visualize earthquake data. The challenge required the use of Leaflet.js and HTML/CSS/JavaScript to display data from the United States Geological Survey (USGS) about the location and magnitude of earthquakes around the world. The aim of the project was to create a visually appealing and interactive map that allowed users to explore earthquake data through various markers, popups, and overlays.

There are two main parts in the Module 15 Challenge:

- Creating a map using Leaflet that plots all of the earthquakes from the provided data set based on their longitude and latitude.

- Bonus - Adding multiple map layers to the earthquake map including tectonic plate boundaries and a second data set on earthquakes.

The D3 library was used to connect to the geojson API for initial data from URL <https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson> and from URL <https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json> for Part 2.

## Creating a map using Leaflet

A map using Leaflet was created to plot all the earthquakes from the provided dataset based on their longitude and latitude. The process began by importing the necessary libraries, including Leaflet, to allow for the creation of the map. The dataset was then loaded into the script using the appropriate method and stored in a variable for ease of access.

Next, the map was created by defining the initial zoom level and center location. The TileLayer was added to the map to provide the base layer for the visualization. This TileLayer was configured to load without any errors and allowed for the display of the map tiles on the screen.

To plot the earthquake locations on the map, the data from the dataset was looped through to retrieve the longitude and latitude for each earthquake. Markers were created using Leaflet's marker function and placed at the corresponding coordinates on the map. The size of the markers was set to correspond with the magnitude of the earthquake, allowing for a clear visual representation of the data.

To provide additional information about each earthquake, a tooltip was added to each marker. This tooltip displayed the magnitude, location, and depth of the earthquake, providing more details about the data points.

Finally, to make the visualization more informative, the color of each marker was also set to change based on the depth of the earthquake. A legend was added to the map to provide a clear explanation of the color-coding and what depth ranges each color corresponded to.

## Bonus

In this section multiple map layers were added to the earthquake map, including tectonic plate boundaries. The map was once again created using Leaflet library in JavaScript. The map layers were defined using tile layers from OpenStreetMap and Esri WorldTopoMap. The earthquake data was again obtained from the US Geological Survey and was plotted as circle markers using the createMarker function. The tectonic plate boundaries data was obtained from a GitHub repository and was added as a GeoJSON layer with a black outline. The layers were organized using a layer control object that allows users to switch between base and overlay layers. A legend was created to display the color code for earthquake depths. The resulting map shows the earthquake locations, magnitudes, depths, and tectonic plate boundaries.

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
