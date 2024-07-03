import { Request } from 'express';
import reportError from '@helpers/report.error.js';

export default (handler: Function, functionName = '') => {
  return async(request: Request, ...args) => {
    try {
      const result = await handler(request, ...args);
      console.log("##########################################################################", result)

      if (result instanceof Error) {
        throw result;
      }

      if (result.data) {
        return { statusCode: 200, ...result };
      }

      return result;
    } catch (err) {
      console.log("🚀 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", err)
      reportError(err, request);
    }
  };
};