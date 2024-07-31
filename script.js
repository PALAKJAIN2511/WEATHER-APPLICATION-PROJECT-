
const apiKey="eedf246ec59cb3d847a3de0c168efa59";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){

        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{

    var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";

    if(data.weather[0].main=='Clouds'){
        weatherIcon.src="clouds.jpg";
    }

    else if(data.weather[0].main=='Clear'){
        weatherIcon.src="clear.jpg";
    }

    else if(data.weather[0].main=='Rain'){
        weatherIcon.src="rain.jpg";
    }

    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src="drizzle.jpg";
    }

    else if(data.weather[0].main=='Mist'){
        weatherIcon.src="mist.jpg";
    }

    else if(data.weather[0].main=='Snow'){
        weatherIcon.src="snow.jpg";
    }

    else if(data.weather[0].main=='Humidity'){
        weatherIcon.src="humidity.jpg";
    }

    else if(data.weather[0].main=='Wind'){
        weatherIcon.src="wind.jpg";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
 }
}

searchBtn.addEventListener("click" ,()=>{
    checkWeather(searchBox.value);
})