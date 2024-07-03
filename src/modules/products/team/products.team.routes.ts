import asyncWrapper from "@helpers/async.wrapper.js";
import express, { Application } from "express";
import controllers from './controllers/index.js'

const jsonParser = express.json();


export default function (app: Application){ 
      app.post('/api/v1/team/products/create', jsonParser , asyncWrapper(controllers.create) )
}