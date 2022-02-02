// API information
const apiKey = "1d0e728c8ec9d18a5f99aaa0096cbec3";
var geocoder = "http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}"


// hard code the city for testing. will change later
var enterCity = "Boston"
// var enterCity = $('enterCity');

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
    // var UVIndex = data. //use the lat and lon to find the UVIndex

    $('.icon').attr('src', icon);
    $('.cityWeather').append(weather);
    $('.cityTemp').append("Temperature: " + temp + " °F");
    $('.cityWind').append("Wind Speed: " + windSpeed + " MPH");
    $('.cityHumidity').append("Humidity: " + humidity + "%");

});

// Function to add event listener to click button
// trying to see if the keys work to troubleshoot for the .onclick function not working
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
    alert("The paragraph was clicked."); // example from another source, trying to make it work
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

// searchLocation function is for calling the city entered from the API, and handling if the entered city is invalid
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
