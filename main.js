/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked(element) {
    let randomNumber = Math.floor(Math.random() * 1000);
    console.log("Button 1 was clicked: " + randomNumber); 
    document.getElementById(element).innerHTML = randomNumber;
}

let blue = true
function button2Clicked(element) {
    let circle = document.getElementById(element);
    if (blue) {
        circle.style.fill = "green";
        blue = false
    } else {
        circle.style.fill = "blue";
        blue = true
    } 
}