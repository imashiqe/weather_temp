// Do not show api key on your js file
const API_key = `7c25e23e1b644891326742d68d70ab46`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data  => {
    const temperature = document.getElementById('temperature');
    console.log(data.main.temp);
     temperature.innerText = data.main.temp;
}


document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
})

loadTemperature('dhaka');