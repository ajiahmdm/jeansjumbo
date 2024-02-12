//bot token
var telegram_bot_id = "6931807566:AAFCX387aeegRpQP9nO-m9pzfrnkE0OdoIk";
//chat id
var chat_id = -4108530471;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = "Jeans Jumbo \n \nName: " + u_name + "\nNo WA: " + email;
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
