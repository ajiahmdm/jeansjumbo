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

        // * All of this code is happening inside of the parent window,
    // * but you can also 'inject' scripts into the new window if you wish.

    // window.open() returns the new window's window object
    var newWin = window.open('https://wa.me/6281917305146?text=Halo%20Saya%20ingin%20mendapatkan%20diskon%20ongkir%20untuk%20Jeans%20Jumbo.');
    // Run all of your code onload, so you can manipulate the 
    // new window's DOM. Else, you're just manipulating an empty doc.
    newWin.onload = function () {
        // `this`, in this context, makes reference to the new window object
        // You can use DOM methods, on the new document, with it.
        var myElem = this.document.getElementById('custom-header');
        console.log("Window object: ", this);
        console.log("Window's location: ", this.location.href);
        console.log("Id of element in new window: ", myElem.id);
        // Attach a click event to the new document's body
        this.document.body.onclick = function () {
            // `this`, inside of a listener, is the element itself
            // but this console.log will log inside of the parent window
            console.log(this);
            this.style.transition = 'all 1s';
            this.style.opacity = 0;
        };
        this.document.body.addEventListener('click', function () {
            // Now, let's log inside of the new window.
            // Since in here, this === this.document.body,
            // then you'll have to use the newWin var we set before.
            // newWin is the window object.
            newWin.console.log('Logging in new window!');
        });
    };

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    return false;

    

};

