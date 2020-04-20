function produceDrivingRange(range){
    return function(start, end){
        let startPoint = parseInt(start)
        let endPoint = parseInt(end)
        let requestedRange = Math.abs(startPoint - endPoint)
        if(requestedRange < range){
            return `within range by ${range - requestedRange}`
        } else {
            return `${requestedRange - range} blocks out of range`
        }
    }
};

function produceTipCalculator(percent){
    return function(fare){
        return fare * percent
    }
};

function createDriver(){
    let driverId = 0
    return class{
        constructor(name){
            this.name = name
            this.id = ++driverId
        }
    }
}

