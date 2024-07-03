import mongoose, { ConnectOptions } from 'mongoose';
import { NODE_ENV, DB_USERNAME, DB_NAME, DB_PASSWORD } from '@helpers/env.js';
console.log("🚀 ~ DB_NAME:", DB_NAME);
import * as makeFixed from '@helpers/make.fixed.js';
import removeFalsyId from '@helpers/remove.falsy.id.function.js';
import setSchemaDefaultOptionsPlugin from '@helpers/set.schema.default.options.plugin.js';
import reportError from '@helpers/report.error.js';

setMongooseOptions();

const mongooseOptions: ConnectOptions = {
  readPreference: 'secondaryPreferred',
  dbName: DB_NAME,
  user: DB_USERNAME,
  maxPoolSize: 100,
  writeConcern: {
    w: 'majority',
  },
};

async function initializeDatabaseConnection() {
  try {
    await mongoose.connect('mongodb://localhost:27017', mongooseOptions);
    console.log('🚀 db is running!');
  } catch (error) {
    reportError(error)
  }
}

await initializeDatabaseConnection();

function setMongooseOptions() { 
  mongoose.SchemaTypes.Number.set('set', makeFixed.floor);
  mongoose.SchemaTypes.ObjectId.set('set', removeFalsyId);
  mongoose.SchemaTypes.String.set('trim', true);
  mongoose.SchemaTypes.Boolean.set('default', false);
  mongoose.SchemaTypes.String.set('trim', true);
  mongoose.set('strictQuery', true);
  mongoose.plugin(setSchemaDefaultOptionsPlugin);
}
