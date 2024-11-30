// FruitController.js
const fruits = require('./fruits');

const index = () => {
    console.log("Method index - Menampilkan Buah");
    fruits.forEach(fruit => console.log(fruit));
};

const store = (name) => {
    console.log(`Method store - Menambahkan buah ${name}`);
    fruits.push(name);
    index();
};

const update = (position, name) => {
    console.log(`Method update - Update data ${position} menjadi ${name}`);
    if (position >= 0 && position < fruits.length) {
        fruits[position] = name;
        index();
    } else {
        console.log("Invalid position");
    }
};

const destroy = (position) => {
    console.log(`Method destroy - Menghapus data ${position}`);
    if (position >= 0 && position < fruits.length) {
        fruits.splice(position, 1);
        index();
    } else {
        console.log("Invalid position");
    }
};

module.exports = { index, store, update, destroy };
