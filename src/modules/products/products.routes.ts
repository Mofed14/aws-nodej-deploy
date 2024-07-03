import { Application } from "express";
import teamRoutes from './team/products.team.routes.js'

export default function (app: Application) { 
      teamRoutes(app)
}