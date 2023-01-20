const weatherAPIKey = 'eeb6b90e8ef375f3964761f6c685dbf4';
const weatherBaseEndpoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + weatherAPIKey;
const forecastBaseEndpoint = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=' + weatherAPIKey;
const geocodingBaseEndpoint = 'https://api.openweathermap.org/geo/1.0/direct?&limit=5&appid='+weatherAPIKey+'&q=';

let searchInp = document.querySelector('.weather__search');
let city = document.querySelector('.weather__city');
let day = document.querySelector('.weather__day');
let humidity = document.querySelector('.weather__indicator--humidity>.value');
let wind = document.querySelector('.weather__indicator--wind>.value');
let pressure = document.querySelector('.weather__indicator--pressure>.value');
let image = document.querySelector('.weather__image');
let temperature = document.querySelector('.weather__temperature>.value');
let forecastBlock = document.querySelector('.weather__forecast');
let datalist = document.getElementById('suggestions');

/**
 * weatherImages - an array of objects that map weather conditions to corresponding images
 * 
 * Each object in the array has two properties:
 * - url: the URL of the image to display for the corresponding weather condition
 * - ids: an array of weather condition IDs that map to the corresponding image
 * 
 * This array is used to determine which image to display for a given weather condition based on the 
 * weather condition ID received from the OpenWeatherMap API.
 */
let weatherImages = [
    {
        url: 'images/sunny.png',
        ids: [800]
    },
    {
        url: 'images/scattered-clouds.png',
        ids: [803, 804]
    },
    {
        url: 'images/few-clouds.png',
        ids: [801]
    },
    {
        url: 'images/mist.png',
        ids: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781]
    },
    {
        url: 'images/rain.png',
        ids: [500, 501, 502, 503, 504]
    },
    {
        url: 'images/scattered-clouds.png',
        ids: [802]
    },
    {
        url: 'images/shower-rain.png',
        ids: [520, 521, 522, 531, 300, 301, 302, 310, 311, 312, 313, 314, 321]
    },
    {
        url: 'images/snow.png',
        ids: [511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622]
    },
    {
        url: 'images/thnderstorm.png',
        ids: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232]
    }
  ];