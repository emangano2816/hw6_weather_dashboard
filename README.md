# Homework Assignment 6: Weather Dashboard

## URLs
1. Deployed application: https://emangano2816.github.io/hw6_weather_dashboard/
2. GitHub Repository: https://github.com/emangano2816/hw6_weather_dashboard

## User Story
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```
## Acceptance Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
## Achieving Acceptance Criteria
1. Upon searching for a city, the user is presented with the current weather for the city, a 5-day forecast for the city, and the city is added to the search history.
2. In the current weather section displayed to the user, the following elements are displayed: city name, date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index.
3. The UV index is color coded using the following formula:  [0,2] - green (i.e., favorable), (2,8) - orange (i.e., moderate), >= 8 - red (i.e., severe).
4. The 5-day forecast for the city displays the following elements: date, icon represetnation of weather conditions, the temperature, the windw spped, and the humidity.
5. Clicking on cities listed in the history return the current and 5-day forecast for that city.

## Additional Acceptance Criteria
The application uses the OpenWeather API in the following ways:
1. The api.openweathermap.org/data/2.5/weather URL is filtered for the city provided by the user.  This API is used to return the latitude and longitude in order to return the current and 5-day forecast from the onecall API below.  
2. The api.openweathermap.org/data/2.5/onecall is filtered by latitude and longitude.  The information returned from this search is then used to populate the current weather and 5-day forecast for the searched city.

The searched cities are stored in localStorage in order for the searched cities to perist on the page after a refresh or after reopening the page.


## Meeting Application Quality
The application is easy to use and resembles the mock-up.  

Upon opening the application the user is able to search for a city.  The application will return the current and 5-day forecast for the searched city.  Addtionally, the searched city is "pinned" to the application for access later on.  The user is able to search for as many cities as desired.  Upon clicking a city that has been pinned to the page, the current and 5-day forecast will be displayed for that city.  The user also has the option to clear the searched list if it becomes unweildly. 



## Application Functionality
![weather_dashboard.](./assets/images/hw6_weather_dashboard.demo.gif)
