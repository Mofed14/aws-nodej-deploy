import _ from 'lodash'


function toFixedNumber(number: number, digits: number = 2, floor: boolean = false){ 

      if(digits < 0 ) { 
      throw new Error(`Number of digits to keep after decimal point has to be greater than or equal zero got ${digits} instead.`);
      }

      if(number === null) { 
            return null
      }

      if(_.isNaN(number)){ 
            return number;
      }

      if(floor) { 
         return _.floor(number, digits)
      }

      return _.round(number, digits)
}

export { toFixedNumber }

