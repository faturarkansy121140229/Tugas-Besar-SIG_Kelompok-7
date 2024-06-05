var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Kontur_1 = new ol.format.GeoJSON();
var features_Kontur_1 = format_Kontur_1.readFeatures(json_Kontur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_1.addFeatures(features_Kontur_1);
var lyr_Kontur_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kontur_1, 
                style: style_Kontur_1,
                popuplayertitle: "Kontur",
                interactive: true,
                title: '<img src="styles/legend/Kontur_1.png" /> Kontur'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Kontur_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Kontur_1];
lyr_Kontur_1.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', });
lyr_Kontur_1.set('fieldImages', {'NAME': '', 'LAYER': '', 'ELEVATION': '', });
lyr_Kontur_1.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'ELEVATION': 'no label', });
lyr_Kontur_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});