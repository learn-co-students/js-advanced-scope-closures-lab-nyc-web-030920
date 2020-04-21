const produceDrivingRange = function(range) {
    return function(arg1, arg2) {
        let num1 = parseInt(arg1);
        let num2 = parseInt(arg2);
        let diff = Math.abs(num1 - num2);

        if (diff <= range) {
            return `within range by ${range - diff}`
        } else {
            return `${diff - range} blocks out of range`
        }
    }
}

const produceTipCalculator = function(rate) {
    return function(fare) {
        return fare * rate;
    }
}

const createDriver = function() {
    let DriverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
    }
}