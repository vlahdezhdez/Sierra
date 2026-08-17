ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11876839.010149, 3705434.359792, -11830770.400306, 3738080.796993]);
var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2 = new ol.format.GeoJSON();
var features_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2 = format_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2.readFeatures(json_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2.addFeatures(features_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2);
var lyr_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2, 
                style: style_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2,
                popuplayertitle: 'Cambios en el índice de vegetación normalizado (NDVI  2020-2025)',
                interactive: true,
    title: 'Cambios en el índice de vegetación normalizado (NDVI  2020-2025)<br />\
    <img src="styles/legend/CambiosenelndicedevegetacinnormalizadoNDVI20202025_2_0.png" /> Disminución alta<br />\
    <img src="styles/legend/CambiosenelndicedevegetacinnormalizadoNDVI20202025_2_1.png" /> Disminución<br />\
    <img src="styles/legend/CambiosenelndicedevegetacinnormalizadoNDVI20202025_2_2.png" /> Disminución moderada<br />\
    <img src="styles/legend/CambiosenelndicedevegetacinnormalizadoNDVI20202025_2_3.png" /> Cambio reducido<br />\
    <img src="styles/legend/CambiosenelndicedevegetacinnormalizadoNDVI20202025_2_4.png" /> Incremento moderado<br />\
    <img src="styles/legend/CambiosenelndicedevegetacinnormalizadoNDVI20202025_2_5.png" /> Incremento<br />\
    <img src="styles/legend/CambiosenelndicedevegetacinnormalizadoNDVI20202025_2_6.png" /> Incremento alto<br />' });
var format_ndicedevegetacinnormalizadoNDVI2025_3 = new ol.format.GeoJSON();
var features_ndicedevegetacinnormalizadoNDVI2025_3 = format_ndicedevegetacinnormalizadoNDVI2025_3.readFeatures(json_ndicedevegetacinnormalizadoNDVI2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ndicedevegetacinnormalizadoNDVI2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndicedevegetacinnormalizadoNDVI2025_3.addFeatures(features_ndicedevegetacinnormalizadoNDVI2025_3);
var lyr_ndicedevegetacinnormalizadoNDVI2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndicedevegetacinnormalizadoNDVI2025_3, 
                style: style_ndicedevegetacinnormalizadoNDVI2025_3,
                popuplayertitle: 'Índice de vegetación normalizado (NDVI) 2025',
                interactive: true,
    title: 'Índice de vegetación normalizado (NDVI) 2025<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2025_3_0.png" /> NDVI muy bajo<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2025_3_1.png" /> NDVI bajo<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2025_3_2.png" /> NDVI bajo-moderado<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2025_3_3.png" /> NDVI moderado<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2025_3_4.png" /> NDVI moderado-alto<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2025_3_5.png" /> NDVI alto<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2025_3_6.png" /> NDVI muy alto<br />' });
var format_ndicedevegetacinnormalizadoNDVI2000_4 = new ol.format.GeoJSON();
var features_ndicedevegetacinnormalizadoNDVI2000_4 = format_ndicedevegetacinnormalizadoNDVI2000_4.readFeatures(json_ndicedevegetacinnormalizadoNDVI2000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ndicedevegetacinnormalizadoNDVI2000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndicedevegetacinnormalizadoNDVI2000_4.addFeatures(features_ndicedevegetacinnormalizadoNDVI2000_4);
var lyr_ndicedevegetacinnormalizadoNDVI2000_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndicedevegetacinnormalizadoNDVI2000_4, 
                style: style_ndicedevegetacinnormalizadoNDVI2000_4,
                popuplayertitle: 'Índice de vegetación normalizado (NDVI) 2000',
                interactive: true,
    title: 'Índice de vegetación normalizado (NDVI) 2000<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2000_4_0.png" /> NDVI muy bajo<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2000_4_1.png" /> NDVI bajo<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2000_4_2.png" /> NDVI bajo-moderado<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2000_4_3.png" /> NDVI moderado<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2000_4_4.png" /> NDVI moderado-alto<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2000_4_5.png" /> NDVI alto<br />\
    <img src="styles/legend/ndicedevegetacinnormalizadoNDVI2000_4_6.png" /> NDVI muy alto<br />' });
