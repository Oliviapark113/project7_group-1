
//For weather input appID for weather 
  var appID = "80b3e8a297999f6bc99d97f895ecd144"
  var defaultCity = "new york"
  var query_param;
  var currentDay = document.querySelector("#current-date");
  var now = moment().format('LLL');
  var cityVariable = localStorage.getItem("cities") || []

  lastSavedCity ()

  function lastSavedCity(){
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

    localStorage.clear()

    query_param =$(this).prev().val();

  if($(this).prev().attr("placeholder") == "City"){
        
        weather ="https://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;

        getWeatherData()    
  }

  else if($(this).prev().attr("placeholder")=="Zip Code"){

    zipCodeweather ="https://api.openweathermap.org/data/2.5/weather?zip=" + query_param +"&units=imperial"+"&appid=" + appID;

    getZipcodeWeatherData()

  }

  localStorage.setItem('cities', query_param)

  });


  function  getWeatherData() {
    $.getJSON(weather, function(json){

        weather ="https://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;

        $("#city").text(json.name);
        $("#country").text(" ," + json.sys.country);
        $("#main_weather").text(json.weather[0].main);
        $("#description_weather").text(json.weather[0].description);
        $("#weather_image").attr("src", "https://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
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
        $("#weather_image").attr("src", "https://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
        $("#temperature").text(json.main.temp);

    })
  }



  //variables for media APIs 

  var musicVideoURL;
  var numResults = 0;
  var masterList =[];

  //DOM element 
  
  var musicBtn = $("#musicBtn")

  var container = $(".mv-container")
  var artistImage = $(".image-artist")  
  var media = $(".media")
  var overlay = $(".overlay")

  // randomly pulled data based on selected Number 

  function runRandom(num){
    //number value string convert into " number"
    var parseNum = parseInt(num)
      var flatMasterList = masterList.flat()
          artistImage.empty()
          for (var i=0; i<parseNum; i++){
          var randomSong =  flatMasterList[Math.floor(Math.random()*flatMasterList.length)]
          console.log(randomSong)// randomly picked objects from master array 
          console.log(randomSong.trackName) //
          console.log(randomSong.artistName) //  
          console.log(randomSong.primaryGenreName) //
          // console.log(randomSong.trackCensoredName)
          console.log(randomSong.previewUrl) //music video
          console.log(randomSong.artworkUrl100)  //image 

          // add into our DOM video element ..
          var imgBox = $("<div>")

          var img = $("<img>")
          img.attr("src", randomSong.artworkUrl100)
          img.attr("class", "artist-image")
          imgBox.append(img)

          var playButton = $("<button>")
          playButton.text("play")
          // playButton.css(z-index:)
          imgBox.append(playButton)
          artistImage.append(imgBox)

        }
        
        artistImage.on("click", playButton , function(e){
          e.stopPropagation()
          console.log($(this))
      
          openMedia(randomSong.previewUrl,randomSong.trackName)
          
        })
      }
      

  function openMedia (url,title) {  
    console.log(url)
    media.html(`<video controls autoplay src="${url}" ></video> <p>${title}</p>`)
  media.removeClass("hidden")};
  

  function closeMedia(){
    media.html("")
  }
 
  function toggleOverlay (){
    overlay.toggleClass("blur")
    img.each(function(image){
      image.toggleClass("blur")
    })

  }


  var clearKeyword;    //("Clear")
  var cloudsKeyword;  //("Clouds")
  var snowKeyword;   //("Snow")
  var rainKeyword;  //("Rain")
  var windKeyword;  //("Windy")

  musicBtn.on("click", async function(){

    numResults = $("#numRecords").val()  
    var userWeather = $("#main_weather").text()

    if(userWeather.includes("Clear"))
    { 
        clearKeyword =["pop","hiphop","ska","reggae"];

        for(var i =0; i<clearKeyword.length; i++){
        
        musicVideoURL = "https://itunes.apple.com/search?term="+clearKeyword[i]+"&media=musicVideo&limit=50"

          var response = await $.ajax({
            url: musicVideoURL,
            method: "GET"

          })

          if(userWeather.includes("Clouds")){ 
        cloudsKeyword =["R&B","lo-fi","country","jazz"];

        for(var i =0; i<cloudsKeyword.length; i++){
        
        musicVideoURL = "https://itunes.apple.com/search?term="+cloudsKeyword[i]+"&media=musicVideo&limit=50"

          var response = await $.ajax({
            url: musicVideoURL,
            method: "GET"

          })
        // console.log(JSON.parse(response))
        var responseJson = JSON.parse(response)
        masterList.push(responseJson.results)
        
      
      }

  }

  runRandom(numResults);
  })

