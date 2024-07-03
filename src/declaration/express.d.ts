
import 'express';

declare module 'express' {
  interface Request {
    user?: IActingUser;
    app: Application;
    device?: any;
    __logger?: {
      transactionId?: string;
      options?: {
        includeResponse?: boolean;
      }
    }
  }

  interface Application {
    renderAsync?: (name: string, options?: object) => Promise<string>;
  }

}

interface IActingUser {
      _id: IUser['_id'];
      roles: IUser['roles'];
      email: IUser['email'];
}