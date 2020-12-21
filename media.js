

var musicVideoURL;
var movieVideoURL;
var numResults = 0;
var masterList = [];

//DOM element 
var musicBtn = $("#musicBtn")
var movieBtn = $("#movieBtn")

var container = $(".mv-container")
var artistImage = $(".image-artist")
var media = $(".media")
var img;
// randomly pulled data based on selected Number 

function runRandom(num) {
  //number value string convert into " number"
  var parseNum = parseInt(num)
  var flatMasterList = masterList.flat()
  artistImage.empty()
  for (var i = 0; i < parseNum; i++) {
    var randomVideo = flatMasterList[Math.floor(Math.random() * flatMasterList.length)]

   
    img = $("<img>")
    img.attr("src", randomVideo.artworkUrl100)
    img.attr("data-video", randomVideo.previewUrl)
    img.attr("data-track", randomVideo.trackName)
    img.attr("class", "artist-image")
 
    artistImage.append(img)

  }

  artistImage.on("click", img, playMusicVideo)
}

function playMusicVideo(e) {
// verify data on or off in the parent element 
// if on the open video if off then close video
e.stopPropagation()

  console.log(e.target)
  console.log($(this))
 
  var myVideo = e.target.getAttribute("data-video")
  var myTrack = e.target.getAttribute("data-track")
  openMedia(myVideo, myTrack)
  toggleOverlay();

}

function openMedia(url, title) {
  console.log(url)
  media.html(`<video controls autoplay src="${url}" ></video><p>${title}</p>`)
  media.append("<button>CLOSE</button>")
  media.removeClass("hide")
  
}


function closeMedia() {
  media.html("")
  toggleOverlay();
}

function toggleOverlay() {

  $(".artist-image").toggleClass("blur")

}

media.on("click", closeMedia)


var clearKeyword;    //("Clear")
var cloudsKeyword;  //("Clouds")
var snowKeyword;   //("Snow")
var rainKeyword;  //("Rain")
var windKeyword;  //("Windy")

musicBtn.on("click", async function () {

  numResults = $("#numRecords").val()
  var userWeather = $("#main_weather").text()

  if (userWeather.includes("Clear")) {
    clearKeyword = ["pop", "hiphop", "country", "ska", "reggae"];

    for (var i = 0; i < clearKeyword.length; i++) {

      musicVideoURL = "https://itunes.apple.com/search?term=" + clearKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      masterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Clouds")) {
    cloudsKeyword = ["R&B", "lo-fi", "jazz", "blues"];

    for (var i = 0; i < cloudsKeyword.length; i++) {

      musicVideoURL = "https://itunes.apple.com/search?term=" + cloudsKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      masterList.push(responseJson.results)

    }

  }

  if (userWeather.includes("Snow")) {
    snowKeyword = ["christmaspop", "classical", "christmasjazz", "blues"];

    for (var i = 0; i < snowKeyword.length; i++) {

      musicVideoURL = "https://itunes.apple.com/search?term=" + snowKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      masterList.push(responseJson.results)

    }

  }

  if (userWeather.includes("Rain")) {
    rainKeyword = ["jazz", "R&B", "soul", "blues"];

    for (var i = 0; i < rainKeyword.length; i++) {

      musicVideoURL = "https://itunes.apple.com/search?term=" + rainKeyword[i] + "&media=musicVideo&limit=50"

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


movieBtn.on("click", async function () {
   
  numResults = $("#numRecords").val()

  var userWeather = $("#main_weather").text()

  if (userWeather.includes("Clear")) {
    clearKeyword = ["action", "drama", "romance", "western", "comedy"];

    for (var i = 0; i < clearKeyword.length; i++) {

      movieVideoURL = "https://itunes.apple.com/search?term=" + clearKeyword[i] + "&media=movie&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })

      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      masterList.push(responseJson.results)

    }

  }

  else if (userWeather.includes("Clouds")) {
    cloudsKeyword = ["romance", "drama", "classics","scifi"];

    for (var i = 0; i < cloudsKeyword.length; i++) {

      movieVideoURL = "https://itunes.apple.com/search?term=" + cloudsKeyword[i] + "&media=movie&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })


      console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      masterList.push(responseJson.results)

    }

  }

  if (userWeather.includes("Snow")) {
    snowKeyword = ["romance", "comedy", "action", "kids","holiday"];

    for (var i = 0; i < snowKeyword.length; i++) {

      movieVideoURL = "https://itunes.apple.com/search?term=" + snowKeyword[i] + "&media=movie&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })


      console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      masterList.push(responseJson.results)

    }

  }

  if (userWeather.includes("Rain")) {
    rainKeyword = ["thriller", "documentary", "horro", "independent"];

    for (var i = 0; i < rainKeyword.length; i++) {

      movieVideoURL = "https://itunes.apple.com/search?term=" + rainKeyword[i] + "&media=musicVideo&limit=50"

      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"

      })


      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      masterList.push(responseJson.results)

    }

  }


  runRandom(numResults);
})

