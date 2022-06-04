/* mapa smíchov */
let center = SMap.Coords.fromWGS84(14.4068328412348, 50.07854815285659);
let msmichov = new SMap(JAK.gel('msmichov'), center, 13);
msmichov.addDefaultLayer(SMap.DEF_BASE).enable();
msmichov.addDefaultControls();

let layer = new SMap.Layer.Marker();
msmichov.addLayer(layer);
layer.enable();

let options = {};
let marker = new SMap.Marker(center, 'myMarker', options);
layer.addMarker(marker);

/* mapa Michalská */
let centerMichalska = SMap.Coords.fromWGS84(14.4198514, 50.0846233);
let mmichalska = new SMap(JAK.gel('mmichalska'), centerMichalska, 13);
mmichalska.addDefaultLayer(SMap.DEF_BASE).enable();
mmichalska.addDefaultControls();

let layerMichalska = new SMap.Layer.Marker();
mmichalska.addLayer(layerMichalska);
layerMichalska.enable();

let optionsMichalska = {};
let markerMichalska = new SMap.Marker(
  centerMichalska,
  'myMarker',
  optionsMichalska,
);
layerMichalska.addMarker(markerMichalska);
