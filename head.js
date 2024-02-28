let apiKey = "dbd0b8cc6d69fa32cc8c0d558a018a33" ;
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let City = document.querySelector(".city") ;
let temp = document.querySelector(".temp") ;
let humidity = document.querySelector(".humidity") ;
let wind = document.querySelector(".wind") ;
const searchBox = document.querySelector(".search input") ;
const searchBtn = document.querySelector(".search button") ;
const weatherIcon = document.querySelector(".weather-icon") ;
const weather = document.querySelector(".weather") ;
const error = document.querySelector(".error") ;

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`) ;

    if(response.status == 404 )
    {
        error.style.display = "block" ;
    }
    const data = await response.json() ;
    
    console.log(data) ;
    City.innerHTML = data.name ;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%" ;
    wind.innerHTML = data.wind.speed + " km/h" ;

    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "clouds.png" ;
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "clear.png" ;
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "rain.png" ;
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = "drizzle.png" ;
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = "mist.png" ;
    }
    else if(data.weather[0].main == "Snow")
    {
        weatherIcon.src = "snow.png" ;
    }

    weather.style.display = "block" ;
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

