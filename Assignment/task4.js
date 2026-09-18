const EventEmitter = require("events");


const studentActivity = new EventEmitter();


studentActivity.on("login", (studentName) => {
    console.log(`Student ${studentName} logged in.`);
});


studentActivity.on("courseRegistration", (courseName) => {
    console.log(`Course registered: ${courseName}`);
});


studentActivity.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});


studentActivity.on("logout", (studentName) => {
    console.log(`Student ${studentName} logged out.`);
});


studentActivity.emit("login", "Rahul");

studentActivity.emit(
    "courseRegistration",
    "Full Stack Development"
);

studentActivity.emit(
    "notification",
    "Your course registration was successful."
);

studentActivity.emit("logout", "Rahul");