let containerBox = document.querySelector(".container-box");
let hideBox = document.querySelector(".hide-box");
let weatherBox = document.querySelector(".hide-box-2");
let weatherIcon = document.querySelector(".icon-img-box");
let errorLine  = document.querySelector(".error"); 


  async function fetchData(city) {
  const apiKey = "53ac45dcfb9f9a03f84f8c80ec726fe8";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  try {

  let data = await fetch(apiUrl + city + `&appId=${apiKey}`);
  let response = await data.json();
    
  let location = document.querySelector("h4");
  location.innerText = response.name;

  let temp = document.querySelector(".degree-box1");
  temp.innerText = `${Math.floor(response.main.temp)}℃`;

  let min = document.querySelector(".min-box1");
  min.innerText = `${Math.floor(response.main.temp_min)}℃`;

  let max = document.querySelector(".max-box1");
  max.innerText = `${Math.floor(response.main.temp_max)}℃`;

  let main = document.querySelector(".cloud-box1");
  main.innerText = response.weather[0].main;


  console.log(response);
    
  } catch (error) {
    console.log(error)
    
  }
    
}


function hideShow() {
  let search = document.querySelector("input");
  hideBox.style.display = "block";
  fetchData(search.value);
  search.value = ""
}