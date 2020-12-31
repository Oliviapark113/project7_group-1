//For weather input appID for weather 
var appID = "80b3e8a297999f6bc99d97f895ecd144"
var query_param;
var currentDay = document.querySelector("#current-date");
var now = moment().format('LLL');

function displayCurrentDay() {
  currentDay.textContent = now;
}
displayCurrentDay();
$(".search_btn").on("click", function () {
  $(".weather-result").removeClass("hide")
  $(".select").removeClass("hide")
  query_param = $(this).prev().val();
  if ($(this).prev().attr("placeholder") == "City") {
    weather = "https://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&units=imperial" + "&appid=" + appID;
    getWeatherData()
  }

});
function getWeatherData() {
  $.getJSON(weather, function (json) {
    weather = "https://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&units=imperial" + "&appid=" + appID;
    $("#city").text(json.name);
    $("#country").text(" ," + json.sys.country);
    $("#main_weather").text(json.weather[0].main);
    $("#description_weather").text(json.weather[0].description);
    $("#weather_image").attr("src", "https://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
    $("#temperature").text(json.main.temp+" °F");
  })
}

//fun animation effect for logos 
var h1Complete = function () {
  $(this).animate({ fontSize: "55px", opacity: "1" }, 3000)
}
var pComplete = function () {
  $(this).animate({ fontSize: "16px", opacity: "1" }, 3000)
}
$("h1").on("click", function () {
  $(this).animate({ fontSize: "100px", opacity: "0.3" }, "slow", h1Complete)
});



