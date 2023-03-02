function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 5, 3, 7, 9, 4];
var randElem = getRandomElement(numbers);
console.log(randElem);
