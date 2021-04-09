
mapboxgl.accessToken = mapBoxToken;

var mapOptions = {

    container: "map",
    style: "mapbox://styles/kelvonpatterson34/cknaon24a0xbc17oqcxoxkpkl",
    center: [-98.4861, 29.4252],
    zoom: 10
}
var map = new mapboxgl.Map(mapOptions)


// geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
// *      // do something with results
// *  })

geocode("1464 Austin Hwy #103, San Antonio, TX 78209", mapBoxToken).then(function (results) {

    var popup= new mapboxgl.Popup()
        .setHTML('<h6>Wing Stop</h6>')
    new mapboxgl.Marker()
        .setLngLat(results)
        .setPopup(popup)
        .addTo(map)

})
