mapboxgl.accessToken = mapBoxToken;
// $(document).ready(function(){






        function renderWeather(weatherRequest){

            $.get('https://api.openweathermap.org/data/2.5/onecall', {
                lat:29.423017 ,
                lon:-98.48527,
                appid: OPEN_WEATHER_APPID,
                units: 'imperial',
                exclude: ' current,hourly, minutely, alerts'
            }).done(function (results){
                // console.log(results.daily[0].temp.day)
                var html = '';
                for (var i= 0; i < 7; i++){
                    // html +=  renderWeather(results.daily[i])
                    html ='<div>'
                    html += '<div>';
                    html += '<h3>'+ 'Date: ' + new Date(results.daily[i].dt*1000).toDateString() +'</h3>';
                    html += '<p>' + 'Temperature: ' +Math.floor( results.daily[i].temp.min) + '/' + Math.floor( results.daily[i].temp.max) +'</p>';
                    html += '<p>' + 'Description: '+results.daily[i].weather[0].description  + '</p>';
                    html += '<p>' +'Pressure: ' +results.daily[i].pressure + '</p>';
                    html += '<p>' + 'Wind Speed: ' +results.daily[i].wind_speed + '</p>';
                    html += '</div>';
                    html+= '</div>'
                    $('#forecast').append(html)
                }

            })
        }

            renderWeather()

                    // html +=  renderWeather(results.daily[i])
                    // results.daily.forEach(function(day,index){
                    //
                    // $('.date').html( 'Date: ' + new Date(day.dt*1000).toDateString());
                    // $('.temp').html( 'Temperature: ' +day.temp.min + '/' + day.temp.max) ;
                    // $('.description').html(  'Description:'+ day.weather[0].description );
                    // $('.pressure').html( 'Pressure: '+ day.pressure);
                    // $('.windSpeed').html( 'Wind Speed: ' +day.wind_speed);

// })
    //
    //                 $('.render-weather').html(html)
    //
    //
    //             }
    //
    //         })
    //         return html
    //     }

//0
// function onDrangEnd(){
//             var longlat=marker.getLngLat();
//             longlat=[longlar.lng], longlat.lat
//
// }
// var weatherDiv= document.querySelector('');
// weatherDiv.innerHTML= renderWeather(weatherRequest)


    //     "dt": 1618289204,
    //     "sunrise": 1618229421,
    //     "sunset": 1618275507,
    //     "temp": 73.78,
    //     "feels_like": 74.28,
    //     "pressure": 1011,
    //     "humidity": 73,
    //     "dew_point": 64.58,
    //     "uvi": 0,
    //     "clouds": 1,
    //     "visibility": 10000,
    //     "wind_speed": 11.5,
    //     "wind_deg": 90,
    //     "weather": [
    //     {
    //         "id": 800,
    //         "main": "Clear",
    //         "description": "clear sky",
    //         "icon": "01n"
    //     }
    // ]
    // }

