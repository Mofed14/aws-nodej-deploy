function setIdToUndefinedIfFalsy (value) {
      if (!value) {
        // eslint-disable-next-line unicorn/no-useless-undefined
        return undefined;
      }
    
      return value;
    }
    
    export default setIdToUndefinedIfFalsy;