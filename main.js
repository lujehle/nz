/*
Skript für die Nueseelandreise
*/

//Karte initialisieren
var map = L.map('map').setView([-41.270833, 173.284167], 11);
//Hintergrundkarte definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        //Marker zeichnen
        var marker = L.marker([-41.270833, 173.284167]).addTo(map);
        //Popup definieren und öffnen
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
