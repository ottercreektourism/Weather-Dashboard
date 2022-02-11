# Weather-Dashboard

Task:
- The task was to create a weather dashboard using the Open Weather API.
- The user should search for a city, and the weather for that location would pop up in a large card, including the name of the city, temperature, wind speed, UV Index, and an icon representing the current weather.
- For the same city, the user would also see a five day forecast for their searched location.
- Ideally the search history would be able to be saved into a button so that the user could easily click the city name to display the weather as long as they'd typed it before. This was not completed.


What was done:
- A functioning search bar and button were implemented to allow the user to search for the city that they would like to see a current and five day weather forecast for.
- A request to the Open Weather API was created in order to get temperature, wind speed, and a weather icon corresponding to the searched city.
- A second API was called, which would get the latitude and longitude of the city, and locate the UV index based on those values.
- A for loop was created to iterate through the weather of each of the five upcoming days, and display it to the page.
- Current date was provided to the user as well.
- Icon description was provided in case of use of a screen reader.


How to use:
 - The user should type in the name of the city for which they would like to see the current and five day weather forecast, and click the button with the magnifying glass icon to submit the request.
 - Once clicked, the user should see current weather for the searched location as well as a five day forecast of that location.


Screenshots of the working site are provided here:
https://github.com/ottercreektourism/Weather-Dashboard/issues/1#issue-1133143787

Here is the link to the deployed site:
https://ottercreektourism.github.io/Weather-Dashboard/