var format_Cambiodetemperaturasuperficial20002025_5 = new ol.format.GeoJSON();
var features_Cambiodetemperaturasuperficial20002025_5 = format_Cambiodetemperaturasuperficial20002025_5.readFeatures(json_Cambiodetemperaturasuperficial20002025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cambiodetemperaturasuperficial20002025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cambiodetemperaturasuperficial20002025_5.addFeatures(features_Cambiodetemperaturasuperficial20002025_5);
var lyr_Cambiodetemperaturasuperficial20002025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cambiodetemperaturasuperficial20002025_5, 
                style: style_Cambiodetemperaturasuperficial20002025_5,
                popuplayertitle: 'Cambio de temperatura superficial 2000 - 2025',
                interactive: true,
    title: 'Cambio de temperatura superficial 2000 - 2025<br />\
    <img src="styles/legend/Cambiodetemperaturasuperficial20002025_5_0.png" /> Disminución alta (≤ −6 °C)<br />\
    <img src="styles/legend/Cambiodetemperaturasuperficial20002025_5_1.png" /> Disminución (−6 a −3 °C)<br />\
    <img src="styles/legend/Cambiodetemperaturasuperficial20002025_5_2.png" /> Disminución moderada (−3 a −1 °C)<br />\
    <img src="styles/legend/Cambiodetemperaturasuperficial20002025_5_3.png" /> Cambio reducido (−1 a +1 °C)<br />\
    <img src="styles/legend/Cambiodetemperaturasuperficial20002025_5_4.png" /> Aumento moderado (+1 a +3 °C)<br />\
    <img src="styles/legend/Cambiodetemperaturasuperficial20002025_5_5.png" /> Aumento (+3 a +6 °C)<br />\
    <img src="styles/legend/Cambiodetemperaturasuperficial20002025_5_6.png" /> Aumento alto (> +6 °C)<br />' });
var format_Temperaturasuperficial2025_6 = new ol.format.GeoJSON();
var features_Temperaturasuperficial2025_6 = format_Temperaturasuperficial2025_6.readFeatures(json_Temperaturasuperficial2025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temperaturasuperficial2025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temperaturasuperficial2025_6.addFeatures(features_Temperaturasuperficial2025_6);
var lyr_Temperaturasuperficial2025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Temperaturasuperficial2025_6, 
                style: style_Temperaturasuperficial2025_6,
                popuplayertitle: 'Temperatura superficial 2025',
                interactive: true,
    title: 'Temperatura superficial 2025<br />\
    <img src="styles/legend/Temperaturasuperficial2025_6_0.png" /> 34 °C o menos<br />\
    <img src="styles/legend/Temperaturasuperficial2025_6_1.png" /> 34–36 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2025_6_2.png" /> 36–38 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2025_6_3.png" /> 38–40 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2025_6_4.png" /> 40–42 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2025_6_5.png" /> 42–44 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2025_6_6.png" /> Más de 44 °C<br />' });
var format_Temperaturasuperficial2000_7 = new ol.format.GeoJSON();
var features_Temperaturasuperficial2000_7 = format_Temperaturasuperficial2000_7.readFeatures(json_Temperaturasuperficial2000_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temperaturasuperficial2000_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temperaturasuperficial2000_7.addFeatures(features_Temperaturasuperficial2000_7);
var lyr_Temperaturasuperficial2000_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Temperaturasuperficial2000_7, 
                style: style_Temperaturasuperficial2000_7,
                popuplayertitle: 'Temperatura superficial 2000',
                interactive: true,
    title: 'Temperatura superficial 2000<br />\
    <img src="styles/legend/Temperaturasuperficial2000_7_0.png" /> 34 °C o menos<br />\
    <img src="styles/legend/Temperaturasuperficial2000_7_1.png" /> 34–36 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2000_7_2.png" /> 36–38 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2000_7_3.png" /> 38–40 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2000_7_4.png" /> 40–42 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2000_7_5.png" /> 42–44 °C<br />\
    <img src="styles/legend/Temperaturasuperficial2000_7_6.png" /> Más de 44 °C<br />' });
