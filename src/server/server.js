const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/getAssociationDetails', (req, res) => {
    res.send([{
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 1,
        "appearances": 7,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_192_2.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_243_0.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_238_0.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_33_3.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_240_0.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 6,
        "appearances": 4,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_28_4.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_38_1.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 9,
        "appearances": 2,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_31_3.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 14,
        "appearances": 6,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_216_1.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_101_0.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_94_0.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 20,
        "appearances": 3,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_96_0.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_145_0.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_115_0.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 26,
        "appearances": 4,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_154_1.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 27,
        "appearances": 4,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_161_0.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_185_0.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 29,
        "appearances": 2,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_247_0.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 31,
        "appearances": 4,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_194_0.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 32,
        "appearances": 3,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_195_1.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 35,
        "appearances": 2,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_231_0.jpg"
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 38,
        "appearances": 2,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_254_0.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 39,
        "appearances": 2,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_255_0.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_289_1.jpg"
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 46,
        "appearances": 7,
        "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_293_0.jpg"
    }]);
    });
   app.get('/api/getGroupAssociation', (req, res) => {
    res.send([{
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "detections": [
            {
                "cluster_id": 4,
                "appearances": 8,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_33_3.jpg"
            },
            {
                "cluster_id": 5,
                "appearances": 8,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_240_0.jpg"
            },
            {
                "cluster_id": 9,
                "appearances": 2,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_31_3.jpg"
            },
            {
                "cluster_id": 14,
                "appearances": 6,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_216_1.jpg"
            },
            {
                "cluster_id": 29,
                "appearances": 2,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_247_0.jpg"
            },
            {
                "cluster_id": 35,
                "appearances": 2,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_231_0.jpg"
            }
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "detections": [
            {
                "cluster_id": 1,
                "appearances": 7,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_192_2.jpg"
            },
            {
                "cluster_id": 2,
                "appearances": 20,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_243_0.jpg"
            },
            {
                "cluster_id": 3,
                "appearances": 13,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_238_0.jpg"
            },
            {
                "cluster_id": 7,
                "appearances": 8,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_38_1.jpg"
            },
            {
                "cluster_id": 17,
                "appearances": 8,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_101_0.jpg"
            },
            {
                "cluster_id": 20,
                "appearances": 3,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_96_0.jpg"
            },
            {
                "cluster_id": 26,
                "appearances": 4,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_154_1.jpg"
            },
            {
                "cluster_id": 31,
                "appearances": 4,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_194_0.jpg"
            },
            {
                "cluster_id": 38,
                "appearances": 2,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_254_0.jpg"
            }
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "detections": [
            {
                "cluster_id": 6,
                "appearances": 4,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_28_4.jpg"
            },
            {
                "cluster_id": 18,
                "appearances": 9,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_94_0.jpg"
            },
            {
                "cluster_id": 21,
                "appearances": 12,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_145_0.jpg"
            },
            {
                "cluster_id": 22,
                "appearances": 8,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_115_0.jpg"
            },
            {
                "cluster_id": 27,
                "appearances": 4,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_161_0.jpg"
            },
            {
                "cluster_id": 28,
                "appearances": 11,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_185_0.jpg"
            },
            {
                "cluster_id": 32,
                "appearances": 3,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_195_1.jpg"
            },
            {
                "cluster_id": 39,
                "appearances": 2,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_255_0.jpg"
            },
            {
                "cluster_id": 44,
                "appearances": 10,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_289_1.jpg"
            },
            {
                "cluster_id": 46,
                "appearances": 7,
                "image_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9_frame_293_0.jpg"
            }
        ]
    }]);
  });
  app.get('/api/getImageDetection', (req, res) => {
    res.send([{
        "image_id": "test_image.jpg",
        "bounding_boxes": [
            {
                "crop_id": "1.jpg",
                "bounding_boxes": {
                    "x1": 779,
                    "x2": 826,
                    "y1": 77,
                    "y2": 124
                }
            },
            {
                "crop_id": "2.jpg",
                "bounding_boxes": {
                    "x1": 567,
                    "x2": 615,
                    "y1": 125,
                    "y2": 172
                }
            },
            {
                "crop_id": "3.jpg",
                "bounding_boxes": {
                    "x1": 961,
                    "x2": 1008,
                    "y1": 115,
                    "y2": 162
                }
            },
            {
                "crop_id": "4.jpg",
                "bounding_boxes": {
                    "x1": 409,
                    "x2": 456,
                    "y1": 120,
                    "y2": 167
                }
            },
            {
                "crop_id": "5.jpg",
                "bounding_boxes": {
                    "x1": 209,
                    "x2": 248,
                    "y1": 169,
                    "y2": 209
                }
            },
            {
                "crop_id": "6.jpg",
                "bounding_boxes": {
                    "x1": 1043,
                    "x2": 1090,
                    "y1": 134,
                    "y2": 182
                }
            }
        ]
    }]);
  });
  app.get('/api/getVideoAssociation', (req, res) => {
    res.send([{
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 1,
        "appearances": 7,
        "timestamp": [
            0,
            1,
            2,
            3,
            96,
            224,
            106
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": [
            293,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            213,
            214,
            190,
            191
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": [
            32,
            33,
            36,
            37,
            38,
            39,
            44,
            276,
            27,
            28,
            29,
            30,
            31
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "timestamp": [
            32,
            33,
            35,
            27,
            28,
            29,
            30,
            31
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "timestamp": [
            32,
            33,
            34,
            35,
            27,
            28,
            29,
            31
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 6,
        "appearances": 4,
        "timestamp": [
            27,
            28,
            29,
            30
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "timestamp": [
            32,
            36,
            37,
            40,
            28,
            29,
            30,
            31
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 9,
        "appearances": 2,
        "timestamp": [
            32,
            33
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 14,
        "appearances": 6,
        "timestamp": [
            43,
            44,
            45,
            46,
            47,
            254
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "timestamp": [
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            89
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": [
            96,
            97,
            102,
            103,
            104,
            105,
            106,
            108,
            109
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 20,
        "appearances": 3,
        "timestamp": [
            105,
            108,
            109
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": [
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            152,
            153,
            154,
            157,
            159
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "timestamp": [
            128,
            129,
            130,
            131,
            132,
            133,
            134,
            126
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 26,
        "appearances": 4,
        "timestamp": [
            176,
            177,
            180,
            175
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 27,
        "appearances": 4,
        "timestamp": [
            185,
            187,
            182,
            183
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": [
            192,
            194,
            195,
            197,
            198,
            199,
            200,
            201,
            202,
            216,
            189
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 29,
        "appearances": 2,
        "timestamp": [
            193,
            298
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 31,
        "appearances": 4,
        "timestamp": [
            224,
            225,
            226,
            223
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 32,
        "appearances": 3,
        "timestamp": [
            226,
            227,
            222
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 35,
        "appearances": 2,
        "timestamp": [
            265,
            274
        ]
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 38,
        "appearances": 2,
        "timestamp": [
            306,
            302
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 39,
        "appearances": 2,
        "timestamp": [
            305,
            308
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": [
            323,
            324,
            360,
            329,
            331,
            333,
            334,
            335,
            337,
            338
        ]
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 46,
        "appearances": 7,
        "timestamp": [
            357,
            359,
            360,
            361,
            362,
            363,
            364
        ]
    }]);
  });
  app.get('/api/getVideoPlayer', (req, res) => {
    res.send([{
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 1,
        "appearances": 7,
        "timestamp": 0
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 1,
        "appearances": 7,
        "timestamp": 1
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 1,
        "appearances": 7,
        "timestamp": 2
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 1,
        "appearances": 7,
        "timestamp": 3
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 1,
        "appearances": 7,
        "timestamp": 96
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 1,
        "appearances": 7,
        "timestamp": 224
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 1,
        "appearances": 7,
        "timestamp": 106
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 293
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 6
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 7
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 8
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 9
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 10
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 11
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 12
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 13
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 14
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 15
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 16
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 17
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 18
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 19
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 20
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 213
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 214
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 190
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 2,
        "appearances": 20,
        "timestamp": 191
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 32
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 33
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 36
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 37
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 38
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 39
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 44
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 276
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 27
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 28
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 29
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 30
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 3,
        "appearances": 13,
        "timestamp": 31
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "timestamp": 32
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "timestamp": 33
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "timestamp": 35
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "timestamp": 27
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "timestamp": 28
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "timestamp": 29
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "timestamp": 30
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 4,
        "appearances": 8,
        "timestamp": 31
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "timestamp": 32
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "timestamp": 33
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "timestamp": 34
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "timestamp": 35
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "timestamp": 27
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "timestamp": 28
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "timestamp": 29
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 5,
        "appearances": 8,
        "timestamp": 31
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 6,
        "appearances": 4,
        "timestamp": 27
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 6,
        "appearances": 4,
        "timestamp": 28
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 6,
        "appearances": 4,
        "timestamp": 29
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 6,
        "appearances": 4,
        "timestamp": 30
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "timestamp": 32
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "timestamp": 36
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "timestamp": 37
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "timestamp": 40
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "timestamp": 28
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "timestamp": 29
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "timestamp": 30
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 7,
        "appearances": 8,
        "timestamp": 31
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 9,
        "appearances": 2,
        "timestamp": 32
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 9,
        "appearances": 2,
        "timestamp": 33
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 14,
        "appearances": 6,
        "timestamp": 43
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 14,
        "appearances": 6,
        "timestamp": 44
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 14,
        "appearances": 6,
        "timestamp": 45
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 14,
        "appearances": 6,
        "timestamp": 46
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 14,
        "appearances": 6,
        "timestamp": 47
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 14,
        "appearances": 6,
        "timestamp": 254
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "timestamp": 81
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "timestamp": 82
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "timestamp": 83
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "timestamp": 84
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "timestamp": 85
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "timestamp": 86
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "timestamp": 87
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 17,
        "appearances": 8,
        "timestamp": 89
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": 96
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": 97
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": 102
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": 103
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": 104
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": 105
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": 106
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": 108
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 18,
        "appearances": 9,
        "timestamp": 109
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 20,
        "appearances": 3,
        "timestamp": 105
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 20,
        "appearances": 3,
        "timestamp": 108
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 20,
        "appearances": 3,
        "timestamp": 109
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 143
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 144
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 145
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 146
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 147
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 148
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 149
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 152
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 153
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 154
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 157
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 21,
        "appearances": 12,
        "timestamp": 159
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "timestamp": 128
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "timestamp": 129
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "timestamp": 130
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "timestamp": 131
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "timestamp": 132
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "timestamp": 133
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "timestamp": 134
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 22,
        "appearances": 8,
        "timestamp": 126
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 26,
        "appearances": 4,
        "timestamp": 176
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 26,
        "appearances": 4,
        "timestamp": 177
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 26,
        "appearances": 4,
        "timestamp": 180
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 26,
        "appearances": 4,
        "timestamp": 175
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 27,
        "appearances": 4,
        "timestamp": 185
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 27,
        "appearances": 4,
        "timestamp": 187
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 27,
        "appearances": 4,
        "timestamp": 182
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 27,
        "appearances": 4,
        "timestamp": 183
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 192
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 194
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 195
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 197
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 198
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 199
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 200
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 201
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 202
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 216
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 28,
        "appearances": 11,
        "timestamp": 189
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 29,
        "appearances": 2,
        "timestamp": 193
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 29,
        "appearances": 2,
        "timestamp": 298
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 31,
        "appearances": 4,
        "timestamp": 224
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 31,
        "appearances": 4,
        "timestamp": 225
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 31,
        "appearances": 4,
        "timestamp": 226
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 31,
        "appearances": 4,
        "timestamp": 223
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 32,
        "appearances": 3,
        "timestamp": 226
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 32,
        "appearances": 3,
        "timestamp": 227
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 32,
        "appearances": 3,
        "timestamp": 222
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 35,
        "appearances": 2,
        "timestamp": 265
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-c0b5d7b115a9.mp4",
        "location": "Hospital",
        "cluster_id": 35,
        "appearances": 2,
        "timestamp": 274
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 38,
        "appearances": 2,
        "timestamp": 306
    },
    {
        "video_id": "d3b4f370-756d-11ea-b04d-9.mp4",
        "location": "Bus stand",
        "cluster_id": 38,
        "appearances": 2,
        "timestamp": 302
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 39,
        "appearances": 2,
        "timestamp": 305
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 39,
        "appearances": 2,
        "timestamp": 308
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 323
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 324
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 360
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 329
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 331
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 333
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 334
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 335
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 337
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 44,
        "appearances": 10,
        "timestamp": 338
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 46,
        "appearances": 7,
        "timestamp": 357
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 46,
        "appearances": 7,
        "timestamp": 359
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 46,
        "appearances": 7,
        "timestamp": 360
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 46,
        "appearances": 7,
        "timestamp": 361
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 46,
        "appearances": 7,
        "timestamp": 362
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 46,
        "appearances": 7,
        "timestamp": 363
    },
    {
        "video_id": "d3b4f370-7b04d-c0b5d7b115a9.mp4",
        "location": "City center",
        "cluster_id": 46,
        "appearances": 7,
        "timestamp": 364
    }]);
  });


app.listen(port, () => console.log(`Listening on port ${port}`));