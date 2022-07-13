function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years);
    if (principal <= 0 || principal == "") {
        alert("Enter a positive number");
        return false;
    }
    else {
        if (document.getElementById("s").checked) {
            let temp = (principal * years * rate) / 100;
            let amount = parseInt(temp)+parseInt(principal);
            document.getElementById("result").innerHTML = "\<br\>\<br\>If you deposit " + `<mark>${principal}</mark>` + ",\<br\>at an interest rate of " + `<mark>${rate}%</mark>` + ",\<br\>You will receive an amount of " + `<mark>${Math.round(amount)}</mark>` + ",\<br\>in the year " + `<mark>${year}</mark>` + "\<br\>";
        }
        else if (document.getElementById("c").checked) {
            var amount = principal * ((1 + (rate / 100)) ** years);
            document.getElementById("result").innerHTML = "\<br\>\<br\>If you deposit " + `<mark>${principal}</mark>` + ",\<br\>at an interest rate of " + `<mark>${rate}%</mark>` + ",\<br\>You will receive an amount of " + `<mark>${Math.round(amount)}</mark>` + ",\<br\>in the year " + `<mark>${year}</mark>` + "\<br\>";
        }
        else {
            alert("Please select an Interest Type!");
        }
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
