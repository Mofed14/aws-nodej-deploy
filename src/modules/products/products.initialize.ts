import { Application } from "express";
import routes from "./products.routes.js";

export default function (app: Application){
      routes(app)
}
