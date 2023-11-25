const getWeather = (city) => {
  cityName.innerHTML = city;

  const fetchData = async () => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9f805c7051msh18d5165c6b1fb0ap180900jsnf4d233bace08",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const res = response.json().then((data) => {
        // cloud_pct.innerHTML = data.cloud_pct;
        temp.innerHTML = data.temp;
        tempHead.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        humidityHead.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        windHead.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;
      });
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
};

let sub = document.getElementById("submit");
sub.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

function showTemp() {
  let dropMenuCity = document.getElementById("dropCity");
  let inpCity = document.getElementById("city");
  inpCity.value = dropMenuCity.innerText;
  alert("Updated Search Box... Click on the Search Button");
}

function showTemp1() {
  let dropMenuCity = document.getElementById("dropCity1");
  let inpCity = document.getElementById("city");
  inpCity.value = dropMenuCity.innerText;
  alert("Updated Search Box... Click on the Search Button");
}

function showTemp2() {
  let dropMenuCity = document.getElementById("dropCity2");
  let inpCity = document.getElementById("city");
  inpCity.value = dropMenuCity.innerText;
  alert("Updated Search Box... Click on the Search Button");
}

function showTemp3() {
  let dropMenuCity = document.getElementById("dropCity3");
  let inpCity = document.getElementById("city");
  inpCity.value = dropMenuCity.innerText;
  alert("Updated Search Box... Click on the Search Button");
}

function showTemp4() {
  let dropMenuCity = document.getElementById("dropCity4");
  let inpCity = document.getElementById("city");
  inpCity.value = dropMenuCity.innerText;
  alert("Updated Search Box... Click on the Search Button");
}

const japData = async () => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=japan`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9f805c7051msh18d5165c6b1fb0ap180900jsnf4d233bace08",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const res = response.json().then((data) => {

      console.log(data);

      japTemp.innerHTML = data.temp;
      japMaxTemp.innerHTML = data.max_temp;
      japMinTemp.innerHTML = data.min_temp;
      japHum.innerHTML = data.humidity;
      japFeel.innerHTML = data.feels_like;
      japRise.innerHTML = data.sunrise;
      japSet.innerHTML = data.sunset;
      japDegree.innerHTML = data.wind_degrees;
      japSpeed.innerHTML = data.wind_speed;

    });
  } catch (err) {
    console.log(err);
  }
};
japData()