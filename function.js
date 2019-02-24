var platform = new H.service.Platform({
    'app_id': 'cfcKJx8oDgRTUcNxtUVX',
'app_code': '5oWADCAZT9LpHMYmAUJBpw'
});
var maptypes = platform.createDefaultLayers();
var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.normal.map,
    {
    zoom: 10,
    center: { lng: 13.4, lat: 52.51 }
    });

    console.log("hello there");