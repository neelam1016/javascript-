var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "".concat(this.fname, " ").concat(this.lname);
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.fullDetails = function () {
        return "".concat(this.fullName, " got ").concat(this.getSalary());
    };
    return Employee;
}());
var EmpDetails = /** @class */ (function (_super) {
    __extends(EmpDetails, _super);
    function EmpDetails(fname, lname, salary) {
        var _this = _super.call(this, fname, lname) || this;
        _this.salary = salary;
        return _this;
    }
    EmpDetails.prototype.getSalary = function () {
        return this.salary;
    };
    return EmpDetails;
}(Employee));
var obj = new EmpDetails('anuj', 'singh', 80000);
console.log(obj.fullDetails());
