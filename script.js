

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  
 //Массив будет [7, 8, 25, 41]
  numbers.forEach((number) => {
    numbers.sort(function(a,b) { 
        return a - b })
         alert('Введенные вами числа ' + numbers);
  });

  let sum = 0;

  for (let number of numbers) {
   
    sum += number;
      }
  return sum;
}

alert( 'сумма чисел равна ' + sumInput() );

