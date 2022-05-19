let center = SMap.Coords.fromWGS84(14.4068328412348, 50.07854815285659);
let m = new SMap(JAK.gel('m'), center, 13);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

let layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();

let options = {};
let marker = new SMap.Marker(center, 'myMarker', options);
layer.addMarker(marker);
