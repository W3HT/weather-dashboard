//selectors
    //searchedCity
    var searchedCity = $("#seachedCity");
    //searchBtn
    var searchBtn = $("searchBtn");

    var currentWeather = $("currentWeather");
    //currentIcon
    var currentIcon = $("currentIcon");
    //currentCity
    var currentCity = $("currentCity");
    //currentTemp;
    var currentTemp = $("currentTemp");
    //currentWind
    var currentWind = $("currentWind");
    //currentHumidity
    var currentHumidity = $("currentHumidity");
    //currentUvIndex
    var currentUvIndex = $("currentUvIndex");
    //array of searched cities
    var passCity = [];
    var city = "";
    
    

//variables

//api key
var apiKey = "49961924d040bdde51fd5daa638bac79";

//functions
var passCity;
if(JSON.parse(localStorage.getItem("history")) != null)
    passCity = JSON.parse(localStorage.getItem("history"));
else
    passCity = [];

    $("searchBtn").click(Results());

searchList

function Results() {
    var search = document.getElementById("searCity").value;
    if( document.getElementById("searchCity").value !== "") {
        weatherSearch(search);
        forecastSearch(search);
        saveSearch(searchedCity);

        document.getElementById("searchCity").value;
    
    }
}


//function openweahter url call for current weather - city
function weatherSearch() {

    var api = "api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey;

    feth(api)
        .then(function (response) {
            return response.json();

        })
        .then( function(data) {

            searchedCity.textContent = data.name + moment().format("LL");

            
        }

       



}


    // query url + city variable + api key 



    // parse data - console.log(response;)
    // declare weather icon variable = response.weather[X].icon
    // declare icon variable = "https://openweathermap.org/img/wn/" + {weather icon variable} + "@2x.png"
    // declare contructor date variable = new Date(repsonse.dt*1000).toLocalDateString()
    // $(current city variable) .htm(response.name +"+date+")" + "<img src="+iconurl+">");

    // conversion temperature variable = (response.main.temp - 273.15) * 1.80 + 32;
    // wind
    //  humidity
    
    
    
    // uv index - all - Lat + Lon
    
//

//search history

//event listner
    // searchBtn
    //
