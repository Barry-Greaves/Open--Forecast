# Open Forecast
![Open_Forecast_Layouts](https://user-images.githubusercontent.com/107034179/213618302-914f5529-f360-49a5-a80d-fd873484d6b3.png)

Open Forecast is a weather forecasting web application that provides users with current weather information as well as a five-day forecast for a given city. The application utilizes the OpenWeatherMap API to retrieve weather data and display it in a user-friendly interface.

## Project Goals
The goal of the Open Forecast project is to create a reliable and easy-to-use weather forecasting tool that provides users with the information they need to plan their day or week. The project aims to achieve this goal by providing accurate weather data, a simple and intuitive interface, and easy access to the data through a search function.

## Site Owner Goals
The site owner's goal is to provide a useful and user-friendly service to its users, with the ultimate goal of increasing user engagement and satisfaction. Additionally, the site owner aims to improve the performance and scalability of the application to handle a large number of users and requests.

## User Goals
The user's goal is to quickly and easily access accurate and up-to-date weather information for their desired location. This includes current weather conditions, as well as a five-day forecast. Users also expect the interface to be easy to navigate and understand.

## User Experience
The user experience is designed to be simple and intuitive. Users can search for their desired location by city name, and the application will display the current weather conditions and a five-day forecast. The interface is designed to be easy to navigate, with clearly labeled sections for the current weather and forecast. Users can also view a more detailed weather report by clicking on the "View Report" button.
User Expectations

## User Expectations
Users visiting Open Forecast can expect to find accurate and up-to-date weather information for a given location. They can expect the site to be easy to navigate and understand, with clear and concise information presented in a visually appealing manner. Users can also expect to find additional features such as background images of the searched city.

## User Stories
* As a user, I want to be able to easily search for a city so I can quickly view the current weather conditions and a 5-day forecast.
* As a user, I want to be able to view additional information such as humidity, wind speed, and pressure so I can make more informed decisions about my day.
* As a user, I want the site to be visually appealing so I can enjoy using it and find the information I need quickly and easily.
* I want to view the wind speeds before I go surfing.
* I want to view the temperature in a city in Europe before I book a last minute holiday.

## Site Owner Stories

* I want to provide accurate and up-to-date weather information for users, so that they can plan their day accordingly.
* I want to provide a simple and easy-to-use interface for users to search for weather information, so that they can quickly find the information they need.
* I want to provide a five-day forecast for users, so that they can plan for the upcoming week.
* I want to display weather information in an aesthetically pleasing way, so that users will want to use the site.
* I want to provide weather information for multiple cities, so that users can find information for any location they need.
* I want to provide a weather report based on the current weather, so users can get a better understanding of the weather condition.
* I want to change the background image based on the city searched by the user, so that the user can have a better experience
* I want to provide suggestions while searching for the city so that the user can find the city easily.

## Features

### Intuitive search bar for searching for a city
![Screen Shot 2023-01-20 at 04 40 28](https://user-images.githubusercontent.com/107034179/213618684-4e21aaf8-4524-4a37-881f-484c7d1829ae.png)

### Current weather conditions including humidity, wind speed, and pressure.
![Screen Shot 2023-01-20 at 04 42 23](https://user-images.githubusercontent.com/107034179/213618911-5774d7aa-e0db-488c-af1b-042b0a540f0e.png)

### 5 day forecast for chosen city
![Screen Shot 2023-01-20 at 04 43 58](https://user-images.githubusercontent.com/107034179/213618990-03de45ad-63f3-42a1-9995-9ac289d4d069.png)

### 5 day weather report with extra details including humidity, wind speed, and pressure.
![Screen Shot 2023-01-20 at 04 46 03](https://user-images.githubusercontent.com/107034179/213619193-7f9d0267-6c4f-48a3-8445-9c3606596727.png)

### Dynamic backgrounds which change based on the chosen city.
![Screen Shot 2023-01-20 at 05 19 58](https://user-images.githubusercontent.com/107034179/213623033-24a1cce1-2c3a-496d-b000-3ffbec81734c.png)


* The user can search for the current weather and forecast of a city by inputting the city name in the search bar and pressing enter.
* The user can also select a city from a list of suggestions generated by the geocoding functionality of the OpenWeatherMap API.
* The weather data is displayed in an easy-to-read format, including the city name, day of the week, current temperature, humidity, wind, and pressure.
* The forecast data is displayed in a 5-day format, showing the temperature, humidity, wind, and pressure for each day, as well as an icon corresponding to the weather condition.
* The user can also generate a weather report for the selected city, which will be displayed in the Report section.
* The background image of the page will change based on the city selected by the user.

## Plans for future goals and features:
* Add more detailed information to the weather report such as precipitation and UV index.
* Allow users to switch between Celsius and Fahrenheit temperature units.
* Add a feature that allows users to save their favorite cities and view their weather information with just one click.
* Add more languages support.

## Design

The design of this weather application is focused on creating a sleek and modern look. The layout is simple and easy to navigate, making it easy for users to find the information they need.

The font used throughout the application is Forma DJR Banner, which was chosen for its clear but stylish design. It is often seen an alternative to Helvetica and carries a lot of the same qualities. It is easy to read and good on the eye, a  font that enhances the overall design of the application. It is used for all text elements on the page, including the city name, weather details, and forecast information.

The background image of the application is designed to change based on the city that the user searches for. The image is sourced from Unsplash and is set to the body element of the page. This feature adds a personal touch to the application, making it more engaging for the user.

The icons used throughout the application are designed to be simple and easy to understand, making it easy for users to quickly identify the information they need. The icons are used to display information such as humidity, wind, and pressure. These icons are used in conjunction with the text elements to provide a clear and concise way of displaying information.

The design of Open Forecast is focused on creating a modern and user-friendly experience, with a clean and simple layout, elegant font choice, dynamic background image and simple icons to help users easily understand the data.

## Technology used

The Open Forecast project utilizes a variety of technologies to provide accurate and up-to-date weather information for users. The core technologies used in this project include JavaScript, HTML, and CSS.

JavaScript is the primary programming language used to create the functionality of the app. The app uses a number of JavaScript functions and asynchronous programming techniques to retrieve and display weather data from the OpenWeatherMap API. The app also utilizes the Fetch API to make API calls and retrieve data from the API.

The HTML and CSS are used to create the layout and design of the app. The HTML is used to create the various elements of the app, such as the input field, the weather data display, and the forecast data display. The CSS is used to style these elements, creating a visually appealing and user-friendly interface.

The OpenWeatherMap API is the primary data source for the app. The API provides weather data for a variety of locations around the world, including current weather conditions, forecast data, and historical weather data. The API also provides a geocoding service, which is used to match user input to specific locations.

The app also uses the Unsplash API to set the background image of the page. The API provides a wide variety of images that can be used as background images for the app.

Overall, the Open Forecast project uses a combination of various technologies to provide accurate, up-to-date weather information to users in a visually appealing and user-friendly manner.

## Validation

### HTML

The HTML was tested in the W3 HTML Validator and passed with no warnings or error messages

![Screen Shot 2023-01-20 at 04 51 04](https://user-images.githubusercontent.com/107034179/213619981-ccf25636-41e3-4d58-8824-626f0316351c.png)

### CSS

The CSS was tested in the W3 CSS Validation Service and passed with no warnings or error messages

![Screen Shot 2023-01-20 at 04 54 37](https://user-images.githubusercontent.com/107034179/213620186-7d0f9433-83a2-4f6a-b7b2-6b2313503189.png)


## Lighthouse

I tested the performance using Google Chrome's Lighthouse feature in the Dev Tools. The website has scored 99% for Performance, 100% for Accessibiliy, 92% Best Practices and 90% for SEO. 

![Screen Shot 2023-01-20 at 04 56 38](https://user-images.githubusercontent.com/107034179/213620677-20cb547a-c603-4b82-b17d-65dba62a0fbf.png)

## Javascript

The javascript was tested in JSHint and came back with 8 warning messages which could not be resolved. The warnings were :'async functions' is only available in ES8 (use 'esversion: 8'). This was due to JSHint not supporting async/await and only up to the maxim version of "esversion" 6.

![Screen Shot 2023-01-20 at 02 51 21](https://user-images.githubusercontent.com/107034179/213620963-74a7b391-75d7-4e59-90d8-88890fe4ce7f.png)

## Testing 

To ensure the best user experience, extensive testing was conducted on Open Forecast across a variety of different web browsers, including Safari, Chrome, and Firefox. The performance of the app was also tested on a variety of devices, including tablets and an iPad, as well as on a Samsung S21. Overall, the app performed well on all devices and browsers, providing a smooth and consistent user experience.

In addition to testing the app's performance, various user scenarios were also simulated to ensure that the app met the needs and expectations of its users. This included testing the app's ability to handle different types of weather conditions, as well as its ability to provide accurate and up-to-date forecast information.

Overall, the testing process was thorough and comprehensive, and I am confident that users will have a positive experience using Open Forecast, and we will continue to monitor and improve the app to ensure that it remains reliable and user-friendly.

## Bugs

If the user selects their city from the suggestions list it does not always update the weather city accordingly and sometimes chooses a city from a different country which shares the same name. This issue does not always occur but needs to fixed in a future update. 

## Deployment

- I created the repository using the [Code Institute Gitpod Template](https://github.com/Code-Institute-Org/gitpod-full-template)
- I selected "Use this template" and then created a new repository using the full template. 
- Once in Github repository I then set up the development environment in Gitpod
- I begun the website by creating an index.html page and css style sheet. 
- I committed all updates through the development process, ensuring they were well defined and included a clear message describing the reason for each commit. 
- The website is hosted on Github pages and the link can be found by navigating to the settings tab of the repoistory and then clicking on 'pages'.
- Live link is available here: https://barry-greaves.github.io/Open--Forecast/

## How to fork and clone on Github:
1. Go to the Open Forecast Github repository at https://github.com/Open--Forecast
2. Click the "Fork" button at the top right of the page.
3. On your forked repository, click the "Clone or download" button and copy the URL.
4. In your local machine, open the terminal and navigate to the directory where you want to clone the project.
5. Type "git clone" followed by the URL you copied in step 3, then press enter.

Make sure you have git installed on your machine before following the above steps.
With this project, we aim to provide a user-friendly and efficient way for users to access current and forecast weather information for any city around the world. Our goal is to make it easy for users to quickly access the weather information they need, whether they're planning a trip, checking the weather for the day, or just curious about the weather in a certain city. The user experience is designed to be simple and intuitive, with clear and easy-to-read information displayed prominently on the page. The background image also

## Credits

### Code

Some essential concepts for this app were learned in [Udemy Build Modern Javascripts Projects Course](https://www.udemy.com/course/the-javascript-course-build-modern-javascript-projects/)

The following concepts and techniques were learned and applied in this project:

* Connecting to the OpenWeatherMap API to fetch 5-day weather forecast data
* Using JavaScript to handle and manipulate API data
* Using JavaScript to update the DOM with API data

In addition to the concepts learned in the course, other resources were also utilized in the development of this project:

* W3Schools - for reference on HTML, CSS and JavaScript syntax and methods
* Stack Overflow - for help with specific coding challenges and troubleshooting
* Code Institute JavaScript Essentials - for learning the core principals of how Javascript works. 


### Icons

The icons used for the this project were downloaded from [Graphberry Graphic Resource](https://www.graphberry.com/products/download/weather-icons)

### Fonts 

The font Forma DJR Banner was licenced from [Adobe Fonts](https://fonts.adobe.com/)
