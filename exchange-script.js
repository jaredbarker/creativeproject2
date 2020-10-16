fetch("https://open.exchangerate-api.com/v6/latest").then(function (response) {
    return response.json();
}).then(function (data) {
    document.getElementById("submit-button").addEventListener("click", function (event) {
        event.preventDefault();
        let start = document.getElementById("start").value;
        let end = document.getElementById("end").value;
        let startAmount = document.getElementById("start-amount").value;
        document.getElementById("result").style.backgroundColor = "lightgray";
        document.getElementById("result").style.borderRadius = "7px";
        if (start === "USD") {
            let test = data.rates[end];
            document.getElementById("result").innerHTML = startAmount * data.rates[end];
        }
        else if (end === "USD") {
            document.getElementById("result").innerHTML = startAmount / data.rates[start];
        }
        else {
            document.getElementById("result").innerHTML = (startAmount * data.rates[end]) / data.rates[start];
        }
    });

});

var pictures = ["landscape.jpg", "mountain.jpg", "mtns.jpg", "road.jpg", "skyline.jpg", "yellowstone.jpg"];

document.getElementById("converter").style.backgroundImage = `url(${pictures[Math.round(Math.random() * 5)]})`;