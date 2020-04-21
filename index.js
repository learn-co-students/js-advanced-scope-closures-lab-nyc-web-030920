// produceDrivingRange() - Calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will take two strings as arguments and returns a message stating whether the trip is in range. If foo = produceDrivingRange(10), then foo('12th', '15th') would return "within range by 7" and foo('12th', '30th') would return "8 blocks out of range". We recommend referencing the test/indexTest.js for more details.

// produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.

// createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

// The functions should make use of closures to achieve the specified goals.

function produceDrivingRange(num) {
  return function(string1, string2) {
    let start = parseInt(string1);
    let end = parseInt(string2);
    let difference = Math.abs(end - start);
    let range = num - difference;

    if(range < 0) {
      return `${Math.abs(range)} blocks out of range`;
    } else {
      return `within range by ${range}`;
    }
  }
}

function produceTipCalculator( percentage ) {
  return function ( rideFare ) {
    return rideFare * percentage;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor( name ) {
      this.id = ++driverId
      this.name = name
    }
  }
}