function getFullName(person) {
    if (person.mname) {
        return "".concat(person.fname, " ").concat(person.mname, " ").concat(person.lname);
    }
    else {
        return "".concat(person.fname, " ").concat(person.lname);
    }
}
var sumit = {
    fname: 'sumit',
    mname: 'Jeewan',
    lname: 'joshi'
};
console.log(getFullName(sumit));
