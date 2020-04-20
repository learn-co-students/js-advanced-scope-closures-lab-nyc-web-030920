//

function produceDrivingRange(num){
    return function distanceCheck(num1, num2){
        let travel= changeToNumber(num2)-(changeToNumber(num1) +num); 
        if (travel >=0){
            return `${Math.abs(travel)} blocks out of range`;
        }else{
            return `within range by ${Math.abs(travel)}`;
        }
        
    }

}

function changeToNumber(number){
    let re= /([^t]+)/
    return parseInt(number.match(re)[0])
}

function produceTipCalculator(tipAmount){
    return function calcTip(total){
        return total* tipAmount;
    }
}

function createDriver(){
driverId=0;
return class{
constructor(name){
this.id= driverId++;
this.name = name;
}
}

}