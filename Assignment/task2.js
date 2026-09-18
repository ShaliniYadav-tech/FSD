const EventEmitter = require("events");


const application = new EventEmitter();


application.on("input", (text) => {
    console.log(`Entered text: ${text}`);
});

application.on("buttonClick", (message) => {
    console.log(`Button clicked: ${message}`);
});


application.on("formSubmit", (message) => {
    console.log(`Form submitted: ${message}`);
});


application.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});


application.emit("input", "Hello Node.js");
application.emit("buttonClick", "Welcome button was clicked");
application.emit("formSubmit", "Form submission successful");
application.emit("notification", "You have a new notification");