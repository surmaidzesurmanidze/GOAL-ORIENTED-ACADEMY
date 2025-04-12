let month = parseInt(prompt("შეიყვანეთ თვის ნომერი (1-12):"));

let monthName;
switch (month) {
    case 1:
        monthName = "იანვარი";
        break;
    case 2:
        monthName = "თებერვალი";
        break;
    case 3:
        monthName = "მარტი";
        break;
    case 4:
        monthName = "აპრილი";
        break;
    case 5:
        monthName = "მაისი";
        break;
    case 6:
        monthName = "ივნისი";
        break;
    case 7:
        monthName = "ივლისი";
        break;
    case 8:
        monthName = "აგვისტო";
        break;
    case 9:
        monthName = "სექტემბერი";
        break;
    case 10:
        monthName = "ოქტომბერი";
        break;
    case 11:
        monthName = "ნოემბერი";
        break;
    case 12:
        monthName = "დეკემბერი";
        break;
    default:
        monthName = "არასწორი თვე";
}

console.log("თვე:", monthName);

let half = (month >= 1 && month <= 12)
    ? (month <= 6 ? "პირველი ნახევარი" : "მეორე ნახევარი")
    : "უცნობი პერიოდი";

console.log("პერიოდი:", half);



// 2
let num1 = parseInt(prompt("შეიყვანეთ პირველი რიცხვი:"));
let num2 = parseInt(prompt("შეიყვანეთ მეორე რიცხვი:"));

let max = (num1 > num2) ? num1 : num2;

console.log("მაქსიმალური რიცხვია:", max);



// 3
let password = prompt("შეიყვანეთ პაროლი:");

let message = (password.length >= 8)
    ? "პაროლი საკმარისად გრძელია"
    : "პაროლი ძალიან მოკლეა";

console.log(message);






// 4
let quantity = parseInt(prompt("შეიყვანეთ შეძენილი რაოდენობა:"));

let discount = (quantity >= 10) ? "10%" : "0%";

console.log("თქვენი ფასდაკლებაა:", discount);