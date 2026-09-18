console.log("1. Synchronous code before scheduling callbacks");

process.nextTick(() => {
    console.log("2. process.nextTick() callback");
});

setTimeout(() => {
    console.log("3. setTimeout() callback");
}, 0);

setImmediate(() => {
    console.log("4. setImmediate() callback");
});

console.log("5. Synchronous code after scheduling callbacks");