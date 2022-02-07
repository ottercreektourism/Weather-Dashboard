// API information
const apiKey = "1d0e728c8ec9d18a5f99aaa0096cbec3";
var geocoder = "http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}"
// var enterCity = $('enterCity');
// hard code the city for testing. will change later
// var searchBtn = $('searchBtn');
var enterCity = "Boston"
var userCity = $('#enterCity');
var searchBtn = $('#searchBtn');
// var cityName = $('.cityName');
// var enterCity = $('.cityName')
var cityDate = $('.cityDate');
var icon = $('.icon');
var cityWeather = $('.cityWeather');
var cityTemp = $('.cityTemp');
var cityWind = $('.cityWind');
var cityHumidity = $('.cityHumidity');
var cityUVIndex = $('.cityUVIndex');
var fiveDayForecast = $('#fiveDayForecast');
var dateTrackerElement = $('#currentDay');
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// Function to make the search button search for a city to call from the API
searchBtn.on("click", function(){

    // Function to retrieve data from the API and display it to the page. Successful method.
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + userCity.val() + "&units=imperial&APPID=" + apiKey, function (data) {
    console.log(data);
    
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    var windSpeed = Math.floor(data.wind.speed);
    var humidity = data.main.humidity;
    // var UVIndex = data. //use the lat and lon to find the UVIndex

    $('.cityName').text(userCity.val());
    $('.icon').attr('src', icon);
    $('.cityWeather').text(weather);
    $('.cityTemp').text("Temperature: " + temp + " °F");
    $('.cityWind').text("Wind Speed: " + windSpeed + " MPH");
    $('.cityHumidity').text("Humidity: " + humidity + "%");
    
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


// Conditional statements for the UVIndex color coding ]


// Function for reverse geocode to use lat + lon to get the uv index


// Function to cycle through each of the days in the 5 day forecast
function get5Day(latitude, longitude){
    // fiveDayForecast.innerHTML = "";
    var call = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=" + "current,minutely,hourly,alerts" + "&units=imperial&appid=" + apiKey
    $.getJSON(call, function(data){
        for (let index = 0; index < 5; index++) {
            var newDivs = $('<div class="weatherCards"></div>')
            var name = $('<h3 class="name"></h3>').text
            var temp = $('<h3 class="temp"></h3>').text(data.daily[i].temp.day);
            var wind = $('<h3 class="wind"></h3>')
            var forecast = $('<h3 class="forecast"></h3>')
            var humidity = $('<h3 class="humidity"></h3>')
            var uvi = $('<h3 class="uvi"></h3>')
            
        }
        console.log(data)
    })
};






















// var userCityCurrent = ""
// var userCityArray = []

// function getWeather(event) {
//     event.preventDefault();
    // var selectedCity = $('enterCity');


// let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&units=imperial&APPID=" + apiKey;





// Trying to figure out how to call the function using fetch instead of the $.getJSON method since we're learning about fetch in class
function oneCallURL(lat, lon) {
    var oneCallURL = "https://api.openweathermap.org/data/2.5/weather?q=" + enterCity + "&units=imperial&APPID=" + apiKey;
    fetch(oneCallURL)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            temp.textContent = data.current.temp
        })
}

// Function to add event listener to click button
// trying to see if the keys work to troubleshoot for the .onclick function not working. will change to click event listener.
// enterCity.addEventListener('keyup', (event) => {
//     const searchString = event.target.value.toLowerCase();
//     const filteredResults = allCities.filter((city) => {
//         city.name.toLowerCase().includes(searchString);

//     })
// })


// Function to display current conditions for selected City
// trying new method here, same function as above.

let allCities = [
    {
        name: 'Charlotte'
    },
    {
        name: 'Rockford'
    },
    {
        name: 'New York'
    }
]
$("#enterCity").click(function (event) {

    const searchString = event.target.value.toLowerCase();
    const filteredResults = allCities.filter((city) => {
        city.name.toLowerCase().includes(searchString);

    })
    console.log(event.target.value);
    event.preventDefault();
    var enterCity = $('#enterCity').val();
    console.log(enterCity);

    // var city = enterCity.val;
    // console.log(city);

});











// var enterCity = enterCity.val();
// console.log(enterCity);


// Function to make the submit button clickable.
// const fetchLocation = () => {
//     if(enterCity !== ""){
//         queryURL = "";
//         console.log(queryURL);
//     }
// }

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

// Peter and I working on function to display weather, but not using it because I havent adjusted the rest of the code to make it fit.

// function displayWeather(data) {
//     for (var i = 1; i < 6; i++) {
//       const card = $("<div>");
//       card.addClass("card");
//       card.attr("style", "width: 18rem");

//       const cardBody = $("<div>");
//       cardBody.addClass("card-body");

//       const date = $("<h5>");
//       date.addClass("card-title");
//       date.text(moment(data.daily[i].dt, "X").format("ddd, MMM Do"));

//       const icon = $("<img>");
//       icon.addClass("card-img-top");
//       icon.attr("src",); // http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png


//       icon.attr("alt", data.daily[i].weather[0].description);

//       cardBody.append(date, icon);

//       const list = $("<ul>");
//       list.addClass("list-group list-group-flush");

//       const temp = $(<li>Temp: ${data.daily[i].temp.day} °F</li>);
//       const wind = $(<li>Wind: ${data.daily[i].wind_speed} mph</li>);
//       const humidity = $(<li>Humidity: ${data.daily[i].humidity} %</li>);
//       temp.addClass("list-group-item");
//       wind.addClass("list-group-item");
//       humidity.addClass("list-group-item");

//       list.append(temp, wind, humidity);

//       card.append(cardBody, list);
//       $(".weather-cards").append(card);
//     }
//   }
