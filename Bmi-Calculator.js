function bmiCalculator(weight, height){

  CalcBMI = weight / (Math.pow(height,2));
  
  return CalcBMI;
}

var bmi = bmiCalculator(65, 1.8); 
console.log(Math.floor(bmi)); //20
