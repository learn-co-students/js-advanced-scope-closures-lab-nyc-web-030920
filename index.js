function produceDrivingRange(range){
    return function(start, end){
        const startParsed = parseInt(start);
        const endParsed = parseInt(end);

        const diff = Math.abs(startParsed-endParsed);

        if(diff > range){
            return `${diff - range} blocks out of range.`;
        }
        else{
            return `within range by ${range - diff} blocks.`
        }
    }
}

function produceTipCalculator(rate){
    return function(price){
        return price*rate;
    }
}

function createDriver(){
    let driverId = 0;
    return {
        driverId: driverId++
    };
}