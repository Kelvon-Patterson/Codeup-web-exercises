function renderWeather(weatherRequest){

            $.get('https://api.openweathermap.org/data/2.5/onecall', {
                lat:29.423017 ,
                lon:-98.48527,
                appid: OPEN_WEATHER_APPID,
                units: 'imperial',
                exclude: ' current,hourly, minutely, alerts'
            }).done(function (results){
                console.log(results)
                var html = '';
                for (var i= 0; i < 5; i++){
                    // html +=  renderWeather(results.daily[i])
                    html ='<div class="card">'
                    html += '<h3>'+ new Date(results.daily[i].dt*1000).toDateString() +'</h3>';
                    html += '<p>' + 'Temperature: ' +Math.floor( results.daily[i].temp.min) + '/' + Math.floor( results.daily[i].temp.max) +'</p>';
                    html += '<p>' + 'Description: '+results.daily[i].weather[0].description  + '</p>';
                    html += '<p>' +'Pressure: ' +results.daily[i].pressure + '</p>';
                    html += '<p>' + 'Wind Speed: ' +results.daily[i].wind_speed + '</p>';
                    html+= '</div>'
                    $('#forecast').append(html)
                }

            })
        }

            renderWeather()

mapboxgl.accessToken = mapBoxToken;

var mapOptions = {

    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-98.4861, 29.4252],
    zoom: 9
}
var map = new mapboxgl.Map(mapOptions)


