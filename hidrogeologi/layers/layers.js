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
var format_Intensitas_1 = new ol.format.GeoJSON();
var features_Intensitas_1 = format_Intensitas_1.readFeatures(json_Intensitas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intensitas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intensitas_1.addFeatures(features_Intensitas_1);
var lyr_Intensitas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Intensitas_1, 
                style: style_Intensitas_1,
                popuplayertitle: "Intensitas",
                interactive: true,
    title: 'Intensitas<br />\
    <img src="styles/legend/Intensitas_1_0.png" /> Rendah<br />\
    <img src="styles/legend/Intensitas_1_1.png" /> Rendah - Sedang<br />\
    <img src="styles/legend/Intensitas_1_2.png" /> Rendah - Tinggi<br />\
    <img src="styles/legend/Intensitas_1_3.png" /> Sedang<br />\
    <img src="styles/legend/Intensitas_1_4.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Intensitas_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Intensitas_1];
lyr_Intensitas_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'sys_aq': 'sys_aq', 'prod': 'prod', 'keterusan': 'keterusan', 'debit': 'debit', 'debit_min': 'debit_min', 'debit_max': 'debit_max', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Intensitas_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'sys_aq': 'TextEdit', 'prod': 'TextEdit', 'keterusan': 'TextEdit', 'debit': 'TextEdit', 'debit_min': 'TextEdit', 'debit_max': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Intensitas_1.set('fieldLabels', {'OBJECTID': 'no label', 'sys_aq': 'no label', 'prod': 'no label', 'keterusan': 'no label', 'debit': 'no label', 'debit_min': 'no label', 'debit_max': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Intensitas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});