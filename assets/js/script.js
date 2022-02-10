// API information
const apiKey = "1d0e728c8ec9d18a5f99aaa0096cbec3";
var geocoder = "http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}"
var enterCity = "Boston"
var userCity = $('#enterCity');
var searchBtn = $('#searchBtn');
var cityDate = $('.cityDate');
var icon = $('.icon');
var cityWeather = $('.cityWeather');
var cityTemp = $('.cityTemp');
var cityWind = $('.cityWind');
var cityHumidity = $('.cityHumidity');
var cityUVIndex = $('.cityUVIndex');
var cityUVIndexEl = document.querySelector('.cityUVIndex');
var fiveDayForecast = $('#fiveDayForecast');
var dateTrackerElement = $('#currentDay');
var citySearchHistoryArray = [];

// Function to make the search button search for a city to call from the API
searchBtn.on("click", function () {

    // Function to retrieve data from the API and display it to the page. Successful method.
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + userCity.val() + "&units=imperial&APPID=" + apiKey, function (data) {
        console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;
        var windSpeed = Math.floor(data.wind.speed);
        var humidity = data.main.humidity;
        // var UVIndex = data. //use the lat and lon to find the UVIndex

        // Defining the text of all components
        $('.cityName').text(userCity.val());
        $('.icon').attr('src', icon);
        $('.cityWeather').text(weather);
        $('.cityTemp').text("Temperature: " + temp + " °F");
        $('.cityWind').text("Wind Speed: " + windSpeed + " MPH");
        $('.cityHumidity').text("Humidity: " + humidity + "%");
        // cityUVIndexEl.text("UV Index: " + )

        var latitude = data.coord.lat;
        var longitude = data.coord.lon;
        get5Day(latitude, longitude, userCity)
    });

});

// using moment to track the current date and time
function timeTracker() {
    var currentDay = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    dateTrackerElement.text(currentDay);
}
// Setting time interval
setInterval(timeTracker, 1000);


// Function to cycle through each of the days in the 5 day forecast
function get5Day(latitude, longitude) {
    // fiveDayForecast.innerHTML = "";
    // weather5DayCards.empty();
    var call = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=" + "current,minutely,hourly,alerts" + "&units=imperial&appid=" + apiKey
    $.getJSON(call, function (data) {
        // Giving each component across 5 day forecast a value
        for (let i = 0; i < 5; i++) {
            unixDate = data.daily[i + 1].dt * 1000;
            weatherDate = moment(unixDate).format('MMM D, YYYY');
            var newDivs = $('<div class="weatherCards"></div>')
            var date = $('<h3 class="date lead"></h3>').text(weatherDate);
            // var icon5Day = $('<img class="icon5Day"> src=""http://openweathermap.org/img/w/" + data.weather[0].icon + ".png""');
            var icon5Day = $('<img class="icon5Day">').text(data.daily[i].weather.icon)
            var temp = $('<h3 class="temp lead"></h3>').text("Temp: " + data.daily[i].temp.day + " °F");
            var wind = $('<h3 class="wind lead"></h3>').text("Wind Speed: " + data.daily[i].wind_speed + " MPH");
            // var forecast = $('<h3 class="forecast lead"></h3>').text(data.daily[i].weather.description);
            var humidity = $('<h3 class="humidity lead"></h3>').text("Humidity: " + data.daily[i].humidity + "%");
            var uvi = $('<h3 class="uvi lead"></h3>').text("UV Index: " + data.daily[i].uvi);

            // Conditional statements for the UVIndex color coding

            // while (cityUVIndexEl.classList.length > 0) {
            //     cityUVIndexEl.classList.remove(cityUVIndexEl.classList.item(0));

            //     if (data.current.uvi > 5) {
            //         cityUVIndexEl.classList.add("severe");
            //     } else if (data.current.uvi > 3) {
            //         cityUVIndexEl.classList.add("moderate");
            //     } else {
            //         cityUVIndexEl.classList.add("favorable");
            //     }
            // }
            // Appending each component to the div so that it shows
            newDivs.append(date);
            newDivs.append(icon5Day);
            // newDivs.append(forecast);
            newDivs.append(temp);
            newDivs.append(wind);
            newDivs.append(humidity);
            newDivs.append(uvi);
            fiveDayForecast.append(newDivs);
        }
        console.log(data)
    })
};

// Made the structure to show the search history, but I didn't go through with it.
// Function to put the cities into an array and display them on the page.
function cityHistory() {
    let cityAlreadyHere = false;
    // check to see if the city is already in the array and if it is then it wont be added to array. Search still on.
    for (let i = 0; i < citySearchHistoryArray.length; i++) {
        if (citySearchHistoryArray[i] == cityName) {
            cityAlreadyHere = true;
        }

    }
    //checks if city is already in the array, and add it if not then it puts it there
    if (cityAlreadyHere == false) {
        if (citySearchHistoryArray != null) {
            if (citySearchHistoryArray.length === 5) {
                citySearchHistoryArray.unshift(cityName);
                citySearchHistoryArray.pop();
            }
            else {
                citySearchHistoryArray.unshift(cityName);
            }
            //reset the local storage for the citySearchHistoryArray
            localStorage.setItem('locationSearchHistoryArray', JSON.stringify(citySearchHistoryArray));
        }
        buildWeatherCards(cityName);
    }

}


// Function to append the searched cities to the search bar on the left
// Still need the setItem part

function getHistory() {
    var history = localStorage.getItem("citySave");
    searchHistory = JSON.parse(history) || [];
    oldSearch.empty();
    searchHistory.forEach(element => {
        var newBtn = $('<button>');
        newBtn.text(element.name);
        newBtn.addClass("historyButton");
        oldSearch.append(newBtn);
    });
}

// makes the historical buttons into clickable search buttons if I had added them
getHistory();
$(document).on('click', '.historyButton', function (e) {
    citySearch(e.target.textContent);
})


// searchLocation function is for calling the city entered from the API, and handling if the entered city is invalid
const searchLocation = (event) => {
    var enterCity = $("#enterCity").val();
    enterCity = enterCity.trim();

    if (!enterCity) {
        console.error("Please enter a location!");
        return;
    }

    fetchLocation(enterCity);
    enterCity.val("");
}
$('#searchBtn').on('submit', searchLocation);
