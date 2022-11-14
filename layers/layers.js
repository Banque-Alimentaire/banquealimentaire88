var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WazeWorld_1 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_communesVosges_2 = new ol.format.GeoJSON();
var features_communesVosges_2 = format_communesVosges_2.readFeatures(json_communesVosges_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesVosges_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesVosges_2.addFeatures(features_communesVosges_2);
var lyr_communesVosges_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communesVosges_2, 
                style: style_communesVosges_2,
                interactive: true,
                title: '<img src="styles/legend/communesVosges_2.png" /> communes Vosges'
            });
var format_dpartement_3 = new ol.format.GeoJSON();
var features_dpartement_3 = format_dpartement_3.readFeatures(json_dpartement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dpartement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dpartement_3.addFeatures(features_dpartement_3);
var lyr_dpartement_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dpartement_3, 
                style: style_dpartement_3,
                interactive: true,
                title: '<img src="styles/legend/dpartement_3.png" /> département'
            });
var format_1619_4 = new ol.format.GeoJSON();
var features_1619_4 = format_1619_4.readFeatures(json_1619_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1619_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1619_4.addFeatures(features_1619_4);
var lyr_1619_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1619_4, 
                style: style_1619_4,
                interactive: true,
                title: '<img src="styles/legend/1619_4.png" /> 16 - 19 %'
            });
var format_1316_5 = new ol.format.GeoJSON();
var features_1316_5 = format_1316_5.readFeatures(json_1316_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1316_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1316_5.addFeatures(features_1316_5);
var lyr_1316_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1316_5, 
                style: style_1316_5,
                interactive: true,
                title: '<img src="styles/legend/1316_5.png" /> 13 - 16 %'
            });
var format_1013_6 = new ol.format.GeoJSON();
var features_1013_6 = format_1013_6.readFeatures(json_1013_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1013_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1013_6.addFeatures(features_1013_6);
var lyr_1013_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1013_6, 
                style: style_1013_6,
                interactive: true,
                title: '<img src="styles/legend/1013_6.png" /> 10 -13 %'
            });
var format_302000_7 = new ol.format.GeoJSON();
var features_302000_7 = format_302000_7.readFeatures(json_302000_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_302000_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_302000_7.addFeatures(features_302000_7);
var lyr_302000_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_302000_7, 
                style: style_302000_7,
                interactive: true,
                title: '<img src="styles/legend/302000_7.png" /> 30 à 2000'
            });
var format_1030_8 = new ol.format.GeoJSON();
var features_1030_8 = format_1030_8.readFeatures(json_1030_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1030_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1030_8.addFeatures(features_1030_8);
var lyr_1030_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1030_8, 
                style: style_1030_8,
                interactive: true,
                title: '<img src="styles/legend/1030_8.png" /> 10 à 30'
            });
var format_110_9 = new ol.format.GeoJSON();
var features_110_9 = format_110_9.readFeatures(json_110_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_110_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110_9.addFeatures(features_110_9);
var lyr_110_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_110_9, 
                style: style_110_9,
                interactive: true,
                title: '<img src="styles/legend/110_9.png" /> 1 à 10'
            });
var format_donnesindisponibles_10 = new ol.format.GeoJSON();
var features_donnesindisponibles_10 = format_donnesindisponibles_10.readFeatures(json_donnesindisponibles_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_donnesindisponibles_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_donnesindisponibles_10.addFeatures(features_donnesindisponibles_10);
var lyr_donnesindisponibles_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_donnesindisponibles_10, 
                style: style_donnesindisponibles_10,
                interactive: true,
                title: '<img src="styles/legend/donnesindisponibles_10.png" /> données indisponibles'
            });
var format_BAvosges_11 = new ol.format.GeoJSON();
var features_BAvosges_11 = format_BAvosges_11.readFeatures(json_BAvosges_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAvosges_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAvosges_11.addFeatures(features_BAvosges_11);
var lyr_BAvosges_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BAvosges_11, 
                style: style_BAvosges_11,
                interactive: true,
                title: '<img src="styles/legend/BAvosges_11.png" /> BA vosges'
            });
var format_SPF_12 = new ol.format.GeoJSON();
var features_SPF_12 = format_SPF_12.readFeatures(json_SPF_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPF_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPF_12.addFeatures(features_SPF_12);
var lyr_SPF_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPF_12, 
                style: style_SPF_12,
                interactive: true,
                title: '<img src="styles/legend/SPF_12.png" /> SPF'
            });
var format_RDC_13 = new ol.format.GeoJSON();
var features_RDC_13 = format_RDC_13.readFeatures(json_RDC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RDC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RDC_13.addFeatures(features_RDC_13);
var lyr_RDC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RDC_13, 
                style: style_RDC_13,
                interactive: true,
                title: '<img src="styles/legend/RDC_13.png" /> RDC'
            });
var format_CRF_14 = new ol.format.GeoJSON();
var features_CRF_14 = format_CRF_14.readFeatures(json_CRF_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRF_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRF_14.addFeatures(features_CRF_14);
var lyr_CRF_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRF_14, 
                style: style_CRF_14,
                interactive: true,
                title: '<img src="styles/legend/CRF_14.png" /> CRF'
            });
var format_CCAS_15 = new ol.format.GeoJSON();
var features_CCAS_15 = format_CCAS_15.readFeatures(json_CCAS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCAS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCAS_15.addFeatures(features_CCAS_15);
var lyr_CCAS_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCAS_15, 
                style: style_CCAS_15,
                interactive: true,
                title: '<img src="styles/legend/CCAS_15.png" /> CCAS'
            });
var format_BACCAS_16 = new ol.format.GeoJSON();
var features_BACCAS_16 = format_BACCAS_16.readFeatures(json_BACCAS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BACCAS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BACCAS_16.addFeatures(features_BACCAS_16);
var lyr_BACCAS_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BACCAS_16, 
                style: style_BACCAS_16,
                interactive: true,
                title: '<img src="styles/legend/BACCAS_16.png" /> BA-CCAS'
            });
var format_BAautre_17 = new ol.format.GeoJSON();
var features_BAautre_17 = format_BAautre_17.readFeatures(json_BAautre_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAautre_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAautre_17.addFeatures(features_BAautre_17);
var lyr_BAautre_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BAautre_17, 
                style: style_BAautre_17,
                interactive: true,
                title: '<img src="styles/legend/BAautre_17.png" /> BA-autre'
            });
var format_autres_18 = new ol.format.GeoJSON();
var features_autres_18 = format_autres_18.readFeatures(json_autres_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_autres_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_autres_18.addFeatures(features_autres_18);
var lyr_autres_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_autres_18, 
                style: style_autres_18,
                interactive: true,
                title: '<img src="styles/legend/autres_18.png" /> autres'
            });
var format_communesavecaidealim_19 = new ol.format.GeoJSON();
var features_communesavecaidealim_19 = format_communesavecaidealim_19.readFeatures(json_communesavecaidealim_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesavecaidealim_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesavecaidealim_19.addFeatures(features_communesavecaidealim_19);
var lyr_communesavecaidealim_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communesavecaidealim_19, 
                style: style_communesavecaidealim_19,
                interactive: true,
                title: '<img src="styles/legend/communesavecaidealim_19.png" /> communes avec aide alim'
            });
var format_Vival_20 = new ol.format.GeoJSON();
var features_Vival_20 = format_Vival_20.readFeatures(json_Vival_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vival_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vival_20.addFeatures(features_Vival_20);
var lyr_Vival_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vival_20, 
                style: style_Vival_20,
                interactive: true,
                title: '<img src="styles/legend/Vival_20.png" /> Vival'
            });
var format_SuperU_21 = new ol.format.GeoJSON();
var features_SuperU_21 = format_SuperU_21.readFeatures(json_SuperU_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuperU_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuperU_21.addFeatures(features_SuperU_21);
var lyr_SuperU_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuperU_21, 
                style: style_SuperU_21,
                interactive: true,
                title: '<img src="styles/legend/SuperU_21.png" /> Super U'
            });
var format_Norma_22 = new ol.format.GeoJSON();
var features_Norma_22 = format_Norma_22.readFeatures(json_Norma_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Norma_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Norma_22.addFeatures(features_Norma_22);
var lyr_Norma_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Norma_22, 
                style: style_Norma_22,
                interactive: true,
                title: '<img src="styles/legend/Norma_22.png" /> Norma'
            });
var format_Liddle_23 = new ol.format.GeoJSON();
var features_Liddle_23 = format_Liddle_23.readFeatures(json_Liddle_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Liddle_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liddle_23.addFeatures(features_Liddle_23);
var lyr_Liddle_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Liddle_23, 
                style: style_Liddle_23,
                interactive: true,
                title: '<img src="styles/legend/Liddle_23.png" /> Liddle '
            });
