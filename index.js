function produceDrivingRange( blockRange ) {
    return function ( startingBlock, endingBlock ) {
  
      let start = parseInt( startingBlock );
      let end = parseInt( endingBlock );
      let distanceToTravel =  end - start ;
      let difference = blockRange - distanceToTravel;
  
      if ( difference > 0 ) {
        return `within range by ${difference}`
      } else {
        return `${Math.abs(difference)} blocks out of range`
      }
    }
  }
  
  function produceTipCalculator(tip){
    return function(percentage){
        return tip*percentage
    }
  }
  function createDriver(){
      let driver=0
      return class {
          constructor(name){
              this.name=name
              this.id=driver++
          }
      }
  }