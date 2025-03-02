// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`




const weather = document.querySelector("#weather")
const form = document.querySelector("#form")
const search = document.querySelector("#search")
const weathericon = document.querySelector(".weather-icon")
const click = document.querySelector("#click")


const getWeather = async (city) => {

    weathericon.innerHTML = `<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
    weather.innerHTML = `<h2> Loading... <h2>`
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=21805bff7224936fa25d6cec016a0a4b`;
    const response = await fetch(API)
    const data = await response.json()
    showWeather(data)
    console.log(data)
}


const showWeather = (data) => {

    if (data.cod == "404") {
        weather.innerHTML = `<h4> City Not Found <h4> `
        // return;
    } else {


        weather.innerHTML = `
            <h4> ${data.name} </h4>
            <h2>${data.main.temp} ℃</h2>
            <h5>Humidity:-${data.main.humidity}</h5>
            <h4> ${data.weather[0].main} </h4>

    `

        weathericon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`

    }


}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)


click.addEventListener(

    "click",
    function (event) {
        getWeather(search.value)
    }
)