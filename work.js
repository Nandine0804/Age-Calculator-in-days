function ageInDays() {
    let age = parseInt(prompt("Enter Your Birth Year:"));
    const d = new Date();
    let days = (d.getFullYear() - age) * 365;
    var h2 = document.createElement("h2");
    var textNode = document.createTextNode("You're" + " " + days + " days old");
    h2.setAttribute("id", "ageInDays");
    h2.appendChild(textNode);
    document.getElementById("demo").appendChild(h2);
}

function reSet() {
    document.getElementById("ageInDays").innerHTML = "";
}