var format_Leclerc_24 = new ol.format.GeoJSON();
var features_Leclerc_24 = format_Leclerc_24.readFeatures(json_Leclerc_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Leclerc_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Leclerc_24.addFeatures(features_Leclerc_24);
var lyr_Leclerc_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Leclerc_24, 
                style: style_Leclerc_24,
                interactive: true,
                title: '<img src="styles/legend/Leclerc_24.png" /> Leclerc '
            });
var format_Intermarch_25 = new ol.format.GeoJSON();
var features_Intermarch_25 = format_Intermarch_25.readFeatures(json_Intermarch_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intermarch_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intermarch_25.addFeatures(features_Intermarch_25);
var lyr_Intermarch_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Intermarch_25, 
                style: style_Intermarch_25,
                interactive: true,
                title: '<img src="styles/legend/Intermarch_25.png" /> Intermarché'
            });
var format_Cora_26 = new ol.format.GeoJSON();
var features_Cora_26 = format_Cora_26.readFeatures(json_Cora_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cora_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cora_26.addFeatures(features_Cora_26);
var lyr_Cora_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cora_26, 
                style: style_Cora_26,
                interactive: true,
                title: '<img src="styles/legend/Cora_26.png" /> Cora'
            });
var format_Colruyt_27 = new ol.format.GeoJSON();
var features_Colruyt_27 = format_Colruyt_27.readFeatures(json_Colruyt_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colruyt_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colruyt_27.addFeatures(features_Colruyt_27);
var lyr_Colruyt_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colruyt_27, 
                style: style_Colruyt_27,
                interactive: true,
                title: '<img src="styles/legend/Colruyt_27.png" /> Colruyt'
            });
var format_Casino_28 = new ol.format.GeoJSON();
var features_Casino_28 = format_Casino_28.readFeatures(json_Casino_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casino_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casino_28.addFeatures(features_Casino_28);
var lyr_Casino_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casino_28, 
                style: style_Casino_28,
                interactive: true,
                title: '<img src="styles/legend/Casino_28.png" /> Casino'
            });
var format_Carrefour_29 = new ol.format.GeoJSON();
var features_Carrefour_29 = format_Carrefour_29.readFeatures(json_Carrefour_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carrefour_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carrefour_29.addFeatures(features_Carrefour_29);
var lyr_Carrefour_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carrefour_29, 
                style: style_Carrefour_29,
                interactive: true,
                title: '<img src="styles/legend/Carrefour_29.png" /> Carrefour'
            });
var format_Aldi_30 = new ol.format.GeoJSON();
var features_Aldi_30 = format_Aldi_30.readFeatures(json_Aldi_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aldi_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aldi_30.addFeatures(features_Aldi_30);
var lyr_Aldi_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aldi_30, 
                style: style_Aldi_30,
                interactive: true,
                title: '<img src="styles/legend/Aldi_30.png" /> Aldi'
            });
var format_ligne8ImagineThaonlesVosges_31 = new ol.format.GeoJSON();
var features_ligne8ImagineThaonlesVosges_31 = format_ligne8ImagineThaonlesVosges_31.readFeatures(json_ligne8ImagineThaonlesVosges_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne8ImagineThaonlesVosges_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne8ImagineThaonlesVosges_31.addFeatures(features_ligne8ImagineThaonlesVosges_31);
var lyr_ligne8ImagineThaonlesVosges_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ligne8ImagineThaonlesVosges_31, 
                style: style_ligne8ImagineThaonlesVosges_31,
                interactive: true,
                title: '<img src="styles/legend/ligne8ImagineThaonlesVosges_31.png" /> ligne 8 Imagine Thaon-les-Vosges'
            });
var format_ligne7Imagine_32 = new ol.format.GeoJSON();
var features_ligne7Imagine_32 = format_ligne7Imagine_32.readFeatures(json_ligne7Imagine_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne7Imagine_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne7Imagine_32.addFeatures(features_ligne7Imagine_32);
var lyr_ligne7Imagine_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ligne7Imagine_32, 
                style: style_ligne7Imagine_32,
                interactive: true,
                title: '<img src="styles/legend/ligne7Imagine_32.png" /> ligne 7 Imagine'
            });
var format_ligne6ImagineGolbeyHDVLaVierge_33 = new ol.format.GeoJSON();
var features_ligne6ImagineGolbeyHDVLaVierge_33 = format_ligne6ImagineGolbeyHDVLaVierge_33.readFeatures(json_ligne6ImagineGolbeyHDVLaVierge_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne6ImagineGolbeyHDVLaVierge_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne6ImagineGolbeyHDVLaVierge_33.addFeatures(features_ligne6ImagineGolbeyHDVLaVierge_33);
var lyr_ligne6ImagineGolbeyHDVLaVierge_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ligne6ImagineGolbeyHDVLaVierge_33, 
                style: style_ligne6ImagineGolbeyHDVLaVierge_33,
                interactive: true,
                title: '<img src="styles/legend/ligne6ImagineGolbeyHDVLaVierge_33.png" /> ligne 6 Imagine Golbey HDV La Vierge'
            });
var format_ligne5ImagineGolbeyJdArcDinozPDmon_34 = new ol.format.GeoJSON();
var features_ligne5ImagineGolbeyJdArcDinozPDmon_34 = format_ligne5ImagineGolbeyJdArcDinozPDmon_34.readFeatures(json_ligne5ImagineGolbeyJdArcDinozPDmon_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne5ImagineGolbeyJdArcDinozPDmon_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne5ImagineGolbeyJdArcDinozPDmon_34.addFeatures(features_ligne5ImagineGolbeyJdArcDinozPDmon_34);
var lyr_ligne5ImagineGolbeyJdArcDinozPDmon_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ligne5ImagineGolbeyJdArcDinozPDmon_34, 
                style: style_ligne5ImagineGolbeyJdArcDinozPDmon_34,
                interactive: true,
                title: '<img src="styles/legend/ligne5ImagineGolbeyJdArcDinozPDmon_34.png" /> ligne 5 Imagine Golbey J.d\'Arc Dinozé P.Démon'
            });
var format_ligne4Imagine_35 = new ol.format.GeoJSON();
var features_ligne4Imagine_35 = format_ligne4Imagine_35.readFeatures(json_ligne4Imagine_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne4Imagine_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne4Imagine_35.addFeatures(features_ligne4Imagine_35);
var lyr_ligne4Imagine_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ligne4Imagine_35, 
                style: style_ligne4Imagine_35,
                interactive: true,
                title: '<img src="styles/legend/ligne4Imagine_35.png" /> ligne 4 Imagine'
            });
var format_ligne3ImagineColombireChantraine_36 = new ol.format.GeoJSON();
var features_ligne3ImagineColombireChantraine_36 = format_ligne3ImagineColombireChantraine_36.readFeatures(json_ligne3ImagineColombireChantraine_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne3ImagineColombireChantraine_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne3ImagineColombireChantraine_36.addFeatures(features_ligne3ImagineColombireChantraine_36);
var lyr_ligne3ImagineColombireChantraine_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ligne3ImagineColombireChantraine_36, 
                style: style_ligne3ImagineColombireChantraine_36,
                interactive: true,
                title: '<img src="styles/legend/ligne3ImagineColombireChantraine_36.png" /> ligne 3 Imagine Colombière - Chantraine'
            });
var format_ligne2ImagineEpinalZacdelaRoche_37 = new ol.format.GeoJSON();
var features_ligne2ImagineEpinalZacdelaRoche_37 = format_ligne2ImagineEpinalZacdelaRoche_37.readFeatures(json_ligne2ImagineEpinalZacdelaRoche_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne2ImagineEpinalZacdelaRoche_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne2ImagineEpinalZacdelaRoche_37.addFeatures(features_ligne2ImagineEpinalZacdelaRoche_37);
var lyr_ligne2ImagineEpinalZacdelaRoche_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ligne2ImagineEpinalZacdelaRoche_37, 
                style: style_ligne2ImagineEpinalZacdelaRoche_37,
                interactive: true,
                title: '<img src="styles/legend/ligne2ImagineEpinalZacdelaRoche_37.png" /> ligne 2 Imagine Epinal Zac de la Roche'
            });
var format_ligne1GolbeyJeuxey_38 = new ol.format.GeoJSON();
var features_ligne1GolbeyJeuxey_38 = format_ligne1GolbeyJeuxey_38.readFeatures(json_ligne1GolbeyJeuxey_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne1GolbeyJeuxey_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne1GolbeyJeuxey_38.addFeatures(features_ligne1GolbeyJeuxey_38);
var lyr_ligne1GolbeyJeuxey_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ligne1GolbeyJeuxey_38, 
                style: style_ligne1GolbeyJeuxey_38,
                interactive: true,
                title: '<img src="styles/legend/ligne1GolbeyJeuxey_38.png" /> ligne 1 Golbey Jeuxey'
            });
