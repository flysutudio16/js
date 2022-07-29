const cityName = document.querySelector(".city"),
      date = document.querySelector(".date"),
      temperature = document.querySelector(".temp"),
      weather = document.querySelector(".weather"),
      gradus_hi_low = document.querySelector(".hi-low"),
      form = document.querySelector("form"),
      search = document.querySelector(".seacrh-box");
 
      let result = [];
      apiKey = `4f539943033320d16aceeff37d1b78e5`;
      form.addEventListener("submit",(e)=>{
        e.preventDefault();
        getAypi()
      })
    function getAypi(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&APPID=${apiKey}`)
    .then((res)=>{
        res.json()
        .then((res)=>{
          result = res;
          htmlWiew(result);
          console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    }
    function htmlWiew(value){
         cityName.innerHTML = value.name;
         temperature.innerHTML = value.main.temp;
         gradus_hi_low.innerHTML = `${Math.trunc(value.main.temp_min)}°c / ${Math.trunc(value.main.temp_max)}°c`;
         weather.innerHTML = `${value.weather[0].main}`
        }
        
        const  arraymonth = [
            'Yanvar',
            'Fevral',
            'Mart',
            'Aprel',
            'May',
            'Iyun',
            'Iyul',
            'Avgust',
            'Sentabr',
            'Oktabr',
            'Noyabr',
            'Dekabr'
        ]
        let newDate = new Date(),
        kun = newDate.getDate(),
        oy = arraymonth[newDate.getMonth()],
        yil = newDate.getFullYear();
        const resultDate = `${kun}.${oy}.${yil}`;
        date.innerHTML = resultDate;
