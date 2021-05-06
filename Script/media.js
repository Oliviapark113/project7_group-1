var musicVideoURL;
var movieVideoURL;
var numResults = 0;
var musicMasterList = [];
var movieMasterList = [];
//DOM element 
var musicBtn = $("#musicBtn")
var movieBtn = $("#movieBtn")
var container = $(".image-container")
var artistImage = $(".image-artist")
var media = $("#media")
var img;
var mediaSection = $(".mediaSection")
// randomly pulled data based on selected Number 
function runRandom(num, type) {
  //number value string convert into " number"
  var parseNum = parseInt(num)
  var flatMasterList = type==="music" ? musicMasterList.flat(): movieMasterList.flat()
  artistImage.empty()
  for (var i = 0; i < parseNum; i++) {
    var randomVideo = flatMasterList[Math.floor(Math.random() * flatMasterList.length)]
    console.log(randomVideo)
    var imgBox = $("<div>")
    img = $("<img>")
    img.attr("src", randomVideo.artworkUrl100)
    img.attr("data-video", randomVideo.previewUrl)
    img.attr("data-track", randomVideo.trackName)
    img.attr("class", "artist-image")
    imgBox.append(img)
    var para = $("<p>")
    para.attr("class", "info")
    para.text(formatName(randomVideo.trackName))
    imgBox.append(para)
    artistImage.append(imgBox)
  }
  artistImage.on("click", img, playMusicVideo)
}
function playMusicVideo(e) {
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
  removeLastColumn()
  media.html(`<video controls autoplay width=100% src="${url}" ></video><p>${title}</p>`)
  media.append("<button class='closeBtn'>CLOSE</button>")
  media.removeClass("hide")
}
function closeMedia() {
  media.html("")
  toggleOverlay();
  lastColumn()
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
var mistKeyword; //("Mist")
var defaultKeyword;//("None of the above")

musicBtn.on("click", async function () {
  removeMiddleColumn()
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
      musicMasterList.push(responseJson.results)
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
      musicMasterList.push(responseJson.results)
    }
  }
  else if (userWeather.includes("Snow")) {
    snowKeyword = ["christmaspop", "classical", "christmasjazz", "blues"];
    for (var i = 0; i < snowKeyword.length; i++) {
      musicVideoURL = "https://itunes.apple.com/search?term=" + snowKeyword[i] + "&media=musicVideo&limit=50"
      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"
      })
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)
    }
  }
  else if (userWeather.includes("Rain")) {
    rainKeyword = ["jazz", "R&B", "soul", "blues"];
    for (var i = 0; i < rainKeyword.length; i++) {
      musicVideoURL = "https://itunes.apple.com/search?term=" + rainKeyword[i] + "&media=musicVideo&limit=50"
      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"
      })
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)
    }
  }
  else if (userWeather.includes("Mist")) {
    mistKeyword = ["jazz", "R&B", "soul", "lo-fi"];
    for (var i = 0; i < mistKeyword.length; i++) {
      musicVideoURL = "https://itunes.apple.com/search?term=" + mistKeyword[i] + "&media=musicVideo&limit=50"
      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"
      })
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)
    }
  }
  else{
    defaultKeyword = ["jazz", "R&B", "soul", "lo-fi","metal"];
    for (var i = 0; i < defaultKeyword.length; i++) {
      musicVideoURL = "https://itunes.apple.com/search?term=" + defaultKeyword[i] + "&media=musicVideo&limit=50"
      var response = await $.ajax({
        url: musicVideoURL,
        method: "GET"
      })
      var responseJson = JSON.parse(response)
      musicMasterList.push(responseJson.results)

  }
}
  runRandom(numResults,"music");
})

movieBtn.on("click", async function () {
  numResults = $("#numRecords").val()
  removeMiddleColumn()
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
      movieMasterList.push(responseJson.results)
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
      movieMasterList.push(responseJson.results)
    }
  }
  else if (userWeather.includes("Snow")) {
    snowKeyword = ["romance", "comedy", "action", "kids","holiday"];
    for (var i = 0; i < snowKeyword.length; i++) {
      movieVideoURL = "https://itunes.apple.com/search?term=" + snowKeyword[i] + "&media=movie&limit=50"
      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"
      })
      console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      movieMasterList.push(responseJson.results)
    }
  }
  else if (userWeather.includes("Rain")) {
    rainKeyword = ["thriller", "documentary", "horror", "independent"];
    for (var i = 0; i < rainKeyword.length; i++) {
      movieVideoURL = "https://itunes.apple.com/search?term=" + rainKeyword[i] + "&media=movie&limit=50"
      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"
      })
      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      movieMasterList.push(responseJson.results)
    }
  }
  else if (userWeather.includes("Mist")) {
    mistKeyword = ["thriller", "documentary", "horror", "romance"];
    for (var i = 0; i < mistKeyword.length; i++) {
      movieVideoURL = "https://itunes.apple.com/search?term=" + mistKeyword[i] + "&media=movie&limit=50"
      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"
      })
      // console.log(JSON.parse(response))
      var responseJson = JSON.parse(response)
      movieMasterList.push(responseJson.results)
    }
  }
  else{

    defaultKeyword = ["romance", "comedy", "animation", "action","classic"];
    for (var i = 0; i < defaultKeyword.length; i++) {
      movieVideoURL = "https://itunes.apple.com/search?term=" + defaultKeyword[i] + "&media=movie&limit=50"
      var response = await $.ajax({
        url: movieVideoURL,
        method: "GET"
      })
      var responseJson = JSON.parse(response)
      movieMasterList.push(responseJson.results)

  }

  }
  runRandom(numResults, "movie");
})


function formatName (string){
  var shortStr = string.slice(0,20) + "..."
  if (string.length > 20){
    console.log(shortStr)
    return shortStr 
  }
  else {
    console.log(string)
    return string
  }
}
//function to add class to middle column allowing it to be 100% height when there is no content in it
function middleColumn (){
  if (artistImage.html() === ""){
    container.addClass("middleColumn");
  }
}
//function to add class to last column allowing it to be 100% height when there is no content in it
function lastColumn (){
  if (media.html() === ""){
    mediaSection.addClass("middleColumn");
  }
} 
//function to remove class from middle column allowing it to be responsive to the content that is appended inside it
function removeMiddleColumn (){ 
  container.removeClass("middleColumn")
}
//function to remove class from last column allowing it to be responsive to the content that is appended inside it
function removeLastColumn (){ 
  mediaSection.removeClass("middleColumn")
}
middleColumn()
lastColumn()