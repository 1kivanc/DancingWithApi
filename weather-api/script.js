const url = "https://api.openweathermap.org/data/2.5/"
const key = "fbea8a359b83674e14386abc1d1b6ba1"


const cityName = 'muğla'

const inputData = (e) => {
    if(e.keyCode == '13'){
        getResult(searchBar.value)
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query)
    fetch(query)
    .then(weather => {
        return weather.json()

    })
    .then(dResult)
}

const dResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`
    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}`
    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description
    let minmax = document.querySelector('.minmax')
    minmax.innerHTML = `${Math.round(result.main.temp_min)}°c / 
    ${Math.round(result.main.temp_max)}°c`
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress',inputData)


