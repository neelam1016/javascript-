var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var obj = new Person();
obj.age = 23; //setter
console.log(obj.age); //getter
