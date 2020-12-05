
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
console.log('reams of paper=',i+1)
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