var format_Crecimientourbano2026_8 = new ol.format.GeoJSON();
var features_Crecimientourbano2026_8 = format_Crecimientourbano2026_8.readFeatures(json_Crecimientourbano2026_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crecimientourbano2026_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crecimientourbano2026_8.addFeatures(features_Crecimientourbano2026_8);
var lyr_Crecimientourbano2026_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crecimientourbano2026_8, 
                style: style_Crecimientourbano2026_8,
                popuplayertitle: 'Crecimiento urbano 2026',
                interactive: true,
                title: '<img src="styles/legend/Crecimientourbano2026_8.png" /> Crecimiento urbano 2026'
            });
var format_Crecimientourbano2000_9 = new ol.format.GeoJSON();
var features_Crecimientourbano2000_9 = format_Crecimientourbano2000_9.readFeatures(json_Crecimientourbano2000_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crecimientourbano2000_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crecimientourbano2000_9.addFeatures(features_Crecimientourbano2000_9);
var lyr_Crecimientourbano2000_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crecimientourbano2000_9, 
                style: style_Crecimientourbano2000_9,
                popuplayertitle: 'Crecimiento urbano 2000',
                interactive: true,
                title: '<img src="styles/legend/Crecimientourbano2000_9.png" /> Crecimiento urbano 2000'
            });
var format_SierradeJurez_10 = new ol.format.GeoJSON();
var features_SierradeJurez_10 = format_SierradeJurez_10.readFeatures(json_SierradeJurez_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SierradeJurez_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SierradeJurez_10.addFeatures(features_SierradeJurez_10);
var lyr_SierradeJurez_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SierradeJurez_10, 
                style: style_SierradeJurez_10,
                popuplayertitle: 'Sierra de Juárez',
                interactive: false,
                title: '<img src="styles/legend/SierradeJurez_10.png" /> Sierra de Juárez'
            });
var format_Bancosdematerial_11 = new ol.format.GeoJSON();
var features_Bancosdematerial_11 = format_Bancosdematerial_11.readFeatures(json_Bancosdematerial_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bancosdematerial_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bancosdematerial_11.addFeatures(features_Bancosdematerial_11);
var lyr_Bancosdematerial_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bancosdematerial_11, 
                style: style_Bancosdematerial_11,
                popuplayertitle: 'Bancos de material ',
                interactive: true,
                title: '<img src="styles/legend/Bancosdematerial_11.png" /> Bancos de material '
            });
var format_AsentamientosSierradeJurez_12 = new ol.format.GeoJSON();
var features_AsentamientosSierradeJurez_12 = format_AsentamientosSierradeJurez_12.readFeatures(json_AsentamientosSierradeJurez_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsentamientosSierradeJurez_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsentamientosSierradeJurez_12.addFeatures(features_AsentamientosSierradeJurez_12);
var lyr_AsentamientosSierradeJurez_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AsentamientosSierradeJurez_12, 
                style: style_AsentamientosSierradeJurez_12,
                popuplayertitle: 'Asentamientos Sierra de Juárez',
                interactive: true,
                title: '<img src="styles/legend/AsentamientosSierradeJurez_12.png" /> Asentamientos Sierra de Juárez'
            });
var format_Tiraderos_13 = new ol.format.GeoJSON();
var features_Tiraderos_13 = format_Tiraderos_13.readFeatures(json_Tiraderos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tiraderos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tiraderos_13.addFeatures(features_Tiraderos_13);
var lyr_Tiraderos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tiraderos_13, 
                style: style_Tiraderos_13,
                popuplayertitle: 'Tiraderos',
                interactive: true,
                title: '<img src="styles/legend/Tiraderos_13.png" /> Tiraderos'
            });
