
 //Задание №1
 const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
for (let key in citiesAndCountries) {
  console.log(key+'  это  -' + citiesAndCountries[key] ); 
}
/////////////////////////////////////////////////////////
//Задание №2
function getArray() {
  const amount = 9;
  let A = [];
  let B = [];

  for (let i = 1; i <= amount; i++) {
      B.push(i);

      if (i % 3 == 0) {
          A.push(B);
          B = [];
      }
  }

  return A;
}
console.log(getArray())
///////////////////////////////////////////////////////////////
//Задание №3
const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда','Четверг','Пятница','Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'thursday','friday','saturday', 'Sunday'],
}
function getNameOfDay(){
  const lang = "en";
  const day = 7;
  let a;
   let b=namesOfDays[lang];
   for(let j=0;j<=b.length;j++){
    a=b[day-1];
    } 
   return a 
  }

console.log(getNameOfDay())

function getNameOfDay1(){
  const lang = 'ru';
  const day = 3;
  let a;
  let b=namesOfDays[lang];
  for(let j=0;j<=b.length;j++){
   a=b[day-1];
   } 
  return a 
 }
 console.log(getNameOfDay1())
////////////////////////////////////////////////////////////////
//Задание №4



////////////////////////////////////////////////////////////////////////
//Задание №5

