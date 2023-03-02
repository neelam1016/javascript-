interface Person{
    fname:string;
    mname?:string;
    lname:string;
}
  function getFullName(person:Person){
     if(person.mname){
        return `${person.fname} ${person.mname} ${person.lname}`;
     }
     else {
     return `${person.fname} ${person.lname}`;
     }
  }
  let sumit={
    fname:'sumit',
    mname:'Jeewan',
    lname:'joshi'
  }
  console.log(getFullName(sumit))