fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&q=S%C3%A3o%20Paulo&appid=e35458b42bf6173f05e763e22e4b96f5')


.then(response => { response.json()
.then( data => {

    const weather = document.getElementById('name')
    weather.innerHTML = (data.name)

    const weather2 = document.getElementById
    ("tempmin");
    weather2.innerText = (data.main.temp_max)
    
    const weather3 = document.getElementById
    ("tempmax");
    weather3.innerText = (data.main.temp_max)
    
    const weather4 = document.getElementById
    ("temp");
    weather4.innerText = (data.main.temp_max)

    const weather5 = document.getElementById
    ("termica");
    weather5.innerText = (data.main.temp_min)

    console.log(data)

})
})

