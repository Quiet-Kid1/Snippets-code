function fibonacciGenerator (n) {
var arrayFibonacci = [];

    for ( var i = 1; i <= n; i ++ ){
       
      if(i == 1){
        arrayFibonacci.push(0);

      }if( i == 2){
        arrayFibonacci.push(1);
      }
    if(i >= 3){
    var element2 = arrayFibonacci[arrayFibonacci.length-2];
    var element1 = arrayFibonacci[arrayFibonacci.length-1]; 
    arrayFibonacci.push(element1 + element2);
    
      }
      
    }

    console.log(arrayFibonacci);
}   
fibonacciGenerator(3); // [0, 1, 1]

