// Do not show api key on your js file
const API_key = `7c25e23e1b644891326742d68d70ab46`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data  => {
    // const temperature = document.getElementById('temperature');
   
    //  temperature.innerText = data.main.temp;
    setInnerTextById('temperature' , data.main.temp);
    setInnerTextById('condition' , data.weather[0].main);
     console.log(data.weather[0].main);
}


const setInnerTextById  = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}



document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    //set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('dhaka');