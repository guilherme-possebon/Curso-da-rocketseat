let temperature = 34
let hightTemperature = temperature >= 39
let mediumTemperature = temperature >= 37.8 && temperature < 39
let lowTemperature = temperature >= 37.3 && temperature < 37.8
let healthyTemperature = temperature >= 35 && temperature < 37.3


if (hightTemperature) {
    console.log('Febre alta, vá ao hospital');
} else if (mediumTemperature) {
    console.log('Febre');    
} else if (lowTemperature) {
    console.log("Febrícula");
} else if (healthyTemperature) {
    console.log("Saudável");
} else {
    console.log('Hipotermia, procure se aquecer');
}