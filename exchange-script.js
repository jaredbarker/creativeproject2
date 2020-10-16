fetch("https://open.exchangerate-api.com/v6/latest").then(function (response) {
    return response.json();
}).then(function (data) {
    document.getElementById("submit-button").addEventListener("click", function (event) {
        event.preventDefault();
        let start = document.getElementById("start").value;
        let end = document.getElementById("end").value;
        let startAmount = document.getElementById("start-amount").value;
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