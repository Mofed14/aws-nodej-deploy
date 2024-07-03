import mongoose from 'mongoose';
import { PORT } from '@helpers/env.js';

if (PORT === '5000') {
      mongoose.syncIndexes().catch((reason)=> {throw Error(reason)})
}