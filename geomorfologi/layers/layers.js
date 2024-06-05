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
var format_Morfologi_1 = new ol.format.GeoJSON();
var features_Morfologi_1 = format_Morfologi_1.readFeatures(json_Morfologi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Morfologi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Morfologi_1.addFeatures(features_Morfologi_1);
var lyr_Morfologi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Morfologi_1, 
                style: style_Morfologi_1,
                popuplayertitle: "Morfologi",
                interactive: true,
    title: 'Morfologi<br />\
    <img src="styles/legend/Morfologi_1_0.png" /> Dataran<br />\
    <img src="styles/legend/Morfologi_1_1.png" /> Medan Bergelombang<br />\
    <img src="styles/legend/Morfologi_1_2.png" /> Perbukitan landai, relief halus<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Morfologi_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Morfologi_1];
lyr_Morfologi_1.set('fieldAliases', {'Morfologi': 'Morfologi', });
lyr_Morfologi_1.set('fieldImages', {'Morfologi': 'TextEdit', });
lyr_Morfologi_1.set('fieldLabels', {'Morfologi': 'no label', });
lyr_Morfologi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});