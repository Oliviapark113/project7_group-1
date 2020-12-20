
//For weather input appID for weather 
  var appID = "80b3e8a297999f6bc99d97f895ecd144"
  var query_param;
  var currentDay = document.querySelector("#current-date");
  var now = moment().format('LLL');
  var cityVariable = localStorage.getItem("cities") || []

  // lastSavedCity ()

  // function lastSavedCity(){
  //   if(cityVariable){
  //         weather ="https://api.openweathermap.org/data/2.5/weather?q=" +cityVariable +"&units=imperial"+"&appid=" + appID;
      
  //       getWeatherData()
  //   }

  // }
 

// Indicate Current date and time .. on front page
  function displayCurrentDay() {
      currentDay.textContent = now;
  }

  displayCurrentDay();

  $(".search_btn").on("click",function(){

    // localStorage.clear()
    $(".weather-result").removeClass("hide")
    $(".select").removeClass("hide")
   

    query_param =$(this).prev().val();

  if($(this).prev().attr("placeholder") == "City"){
        
        weather ="https://api.openweathermap.org/data/2.5/weather?q=" + query_param +"&units=imperial"+"&appid=" + appID;

        getWeatherData()    
  }

  else if($(this).prev().attr("placeholder")=="Zip Code"){

    zipCodeweather ="https://api.openweathermap.org/data/2.5/weather?zip=" + query_param +"&units=imperial"+"&appid=" + appID;

    getZipcodeWeatherData()

  }

  // localStorage.setItem('cities', query_param)

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

  //fun animation effect for logos 
  var h1Complete = function(){
    $(this).animate({fontSize:"55px",opacity:"1"},3000)

}

var pComplete = function(){
  $(this).animate({fontSize:"16px",opacity:"1"},3000)

}
  $("h1").on("click", function(){

    $(this).animate({fontSize:"100px",opacity:"0.3"},"slow",h1Complete)
  });

  $("p").on("click", function(){

    $(this).animate({fontSize:"50px",opacity:"0.3"},"slow",pComplete)
  });
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
  var img;
  // randomly pulled data based on selected Number 

  function runRandom(num){
    //number value string convert into " number"
    var parseNum = parseInt(num)
      var flatMasterList = masterList.flat()
          artistImage.empty()
          for (var i=0; i<parseNum; i++){
          var randomSong =  flatMasterList[Math.floor(Math.random()*flatMasterList.length)]
       
          // console.log(randomSong.trackName) //
          // console.log(randomSong.artistName) //  
          // console.log(randomSong.primaryGenreName) //
          // console.log(randomSong.previewUrl) //music video
          // console.log(randomSong.artworkUrl100)  //image 

          // add into our DOM video element ..
          // var imgBox = $("<div>")
          img = $("<img>")
          img.attr("src", randomSong.artworkUrl100)
          img.attr("data-song", randomSong.previewUrl)
          img.attr("data-track", randomSong.trackName)
          img.attr("class", "artist-image")
          artistImage.append(img)

        }
        
        artistImage.on("click", img , playMusicVideo)
      }
      
      function playMusicVideo(e){
        e.stopPropagation()
        console.log(e.target)
        console.log($(this))
        var myVideo = e.target.getAttribute("data-song")
        var myTrack = e.target.getAttribute("data-track")
        openMedia(myVideo,myTrack)
        
      }

  function openMedia (url,title) {  
    console.log(url)
    media.html(`<video controls autoplay src="${url}" ></video> <p>${title}</p>`)
     media.removeClass("hide")
     toggleOverlay ();
    }
  

  function closeMedia(){
    media.html("")
    toggleOverlay ();
  }
 
  function toggleOverlay (){
    overlay.toggleClass("blur")

  }

  overlay.on("click", closeMedia)


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
        clearKeyword =["pop","hiphop","country","ska","reggae"];

        for(var i =0; i<clearKeyword.length; i++){
        
        musicVideoURL = "https://itunes.apple.com/search?term="+clearKeyword[i]+"&media=musicVideo&limit=50"

          var response = await $.ajax({
            url: musicVideoURL,
            method: "GET"

          })

          
        // console.log(JSON.parse(response))
        var responseJson = JSON.parse(response)
        masterList.push(responseJson.results)  
      
      }

  }

  else if(userWeather.includes("Clouds"))
  { 
      cloudsKeyword =["R&B","lo-fi","jazz","blues"];

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

if(userWeather.includes("Snow"))
{ 
    snowKeyword =["christmaspop","classical","christmasjazz","blues"];

    for(var i =0; i<snowKeyword.length; i++){
    
    musicVideoURL = "https://itunes.apple.com/search?term="+snowKeyword[i]+"&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })

      
    // console.log(JSON.parse(response))
    var responseJson = JSON.parse(response)
    masterList.push(responseJson.results)  
  
  }

}

if(userWeather.includes("Rain"))
{ 
    rainKeyword =["jazz","R&B","soul","blues"];

    for(var i =0; i<rainKeyword.length; i++){
    
    musicVideoURL = "https://itunes.apple.com/search?term="+rainKeyword[i]+"&media=musicVideo&limit=50"

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

