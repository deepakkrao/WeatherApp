//time to work with js and weather API
//const API = `https://api.openweathermap.org/data/2.5/weather?
//q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loding....</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    //console.log(response);
    const data = await response.json();
    console.log(data);
    showWeather(data);
}
const showWeather = (data) => {
    if(data.cod == "404" || data.cod == '400' )
    {
      weather.innerHTML =`<h2>City not found..</h2>
      <h2>Check Your Mistake</h2>`
      return;
    }
    weather.innerHTML = `
  <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"  height="150px">
  </div>
  <div>
    <h1>${data.main.temp}&degC</h1>
    <h4>${data.weather[0].main}</h4>
  </div>`
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value);
        event.preventDefault();
    }
)
