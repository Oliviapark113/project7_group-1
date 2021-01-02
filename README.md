# Project 1

## Deployed Website
#### [project7_group-1](https://oliviapark113.github.io/project7_group-1/.)

#### CONCEPT 
* Using 2 different API to incorprate one APP

#### DESCRIPTION: 
* User searches weather based off city and is given music and movie suggestions to match the mood of current weather result. 

#### MOTIVATION: 
* Discover new music and movie to enhance users feeling.

#### User Story: 
* As a user, I want to receive current weather information for the city I search, based off that result, I would like to receive music and movie recommendations that matches the mood for the current weather.

## TECHNOLOGIES to use:
#### API 
* Music & Movie data 
[itunes.apple.com](https://affiliate.itunes.apple.com/resources/documentationitunes-store-web-service-search-api/)

* Weather data 
[openweathermap.org](https://openweathermap.org/api
)

#### CSS FRAMEWORK 
* CSS Layout 
[Foundation](https://get.foundation/)

#### COLOR/Gradient effect
* COLORS
[material.io](https://material.io/resources/color/
)
* Background Gradient colors 
[CSSgradient.io](https://cssgradient.io/)

#### FONTS 

* Typography
[Googlefonts](https://fonts.google.com/)

#### Task & Role 
* Front-end developer:
_Michael Rosa-Vourazeris_
_Kristina al-ashqar_

* Back end developer:
_Olivia, Youngmee, Park_
_Paul Nuguyen_

#### Our challenges & Sucess Story
###### Challenge:

* GitHub: 
Cors error in Git hub deployed link, Github access.
(resolustion: ```https//cors-anywhere.herokuapp.com/``` adding in front of url.
[Handle CORS Client-side](https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e))
_Front end part:_ 
get familiar with using new frame work , responsive layout.
_Back end part :_ 
Combine separate data of arrays into one master array 
(resolution- await ajax with async function) 
Separate music and movie data from one master array 
(resolution- set musicMaterList and movieMasterList as 2 global empty array variables and push music and movie data separately)

##### Success: 
As a team we were able to overcome issues related to the functionality and layout of the code, to produce a fun and informative app for the user.

#### Original Layout
![](./Images/project7%20layout-01.jpg)

#### Actual APP view 
##### 1.When user arrives on website, the user can enter a city name in the input area
![alt 1st full view](./Images/full%20first%20page%20view.jpg)

##### 2.Then the user will receive the current weather data for said city, and be given an option to select the number of music or movie results they would like to receive to match the mood of the current weather.
![alt 2nd weather view](./Images/full%20weather%20view.jpg)

##### 3.Then recieve recommended data per number of selection. 
![alt 3rd with image view ](./Images/full%20img%20view.jpg)

##### 4.Then click images to view video.
![alt 3rd with image view ](./Images/full%20video%20view.jpg)
##### Once the image is selected, it becomes blurred, and starts playing the video for related song or movie. Once the user is finished, they can click on the "CLOSE" button to end the video.

##### 5.App is Responsive
![alt responsive view](./Images/responsive_full_reduced.jpg)