var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.toJSON = function () {
        return JSON.stringify({ fname: this.fname, lname: this.lname });
    };
    return Person;
}());
var obj = new Person('anuj', 'singh');
console.log(obj.toJSON());
