import { Types } from 'mongoose'

export interface IMongo {
      _id: Types.ObjectId | string;
      created_at?: Date;
      updated_at?: Date;
}