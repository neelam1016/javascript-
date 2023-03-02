class Person{
    private _age:number;
    public get age(){
        return this._age;
    }
    public set age(theAge:number){
         this._age=theAge;
    }
}
const obj=new Person();
obj.age=23;//setter
console.log(obj.age);//getter