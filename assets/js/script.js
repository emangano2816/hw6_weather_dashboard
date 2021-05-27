$(document).ready(function(){

    var APIKey = "2ff07a7d809c904ff7863737c17f0961";
    var cityInput = $('#city-input');
    var fetchBtn = $('#fetch-btn');
    var searchedCitiesUL = $('#searched-cities');
    var city;
    var cityLi;
    var latitude;
    var longitude;
    var currentForecast = $('#todays-weather');
    var futureForecast = $('#futurecast-parent');

    function getLatandLong() {
        var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city +  "&appid=" + APIKey;

         fetch(requestUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                
                latitude=data.coord.lat;
                longitude=data.coord.lon;

                getWeather(latitude,longitude);

            })
    }

    function getWeather(lat, lon) {
        var requestWeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly,alerts&appid=" + APIKey;

        fetch(requestWeatherUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data){
                console.log(data);

                var dateToday = moment.unix(data.current.dt).format("MM/DD/YYYY");
                var cityName = $('<h2>').text(city + " (" + dateToday + ")");
                var currentDescription = $('<p>').text("Description: " + data.current.weather[0].description);
                var currentIcon = data.current.weather[0].icon;
                var currentIconDisplay = $('<img>').attr('src',"http://openweathermap.org/img/w/" + currentIcon + ".png");
                var currentTemp = $('<p>').text("Temp: " + data.current.temp + "\u00B0C");
                var currentHumidity = $('<p>').text("Humidity: " + data.current.humidity + "%");
                var currentWind = $('<p>').text("Wind Speed: " + data.current.wind_speed + " MPH");
                var currentUvi = $('<p>').text("UV Index: " + data.current.uvi);
                currentForecast.append(cityName);
                cityName.append(currentIconDisplay)
                currentForecast.append(currentDescription);
                currentForecast.append(currentTemp);
                currentForecast.append(currentHumidity);
                currentForecast.append(currentWind);
                currentForecast.append(currentUvi);

                for (var i=1; i<6; i++) {

                    var dateFuture = moment.unix(data.daily[i].dt).format("MM/DD/YYYY");
                    var futureDateDisplay = $('<h4>').text(dateFuture);
                    var futureIcon = data.daily[i].weather[0].icon;
                    var futureIconDisplay = $('<img>').attr('src',"http://openweathermap.org/img/w/" + futureIcon + ".png");
                    var futureTemp = $('<p>').text("Temp: " + data.daily[i].temp.day + "\u00B0C");
                    var futureHumidity = $('<p>').text("Humidity: " + data.daily[i].humidity + "%");
                    var futureWind = $('<p>').text("Wind Speed: " + data.daily[i].wind_speed + " MPH");
                    var futureContainer = $('<div>');
                    futureContainer.addClass("futurecast");
                    futureForecast.append(futureContainer);
                    futureContainer.append(futureDateDisplay);
                    futureContainer.append(futureIconDisplay)
                    futureContainer.append(futureTemp);
                    futureContainer.append(futureHumidity);
                    futureContainer.append(futureWind);
                   
                }


            })
    }

    fetchBtn.on('click', function(){
        city = cityInput.val();
        console.log(city);

        getLatandLong();
        addSearchedCity();

        cityInput.val('');
        
    })

    function addSearchedCity() {
        cityLi = $('<li>').text(city);
        cityLi.addClass('btn mb-1 btn-city-custom');
        searchedCitiesUL.append(cityLi);
    }
})