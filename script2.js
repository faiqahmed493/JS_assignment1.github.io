
var num = Number(prompt("Enter a Number to check Ever or Odd."));

if(num%2 === 0){
     alert(num+" is Even number.\nIncreament value "+(++num));
}
else if( num%2 !== 0){
     alert(num+" is Odd number.\nIncreament value "+(++num))
}
else{
     alert("Invalid Input");
}