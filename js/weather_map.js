mapboxgl.accessToken = mapBoxToken;
$(document).ready(function(){







   var weatherRequest= $(document).ready(function (){
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            lat:29.423017 ,
            lon:-98.48527,
            appid: OPEN_WEATHER_APPID,
            units: 'imperial',
            exclude: 'daily,hourly';
        }).done(function (results){
            console.log(results.daily)
        })

    });

    function renderWeather(weatherRequest){
    var html = '<th id="weather-table">';
    html += '<td>' + results.main[0].weather + '</td>'


    }



    // var mapOptions = {
    //
    //     container: "map",
    //     style: "mapbox://styles/kelvonpatterson34/cknf0c1eo3ycw18p4wk3gsedq",
    //     center: [-98.4861, 29.4252],
    //     zoom: 9
    // }
    // var map = new mapboxgl.Map(mapOptions)


})