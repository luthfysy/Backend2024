// versi lama ES5
var greet = function(name) {
    return 'Hello, ' + name;
};

var users = ['Alice', 'Bob', 'Charlie'];
users.forEach(function(user) {
    console.log(greet(user));
});

// versi ES6
const greet = (name) => `Hello, ${name}`;

const users = ['Alice', 'Bob', 'Charlie'];
users.forEach(user => console.log(greet(user)));