var format_arrtligne8Imagine_39 = new ol.format.GeoJSON();
var features_arrtligne8Imagine_39 = format_arrtligne8Imagine_39.readFeatures(json_arrtligne8Imagine_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrtligne8Imagine_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrtligne8Imagine_39.addFeatures(features_arrtligne8Imagine_39);
var lyr_arrtligne8Imagine_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrtligne8Imagine_39, 
                style: style_arrtligne8Imagine_39,
                interactive: true,
                title: '<img src="styles/legend/arrtligne8Imagine_39.png" /> arrêt ligne 8 Imagine'
            });
var format_arrtligne7Imagine_40 = new ol.format.GeoJSON();
var features_arrtligne7Imagine_40 = format_arrtligne7Imagine_40.readFeatures(json_arrtligne7Imagine_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrtligne7Imagine_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrtligne7Imagine_40.addFeatures(features_arrtligne7Imagine_40);
var lyr_arrtligne7Imagine_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrtligne7Imagine_40, 
                style: style_arrtligne7Imagine_40,
                interactive: true,
                title: '<img src="styles/legend/arrtligne7Imagine_40.png" /> arrêt ligne 7 Imagine'
            });
var format_arrtligne6Imagine_41 = new ol.format.GeoJSON();
var features_arrtligne6Imagine_41 = format_arrtligne6Imagine_41.readFeatures(json_arrtligne6Imagine_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrtligne6Imagine_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrtligne6Imagine_41.addFeatures(features_arrtligne6Imagine_41);
var lyr_arrtligne6Imagine_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrtligne6Imagine_41, 
                style: style_arrtligne6Imagine_41,
                interactive: true,
                title: '<img src="styles/legend/arrtligne6Imagine_41.png" /> arrêt ligne 6 Imagine'
            });
var format_arrtligne5Imagine_42 = new ol.format.GeoJSON();
var features_arrtligne5Imagine_42 = format_arrtligne5Imagine_42.readFeatures(json_arrtligne5Imagine_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrtligne5Imagine_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrtligne5Imagine_42.addFeatures(features_arrtligne5Imagine_42);
var lyr_arrtligne5Imagine_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrtligne5Imagine_42, 
                style: style_arrtligne5Imagine_42,
                interactive: true,
                title: '<img src="styles/legend/arrtligne5Imagine_42.png" /> arrêt ligne 5 Imagine'
            });
var format_arrtligne4Imagine_43 = new ol.format.GeoJSON();
var features_arrtligne4Imagine_43 = format_arrtligne4Imagine_43.readFeatures(json_arrtligne4Imagine_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrtligne4Imagine_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrtligne4Imagine_43.addFeatures(features_arrtligne4Imagine_43);
var lyr_arrtligne4Imagine_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrtligne4Imagine_43, 
                style: style_arrtligne4Imagine_43,
                interactive: true,
                title: '<img src="styles/legend/arrtligne4Imagine_43.png" /> arrêt ligne 4 Imagine'
            });
var format_arrtligne3Imagine_44 = new ol.format.GeoJSON();
var features_arrtligne3Imagine_44 = format_arrtligne3Imagine_44.readFeatures(json_arrtligne3Imagine_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrtligne3Imagine_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrtligne3Imagine_44.addFeatures(features_arrtligne3Imagine_44);
var lyr_arrtligne3Imagine_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrtligne3Imagine_44, 
                style: style_arrtligne3Imagine_44,
                interactive: true,
                title: '<img src="styles/legend/arrtligne3Imagine_44.png" /> arrêt ligne 3 Imagine'
            });
var format_arrtligne2Imagine_45 = new ol.format.GeoJSON();
var features_arrtligne2Imagine_45 = format_arrtligne2Imagine_45.readFeatures(json_arrtligne2Imagine_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrtligne2Imagine_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrtligne2Imagine_45.addFeatures(features_arrtligne2Imagine_45);
var lyr_arrtligne2Imagine_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrtligne2Imagine_45, 
                style: style_arrtligne2Imagine_45,
                interactive: true,
                title: '<img src="styles/legend/arrtligne2Imagine_45.png" /> arrêt ligne 2 Imagine'
            });
var format_arretligne1Imagine_46 = new ol.format.GeoJSON();
var features_arretligne1Imagine_46 = format_arretligne1Imagine_46.readFeatures(json_arretligne1Imagine_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arretligne1Imagine_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arretligne1Imagine_46.addFeatures(features_arretligne1Imagine_46);
var lyr_arretligne1Imagine_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arretligne1Imagine_46, 
                style: style_arretligne1Imagine_46,
                interactive: true,
                title: '<img src="styles/legend/arretligne1Imagine_46.png" /> arret ligne 1 Imagine'
            });
var format_Fournisseursoccasionnels_47 = new ol.format.GeoJSON();
var features_Fournisseursoccasionnels_47 = format_Fournisseursoccasionnels_47.readFeatures(json_Fournisseursoccasionnels_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fournisseursoccasionnels_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fournisseursoccasionnels_47.addFeatures(features_Fournisseursoccasionnels_47);
var lyr_Fournisseursoccasionnels_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fournisseursoccasionnels_47, 
                style: style_Fournisseursoccasionnels_47,
                interactive: true,
                title: '<img src="styles/legend/Fournisseursoccasionnels_47.png" /> Fournisseurs occasionnels'
            });
var format_Fournisseursinactifs_48 = new ol.format.GeoJSON();
var features_Fournisseursinactifs_48 = format_Fournisseursinactifs_48.readFeatures(json_Fournisseursinactifs_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fournisseursinactifs_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fournisseursinactifs_48.addFeatures(features_Fournisseursinactifs_48);
var lyr_Fournisseursinactifs_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fournisseursinactifs_48, 
                style: style_Fournisseursinactifs_48,
                interactive: true,
                title: '<img src="styles/legend/Fournisseursinactifs_48.png" /> Fournisseurs inactifs'
            });
var format_CoraP_49 = new ol.format.GeoJSON();
var features_CoraP_49 = format_CoraP_49.readFeatures(json_CoraP_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoraP_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoraP_49.addFeatures(features_CoraP_49);
var lyr_CoraP_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoraP_49, 
                style: style_CoraP_49,
                interactive: true,
                title: '<img src="styles/legend/CoraP_49.png" /> Cora (P)'
            });
var format_IntermarchsP_50 = new ol.format.GeoJSON();
var features_IntermarchsP_50 = format_IntermarchsP_50.readFeatures(json_IntermarchsP_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntermarchsP_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntermarchsP_50.addFeatures(features_IntermarchsP_50);
var lyr_IntermarchsP_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IntermarchsP_50, 
                style: style_IntermarchsP_50,
                interactive: true,
                title: '<img src="styles/legend/IntermarchsP_50.png" /> Intermarchés (P)'
            });
var format_SuperUR_51 = new ol.format.GeoJSON();
var features_SuperUR_51 = format_SuperUR_51.readFeatures(json_SuperUR_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuperUR_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuperUR_51.addFeatures(features_SuperUR_51);
var lyr_SuperUR_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuperUR_51, 
                style: style_SuperUR_51,
                interactive: true,
                title: '<img src="styles/legend/SuperUR_51.png" /> Super U (R)'
            });
var format_MetroR_52 = new ol.format.GeoJSON();
var features_MetroR_52 = format_MetroR_52.readFeatures(json_MetroR_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetroR_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetroR_52.addFeatures(features_MetroR_52);
var lyr_MetroR_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MetroR_52, 
                style: style_MetroR_52,
                interactive: true,
                title: '<img src="styles/legend/MetroR_52.png" /> Metro (R)'
            });
var format_MatchR_53 = new ol.format.GeoJSON();
var features_MatchR_53 = format_MatchR_53.readFeatures(json_MatchR_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MatchR_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MatchR_53.addFeatures(features_MatchR_53);
var lyr_MatchR_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MatchR_53, 
                style: style_MatchR_53,
                interactive: true,
                title: '<img src="styles/legend/MatchR_53.png" /> Match (R)'
            });
var format_LeclercR_54 = new ol.format.GeoJSON();
var features_LeclercR_54 = format_LeclercR_54.readFeatures(json_LeclercR_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeclercR_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeclercR_54.addFeatures(features_LeclercR_54);
var lyr_LeclercR_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LeclercR_54, 
                style: style_LeclercR_54,
                interactive: true,
                title: '<img src="styles/legend/LeclercR_54.png" /> Leclerc (R)'
            });
var format_IntermarchR_55 = new ol.format.GeoJSON();
var features_IntermarchR_55 = format_IntermarchR_55.readFeatures(json_IntermarchR_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntermarchR_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntermarchR_55.addFeatures(features_IntermarchR_55);
var lyr_IntermarchR_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IntermarchR_55, 
                style: style_IntermarchR_55,
                interactive: true,
                title: '<img src="styles/legend/IntermarchR_55.png" /> Intermarché (R)'
            });
