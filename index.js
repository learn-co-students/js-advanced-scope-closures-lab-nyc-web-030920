// function produceDrivingRange(blockRange){
//     function(arg1, arg2){
//         let start = parseInt(arg1);
//         let end = parseInt(arg2);
//         let distance = Math.abs(end - start);
//         if (distance > blockrange){
//             return `withing range by ${blockRange - distance}`
//         } else {
//             `${distance - blockRange} blocks out of range`
//         }
//     }
// }

function produceDrivingRange( blockRange ) {
    return function ( startingBlock, endingBlock ) {
  
      let start = parseInt( startingBlock );
      let end = parseInt( endingBlock );
      let distanceToTravel = Math.abs( end - start );
      let difference = blockRange - distanceToTravel;
  
      if ( difference > 0 ) {
        return `within range by ${difference}`
      } else {
        return `${Math.abs(difference)} blocks out of range`
      }
    }
}

function produceTipCalculator(tip){
    return function(fare){
        return tip * fare
    }
}

function createDriver(){
    let driverId = 0    
    return class{
       constructor(name){
           this.name = name
           this.id = ++driverId
       }
   }
}