
mapboxgl.accessToken = mapBoxToken;

var mapOptions = {

    container: "map",
    style: "mapbox://styles/kelvonpatterson34/cknaon24a0xbc17oqcxoxkpkl",
    center: [-98.4861, 29.4252],
    zoom: 9
}
var map = new mapboxgl.Map(mapOptions)
map.on('click', function(){
    $('#zoom-selector').change(function(e){

    })
})






var restaurants= [{
     name: 'Wing Stop',
     location: '1464 Austin Hwy #103, San Antonio, TX 78209',
     info: 'Iconic flavors'

},
     {
         name: 'Cheesecake Factory',
         location: '7400 San Pedro Ave, San Antonio, TX 78216',
         info:'Overpriced food but it smacks'

     },
     {
         name:'MOD Pizza',
         location: '8134 Agora Pkwy Suite 250, Selma, TX 78154',
         info:'Customize your pizza '
     }


 ]

restaurants.forEach(function(restaurant){
    geocode(restaurant.location, mapBoxToken).then(function (results) {

        var popup= new mapboxgl.Popup()
            .setHTML('<h6>'
                + restaurant.name
                + "<br>"
                + restaurant.info
                + '</h6>')
        new mapboxgl.Marker()
            .setLngLat(results)
            .setPopup(popup)
            .addTo(map)
    })
})







// geocode("", mapBoxToken).then(function (results) {
//
//     var popup= new mapboxgl.Popup()
//         .setHTML('<h6>Cheesecake Factory</h6>')
//     new mapboxgl.Marker()
//         .setLngLat(results)
//         .setPopup(popup)
//         .addTo(map)
//
//     map.on('click', function(e){
//         map.jumpTo({
//             center:results,
//             zoom: 15
//         })
//     })
//
// })
//
// geocode("", mapBoxToken).then(function (results) {
//
//     var popup= new mapboxgl.Popup()
//         .setHTML('<h6>MOD Pizza</h6>')
//     new mapboxgl.Marker()
//         .setLngLat(results)
//         .setPopup(popup)
//         .addTo(map)
//
//     map.on('click', function(e){
//         map.jumpTo({
//             center:results,
//             zoom: 15
//         })
//     })
// })