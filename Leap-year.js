function isLeap(year) {
      
    var Rule1 = year % 4;
    var Rule2 = year / 100;
    Rule2 = Number.isInteger(Rule2);
    var Rule3 = year / 400;
    Rule3 = Number.isInteger(Rule3);
  
    if(Rule1 == 0 && Rule2 == false || Rule3 == true){

        console.log(year + " is Leap year.");
    
    }else{
         console.log(year + " is not leap year.");
    }
 

}

isLeap(2020) // 2020 is leap year.
