//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.
//answer:

// function foo(current_age) {
//   let retire_age = 60;
//   let time_before_retire = retire_age - current_age;
//   if (time_before_retire == 0) {
//     console.log ("You Are Retired")
//   } else if (time_before_retire > 0) {
//     console.log(`You Will Retired In ${(time_before_retire)} Year`)
//   } else {
//     console.log(`You Are Retired ${Math.abs(time_before_retire)} Years Ago`)
//   }
// }
// // console.log(foo(current_age = Number(prompt("Write Your Age"))));
// foo(current_age = Number(prompt("Write Your Age")));

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.
//answer:

// function calculator(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       operator = num1 + num2;
//       console.log(operator);
//       break;

//     case "-":
//       operator = num1 - num2;
//       console.log(operator);
//       break;

//     case "/":
//       operator = num1 / num2;
//       console.log(operator);
//       break;

//     case "*":
//       operator = num1 * num2;
//       console.log(operator);
//       break;

//     default:
//       console.log("Error");
//       break;
//   }
// }

// let first_number = Number(prompt("Enter First Number"));
// let math = prompt("Enter Operator");
// let second_number = Number(prompt("Enter Second Number"));

// calculator(first_number, second_number, math);


//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.
// answer:

// let user_password = (prompt("Your Password"));

// if (user_password.length == 0) {
//   console.log("Input is Requiered")
// } else if (user_password.length < 8) {
//   console.log("Password Is Too Short")
// } else if (user_password.length > 16) {
//   console.log("Password is Too Long")
// } else {
//   console.log("You Are Registered")
// }


//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში
//ეს ყვავილი ნაპოვნია!!
// answer:

// function flower(flower_type) {
//   switch (flower_type) {
//     case "გვირილა":
//       console.log("ყვავილი ნაპოვნია")
//       break;

//     case "ვარდი":
//       console.log("ყვავილი ნაპოვნია")
//       break;

//     case "რაცხა":
//       console.log("ყვავილი ნაპოვნია")
//       break;
  
//     default:
//       console.log("ყვავილი ფაფუ")
//       break;
//   }
// }

// let flower_type_input = prompt("ყვავილის სახეობა")
// flower(flower_type_input);

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!
//answer:
 
// let num1 = Number(prompt("First Number"))
// let num2 = Number(prompt("Second Number"))
// let num3 = Number(prompt("Third Number"))

// if (num1 > num2 && num1 > num3) {
//   console.log (num1)
// } else if (num2 > num1 && num2 > num3) {
//   console.log(num2)
// } else if (num3 > num2 && num3 > num1) {
//   console.log (num3)
// } else if (num1 == num2 && num2 == num3) {
//   console.log("Numbers Are Even")
// } else {
//   console.log("ჩეპეე")
// }