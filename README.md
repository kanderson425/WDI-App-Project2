# WDI-App-Project2

# National Park Tracker App
## Attention!
Calling all hikers, campers, nature-lovers and national park enthusiasts! Are you tired of attending the same National Park over and over again because you can't seem to remember which ones you have been to? Wouldn't it be great if there was some type of app that could be use to not only manage a list of all the parks you have been to, but an app that could manage a 'wish-list' of parks that you would like to attend?

## Introducing...
*The National Park Tracker App!*

Utilizing data sourced directly from the National Park Service API, the National Park Tracker APP can be used to monitor and manage all of the national parks a user has attended, along with all of the parks that the user wishes to attend in the future.

This app will ultimately serve as a platform for National Park attendees to track/log their trips as well as interact with other users via comments and message boards.

# App Wireframes
<img width="1677" alt="app_project_wireframe_about/homepage" src="https://user-images.githubusercontent.com/46425993/53617473-eee66100-3bac-11e9-9718-d94f400aadcf.jpg">
<img width="1677" alt="app_project_wireframe_viewAllParks" src="https://user-images.githubusercontent.com/46425993/53617498-06254e80-3bad-11e9-9a46-9c41e5d5b703.jpg">
<img width="1677" alt="app_project_wireframe_viewSinglePark" src="https://user-images.githubusercontent.com/46425993/53617501-09b8d580-3bad-11e9-8c75-1d34debe474d.jpg">
<img width="1677" alt="app_project_wireframe_viewMyProfile" src="https://user-images.githubusercontent.com/46425993/53617502-0cb3c600-3bad-11e9-98d7-f22117cf5d63.jpg">
<img width="1677" alt="app_project_wireframe_ERD" src="https://user-images.githubusercontent.com/46425993/53617504-0f162000-3bad-11e9-8395-51dd91536cf1.jpg">

# Technologies Used
HTML/CSS/Javascript
Node.js
ejs
Mongoose
MongoDb
National Park Service API (https://www.nps.gov/subjects/developer/index.htm)

As illustrated above, this application utilizes a variety of technologies that primarily serve to generate and render a dynamic front-end that is connected to a third-party API.

The data in this application is coming directly from the National Parks Service API and, with the help of Node.js and ejs, is dynamically rendered within the applications views strcuture. 

There are currently 4 views that a user can access: Home, About, View all National Parks and Profile. 

There are 2 primary data models that are serving our application: the user model, which allows for oauth functionality, and the park model, which allows for the display/creation and manipulation of parks.

# Next Steps
While a great start, this application has functionality and modifications that still need to be made. 

In addition to improvements in design, the main modifications will primarily be centered on the addition of comment functionality for given parks. A user will eventually be able to select a park, add it to their visited park list, then add comments about their visit which can then be accessed and viewed by other users.

