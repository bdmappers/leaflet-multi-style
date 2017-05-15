var map = L.map('map');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var vectorLayer = L.geoJson.multiStyle(getGeoJsonData()).addTo(map);

map.fitBounds(vectorLayer.getBounds());

function getGeoJsonData () {
    return {
    "type": "FeatureCollection",
    "generator": "overpass-turbo",
    "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
    "timestamp": "2016-10-13T07:31:02Z",
    "features": [
    {
    "type": "Feature",
    "id": "way/35202567",
    "properties": {
    "@id": "way/35202567",
    "bicycle": "no",
    "foot": "yes",
    "highway": "track",
    "horse": "yes",
    "motor_vehicle": "no",
    "name": "Al-Siq",
    "name:ar": "السيق‎",
    "surface": "stone",
    "tracktype": "grade1",
    "waterway": "wadi"
    },
    "geometry": {
    "type": "LineString",
    "coordinates": [
    [
    35.4610716,
    30.3218549
    ],
    [
    35.4608301,
    30.3218881
    ],
    [
    35.4605812,
    30.3218403
    ],
    [
    35.4601477,
    30.3216875
    ],
    [
    35.4599238,
    30.3215774
    ],
    [
    35.459843,
    30.3214112
    ],
    [
    35.459764,
    30.3213202
    ],
    [
    35.4597195,
    30.3212133
    ],
    [
    35.4596774,
    30.3211191
    ],
    [
    35.4595224,
    30.3210579
    ],
    [
    35.4594195,
    30.3210486
    ],
    [
    35.4592497,
    30.3211709
    ],
    [
    35.4591003,
    30.3212369
    ],
    [
    35.4589814,
    30.3213691
    ],
    [
    35.4589309,
    30.3214991
    ],
    [
    35.459007,
    30.3216191
    ],
    [
    35.4590029,
    30.3220169
    ],
    [
    35.4589277,
    30.3221527
    ],
    [
    35.45888,
    30.322328
    ],
    [
    35.4587813,
    30.3223891
    ],
    [
    35.4586927,
    30.3224693
    ],
    [
    35.4586317,
    30.3226114
    ],
    [
    35.4585407,
    30.3227531
    ],
    [
    35.4584817,
    30.3228389
    ],
    [
    35.4583836,
    30.3229085
    ],
    [
    35.4582605,
    30.3229493
    ],
    [
    35.4581444,
    30.323019
    ],
    [
    35.4580222,
    30.323094
    ],
    [
    35.4578439,
    30.3232221
    ],
    [
    35.457672,
    30.3232433
    ],
    [
    35.4572346,
    30.3232418
    ],
    [
    35.4570443,
    30.3231377
    ],
    [
    35.4568297,
    30.3230984
    ],
    [
    35.4566107,
    30.3230304
    ],
    [
    35.4562393,
    30.3228762
    ],
    [
    35.4560938,
    30.3228525
    ],
    [
    35.4559857,
    30.3228929
    ],
    [
    35.4558951,
    30.3228197
    ],
    [
    35.4558515,
    30.3227421
    ],
    [
    35.4557743,
    30.3226861
    ],
    [
    35.4557278,
    30.3225728
    ],
    [
    35.4556321,
    30.3223993
    ],
    [
    35.4556133,
    30.32229
    ],
    [
    35.4555082,
    30.3222638
    ],
    [
    35.4554182,
    30.3222002
    ],
    [
    35.4551321,
    30.3221008
    ],
    [
    35.4550454,
    30.3221466
    ],
    [
    35.4549578,
    30.3222252
    ],
    [
    35.4549027,
    30.3222885
    ],
    [
    35.4548528,
    30.3223449
    ],
    [
    35.4548149,
    30.3225502
    ],
    [
    35.4547744,
    30.3226757
    ],
    [
    35.4547404,
    30.3227409
    ],
    [
    35.4547214,
    30.3228051
    ],
    [
    35.45458,
    30.3228634
    ],
    [
    35.4543875,
    30.322943
    ],
    [
    35.4542604,
    30.3229579
    ],
    [
    35.4541525,
    30.3229787
    ],
    [
    35.4540202,
    30.3229203
    ],
    [
    35.4539246,
    30.3229394
    ],
    [
    35.4537832,
    30.3229122
    ],
    [
    35.4536606,
    30.3229645
    ],
    [
    35.4535223,
    30.3229054
    ],
    [
    35.4533777,
    30.3228837
    ],
    [
    35.4532426,
    30.3228256
    ],
    [
    35.4531383,
    30.3227739
    ],
    [
    35.4531084,
    30.3227257
    ],
    [
    35.4530571,
    30.3226748
    ],
    [
    35.4529582,
    30.3225619
    ],
    [
    35.4528713,
    30.3225319
    ],
    [
    35.4527739,
    30.3225025
    ],
    [
    35.4526847,
    30.3224904
    ],
    [
    35.4525972,
    30.3224199
    ],
    [
    35.4524739,
    30.3223523
    ],
    [
    35.4523685,
    30.3223443
    ],
    [
    35.4521767,
    30.3223222
    ],
    [
    35.4520199,
    30.3222697
    ],
    [
    35.4518963,
    30.3222883
    ],
    [
    35.4515891,
    30.3221628
    ],
    [
    35.4514324,
    30.3224422
    ],
    [
    35.4512857,
    30.3226255
    ],
    [
    35.4509722,
    30.3227347
    ],
    [
    35.4504867,
    30.3229267
    ],
    [
    35.4503117,
    30.3230313
    ],
    [
    35.4500923,
    30.3231624
    ],
    [
    35.4498091,
    30.3233109
    ],
    [
    35.4494399,
    30.323468
    ],
    [
    35.4492174,
    30.323743
    ],
    [
    35.4490809,
    30.3239525
    ],
    [
    35.4486764,
    30.3238565
    ],
    [
    35.4479935,
    30.3241144
    ]
    ]
    }
    },
    {
    "type": "Feature",
    "id": "node/2437205265",
    "properties": {
    "@id": "node/2437205265",
    "name": "As-Siq gorge",
    "tourism": "attraction"
    },
    "geometry": {
    "type": "Point",
    "coordinates": [
    35.4566107,
    30.3230304
    ]
    }
    },
    {
    "type": "Feature",
    "id": "node/2437205301",
    "properties": {
    "@id": "node/2437205301",
    "historic": "ruins",
    "name": "The Outer Siq",
    "tourism": "attraction"
    },
    "geometry": {
    "type": "Point",
    "coordinates": [
    35.4503117,
    30.3230313
    ]
    }
    }
    ]
    };
}