var format_Centrodepoblacin_14 = new ol.format.GeoJSON();
var features_Centrodepoblacin_14 = format_Centrodepoblacin_14.readFeatures(json_Centrodepoblacin_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrodepoblacin_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrodepoblacin_14.addFeatures(features_Centrodepoblacin_14);
var lyr_Centrodepoblacin_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centrodepoblacin_14, 
                style: style_Centrodepoblacin_14,
                popuplayertitle: 'Centro de población',
                interactive: false,
                title: '<img src="styles/legend/Centrodepoblacin_14.png" /> Centro de población'
            });
var format_ColoniasyFraccionamientos_15 = new ol.format.GeoJSON();
var features_ColoniasyFraccionamientos_15 = format_ColoniasyFraccionamientos_15.readFeatures(json_ColoniasyFraccionamientos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColoniasyFraccionamientos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColoniasyFraccionamientos_15.addFeatures(features_ColoniasyFraccionamientos_15);
var lyr_ColoniasyFraccionamientos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ColoniasyFraccionamientos_15, 
                style: style_ColoniasyFraccionamientos_15,
                popuplayertitle: 'Colonias y Fraccionamientos',
                interactive: true,
                title: '<img src="styles/legend/ColoniasyFraccionamientos_15.png" /> Colonias y Fraccionamientos'
            });
var group_Contextoterritorial = new ol.layer.Group({
                                layers: [lyr_Centrodepoblacin_14,lyr_ColoniasyFraccionamientos_15,],
                                fold: 'close',
                                title: 'Contexto territorial'});
var group_Ocupacinyactividadesdelterritorio = new ol.layer.Group({
                                layers: [lyr_SierradeJurez_10,lyr_Bancosdematerial_11,lyr_AsentamientosSierradeJurez_12,lyr_Tiraderos_13,],
                                fold: 'open',
                                title: 'Ocupación y actividades del territorio'});
var group_Crecimientourbano = new ol.layer.Group({
                                layers: [lyr_Crecimientourbano2026_8,lyr_Crecimientourbano2000_9,],
                                fold: 'close',
                                title: 'Crecimiento urbano'});
var group_Temperaturasuperficial = new ol.layer.Group({
                                layers: [lyr_Cambiodetemperaturasuperficial20002025_5,lyr_Temperaturasuperficial2025_6,lyr_Temperaturasuperficial2000_7,],
                                fold: 'close',
                                title: 'Temperatura superficial'});
var group_VegetacinNDVI = new ol.layer.Group({
                                layers: [lyr_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2,lyr_ndicedevegetacinnormalizadoNDVI2025_3,lyr_ndicedevegetacinnormalizadoNDVI2000_4,],
                                fold: 'close',
                                title: 'Vegetación (NDVI)'});

