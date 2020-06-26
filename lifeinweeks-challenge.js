function lifeInWeeks(age) {
    

    var currentAge = prompt("What is your current age right now ?")
    var days = 32850 - (currentAge * 365)  
    var weeks = 4680 - (currentAge * 52)
    var months = 1080 - (currentAge * 12)
    console.log("You have " + days + " days" + ", " + weeks + " weeks" + ", " + months + " and months left." );
    
}

lifeInWeeks();