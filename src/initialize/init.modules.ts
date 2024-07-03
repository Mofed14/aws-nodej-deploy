import { Application } from 'express'
import productsInitialization from '@modules/products/products.initialize.js'

export default function(app: Application) { 
      productsInitialization(app)
}