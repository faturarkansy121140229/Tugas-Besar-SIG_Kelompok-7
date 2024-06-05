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
var format_Tutupan_Lahan_2019_1 = new ol.format.GeoJSON();
var features_Tutupan_Lahan_2019_1 = format_Tutupan_Lahan_2019_1.readFeatures(json_Tutupan_Lahan_2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tutupan_Lahan_2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tutupan_Lahan_2019_1.addFeatures(features_Tutupan_Lahan_2019_1);
var lyr_Tutupan_Lahan_2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tutupan_Lahan_2019_1, 
                style: style_Tutupan_Lahan_2019_1,
                popuplayertitle: "Tutupan_Lahan_2019",
                interactive: true,
    title: 'Tutupan_Lahan_2019<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_0.png" /> Akomodasi dan Rekreasi<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_1.png" /> Danau/Waduk/Situ<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_2.png" /> Fasilitas Kesehatan<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_3.png" /> Fasilitas Olahraga<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_4.png" /> Fasilitas Pemerintahan<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_5.png" /> Fasilitas Pendidikan<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_6.png" /> Fasilitas Peribadatan<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_7.png" /> Industri Non Pertanian<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_8.png" /> Industri Pertanian<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_9.png" /> Instalasi<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_10.png" /> Jalur Hijau<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_11.png" /> Kampung<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_12.png" /> Lembaga Usaha<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_13.png" /> Pasar<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_14.png" /> Pemakaman<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_15.png" /> Perdagangan Umum<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_16.png" /> Pergudangan<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_17.png" /> Perikanan<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_18.png" /> Perkantoran Swasta<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_19.png" /> Pertanian Tanah Basah<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_20.png" /> Pertanian Tanah Kering<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_21.png" /> Perumahan<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_22.png" /> Prasarana Transportasi<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_23.png" /> Rawa<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_24.png" /> Semak<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_25.png" /> Sungai<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_26.png" /> Taman Kota<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_27.png" /> Tanah Kosong<br />\
    <img src="styles/legend/Tutupan_Lahan_2019_1_28.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Tutupan_Lahan_2019_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Tutupan_Lahan_2019_1];
lyr_Tutupan_Lahan_2019_1.set('fieldAliases', {'QCode19': 'QCode19', 'QName19': 'QName19', 'Luas_m2': 'Luas_m2', });
lyr_Tutupan_Lahan_2019_1.set('fieldImages', {'QCode19': 'TextEdit', 'QName19': 'TextEdit', 'Luas_m2': 'TextEdit', });
lyr_Tutupan_Lahan_2019_1.set('fieldLabels', {'QCode19': 'no label', 'QName19': 'no label', 'Luas_m2': 'no label', });
lyr_Tutupan_Lahan_2019_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});