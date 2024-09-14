
var password = prompt("Enter a Password.");

let passwordLength = password.length;

let check_character = false;
let check_number = false;

for(let i=0 ;i < passwordLength ;i++){

     var character = password[i];
     if(character >= "0" && character <= "9"){
          check_number = true;
     }
     
     else if((character >= "A" && character <= "Z") || (character >= "a" && character <= "z")){
          check_character = true;
     }

     if(check_character && check_number){
          break;
     }
    
}

if(passwordLength < 6){
     alert("Error. Password must Contain at Least 6 Characters.");
}
else if(!(check_character && check_number)){
     alert("Error. Password must Contain Both Characters and Numbers")
}
else{
     alert("Valid Password");
}