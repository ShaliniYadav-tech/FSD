const EventEmitter = require("events");


const emitter = new EventEmitter();
emitter.on("studentJoined", (studentName) => {
    console.log(`Student ${studentName} joined the session.`);
});


emitter.on("courseSelected", (courseName) => {
    console.log(`Course selected: ${courseName}`);
});


emitter.on("sessionEnded", (sessionCode) => {
    console.log(`Session ended. Code: ${sessionCode}`);
});


emitter.emit("studentJoined", "Rahul");
emitter.emit("courseSelected", "Full Stack Development");
emitter.emit("sessionEnded", 0);

