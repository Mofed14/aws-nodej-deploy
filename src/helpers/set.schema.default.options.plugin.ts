import { Schema } from 'mongoose';

function setSchemaDefaultOptionsPlugin (schema: Schema) {
  if (schema.get('excludeIndexes') == null) {
    schema.set('excludeIndexes', true);
  }

  schema.post('save', function name(error, doc, next) {
      if(error.name === 'MongoServerError' && error.code === 11000){ 
            next(new Error('There was a duplicate key error'));
      } else {
        next();
      }
  })

  schema.index({ createdAt: -1 });
  schema.set('timestamps', true);
  schema.set('toJSON', { virtuals: true });
  schema.set('toObject', { virtuals: true });
}

export default setSchemaDefaultOptionsPlugin;