function getRandomElement<T>(items:T[]):T{
    let randomIndex=Math.floor(Math.random()*items.length);
    return items[randomIndex];
}
let numbers=[1,5,3,7,9,4];
let randElem=getRandomElement<number>(numbers);
console.log(randElem);