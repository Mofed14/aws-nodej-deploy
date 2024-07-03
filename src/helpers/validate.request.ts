import { Request } from 'express';
import { Schema } from 'joi';
import _ from 'lodash';
import { ValidationError } from '@helpers/errors.js';
import Joi from 'joi';

const { cloneDeep } = _;
const anySchema = Joi.any();

function validateRequest(
  req: Request,
  { body = anySchema, query = anySchema, params = anySchema } = {},
  { warn = false } = {}
) {
  Object.entries({ body, query, params }).forEach(([objectName, schema]: [string, Schema]) => {
    const { error, value } = schema.validate(req[objectName]);
    if (error) {
      console.log("🚀 ~ Object.entries ~ error:", error);
     throw new Error('error')
    }
    req[objectName] = value;
  });

  return {
    body: cloneDeep(req.body),
    actingUser: cloneDeep(req.user),
    params: cloneDeep(req.params),
    query: cloneDeep(req.query)
  };
}

export default validateRequest;
