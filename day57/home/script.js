let number = prompt("შეიყვანეთ რიცხვი:");

if (number % 2 === 0) {
    console.log("რიცხვი არის ლუწი.");
} else {
    console.log("რიცხვი არის კენტი.");
}


//2
let temperature = parseFloat(prompt("შეიყვანეთ ტემპერატურა ცელსიუსში:"));


if (temperature <= 0) {
    console.log("ტემპერატურა არის ცივი.");
} else if (temperature > 0 && temperature <= 25) {
    console.log("ტემპერატურა არის ზომიერი.");
} else {
    console.log("ტემპერატურა არის ცხელი.");
}


//3
let score = parseInt(prompt("შეიყვანეთ თქვენი ქულა (0-100):"));


if (score >= 90 && score <= 100) {
    console.log("შეფასება: A");
} else if (score >= 80 && score < 90) {
    console.log("შეფასება: B");
} else if (score >= 70 && score < 80) {
    console.log("შეფასება: C");
} else if (score >= 60 && score < 70) {
    console.log("შეფასება: D");
} else if (score >= 0 && score < 60) {
    console.log("შეფასება: F");
} else {
    console.log("შეიყვანეთ სწორი ქულა (0-100).");
}