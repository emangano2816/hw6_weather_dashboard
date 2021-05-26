$(document).ready(function(){

    var APIKey = "2ff07a7d809c904ff7863737c17f0961";
    var cityInput = $('#city-input');
    var fetchBtn = $('#fetch-btn');
    var searchedCitiesUL = $('#searched-cities');
    var city;
    var cityLi;
    var latitude;
    var longitude;

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