lyr_ESRIGraydark_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2.setVisible(false);lyr_ndicedevegetacinnormalizadoNDVI2025_3.setVisible(false);lyr_ndicedevegetacinnormalizadoNDVI2000_4.setVisible(false);lyr_Cambiodetemperaturasuperficial20002025_5.setVisible(false);lyr_Temperaturasuperficial2025_6.setVisible(false);lyr_Temperaturasuperficial2000_7.setVisible(false);lyr_Crecimientourbano2026_8.setVisible(false);lyr_Crecimientourbano2000_9.setVisible(false);lyr_SierradeJurez_10.setVisible(true);lyr_Bancosdematerial_11.setVisible(true);lyr_AsentamientosSierradeJurez_12.setVisible(true);lyr_Tiraderos_13.setVisible(true);lyr_Centrodepoblacin_14.setVisible(false);lyr_ColoniasyFraccionamientos_15.setVisible(false);
var layersList = [lyr_ESRIGraydark_0,lyr_GoogleSatellite_1,group_VegetacinNDVI,group_Temperaturasuperficial,group_Crecimientourbano,group_Ocupacinyactividadesdelterritorio,group_Contextoterritorial];
lyr_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2.set('fieldAliases', {'fid': 'fid', 'clases': 'clases', 'rango': 'Rango', });
lyr_ndicedevegetacinnormalizadoNDVI2025_3.set('fieldAliases', {'fid': 'fid', 'clase': 'clase', 'rango': 'Rango', });
lyr_ndicedevegetacinnormalizadoNDVI2000_4.set('fieldAliases', {'fid': 'fid', 'clase': 'clase', 'rango': 'Rango ', });
lyr_Cambiodetemperaturasuperficial20002025_5.set('fieldAliases', {'fid': 'fid', 'clase': 'clase', 'rango': 'rango', 'cambio': 'Cambio', });
lyr_Temperaturasuperficial2025_6.set('fieldAliases', {'fid': 'fid', 'tem': 'tem', 'rango': 'Rango de temperatura', });
lyr_Temperaturasuperficial2000_7.set('fieldAliases', {'fid': 'fid', 'temp': 'temp', 'rango': 'Rango de temperatura', });
lyr_Crecimientourbano2026_8.set('fieldAliases', {'fid': 'fid', 'anio': 'Año', 'tipo': 'tipo', 'clase': 'clase', 'area_ha': 'area_ha', });
lyr_Crecimientourbano2000_9.set('fieldAliases', {'fid': 'fid', 'anio': 'Año', 'tipo': 'tipo', 'clase': 'clase', 'area_ha': 'area_ha', });
lyr_SierradeJurez_10.set('fieldAliases', {'fid': 'fid', 'NOM_OBJ': 'NOM_OBJ', 'CODIGO': 'CODIGO', 'CALIF_POS': 'CALIF_POS', 'CLASE_GEO': 'CLASE_GEO', 'TIPO': 'TIPO', 'sierra': 'sierra', 'Id': 'Id', 'PERIMETER': 'PERIMETER', 'AREA': 'AREA', 'siErr': 'siErr', });
lyr_Bancosdematerial_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Empresa': 'Empresa', 'Proyecto': 'Proyecto', 'Mineral': 'Mineral', 'TIPO': 'TIPO', 'Ha': 'Ha', 'Clasificac': 'Clasificac', 'CieloAbier': 'CieloAbier', 'ID_': 'ID_', 'Cobre': 'Cobre', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'area_ha': 'Superficie (Hectárea)', });
lyr_AsentamientosSierradeJurez_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nombre', 'description': 'description', });
lyr_Tiraderos_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Nombre', });
lyr_Centrodepoblacin_14.set('fieldAliases', {'fid': 'fid', 'USO': 'USO', 'Nombre_USO': 'Nombre_USO', 'Clave_USO': 'Clave_USO', 'ID': 'ID', 'PLAN_Parci': 'PLAN_Parci', 'GlobalID': 'GlobalID', });
lyr_ColoniasyFraccionamientos_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID_COLO': 'ID_COLO', 'NOMBRE': 'NOMBRE', 'GlobalID': 'GlobalID', 'TIPO': 'TIPO', 'ETIQUETA': 'ETIQUETA', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'nombre2': 'Nombre', });
lyr_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2.set('fieldImages', {'fid': 'Hidden', 'clases': 'Hidden', 'rango': 'TextEdit', });
lyr_ndicedevegetacinnormalizadoNDVI2025_3.set('fieldImages', {'fid': 'Hidden', 'clase': 'Hidden', 'rango': 'TextEdit', });
lyr_ndicedevegetacinnormalizadoNDVI2000_4.set('fieldImages', {'fid': 'Hidden', 'clase': 'Hidden', 'rango': 'TextEdit', });
lyr_Cambiodetemperaturasuperficial20002025_5.set('fieldImages', {'fid': 'TextEdit', 'clase': 'Range', 'rango': 'TextEdit', 'cambio': 'TextEdit', });
lyr_Temperaturasuperficial2025_6.set('fieldImages', {'fid': 'Hidden', 'tem': 'Hidden', 'rango': 'TextEdit', });
lyr_Temperaturasuperficial2000_7.set('fieldImages', {'fid': 'Hidden', 'temp': 'Hidden', 'rango': 'TextEdit', });
lyr_Crecimientourbano2026_8.set('fieldImages', {'fid': 'TextEdit', 'anio': 'TextEdit', 'tipo': 'Hidden', 'clase': 'Hidden', 'area_ha': 'TextEdit', });
lyr_Crecimientourbano2000_9.set('fieldImages', {'fid': 'TextEdit', 'anio': 'TextEdit', 'tipo': 'Hidden', 'clase': 'Hidden', 'area_ha': 'TextEdit', });
lyr_SierradeJurez_10.set('fieldImages', {'fid': '', 'NOM_OBJ': '', 'CODIGO': '', 'CALIF_POS': '', 'CLASE_GEO': '', 'TIPO': '', 'sierra': '', 'Id': '', 'PERIMETER': '', 'AREA': '', 'siErr': '', });
lyr_Bancosdematerial_11.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'Empresa': 'Hidden', 'Proyecto': 'Hidden', 'Mineral': 'Hidden', 'TIPO': 'Hidden', 'Ha': 'Hidden', 'Clasificac': 'Hidden', 'CieloAbier': 'Hidden', 'ID_': 'Hidden', 'Cobre': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'area_ha': 'TextEdit', });
lyr_AsentamientosSierradeJurez_12.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', });
lyr_Tiraderos_13.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', });
lyr_Centrodepoblacin_14.set('fieldImages', {'fid': 'TextEdit', 'USO': 'TextEdit', 'Nombre_USO': 'TextEdit', 'Clave_USO': 'TextEdit', 'ID': 'TextEdit', 'PLAN_Parci': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_ColoniasyFraccionamientos_15.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'ID_COLO': 'Hidden', 'NOMBRE': 'Hidden', 'GlobalID': 'Hidden', 'TIPO': 'Hidden', 'ETIQUETA': 'Hidden', 'Shape_STAr': 'Hidden', 'Shape_STLe': 'Hidden', 'nombre2': 'TextEdit', });
lyr_CambiosenelndicedevegetacinnormalizadoNDVI20202025_2.set('fieldLabels', {'rango': 'no label', });
lyr_ndicedevegetacinnormalizadoNDVI2025_3.set('fieldLabels', {'rango': 'no label', });
lyr_ndicedevegetacinnormalizadoNDVI2000_4.set('fieldLabels', {'rango': 'no label', });
lyr_Cambiodetemperaturasuperficial20002025_5.set('fieldLabels', {'fid': 'no label', 'clase': 'no label', 'rango': 'no label', 'cambio': 'no label', });
lyr_Temperaturasuperficial2025_6.set('fieldLabels', {'rango': 'no label', });
lyr_Temperaturasuperficial2000_7.set('fieldLabels', {'rango': 'no label', });
lyr_Crecimientourbano2026_8.set('fieldLabels', {'fid': 'no label', 'anio': 'inline label - visible with data', 'area_ha': 'no label', });
lyr_Crecimientourbano2000_9.set('fieldLabels', {'fid': 'no label', 'anio': 'inline label - visible with data', 'area_ha': 'no label', });
lyr_SierradeJurez_10.set('fieldLabels', {'fid': 'no label', 'NOM_OBJ': 'no label', 'CODIGO': 'no label', 'CALIF_POS': 'no label', 'CLASE_GEO': 'no label', 'TIPO': 'no label', 'sierra': 'no label', 'Id': 'no label', 'PERIMETER': 'no label', 'AREA': 'no label', 'siErr': 'no label', });
lyr_Bancosdematerial_11.set('fieldLabels', {'area_ha': 'inline label - visible with data', });
lyr_AsentamientosSierradeJurez_12.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Tiraderos_13.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Centrodepoblacin_14.set('fieldLabels', {'fid': 'no label', 'USO': 'no label', 'Nombre_USO': 'no label', 'Clave_USO': 'no label', 'ID': 'no label', 'PLAN_Parci': 'no label', 'GlobalID': 'no label', });
lyr_ColoniasyFraccionamientos_15.set('fieldLabels', {'nombre2': 'no label', });
lyr_ColoniasyFraccionamientos_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});