var format_GrandPanierBioR_56 = new ol.format.GeoJSON();
var features_GrandPanierBioR_56 = format_GrandPanierBioR_56.readFeatures(json_GrandPanierBioR_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrandPanierBioR_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrandPanierBioR_56.addFeatures(features_GrandPanierBioR_56);
var lyr_GrandPanierBioR_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrandPanierBioR_56, 
                style: style_GrandPanierBioR_56,
                interactive: true,
                title: '<img src="styles/legend/GrandPanierBioR_56.png" /> Grand Panier Bio (R)'
            });
var format_GrandFraisR_57 = new ol.format.GeoJSON();
var features_GrandFraisR_57 = format_GrandFraisR_57.readFeatures(json_GrandFraisR_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrandFraisR_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrandFraisR_57.addFeatures(features_GrandFraisR_57);
var lyr_GrandFraisR_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrandFraisR_57, 
                style: style_GrandFraisR_57,
                interactive: true,
                title: '<img src="styles/legend/GrandFraisR_57.png" /> Grand Frais (R)'
            });
var format_GantcasinoR_58 = new ol.format.GeoJSON();
var features_GantcasinoR_58 = format_GantcasinoR_58.readFeatures(json_GantcasinoR_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GantcasinoR_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GantcasinoR_58.addFeatures(features_GantcasinoR_58);
var lyr_GantcasinoR_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GantcasinoR_58, 
                style: style_GantcasinoR_58,
                interactive: true,
                title: '<img src="styles/legend/GantcasinoR_58.png" /> Géant casino (R)'
            });
var format_EntrepotsramasseR_59 = new ol.format.GeoJSON();
var features_EntrepotsramasseR_59 = format_EntrepotsramasseR_59.readFeatures(json_EntrepotsramasseR_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EntrepotsramasseR_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EntrepotsramasseR_59.addFeatures(features_EntrepotsramasseR_59);
var lyr_EntrepotsramasseR_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EntrepotsramasseR_59, 
                style: style_EntrepotsramasseR_59,
                interactive: true,
                title: '<img src="styles/legend/EntrepotsramasseR_59.png" /> Entrepots ramasse (R)'
            });
var format_DystralR_60 = new ol.format.GeoJSON();
var features_DystralR_60 = format_DystralR_60.readFeatures(json_DystralR_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DystralR_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DystralR_60.addFeatures(features_DystralR_60);
var lyr_DystralR_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DystralR_60, 
                style: style_DystralR_60,
                interactive: true,
                title: '<img src="styles/legend/DystralR_60.png" /> Dystral (R)'
            });
var format_Cuisinecentraleelres_61 = new ol.format.GeoJSON();
var features_Cuisinecentraleelres_61 = format_Cuisinecentraleelres_61.readFeatures(json_Cuisinecentraleelres_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuisinecentraleelres_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuisinecentraleelres_61.addFeatures(features_Cuisinecentraleelres_61);
var lyr_Cuisinecentraleelres_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuisinecentraleelres_61, 
                style: style_Cuisinecentraleelres_61,
                interactive: true,
                title: '<img src="styles/legend/Cuisinecentraleelres_61.png" /> Cuisine centrale elres'
            });
var format_ColruytR_62 = new ol.format.GeoJSON();
var features_ColruytR_62 = format_ColruytR_62.readFeatures(json_ColruytR_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColruytR_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColruytR_62.addFeatures(features_ColruytR_62);
var lyr_ColruytR_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ColruytR_62, 
                style: style_ColruytR_62,
                interactive: true,
                title: '<img src="styles/legend/ColruytR_62.png" /> Colruyt (R)'
            });
var format_BoulangeriesR_63 = new ol.format.GeoJSON();
var features_BoulangeriesR_63 = format_BoulangeriesR_63.readFeatures(json_BoulangeriesR_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoulangeriesR_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoulangeriesR_63.addFeatures(features_BoulangeriesR_63);
var lyr_BoulangeriesR_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoulangeriesR_63, 
                style: style_BoulangeriesR_63,
                interactive: true,
                title: '<img src="styles/legend/BoulangeriesR_63.png" /> Boulangeries (R)'
            });
var format_Achats_64 = new ol.format.GeoJSON();
var features_Achats_64 = format_Achats_64.readFeatures(json_Achats_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Achats_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Achats_64.addFeatures(features_Achats_64);
var lyr_Achats_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Achats_64, 
                style: style_Achats_64,
                interactive: true,
                title: '<img src="styles/legend/Achats_64.png" /> Achats'
            });
var group_FournisseursrguliersR = new ol.layer.Group({
                                layers: [lyr_SuperUR_51,lyr_MetroR_52,lyr_MatchR_53,lyr_LeclercR_54,lyr_IntermarchR_55,lyr_GrandPanierBioR_56,lyr_GrandFraisR_57,lyr_GantcasinoR_58,lyr_EntrepotsramasseR_59,lyr_DystralR_60,lyr_Cuisinecentraleelres_61,lyr_ColruytR_62,lyr_BoulangeriesR_63,],
                                title: "Fournisseurs réguliers (R)"});
var group_FournisseurspotentielsP = new ol.layer.Group({
                                layers: [lyr_CoraP_49,lyr_IntermarchsP_50,],
                                title: "Fournisseurs potentiels (P)"});
var group_Autresfournisseurs = new ol.layer.Group({
                                layers: [lyr_Fournisseursoccasionnels_47,lyr_Fournisseursinactifs_48,],
                                title: "Autres fournisseurs"});
var group_RseauImagine = new ol.layer.Group({
                                layers: [lyr_ligne8ImagineThaonlesVosges_31,lyr_ligne7Imagine_32,lyr_ligne6ImagineGolbeyHDVLaVierge_33,lyr_ligne5ImagineGolbeyJdArcDinozPDmon_34,lyr_ligne4Imagine_35,lyr_ligne3ImagineColombireChantraine_36,lyr_ligne2ImagineEpinalZacdelaRoche_37,lyr_ligne1GolbeyJeuxey_38,lyr_arrtligne8Imagine_39,lyr_arrtligne7Imagine_40,lyr_arrtligne6Imagine_41,lyr_arrtligne5Imagine_42,lyr_arrtligne4Imagine_43,lyr_arrtligne3Imagine_44,lyr_arrtligne2Imagine_45,lyr_arretligne1Imagine_46,],
                                title: "Réseau Imagine"});
var group_Offrealimentaireclassique = new ol.layer.Group({
                                layers: [lyr_Vival_20,lyr_SuperU_21,lyr_Norma_22,lyr_Liddle_23,lyr_Leclerc_24,lyr_Intermarch_25,lyr_Cora_26,lyr_Colruyt_27,lyr_Casino_28,lyr_Carrefour_29,lyr_Aldi_30,],
                                title: "Offre alimentaire classique "});
var group_Aidealimentaire = new ol.layer.Group({
                                layers: [lyr_BAvosges_11,lyr_SPF_12,lyr_RDC_13,lyr_CRF_14,lyr_CCAS_15,lyr_BACCAS_16,lyr_BAautre_17,lyr_autres_18,lyr_communesavecaidealim_19,],
                                title: "Aide alimentaire"});
var group_allocatairesRSA = new ol.layer.Group({
                                layers: [lyr_302000_7,lyr_1030_8,lyr_110_9,lyr_donnesindisponibles_10,],
                                title: "allocataires RSA"});
var group_tauxdepauvretEPCI = new ol.layer.Group({
                                layers: [lyr_1619_4,lyr_1316_5,lyr_1013_6,],
                                title: "taux de pauvreté EPCI"});
var group_Dlimitations = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_WazeWorld_1,lyr_communesVosges_2,lyr_dpartement_3,],
                                title: "Délimitations"});

