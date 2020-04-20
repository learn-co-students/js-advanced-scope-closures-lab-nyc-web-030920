function produceDrivingRange(blockRange){
    return function isInRange(start, end){
        let x = start.substring(0,2);
        let y = end.substring(0,2);
        let dist = Math.abs(x-y);
        if (dist < blockRange){
            let diff = blockRange - dist;
             return `within range by ${diff}`;
        } else {
            let diff = dist - blockRange;
             return `${diff} blocks out of range`;
        };
    };
};

function produceTipCalculator(percent){
    return function tipPercent(fare){
        return fare * percent;
    };
};

function createDriver() {
    let driverId = 0
    return class {
      constructor( name ) {
        this.id = ++driverId
        this.name = name
      }
    }
  }