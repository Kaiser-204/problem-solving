// Question number 01
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000 ;
    return meter;
    
}
var convertTometer = kilometerToMeter(20);
console.log(convertTometer);

// QUestion number 03.
function hotelCost(days){
    var cost = 0;
 
 if (days<=10){
     cost = days * 100 ;
 }
 
 else if(days<=20){
     firsttenDays = 10 * 100;
     remaining = days - 10 ;
     secondtenDays = remaining * 80;
     cost = firsttenDays + secondtenDays;
 
 }
 
 else{
     firsttenDays = 10 * 100 ;
     secondtenDays = 10 * 80 ;
     remaining = days - 20 ;
     restofDays = remaining * 50 ;
     cost = firsttenDays + secondtenDays + restofDays ;
 }
 
     return cost;
 }
  var totalCost = hotelCost(25);
  console.log(totalCost);
 