const apiKey = "1d0e728c8ec9d18a5f99aaa0096cbec3";
var enterCity = $('enterCity');
var enterCity = "Boston"
var searchHistoryList = $('searchHistoryList');
// var selectedCity = $('enterCity');
var userCity = $('userCity');
var searchBtn = $('searchBtn');

var userCityCurrent = ""
var userCityArray = []

function getWeather(event){
    event.preventDefault();
    // var selectedCity = $('enterCity');
}

// let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&units=imperial&APPID=" + apiKey;


// Function to retrieve data from the API and display it to the page
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + enterCity + "&units=imperial&APPID=" + apiKey, function(data){
    // console.log(data);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    var windSpeed = Math.floor(data.wind.speed);
    var humidity = data.main.humidity;
    // var UVIndex = data.

    $('.icon').attr('src', icon);
    $('.cityWeather').append(weather);
    $('.cityTemp').append("Temperature: " + temp + " °F");
    $('.cityWind').append("Wind Speed: " + windSpeed + " MPH");
    $('.cityHumidity').append("Humidity: " + humidity + "%");

});

// Function to add event listener to click button

enterCity.addeventlistener('keyup', (e)=>{
    const searchString = e.target.value.toLowerCase();
    const filteredResults = allCities.filter((city)=>{
        city.name.toLowerCase().includes(searchString);

    })
})


// console.log(searchBtn);
// Function to display current conditions for selected City
$("enterCity").keyup(function(event){
    console.log(event.target.value);
    event.preventDefault();
    alert("The paragraph was clicked.");
    var enterCity = $('enterCity').val();
    console.log(enterCity);

    // var city = enterCity.val;
    // console.log(city);
    
});
// var enterCity = enterCity.val();
// console.log(enterCity);


// Function to make the submit button clickable
const fetchLocation = () => {
    if(enterCity !== ""){
        queryURL = "";
        console.log(queryURL);
    }
}

const searchLocation = (event) =>{
    event.preventDefault();
    var enterCity = $("#enterCity").val;
    enterCity = enterCity.trim();

    if(!enterCity) {
        console.error("Please enter a location!");
        return;
    }

    fetchLocation(enterCity);
    enterCity.val("");
}
$('#searchBtn').on('submit', searchLocation);
