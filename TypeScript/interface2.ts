interface Json{
     toJSON():string 
}
class Person implements Json {
    constructor(private fname1:string,private lname1:string){}
    toJSON(): string {
        return JSON.stringify({fname:this.fname1,lname:this.lname1})
    }
}
const obj=new Person('anuj','singh');
console.log(obj.toJSON());