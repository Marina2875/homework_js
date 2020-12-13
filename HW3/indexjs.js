
 //Задание №1
 const employee=emplyeeArr[0]
 const Employee = function(obj){
   for (let key in obj){
     this[key]=obj[key]
   }
   Object.assign(this,obj);
 }
 const employeeObj = new Employee(employee);

console.log(employeeObj);
/////////////////////////////////////////////////
//Задание №2
const femployee=emplyeeArr[0]
const fEmployee = function(obj){
  for (let key in obj){
    this[key]=obj[key]
  }
  const user = {
    name       : this.name,
    lastName   : this.surname,
    getFullName: function() {
        console.log(this.lastName + ' ' + this.name);
    }
}
user.getFullName();
 
  Object.assign(this,obj);
}
const femployeeObj = new fEmployee(femployee);

console.log(femployeeObj);
/////////////////////////////////////////////////////
//Задание №3
let createEmployesFromArr = (arr) => {
  let A=emplyeeArr[0]
  let B=[]
  for (let i = 1; i <= emplyeeArr.length; i++) {
    B.push(emplyeeArr);
  }
  return B;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)

console.log(emplyeeConstructArr);
///////////////////////////////////////////////////
//Задание№4
 const getFullNamesFromArr = (arr) => {
  const employee=emplyeeArr[0]
  for (let i = 1; i <= emplyeeArr.length; i++) {
    console.log(emplyeeArr[i].name+' '+ emplyeeArr[i].surname);
  }
}
getFullNamesFromArr(emplyeeConstructArr)
///////////////////////////////////////////////
//Задание№5
const employee1=emplyeeArr[0]
  const sum=0
    const getMiddleSalary = (arr) => {
      for(var i = 0; i < emplyeeArr.length; i++){
     sum+=emplyeeArr[i].salary/11;
  console.log(sum);
 }
    }
getMiddleSalary(emplyeeConstructArr); 
///////////////////////////////////////////////
