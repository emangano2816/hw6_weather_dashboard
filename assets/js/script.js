$(document).ready(function(){

    var APIKey = "2ff07a7d809c904ff7863737c17f0961";
    var cityInput = $('#city-input');
    var fetchBtn = $('#fetch-btn');
    var searchedCitiesUL = $('#searched-cities');
    var city;
    var cityLi;

    function getApi() {
        var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city +  "&appid=" + APIKey;

        fetch(requestUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                cityInput.text('');
            })
    }

    fetchBtn.on('click', function(){
        city = cityInput.val();
        console.log(city);

        getApi();
        addSearchedCity();

        $('#city-input').val('');
        
    })

    function addSearchedCity() {
        cityLi = $('<li>').text(city);
        cityLi.addClass('btn mb-1 btn-city-custom');
        searchedCitiesUL.append(cityLi);
    }
})