lyr_OSMStandard_0.setVisible(true);lyr_WazeWorld_1.setVisible(true);lyr_communesVosges_2.setVisible(true);lyr_dpartement_3.setVisible(true);lyr_1619_4.setVisible(false);lyr_1316_5.setVisible(false);lyr_1013_6.setVisible(false);lyr_302000_7.setVisible(false);lyr_1030_8.setVisible(false);lyr_110_9.setVisible(false);lyr_donnesindisponibles_10.setVisible(false);lyr_BAvosges_11.setVisible(true);lyr_SPF_12.setVisible(true);lyr_RDC_13.setVisible(true);lyr_CRF_14.setVisible(true);lyr_CCAS_15.setVisible(true);lyr_BACCAS_16.setVisible(true);lyr_BAautre_17.setVisible(true);lyr_autres_18.setVisible(true);lyr_communesavecaidealim_19.setVisible(true);lyr_Vival_20.setVisible(false);lyr_SuperU_21.setVisible(false);lyr_Norma_22.setVisible(false);lyr_Liddle_23.setVisible(false);lyr_Leclerc_24.setVisible(false);lyr_Intermarch_25.setVisible(false);lyr_Cora_26.setVisible(false);lyr_Colruyt_27.setVisible(false);lyr_Casino_28.setVisible(false);lyr_Carrefour_29.setVisible(false);lyr_Aldi_30.setVisible(false);lyr_ligne8ImagineThaonlesVosges_31.setVisible(true);lyr_ligne7Imagine_32.setVisible(true);lyr_ligne6ImagineGolbeyHDVLaVierge_33.setVisible(true);lyr_ligne5ImagineGolbeyJdArcDinozPDmon_34.setVisible(true);lyr_ligne4Imagine_35.setVisible(true);lyr_ligne3ImagineColombireChantraine_36.setVisible(true);lyr_ligne2ImagineEpinalZacdelaRoche_37.setVisible(true);lyr_ligne1GolbeyJeuxey_38.setVisible(true);lyr_arrtligne8Imagine_39.setVisible(true);lyr_arrtligne7Imagine_40.setVisible(true);lyr_arrtligne6Imagine_41.setVisible(true);lyr_arrtligne5Imagine_42.setVisible(true);lyr_arrtligne4Imagine_43.setVisible(true);lyr_arrtligne3Imagine_44.setVisible(true);lyr_arrtligne2Imagine_45.setVisible(true);lyr_arretligne1Imagine_46.setVisible(true);lyr_Fournisseursoccasionnels_47.setVisible(false);lyr_Fournisseursinactifs_48.setVisible(false);lyr_CoraP_49.setVisible(true);lyr_IntermarchsP_50.setVisible(true);lyr_SuperUR_51.setVisible(true);lyr_MetroR_52.setVisible(true);lyr_MatchR_53.setVisible(true);lyr_LeclercR_54.setVisible(true);lyr_IntermarchR_55.setVisible(true);lyr_GrandPanierBioR_56.setVisible(true);lyr_GrandFraisR_57.setVisible(true);lyr_GantcasinoR_58.setVisible(true);lyr_EntrepotsramasseR_59.setVisible(true);lyr_DystralR_60.setVisible(true);lyr_Cuisinecentraleelres_61.setVisible(true);lyr_ColruytR_62.setVisible(true);lyr_BoulangeriesR_63.setVisible(true);lyr_Achats_64.setVisible(true);
var layersList = [group_Dlimitations,group_tauxdepauvretEPCI,group_allocatairesRSA,group_Aidealimentaire,group_Offrealimentaireclassique,group_RseauImagine,group_Autresfournisseurs,group_FournisseurspotentielsP,group_FournisseursrguliersR,lyr_Achats_64];
lyr_communesVosges_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'commune', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole', });
lyr_dpartement_3.set('fieldAliases', {'id': 'id', 'dep': 'dep', 'reg': 'reg', 'libgeo': 'libgeo', });
lyr_1619_4.set('fieldAliases', {'cat': 'cat', 'ID': 'ID', 'CODE_EPCI': 'CODE_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018', });
lyr_1316_5.set('fieldAliases', {'cat': 'cat', 'ID': 'ID', 'CODE_EPCI': 'CODE_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018', });
lyr_1013_6.set('fieldAliases', {'cat': 'cat', 'ID': 'ID', 'CODE_EPCI': 'CODE_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': '% pauvreté ', });
lyr_302000_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'libgeo', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA', });
lyr_1030_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'libgeo', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'médiane niveau de vie', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'nbr allocataires', });
lyr_110_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'libgeo', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA', });
lyr_donnesindisponibles_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'libgeo', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'Médiane niveau de vie', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'Nbr allocataires', });
lyr_BAvosges_11.set('fieldAliases', {'fid': 'fid', 'Ville': 'Ville', 'Association': 'Association', 'Nom complet de l association': 'Nom complet de l association', 'Adresse de l association': 'Adresse de l association', 'Forme d aide alimentaire': 'Forme d aide alimentaire', 'Remarque': 'Remarque', 'Distribution': 'Distribution', 'Ouvert le lundi': 'Ouvert le lundi', 'Horaires lundi': 'Horaires lundi', 'Ouvert le mardi': 'Ouvert le mardi', 'Horaires mardi': 'Horaires mardi', 'Ouvert le mercredi': 'Ouvert le mercredi', 'Horaires mercredi': 'Horaires mercredi', 'Ouvert le jeudi': 'Ouvert le jeudi', 'Horaires jeudi': 'Horaires jeudi', 'Ouvert le vendredi': 'Ouvert le vendredi', 'Horaires vendredi': 'Horaires vendredi', 'Ouvert le samedi': 'Ouvert le samedi', 'Horaires samedi': 'Horaires samedi', 'Nombre de bénéficiaires': 'Nombre de bénéficiaires', 'N° téléphone': 'N° téléphone', 'Mail': 'Mail', 'Nom d un interlocuteur': 'Nom d un interlocuteur', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SPF_12.set('fieldAliases', {'fid': 'fid', 'Ville': 'Ville', 'Association': 'Association', 'Nom complet de l association': 'Nom complet de l association', 'Adresse de l association': 'Adresse de l association', 'Forme d aide alimentaire': 'Forme d aide alimentaire', 'Remarque': 'Remarque', 'Distribution': 'Distribution', 'Ouvert le lundi': 'Ouvert le lundi', 'Horaires lundi': 'Horaires lundi', 'Ouvert le mardi': 'Ouvert le mardi', 'Horaires mardi': 'Horaires mardi', 'Ouvert le mercredi': 'Ouvert le mercredi', 'Horaires mercredi': 'Horaires mercredi', 'Ouvert le jeudi': 'Ouvert le jeudi', 'Horaires jeudi': 'Horaires jeudi', 'Ouvert le vendredi': 'Ouvert le vendredi', 'Horaires vendredi': 'Horaires vendredi', 'Ouvert le samedi': 'Ouvert le samedi', 'Horaires samedi': 'Horaires samedi', 'Nombre de bénéficiaires': 'Nombre de bénéficiaires', 'N° téléphone': 'N° téléphone', 'Mail': 'Mail', 'Nom d un interlocuteur': 'Nom d un interlocuteur', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RDC_13.set('fieldAliases', {'fid': 'fid', 'Ville': 'Ville', 'Association': 'Association', 'Nom complet de l association': 'Nom complet de l association', 'Adresse de l association': 'Adresse de l association', 'Forme d aide alimentaire': 'Forme d aide alimentaire', 'Remarque': 'Remarque', 'Distribution': 'Distribution', 'Ouvert le lundi': 'Ouvert le lundi', 'Horaires lundi': 'Horaires lundi', 'Ouvert le mardi': 'Ouvert le mardi', 'Horaires mardi': 'Horaires mardi', 'Ouvert le mercredi': 'Ouvert le mercredi', 'Horaires mercredi': 'Horaires mercredi', 'Ouvert le jeudi': 'Ouvert le jeudi', 'Horaires jeudi': 'Horaires jeudi', 'Ouvert le vendredi': 'Ouvert le vendredi', 'Horaires vendredi': 'Horaires vendredi', 'Ouvert le samedi': 'Ouvert le samedi', 'Horaires samedi': 'Horaires samedi', 'Nombre de bénéficiaires': 'Nombre de bénéficiaires', 'N° téléphone': 'N° téléphone', 'Mail': 'Mail', 'Nom d un interlocuteur': 'Nom d un interlocuteur', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CRF_14.set('fieldAliases', {'fid': 'fid', 'Ville': 'Ville', 'Association': 'Association', 'Nom complet de l association': 'Nom complet de l association', 'Adresse de l association': 'Adresse de l association', 'Forme d aide alimentaire': 'Forme d aide alimentaire', 'Remarque': 'Remarque', 'Distribution': 'Distribution', 'Ouvert le lundi': 'Ouvert le lundi', 'Horaires lundi': 'Horaires lundi', 'Ouvert le mardi': 'Ouvert le mardi', 'Horaires mardi': 'Horaires mardi', 'Ouvert le mercredi': 'Ouvert le mercredi', 'Horaires mercredi': 'Horaires mercredi', 'Ouvert le jeudi': 'Ouvert le jeudi', 'Horaires jeudi': 'Horaires jeudi', 'Ouvert le vendredi': 'Ouvert le vendredi', 'Horaires vendredi': 'Horaires vendredi', 'Ouvert le samedi': 'Ouvert le samedi', 'Horaires samedi': 'Horaires samedi', 'Nombre de bénéficiaires': 'Nombre de bénéficiaires', 'N° téléphone': 'N° téléphone', 'Mail': 'Mail', 'Nom d un interlocuteur': 'Nom d un interlocuteur', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CCAS_15.set('fieldAliases', {'fid': 'fid', 'Ville': 'Ville', 'Association': 'Association', 'Nom complet de l association': 'Nom complet de l association', 'Adresse de l association': 'Adresse de l association', 'Forme d aide alimentaire': 'Forme d aide alimentaire', 'Remarque': 'Remarque', 'Distribution': 'Distribution', 'Ouvert le lundi': 'Ouvert le lundi', 'Horaires lundi': 'Horaires lundi', 'Ouvert le mardi': 'Ouvert le mardi', 'Horaires mardi': 'Horaires mardi', 'Ouvert le mercredi': 'Ouvert le mercredi', 'Horaires mercredi': 'Horaires mercredi', 'Ouvert le jeudi': 'Ouvert le jeudi', 'Horaires jeudi': 'Horaires jeudi', 'Ouvert le vendredi': 'Ouvert le vendredi', 'Horaires vendredi': 'Horaires vendredi', 'Ouvert le samedi': 'Ouvert le samedi', 'Horaires samedi': 'Horaires samedi', 'Nombre de bénéficiaires': 'Nombre de bénéficiaires', 'N° téléphone': 'N° téléphone', 'Mail': 'Mail', 'Nom d un interlocuteur': 'Nom d un interlocuteur', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BACCAS_16.set('fieldAliases', {'fid': 'fid', 'Ville': 'Ville', 'Association': 'Association', 'Nom complet de l association': 'Nom complet de l association', 'Adresse de l association': 'Adresse de l association', 'Forme d aide alimentaire': 'Forme d aide alimentaire', 'Remarque': 'Remarque', 'Distribution': 'Distribution', 'Ouvert le lundi': 'Ouvert le lundi', 'Horaires lundi': 'Horaires lundi', 'Ouvert le mardi': 'Ouvert le mardi', 'Horaires mardi': 'Horaires mardi', 'Ouvert le mercredi': 'Ouvert le mercredi', 'Horaires mercredi': 'Horaires mercredi', 'Ouvert le jeudi': 'Ouvert le jeudi', 'Horaires jeudi': 'Horaires jeudi', 'Ouvert le vendredi': 'Ouvert le vendredi', 'Horaires vendredi': 'Horaires vendredi', 'Ouvert le samedi': 'Ouvert le samedi', 'Horaires samedi': 'Horaires samedi', 'Nombre de bénéficiaires': 'Nombre de bénéficiaires', 'N° téléphone': 'N° téléphone', 'Mail': 'Mail', 'Nom d un interlocuteur': 'Nom d un interlocuteur', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BAautre_17.set('fieldAliases', {'fid': 'fid', 'Ville': 'Ville', 'Association': 'Association', 'Nom complet de l association': 'Nom complet de l association', 'Adresse de l association': 'Adresse de l association', 'Forme d aide alimentaire': 'Forme d aide alimentaire', 'Remarque': 'Remarque', 'Distribution': 'Distribution', 'Ouvert le lundi': 'Ouvert le lundi', 'Horaires lundi': 'Horaires lundi', 'Ouvert le mardi': 'Ouvert le mardi', 'Horaires mardi': 'Horaires mardi', 'Ouvert le mercredi': 'Ouvert le mercredi', 'Horaires mercredi': 'Horaires mercredi', 'Ouvert le jeudi': 'Ouvert le jeudi', 'Horaires jeudi': 'Horaires jeudi', 'Ouvert le vendredi': 'Ouvert le vendredi', 'Horaires vendredi': 'Horaires vendredi', 'Ouvert le samedi': 'Ouvert le samedi', 'Horaires samedi': 'Horaires samedi', 'Nombre de bénéficiaires': 'Nombre de bénéficiaires', 'N° téléphone': 'N° téléphone', 'Mail': 'Mail', 'Nom d un interlocuteur': 'Nom d un interlocuteur', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_autres_18.set('fieldAliases', {'fid': 'fid', 'Ville': 'Ville', 'Association': 'Association', 'Nom complet de l association': 'Nom complet de l association', 'Adresse de l association': 'Adresse de l association', 'Forme d aide alimentaire': 'Forme d aide alimentaire', 'Remarque': 'Remarque', 'Distribution': 'Distribution', 'Ouvert le lundi': 'Ouvert le lundi', 'Horaires lundi': 'Horaires lundi', 'Ouvert le mardi': 'Ouvert le mardi', 'Horaires mardi': 'Horaires mardi', 'Ouvert le mercredi': 'Ouvert le mercredi', 'Horaires mercredi': 'Horaires mercredi', 'Ouvert le jeudi': 'Ouvert le jeudi', 'Horaires jeudi': 'Horaires jeudi', 'Ouvert le vendredi': 'Ouvert le vendredi', 'Horaires vendredi': 'Horaires vendredi', 'Ouvert le samedi': 'Ouvert le samedi', 'Horaires samedi': 'Horaires samedi', 'Nombre de bénéficiaires': 'Nombre de bénéficiaires', 'N° téléphone': 'N° téléphone', 'Mail': 'Mail', 'Nom d un interlocuteur': 'Nom d un interlocuteur', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_communesavecaidealim_19.set('fieldAliases', {});
lyr_Vival_20.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SuperU_21.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Norma_22.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Liddle_23.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Full Address': 'Full Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Leclerc_24.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Full Address': 'Full Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Intermarch_25.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Cora_26.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Colruyt_27.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Casino_28.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Carrefour_29.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Aldi_30.set('fieldAliases', {'fid': 'fid', 'nom magasin': 'nom magasin', 'adresse': 'adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ligne8ImagineThaonlesVosges_31.set('fieldAliases', {'id': 'id', });
lyr_ligne7Imagine_32.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_ligne6ImagineGolbeyHDVLaVierge_33.set('fieldAliases', {'id': 'id', });
lyr_ligne5ImagineGolbeyJdArcDinozPDmon_34.set('fieldAliases', {'id': 'id', });
lyr_ligne4Imagine_35.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_ligne3ImagineColombireChantraine_36.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_ligne2ImagineEpinalZacdelaRoche_37.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_ligne1GolbeyJeuxey_38.set('fieldAliases', {'id': 'id', });
lyr_arrtligne8Imagine_39.set('fieldAliases', {'fid': 'fid', 'name': 'nom', 'parent_station': 'parent_station', });
lyr_arrtligne7Imagine_40.set('fieldAliases', {'fid': 'fid', 'name': 'nom', 'parent_station': 'parent_station', });
lyr_arrtligne6Imagine_41.set('fieldAliases', {'fid': 'fid', 'name': 'nom', 'parent_station': 'parent_station', });
lyr_arrtligne5Imagine_42.set('fieldAliases', {'fid': 'fid', 'name': 'nom', 'parent_station': 'parent_station', 'ordre': 'ordre', });
lyr_arrtligne4Imagine_43.set('fieldAliases', {'fid': 'fid', 'name': 'nom', 'parent_station': 'parent_station', 'ordre': 'ordre', });
lyr_arrtligne3Imagine_44.set('fieldAliases', {'fid': 'fid', 'name': 'nom', 'parent_station': 'parent_station', });
lyr_arrtligne2Imagine_45.set('fieldAliases', {'fid': 'fid', 'name': 'nom', 'parent_station': 'parent_station', 'ordre': 'ordre', });
lyr_arretligne1Imagine_46.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'nom', });
lyr_Fournisseursoccasionnels_47.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_Fournisseursinactifs_48.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_CoraP_49.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_IntermarchsP_50.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_SuperUR_51.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_MetroR_52.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_MatchR_53.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_LeclercR_54.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_IntermarchR_55.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_GrandPanierBioR_56.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_GrandFraisR_57.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_GantcasinoR_58.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_EntrepotsramasseR_59.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_DystralR_60.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_Cuisinecentraleelres_61.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_ColruytR_62.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_BoulangeriesR_63.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_Achats_64.set('fieldAliases', {'fid': 'fid', 'Fournisseur': 'Fournisseur', 'Statut': 'Statut', 'n° VIF': 'n° VIF', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CP': 'CP', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Direction': 'Direction', 'Opérations': 'Opérations', 'HySA': 'HySA', 'Cerfa': 'Cerfa', 'Convention': 'Convention', 'Jours de ramasse': 'Jours de ramasse', });
lyr_communesVosges_2.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'Hidden', 'reg': 'Hidden', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'TextEdit', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'Hidden', });
lyr_dpartement_3.set('fieldImages', {'id': 'Hidden', 'dep': 'TextEdit', 'reg': 'Hidden', 'libgeo': 'TextEdit', });
lyr_1619_4.set('fieldImages', {'cat': 'Hidden', 'ID': 'Hidden', 'CODE_EPCI': 'Hidden', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'Hidden', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': 'TextEdit', });
lyr_1316_5.set('fieldImages', {'cat': 'Hidden', 'ID': 'Hidden', 'CODE_EPCI': 'Hidden', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'Hidden', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': 'TextEdit', });
lyr_1013_6.set('fieldImages', {'cat': 'Hidden', 'ID': 'Hidden', 'CODE_EPCI': 'Hidden', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'Hidden', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': 'TextEdit', });
lyr_302000_7.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'TextEdit', 'reg': 'TextEdit', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'TextEdit', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'Hidden', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'Range', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'Range', });
lyr_1030_8.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'TextEdit', 'reg': 'TextEdit', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'TextEdit', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'Hidden', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'Range', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'Range', });
lyr_110_9.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'TextEdit', 'reg': 'TextEdit', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'TextEdit', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'Hidden', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'Range', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'Range', });
lyr_donnesindisponibles_10.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'TextEdit', 'reg': 'TextEdit', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'TextEdit', 'installations agricoles com_Nb. chefs d\'exploit. ou d\'entr. Agricole': 'Hidden', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'Range', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'Range', });
lyr_BAvosges_11.set('fieldImages', {'fid': 'Hidden', 'Ville': 'TextEdit', 'Association': 'TextEdit', 'Nom complet de l association': 'TextEdit', 'Adresse de l association': 'TextEdit', 'Forme d aide alimentaire': 'TextEdit', 'Remarque': 'TextEdit', 'Distribution': 'TextEdit', 'Ouvert le lundi': 'TextEdit', 'Horaires lundi': 'TextEdit', 'Ouvert le mardi': 'TextEdit', 'Horaires mardi': 'TextEdit', 'Ouvert le mercredi': 'TextEdit', 'Horaires mercredi': 'TextEdit', 'Ouvert le jeudi': 'TextEdit', 'Horaires jeudi': 'TextEdit', 'Ouvert le vendredi': 'TextEdit', 'Horaires vendredi': 'TextEdit', 'Ouvert le samedi': 'TextEdit', 'Horaires samedi': 'TextEdit', 'Nombre de bénéficiaires': 'TextEdit', 'N° téléphone': 'TextEdit', 'Mail': 'TextEdit', 'Nom d un interlocuteur': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_SPF_12.set('fieldImages', {'fid': 'Hidden', 'Ville': 'TextEdit', 'Association': 'TextEdit', 'Nom complet de l association': 'TextEdit', 'Adresse de l association': 'TextEdit', 'Forme d aide alimentaire': 'TextEdit', 'Remarque': 'TextEdit', 'Distribution': 'TextEdit', 'Ouvert le lundi': 'TextEdit', 'Horaires lundi': 'TextEdit', 'Ouvert le mardi': 'TextEdit', 'Horaires mardi': 'TextEdit', 'Ouvert le mercredi': 'TextEdit', 'Horaires mercredi': 'TextEdit', 'Ouvert le jeudi': 'TextEdit', 'Horaires jeudi': 'TextEdit', 'Ouvert le vendredi': 'TextEdit', 'Horaires vendredi': 'TextEdit', 'Ouvert le samedi': 'TextEdit', 'Horaires samedi': 'TextEdit', 'Nombre de bénéficiaires': 'TextEdit', 'N° téléphone': 'TextEdit', 'Mail': 'TextEdit', 'Nom d un interlocuteur': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_RDC_13.set('fieldImages', {'fid': 'Hidden', 'Ville': 'TextEdit', 'Association': 'TextEdit', 'Nom complet de l association': 'TextEdit', 'Adresse de l association': 'TextEdit', 'Forme d aide alimentaire': 'TextEdit', 'Remarque': 'TextEdit', 'Distribution': 'TextEdit', 'Ouvert le lundi': 'TextEdit', 'Horaires lundi': 'TextEdit', 'Ouvert le mardi': 'TextEdit', 'Horaires mardi': 'TextEdit', 'Ouvert le mercredi': 'TextEdit', 'Horaires mercredi': 'TextEdit', 'Ouvert le jeudi': 'TextEdit', 'Horaires jeudi': 'TextEdit', 'Ouvert le vendredi': 'TextEdit', 'Horaires vendredi': 'TextEdit', 'Ouvert le samedi': 'TextEdit', 'Horaires samedi': 'TextEdit', 'Nombre de bénéficiaires': 'TextEdit', 'N° téléphone': 'TextEdit', 'Mail': 'TextEdit', 'Nom d un interlocuteur': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_CRF_14.set('fieldImages', {'fid': 'Hidden', 'Ville': 'TextEdit', 'Association': 'TextEdit', 'Nom complet de l association': 'TextEdit', 'Adresse de l association': 'TextEdit', 'Forme d aide alimentaire': 'TextEdit', 'Remarque': 'TextEdit', 'Distribution': 'TextEdit', 'Ouvert le lundi': 'TextEdit', 'Horaires lundi': 'TextEdit', 'Ouvert le mardi': 'TextEdit', 'Horaires mardi': 'TextEdit', 'Ouvert le mercredi': 'TextEdit', 'Horaires mercredi': 'TextEdit', 'Ouvert le jeudi': 'TextEdit', 'Horaires jeudi': 'TextEdit', 'Ouvert le vendredi': 'TextEdit', 'Horaires vendredi': 'TextEdit', 'Ouvert le samedi': 'TextEdit', 'Horaires samedi': 'TextEdit', 'Nombre de bénéficiaires': 'TextEdit', 'N° téléphone': 'TextEdit', 'Mail': 'TextEdit', 'Nom d un interlocuteur': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_CCAS_15.set('fieldImages', {'fid': 'Hidden', 'Ville': 'TextEdit', 'Association': 'TextEdit', 'Nom complet de l association': 'TextEdit', 'Adresse de l association': 'TextEdit', 'Forme d aide alimentaire': 'TextEdit', 'Remarque': 'TextEdit', 'Distribution': 'TextEdit', 'Ouvert le lundi': 'TextEdit', 'Horaires lundi': 'TextEdit', 'Ouvert le mardi': 'TextEdit', 'Horaires mardi': 'TextEdit', 'Ouvert le mercredi': 'TextEdit', 'Horaires mercredi': 'TextEdit', 'Ouvert le jeudi': 'TextEdit', 'Horaires jeudi': 'TextEdit', 'Ouvert le vendredi': 'TextEdit', 'Horaires vendredi': 'TextEdit', 'Ouvert le samedi': 'TextEdit', 'Horaires samedi': 'TextEdit', 'Nombre de bénéficiaires': 'TextEdit', 'N° téléphone': 'TextEdit', 'Mail': 'TextEdit', 'Nom d un interlocuteur': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_BACCAS_16.set('fieldImages', {'fid': 'Hidden', 'Ville': 'TextEdit', 'Association': 'TextEdit', 'Nom complet de l association': 'TextEdit', 'Adresse de l association': 'TextEdit', 'Forme d aide alimentaire': 'TextEdit', 'Remarque': 'TextEdit', 'Distribution': 'TextEdit', 'Ouvert le lundi': 'TextEdit', 'Horaires lundi': 'TextEdit', 'Ouvert le mardi': 'TextEdit', 'Horaires mardi': 'TextEdit', 'Ouvert le mercredi': 'TextEdit', 'Horaires mercredi': 'TextEdit', 'Ouvert le jeudi': 'TextEdit', 'Horaires jeudi': 'TextEdit', 'Ouvert le vendredi': 'TextEdit', 'Horaires vendredi': 'TextEdit', 'Ouvert le samedi': 'TextEdit', 'Horaires samedi': 'TextEdit', 'Nombre de bénéficiaires': 'TextEdit', 'N° téléphone': 'TextEdit', 'Mail': 'TextEdit', 'Nom d un interlocuteur': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_BAautre_17.set('fieldImages', {'fid': 'Hidden', 'Ville': 'TextEdit', 'Association': 'TextEdit', 'Nom complet de l association': 'TextEdit', 'Adresse de l association': 'TextEdit', 'Forme d aide alimentaire': 'TextEdit', 'Remarque': 'TextEdit', 'Distribution': 'TextEdit', 'Ouvert le lundi': 'TextEdit', 'Horaires lundi': 'TextEdit', 'Ouvert le mardi': 'TextEdit', 'Horaires mardi': 'TextEdit', 'Ouvert le mercredi': 'TextEdit', 'Horaires mercredi': 'TextEdit', 'Ouvert le jeudi': 'TextEdit', 'Horaires jeudi': 'TextEdit', 'Ouvert le vendredi': 'TextEdit', 'Horaires vendredi': 'TextEdit', 'Ouvert le samedi': 'TextEdit', 'Horaires samedi': 'TextEdit', 'Nombre de bénéficiaires': 'TextEdit', 'N° téléphone': 'TextEdit', 'Mail': 'TextEdit', 'Nom d un interlocuteur': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_autres_18.set('fieldImages', {'fid': 'Hidden', 'Ville': 'TextEdit', 'Association': 'TextEdit', 'Nom complet de l association': 'TextEdit', 'Adresse de l association': 'TextEdit', 'Forme d aide alimentaire': 'TextEdit', 'Remarque': 'TextEdit', 'Distribution': 'TextEdit', 'Ouvert le lundi': 'TextEdit', 'Horaires lundi': 'TextEdit', 'Ouvert le mardi': 'TextEdit', 'Horaires mardi': 'TextEdit', 'Ouvert le mercredi': 'TextEdit', 'Horaires mercredi': 'TextEdit', 'Ouvert le jeudi': 'TextEdit', 'Horaires jeudi': 'TextEdit', 'Ouvert le vendredi': 'TextEdit', 'Horaires vendredi': 'TextEdit', 'Ouvert le samedi': 'TextEdit', 'Horaires samedi': 'TextEdit', 'Nombre de bénéficiaires': 'TextEdit', 'N° téléphone': 'TextEdit', 'Mail': 'TextEdit', 'Nom d un interlocuteur': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_communesavecaidealim_19.set('fieldImages', {});
lyr_Vival_20.set('fieldImages', {'fid': 'Hidden', 'nom magasin': 'TextEdit', 'adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_SuperU_21.set('fieldImages', {'fid': 'Hidden', 'nom magasin': '', 'adresse': '', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Norma_22.set('fieldImages', {'fid': 'Hidden', 'nom magasin': 'TextEdit', 'adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Liddle_23.set('fieldImages', {'fid': 'Hidden', 'nom magasin': 'TextEdit', 'adresse': 'TextEdit', 'Full Address': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Leclerc_24.set('fieldImages', {'fid': 'Hidden', 'nom magasin': '', 'adresse': '', 'Full Address': '', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Intermarch_25.set('fieldImages', {'fid': 'Hidden', 'nom magasin': '', 'adresse': '', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Cora_26.set('fieldImages', {'fid': 'Hidden', 'nom magasin': '', 'adresse': '', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Colruyt_27.set('fieldImages', {'fid': 'Hidden', 'nom magasin': 'TextEdit', 'adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Casino_28.set('fieldImages', {'fid': 'Hidden', 'nom magasin': 'TextEdit', 'adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Carrefour_29.set('fieldImages', {'fid': 'Hidden', 'nom magasin': 'TextEdit', 'adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Aldi_30.set('fieldImages', {'fid': 'Hidden', 'nom magasin': 'TextEdit', 'adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_ligne8ImagineThaonlesVosges_31.set('fieldImages', {'id': 'Hidden', });
lyr_ligne7Imagine_32.set('fieldImages', {'id': 'Hidden', 'Nom': 'Hidden', });
lyr_ligne6ImagineGolbeyHDVLaVierge_33.set('fieldImages', {'id': 'Hidden', });
lyr_ligne5ImagineGolbeyJdArcDinozPDmon_34.set('fieldImages', {'id': 'Hidden', });
lyr_ligne4Imagine_35.set('fieldImages', {'fid': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', });
lyr_ligne3ImagineColombireChantraine_36.set('fieldImages', {'id': 'Hidden', 'nom': 'Hidden', });
lyr_ligne2ImagineEpinalZacdelaRoche_37.set('fieldImages', {'fid': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', });
lyr_ligne1GolbeyJeuxey_38.set('fieldImages', {'id': 'Hidden', });
lyr_arrtligne8Imagine_39.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'parent_station': 'Hidden', });
lyr_arrtligne7Imagine_40.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'parent_station': 'Hidden', });
lyr_arrtligne6Imagine_41.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'parent_station': 'Hidden', });
lyr_arrtligne5Imagine_42.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'parent_station': 'Hidden', 'ordre': 'Hidden', });
lyr_arrtligne4Imagine_43.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'parent_station': 'Hidden', 'ordre': 'Hidden', });
lyr_arrtligne3Imagine_44.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'parent_station': 'Hidden', });
lyr_arrtligne2Imagine_45.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'parent_station': 'Hidden', 'ordre': 'Hidden', });
lyr_arretligne1Imagine_46.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'name': 'TextEdit', });
lyr_Fournisseursoccasionnels_47.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_Fournisseursinactifs_48.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_CoraP_49.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_IntermarchsP_50.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_SuperUR_51.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_MetroR_52.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_MatchR_53.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_LeclercR_54.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_IntermarchR_55.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_GrandPanierBioR_56.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_GrandFraisR_57.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_GantcasinoR_58.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': '', 'Statut': '', 'n° VIF': '', 'Adresse': '', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': '', 'Téléphone': '', 'E-mail': '', 'Direction': '', 'Opérations': '', 'HySA': '', 'Cerfa': '', 'Convention': '', 'Jours de ramasse': '', });
lyr_EntrepotsramasseR_59.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_DystralR_60.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_Cuisinecentraleelres_61.set('fieldImages', {'fid': 'TextEdit', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'TextEdit', 'HySA': 'TextEdit', 'Cerfa': 'TextEdit', 'Convention': 'TextEdit', 'Jours de ramasse': 'TextEdit', });
lyr_ColruytR_62.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_BoulangeriesR_63.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_Achats_64.set('fieldImages', {'fid': 'Hidden', 'Fournisseur': 'TextEdit', 'Statut': 'TextEdit', 'n° VIF': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'CP': 'Range', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Direction': 'TextEdit', 'Opérations': 'Hidden', 'HySA': 'Hidden', 'Cerfa': 'Hidden', 'Convention': 'Hidden', 'Jours de ramasse': 'TextEdit', });
lyr_communesVosges_2.set('fieldLabels', {});
lyr_dpartement_3.set('fieldLabels', {});
lyr_1619_4.set('fieldLabels', {});
lyr_1316_5.set('fieldLabels', {});
lyr_1013_6.set('fieldLabels', {});
lyr_302000_7.set('fieldLabels', {});
lyr_1030_8.set('fieldLabels', {});
lyr_110_9.set('fieldLabels', {});
lyr_donnesindisponibles_10.set('fieldLabels', {});
lyr_BAvosges_11.set('fieldLabels', {});
lyr_SPF_12.set('fieldLabels', {});
lyr_RDC_13.set('fieldLabels', {});
lyr_CRF_14.set('fieldLabels', {});
lyr_CCAS_15.set('fieldLabels', {});
lyr_BACCAS_16.set('fieldLabels', {});
lyr_BAautre_17.set('fieldLabels', {});
lyr_autres_18.set('fieldLabels', {});
lyr_communesavecaidealim_19.set('fieldLabels', {});
lyr_Vival_20.set('fieldLabels', {});
lyr_SuperU_21.set('fieldLabels', {});
lyr_Norma_22.set('fieldLabels', {});
lyr_Liddle_23.set('fieldLabels', {});
lyr_Leclerc_24.set('fieldLabels', {});
lyr_Intermarch_25.set('fieldLabels', {});
lyr_Cora_26.set('fieldLabels', {});
lyr_Colruyt_27.set('fieldLabels', {});
lyr_Casino_28.set('fieldLabels', {});
lyr_Carrefour_29.set('fieldLabels', {});
lyr_Aldi_30.set('fieldLabels', {});
lyr_ligne8ImagineThaonlesVosges_31.set('fieldLabels', {});
lyr_ligne7Imagine_32.set('fieldLabels', {});
lyr_ligne6ImagineGolbeyHDVLaVierge_33.set('fieldLabels', {});
lyr_ligne5ImagineGolbeyJdArcDinozPDmon_34.set('fieldLabels', {});
lyr_ligne4Imagine_35.set('fieldLabels', {});
lyr_ligne3ImagineColombireChantraine_36.set('fieldLabels', {});
lyr_ligne2ImagineEpinalZacdelaRoche_37.set('fieldLabels', {});
lyr_ligne1GolbeyJeuxey_38.set('fieldLabels', {});
lyr_arrtligne8Imagine_39.set('fieldLabels', {});
lyr_arrtligne7Imagine_40.set('fieldLabels', {});
lyr_arrtligne6Imagine_41.set('fieldLabels', {});
lyr_arrtligne5Imagine_42.set('fieldLabels', {});
lyr_arrtligne4Imagine_43.set('fieldLabels', {});
lyr_arrtligne3Imagine_44.set('fieldLabels', {});
lyr_arrtligne2Imagine_45.set('fieldLabels', {});
lyr_arretligne1Imagine_46.set('fieldLabels', {});
lyr_Fournisseursoccasionnels_47.set('fieldLabels', {});
lyr_Fournisseursinactifs_48.set('fieldLabels', {});
lyr_CoraP_49.set('fieldLabels', {});
lyr_IntermarchsP_50.set('fieldLabels', {});
lyr_SuperUR_51.set('fieldLabels', {});
lyr_MetroR_52.set('fieldLabels', {});
lyr_MatchR_53.set('fieldLabels', {});
lyr_LeclercR_54.set('fieldLabels', {});
lyr_IntermarchR_55.set('fieldLabels', {});
lyr_GrandPanierBioR_56.set('fieldLabels', {});
lyr_GrandFraisR_57.set('fieldLabels', {});
lyr_GantcasinoR_58.set('fieldLabels', {});
lyr_EntrepotsramasseR_59.set('fieldLabels', {});
lyr_DystralR_60.set('fieldLabels', {});
lyr_Cuisinecentraleelres_61.set('fieldLabels', {});
lyr_ColruytR_62.set('fieldLabels', {});
lyr_BoulangeriesR_63.set('fieldLabels', {});
lyr_Achats_64.set('fieldLabels', {'Fournisseur': 'inline label', 'Statut': 'inline label', 'n° VIF': 'inline label', 'Adresse': 'inline label', 'CP': 'inline label', 'Téléphone': 'inline label', 'E-mail': 'inline label', 'Direction': 'inline label', 'Jours de ramasse': 'inline label', });
lyr_Achats_64.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});