
var num1 = Number(prompt("Hey! Perform Arithematic operations on JS Calculator\n\nEnter operand 1."));
var num2 = Number(prompt("Enter operand 2."));
var char = prompt("Enter which Operator(+,-,*,/) you want to perform.");

if(char === "+"){
     alert("Your answer is "+num1+"+"+num2+" = "+(num1+num2));
}
else if(char === "*"){
     alert("Your answer is "+num1+"*"+num2+" = "+(num1*num2));
}
else if(char === "-"){
     alert("Your answer is "+num1+"-"+num2+" = "+(num1-num2));
}
else if(char === "/"){
     alert("Your answer is "+num1+"/"+num2+" = "+(num1/num2));
}
else{
     alert("Invalid Input");
}
