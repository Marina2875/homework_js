//var counter = 1,studentAcount=16;
//var studentAcount =2;
//var student_acount_in_room;
//let studentinRoom=100;
// const name="name";
// counter = "defseff";

//console.log(studentAcount+100)
//const user={
//name:"Vasya",
//adress:"dsfcvsvs",
//age: 20
//}
//console.log(user['age'])
//console.log(user['name'])
//console.log{'fsgggs',user}
//let result=12%2;//общее кратное от деления



/* let counter=127;
let first, second,third;

third = counter%10;
second=((counter-third)%100)/10

first = (counter-(second+10+third))/100

console.log(third+second+first)

if(conter=counter/2){
    console.log(third*second*first)  
}else{
    console.log(third/second/first)  
}
let str
let strr="_"
for (let i=10;i>=1;i--){
    if(i>1){
  console.log(strr,i)
    }else if(i===10){
    console.log(i,strr)
  }

} 

for (let i=2;i>=1;i++){
  console.log(i)
}
 */

 //Задание №1
for (let i= 1; i < 11; i++ ) {
  if(i % 2 === 1 && i % 3 != 0 ) {
      console.log('Buz') 
  } 
  if(i % 2 === 0 && i % 3 != 0  ) {
    console.log('Fiz')    
}
if(i % 3 === 0 ) {
  console.log('FizBuz')}
}
/////////////////////////////////////////////////////////
//Задание №2
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log('factorial of a number=', factorial(10) );

///////////////////////////////////////////////////////////////
//Задание №3

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let a,b

a=consumptionPerWeek*weeksAmount
b=a/sheetsInReamPaper
for (let i=0;i<b;i++){
  i = Math.round(b);
console.log('reams of paper=',i)
}
////////////////////////////////////////////////////////////////
//Задание №4

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 48; 
let flat
flat= roomsOnFloor*floors
const porch=(roomNumber-1)/flat+1
const floor=(roomNumber-1)%flat/3+1

console.log('number=',Math.trunc(porch))
console.log('floor number=',Math.trunc(floor))

////////////////////////////////////////////////////////////////////////
//Задание №5
console.log('const medianNumber = 6')
const medianNumber = 6
let space = "",
    star = "";
let i=0
while ( i < medianNumber) {
    space = "";
    star = "";
    for ( let j = 0; j < medianNumber - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "#";
    console.log(space + star);
   i++;
}
