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
var format_Geologi_Kotajambi_1 = new ol.format.GeoJSON();
var features_Geologi_Kotajambi_1 = format_Geologi_Kotajambi_1.readFeatures(json_Geologi_Kotajambi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geologi_Kotajambi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologi_Kotajambi_1.addFeatures(features_Geologi_Kotajambi_1);
var lyr_Geologi_Kotajambi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geologi_Kotajambi_1, 
                style: style_Geologi_Kotajambi_1,
                popuplayertitle: "Geologi_Kotajambi",
                interactive: true,
    title: 'Geologi_Kotajambi<br />\
    <img src="styles/legend/Geologi_Kotajambi_1_0.png" /> Air Benakat Formation<br />\
    <img src="styles/legend/Geologi_Kotajambi_1_1.png" /> Alluvium<br />\
    <img src="styles/legend/Geologi_Kotajambi_1_2.png" /> Kasai Formation<br />\
    <img src="styles/legend/Geologi_Kotajambi_1_3.png" /> Muara Enim Formation<br />\
    <img src="styles/legend/Geologi_Kotajambi_1_4.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Geologi_Kotajambi_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Geologi_Kotajambi_1];
lyr_Geologi_Kotajambi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'simobj': 'simobj', 'namobj': 'namobj', 'umurobj': 'umurobj', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Geologi_Kotajambi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'simobj': 'TextEdit', 'namobj': 'TextEdit', 'umurobj': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Geologi_Kotajambi_1.set('fieldLabels', {'OBJECTID': 'no label', 'fcode': 'no label', 'simobj': 'no label', 'namobj': 'no label', 'umurobj': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Geologi_Kotajambi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});