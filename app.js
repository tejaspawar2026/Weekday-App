function validateDay(event) {
    event.preventDefault();
    var input = document.getElementById("input").value;
    var dayName = document.getElementById("dayName");
    switch (input) {
        case "0":
            dayName.innerHTML = "Sunday";
            break;
        case "1":
            dayName.innerHTML = "Monday";
            break;
        case "2":
            dayName.innerHTML = "Tuesday";
            break;
        case "3":
            dayName.innerHTML = "Wednesday";
            break;
        case "4":
            dayName.innerHTML = "Thursday";
            break;
        case "5":
            dayName.innerHTML = "Friday";
            break;
        case "6":
            dayName.innerHTML = "Saturday";
            break;
        default:
            dayName.innerHTML = "Enter a valid number between 0 and 6";
    }
}