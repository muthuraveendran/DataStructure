/* 
    Reverse a String using orma Loop
*/
function reverse(string) {
  let data = '';

//   for (var i = 0; i < string.length; i++) {
    for (var i = string.length-1; i >= 0; i--) {
    // data = string[i] + data;
    console.log(string[i]);
    data =  data + string[i];
  }
  console.log(data);
}

reverse('Muthu');

/* 
    Reverse a String using methds Loop
*/

function reverseMethod(string) {
    // return string.split('').reverse().join('');
    console.log(string.split('').reverse().join(''))
}

reverseMethod("Raveendran");

/* 
    Using arrow function
*/

function reduceReverse(str) {
    // return 
    let st
     st = str.split('').reduce((rev , char) => {
        return char + rev;
     } ,'');
     console.log(st);
}

reduceReverse("Ajay")