var cityObject = new XMLHttpRequest();

cityObject.open("Get", "https://byui-cit230.github.io/weather/data/towndata.json", true);

cityObject.responseType = "json";

cityObject.send();

cityObject.onload = function () {
    var cityData = cityObject.response;
    console.log(cityData);
       
/*------Preston----------*/
document.getElementById("mottoP").innerHTML = cityData.towns[4].motto;

document.getElementById("yearP").innerHTML = cityData.towns[4].yearFounded;
document.getElementById("populP").innerHTML = cityData.towns[4].currentPopulation;
document.getElementById("rainfallP").innerHTML = cityData.towns[4].averageRainfall;

/*------Soda Springs----------*/

document.getElementById("mottoS").innerHTML = cityData.towns[5].motto;
document.getElementById("yearS").innerHTML = cityData.towns[5].yearFounded;
document.getElementById("populS").innerHTML = cityData.towns[5].currentPopulation;
document.getElementById("rainfallS").innerHTML = cityData.towns[5].averageRainfall;
   
/*--------Fish Haven--------*/
    
document.getElementById("mottoF").innerHTML = cityData.towns[1].motto;
document.getElementById("yearF").innerHTML = cityData.towns[1].yearFounded;
document.getElementById("populF").innerHTML = cityData.towns[1].currentPopulation;
document.getElementById("rainfallF").innerHTML = cityData.towns[1].averageRainfall;
    
  }