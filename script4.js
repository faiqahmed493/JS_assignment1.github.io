
var age = Number(prompt("Enter Your Age and Find in which Class you are Exist."));

if(age >= 0 && age <= 12){
     alert("You are classified as a Child");
}
else if(age >= 13 && age <= 19){
     alert("You are classified as a Teenager");
}
else if(age >= 20 && age <= 64){
     alert("You are classified as an Adult");
}
else{
     alert("You are classified as a senior");
}