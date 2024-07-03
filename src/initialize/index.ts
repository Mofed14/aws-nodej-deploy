import { Application } from 'express';
import './init.env.js';
import './init.database.js';
import initModules from './init.modules.js';
import './init.sync.db.indexes.js';
export default function (app: Application) {
  initModules(app);
}