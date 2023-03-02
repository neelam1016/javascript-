abstract class Employee{
    constructor(private fname:string,private lname:string){}
    abstract getSalary():number;
    get fullName():string{
        return `${this.fname} ${this.lname}`;
    }
    fullDetails():string{
        return `${this.fullName} got ${this.getSalary()}`
    }
}
class EmpDetails extends Employee{
     constructor(fname:string,lname:string,private salary:number){
         super(fname,lname)
     }
     getSalary(): number {
         return this.salary;
     }
}
const obj=new EmpDetails('anuj','singh',80000);
console.log(obj.fullDetails());