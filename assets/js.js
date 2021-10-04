
var cityArray = [];
var apiKey= "1b912a901a86efb987045d724a9751bf"
// var city = "#current-city";
// var temp ="#current-temp";
// var wind ="#current-wind";
// var uv ="#current-uv";
// var humidity ="#current-humidity";
// var cityString = json.stringify(cityArray);
$(document).ready(function(){
    $("#search-btn").on("click",function(){
        // var city =$("#user-search").val();
        
        searchWeather();
        $("#user-search").val();
        console.log()
    });

});

function searchWeather(){
    
    var city =$("#user-search").val();
    var temp =$("#current-temp").val();
    var url = (`https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=` + apiKey)
    fetch(url)
    .then(function(response){
        return response.json();
        
    })
    .then(function(data){
        console.log(data);
        // var currentDay = document.querySelector("#current");
        // var currentCard = document.createElement('div');
        // currentCard.setAttribute('src', cityArray);
        // currentDay.appendChild(currentCard);
        // console.log(currentDay);
        // document.getElementById("current-city").innerText= city ;
        // document.getElementById("current-temp").innertext= temp ;
        // document.getElementById("current-uv").innertext= uv ;
        $('#current-city').attr("current-city",data.city);

        console.log(current-city)

        $('#current-temp').attr("current-temp",data.temp);
        console.log(current-temp)


        
        
    })

    function getWeather(cityArray){
        console.log(goose)
   
    }     

   

    cityArray.push(city);
    console.log(cityArray)
    
    historyDiv();
}
// function getWeather(){
//     var currentDay = document.querySelector("#current");
    
    

//     var currentCard = document.createElement('div1');
    

//     currentCard.setAttribute('src', data);

//     currentDay.appendChild(currentCard);

//     cardText.append(city,temperature,)

//     console.log(currentDay)       

// }     




function historyDiv(){
    localStorage.setItem("city", JSON.stringify(cityArray));
    console.log(localStorage);
    var searchHistory = cityArray;
    
};