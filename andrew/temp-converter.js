let fahrenheit = 35;
let celsius = (fahrenheit - 32) * (5/9);

console.log(celsius);

function temp(fahrenheit) {
    return {
        kelvin : (fahrenheit + 459.67) * ( 5/9),
        celsius : (fahrenheit - 32) * (5/9)
    }
    
}

console.log(temp(0).kelvin);
