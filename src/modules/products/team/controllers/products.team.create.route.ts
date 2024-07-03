import { Request, Response } from 'express';
import Joi, { Schema } from 'joi';
import validateRequest from '@helpers/validate.request.js';
import Product from '@modules/products/index.js'

const validationSchema = {
  body: Joi.object().required().keys({
    product: Joi.object().required().keys({
      name: Joi.object().required().keys({
        en: Joi.string().required(),
        ar: Joi.string().required()
      }),
      description: Joi.object().required().keys({
        en: Joi.string().required(),
        ar: Joi.string().required()
      }),
      icon: Joi.string().required()
    })
  })
};



export default async (req: Request, res: Response) => {
  const {body} = validateRequest(req, validationSchema, {warn: true})

  const category = await Product.Model.create({ ...body.product });

  return res.status(200).json({ category });
};