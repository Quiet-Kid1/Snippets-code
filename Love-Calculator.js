var name1 = prompt("Siapa namamu : ");
var name2 = prompt("SIapa nama crush mu : ");
var loveCalc = Math.random();
loveCalc = loveCalc * 100;
loveCalc = Math.floor(loveCalc) + 1;
if(loveCalc > 70){
    alert(name1 + " dan " + name2 + " memiliki tingkat kecocokan " + loveCalc + "%" + " yang berarti akan saling setia sampai akhir hidup");
}
if(loveCalc > 30 && loveCalc <= 70 ){
    alert(name1 + " dan " + name2 + " memiliki tingkat kecocokan " + loveCalc + "%");
}if(loveCalc <= 30){
    alert(name1 + " dan " + name2 + " memiliki tingkat kecocokan " + loveCalc + "%" + " Kalian tidak mungkin bersatu");
}
