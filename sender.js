/*
const form = document.querySelector('#form')

form.addEventListener("submit", (e) => {
    e.preventDefault()

    var text1 = document.querySelector("#text1").value
    var text2 = document.querySelector("#text2").value

    var my_text = 'Pesanan Dari:%0A - Text1: ${text1} %0A - Text2: ${text2}'

    var chat_id = 6931807566
    var url = 'https://api.telegram.org/bot6931807566:AAFCX387aeegRpQP9nO-m9pzfrnkE0OdoIk/sendMessage?chat_id=${chat_id}&text=${my_text}'

    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()

    


})
*/
//bot token
var telegram_bot_id = "6931807566:AAFCX387aeegRpQP9nO-m9pzfrnkE0OdoIk";
//chat id
var chat_id = -4108530471;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = "Name: " + u_name + "\nNo WA: " + email;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    return false;
};
