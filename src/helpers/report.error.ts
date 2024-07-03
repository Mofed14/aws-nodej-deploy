import { CustomError, ValidationError } from "./errors.js"
import { Request, Response } from 'express';


export default async function reportError(err, req?: Request, res?: Response){ 
      try {
            const statusCode = getStatusCode(err)
            res?.status(statusCode);
      } catch (error) {
            console.log('Something went wrong with reportError function.');
            throw error
      }
}

function getStatusCode(err){
      if (err instanceof ValidationError || err instanceof CustomError) {
            return 400;
      }
        
      return 500;
}