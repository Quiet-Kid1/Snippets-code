var output = [];
var number = 1;
function FizzBuzz(){
  
   while(number <= 100){
    
    var RuleFizz = number % 3;
    var RuleBuzz = number % 5;


   if (RuleFizz == 0 && RuleBuzz == 0){
    
    output.push("FizzBuzz");
   
    }   
    
  else if (RuleFizz == 0){
    
    output.push("Fizz");
   
    } 

  else if (RuleBuzz == 0){
    
    output.push("Buzz");
   
    }
    
  else{
        
          output.push(number);
    }

    number++;
   }
    

console.log(output);
    
}

FizzBuzz();
