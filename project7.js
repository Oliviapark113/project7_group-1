
//For weather input appID for weather 
var appID = "80b3e8a297999f6bc99d97f895ecd144"
 var defaultCity = "new york"
 var query_param;
 var currentDay = document.querySelector("#current-date");
 var now = moment().format('LLL');

 var cityVariable = localStorage.getItem("cities") || []

 lastSavedcity ()


function lastSavedcity(){

   if(cityVariable){
        weather ="https://api.openweathermap.org/data/2.5/weather?q=" +cityVariable +"&units=imperial"+"&appid=" + appID;
    
       getWeatherData()
   }

}
 

// Indicate Current date and time .. on front page
function displayCurrentDay() {
    currentDay.textContent = now;
}

displayCurrentDay();

$(".search_btn").on("click",function(){

  query_param =$(this).prev().val();

 if($(this).prev().attr("placeholder") == "City"){
      
      weather ="https://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;

      getWeatherData()    
 }

 else if($(this).prev().attr("placeholder")=="Zip Code"){

  zipCodeweather ="https://api.openweathermap.org/data/2.5/weather?zip=" + query_param +"&units=imperial"+"&appid=" + appID;

   getZipcodeWeatherData()

}

});



function  getWeatherData() {
  $.getJSON(weather, function(json){

       weather ="https://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;

      $("#city").text(json.name);
      $("#country").text(" ," + json.sys.country);
      $("#main_weather").text(json.weather[0].main);
      $("#description_weather").text(json.weather[0].description);
      $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
      $("#temperature").text(json.main.temp);

  })
}


function  getZipcodeWeatherData() {
  $.getJSON(zipCodeweather, function(json){
       
      zipCodeweather ="https://api.openweathermap.org/data/2.5/weather?zip=" + query_param +"&units=imperial"+"&appid=" + appID;
  
      $("#city").text(json.name);
      $("#country").text(" ," + json.sys.country);
      $("#main_weather").text(json.weather[0].main);
      $("#description_weather").text(json.weather[0].description);
      $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
      $("#temperature").text(json.main.temp);

  })
}

var musicVideoURL;

var numResults = 0;
var masterList =[];

function runRandom(num){
  console.log(num)
  var parseNum = parseInt(num)
     var flatMasterList = masterList.flat()
        for (var i=0; i<parseNum; i++){
        var randomSong =  flatMasterList[Math.floor(Math.random()*flatMasterList.length)]
        console.log(randomSong)
        }

}



var clearKeyword;
var cloudsKeyword;

$("#musicBtn").on("click", async function(){

   numResults = $("#numRecords").val()
    
   var userWeather = $("#main_weather").text()

   if(userWeather.includes("Clear")||userWeather.includes("Sunny"))
   { 
      clearKeyword =["pop","hiphop","country","ska","reggae"];

      for(var i =0; i<clearKeyword.length; i++){
      
      musicVideoURL = "https://itunes.apple.com/search?term="+clearKeyword[i]+"&media=musicVideo&limit=200"
      var response = await $.ajax({
         url: musicVideoURL,
         method: "GET"
       })
     console.log(JSON.parse(response))
     var responseJson = JSON.parse(response)
      masterList.push(responseJson.results)
  
     }

}

 runRandom(numResults);
})

