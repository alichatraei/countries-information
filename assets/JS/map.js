$(document).ready(function () {
    var app = new Mapp({
        element: '#map',
        presets: {
            latlng: {
                lat: 32,
                lng: 52,
            },
            zoom: 6
        },
        apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY5N2JlMTYzMjVkNDBhNGIxMzRhZTc2NTg4MjllNzIxZjc3MDAyNWRkMWYzM2ExZTkwMjk0ZjE5MzgwYzZhMTBkZDY2YjMzOWIzNDczNzM1In0.eyJhdWQiOiIxNDIyNCIsImp0aSI6IjY5N2JlMTYzMjVkNDBhNGIxMzRhZTc2NTg4MjllNzIxZjc3MDAyNWRkMWYzM2ExZTkwMjk0ZjE5MzgwYzZhMTBkZDY2YjMzOWIzNDczNzM1IiwiaWF0IjoxNjIyNjk4MjYyLCJuYmYiOjE2MjI2OTgyNjIsImV4cCI6MTYyNTI5MDI2Miwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.gE_9qAVGq-075HPb-dVnzNkQKXGPnl3-zRQvX-B15lBrhS6sy6jWw--0HHivYWrqzEBYPYvepzX71G93SE6UJyX5iOptotLN6zhm4p-BUz1vxcdO4b78cWZ-nPxxZkDd8b5otlkthUOirBTcCbo1zXto2E1arvNoWl1_7OaWJJPxdFZXWRtz5F50AbZlQTP5Rod2zv02bZZnhVQrHwePmevW8jAiOG_EaD8QTJz9WXtCcz0TLyEg-816QzgCeyVSqY250zURAU4Z4E0X5HxPdkkow0uSSfHeb9wchrXI06QZAni1UTKBC00gVcDMVL96fAEzzFlsHa_cdRgDyHt6EA'
    });
    app.addLayers();
    
})