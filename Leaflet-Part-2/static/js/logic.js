// Define tile layers with OpenStreetMap and Esri WorldTopoMap tiles
var openStreetMapTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
});
var worldTopoMapTiles = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
});

// Create a map object and set center and zoom level
var myMap = L.map("map", {
    center: [5.87, 80.77],
    zoom: 4,
    layers: [openStreetMapTiles]
});

// Define earthquake data source URL
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Define tectonic plates data source URL
var platesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// Define a function to create circle markers for each earthquake feature
function createMarker(feature, latlng) {
  var mag = feature.properties.mag;
  var depth = feature.geometry.coordinates[2];
  var color = getColor(depth);
  var marker = L.circleMarker(latlng, {
    radius: mag * 4,
    fillColor: color,
    color: "#fefffe",
    weight: 2,
    opacity: 1,
    fillOpacity: .7
  });
  marker.bindPopup("<h3> Location: " + feature.properties.place + "</h3><hr><p>" + new Date(feature.properties.time) + 
                        "</p>" + "<br><h3> Magnitude: " + feature.properties.mag +  "</h3>" + "<br><h3> depth: " + feature.geometry.coordinates[2] + "</h3>")  
  return marker;
}

// Retrieve earthquake data with D3
d3.json(url).then(function(response) {
    console.log(response);
  
    // Create a GeoJSON layer for the earthquake data with circle markers
    var earthquakesLayer = L.geoJSON(response, {
      pointToLayer: createMarker
    });
    
    // Create a GeoJSON layer for the tectonic plates
    var platesLayer = L.geoJSON(null, {
        style: {
            color: "black",
            weight: 2
        }
    });
    
// Retrieve tectonic plates data with D3    
    d3.json(platesUrl).then(function(data) {
        platesLayer.addData(data);
    });
    
  
    // Create a layer control object to allow users to switch between base and overlay layers
    var baseMaps = {
        "OpenStreetMap": openStreetMapTiles,
        "WorldTopoMap": worldTopoMapTiles,
    }
    var overlayMaps = {
      "Earthquakes": earthquakesLayer,
      "Tectonic Plates": platesLayer
    };
    L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);
  
    // Add the GeoJSON layer to the map
    earthquakesLayer.addTo(myMap);
  
    // Create a legend to display the depth color code
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
      var grades = [-10, 10, 30, 50, 70, 90];
      var labels = ["<strong>Depth</strong><br>"];
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML += labels.push(
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+'));
      }
      div.innerHTML = labels.join("");
      return div;
    };
    legend.addTo(myMap);
  }).catch(function(error) {
    console.log(error);
  });
  

  function getColor(depth) {
    return depth > 90 ? "#2f1460" :
           depth > 70 ? "#68236c" :
           depth > 50 ? "#c9306c" :
           depth > 30 ? "#e13e53" :
           depth > 10 ? "#ed6151" :
                        "#ffad5a";
  }
  