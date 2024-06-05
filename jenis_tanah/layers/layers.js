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
var format_Jenis_Tanah_1 = new ol.format.GeoJSON();
var features_Jenis_Tanah_1 = format_Jenis_Tanah_1.readFeatures(json_Jenis_Tanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jenis_Tanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jenis_Tanah_1.addFeatures(features_Jenis_Tanah_1);
var lyr_Jenis_Tanah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jenis_Tanah_1, 
                style: style_Jenis_Tanah_1,
                popuplayertitle: "Jenis_Tanah",
                interactive: true,
    title: 'Jenis_Tanah<br />\
    <img src="styles/legend/Jenis_Tanah_1_0.png" /> Kompleks Latosol dan Litosol<br />\
    <img src="styles/legend/Jenis_Tanah_1_1.png" /> Podsolik<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Jenis_Tanah_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Jenis_Tanah_1];
lyr_Jenis_Tanah_1.set('fieldAliases', {'JENIS_TANA': 'JENIS_TANA', 'ID': 'ID', });
lyr_Jenis_Tanah_1.set('fieldImages', {'JENIS_TANA': 'TextEdit', 'ID': 'Range', });
lyr_Jenis_Tanah_1.set('fieldLabels', {'JENIS_TANA': 'no label', 'ID': 'no label', });
lyr_Jenis_Tanah_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});