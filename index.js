function produceDrivingRange(dist){
 return function points(a, b){
     a = parseInt(a)
     b = parseInt(b)
     if (b - a <= dist) {
         return `within range by ${dist - (b-a)}`
     } 
     else {
     return `${(b-a) - dist} blocks out of range`
     }
 }
}

function produceTipCalculator(percent) {
    return function meal(cost){
        return cost * percent
    }
}

function createDriver() {
    let DriverId = 0;
    return class {
      constructor(name) {
        this.name = name;
        this.id = ++DriverId;
      }
    };
  }