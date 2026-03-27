console.log("Hello World");

document.getElementById("name").innerText = "Mr. Swan Htet Aung";

document.getElementById("change_name").onclick = function() {
    document.getElementById("name").innerText = "Mr. Branny Ellen";
}

document.getElementById("name_button").onclick = function() {
    alert("This is Swan Htet Aung");
    document.getElementById("name").style.backgroundColor = "red";
    document.getElementById("name").style.color = "white";
}

let zero = "null";
console.log(zero, typeof zero);

let zeroToBoolean = Boolean(zero);
console.log(zeroToBoolean, typeof zeroToBoolean);
