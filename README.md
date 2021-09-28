# Rectagnles Filler

### To run server:
1. `nvm use`
2. `npm i`
3. `node server.js`

### To check token is valid
```curl
curl --location --request GET 'localhost:4040/hello?token=your_token_from_settings_json'
```

Response is: 
```json
{
    "message": "Hello World!"
}
```

### To do a test post request to fill rectangles
```curl
curl --location --request POST 'localhost:4040/create_image_with_lines_and_fill?token=your_token_from_settings_json' \
--header 'Content-Type: application/json' \
--data-raw '{
    "image": {
        "imageSize": 10,
        "lines": [
            { "x1": 0, "y1": 5, "x2": 5, "y2": 5},
            { "x1": 5, "y1": 5, "x2": 5, "y2": 0}
        ],
        "fillDotes": [
           { "x": 9, "y": 1}
        ]
    }
}'
```
In response:
* "b" - not filled dotes;
* "r" - lines dotes;
* "w" - filled dotes;
```json
{
    "image": [
    [
        "b", "b", "b", "b", "b", "r", "w", "w", "w", "w"
    ],
    [
        "b", "b", "b", "b", "b", "r", "w", "w", "w", "w"
    ],
    [
        "b", "b", "b", "b", "b", "r", "w", "w", "w", "w"
    ],
    [
        "b", "b", "b", "b", "b", "r", "w", "w", "w", "w"
    ],
    [
        "b", "b", "b", "b", "b", "r", "w", "w", "w", "w"
    ],
    [
        "r", "r", "r", "r", "r", "r", "w", "w", "w", "w"
    ],
    [
        "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"
    ],
    [
        "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"
    ],
    [
        "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"
    ],
    [
        "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"
    ]]
}
```
