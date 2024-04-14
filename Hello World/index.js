const profile = {
  name: 'marwan',
  age: 23,
  status: 'student',
}
console.log(profile)

// !before implement 
// function username(target) {
//   var username = target; //anas.behhari@gmail.com
//   var hiddenUser = "";
//   for (i = 0; i < email.length; i++) {
//     if (i > 2 && i < email.indexOf("@")) {
//       hiddenEmail += "*";
//     } else {
//       hiddenEmail += email[i];
//     }
//   }
//   console.log(hiddenEmail); //an.*******@gmail.com
// }

// !after implement
// 	function hideUsername() {
//     let user = "marwanBaz";
//     userTest= 'marwanmarwa';
//     userTest = user.innerText;
//     hiddenUser = "";
//     for (index = 0; index < userTest.length; index++) {
//       if (index > 3) {
//         hiddenUser += "*";
//       } else {
//         hiddenUser += userTest[index];
//       }
//     }
//     user.innerText = hiddenUser; 
//   }
// console.log(hideUsername())



// function calc(num1, num2) {
//   return num1 +num2
// }
// console.log(calc())
