import _ from 'lodash';
import * as Numbers from './numbers.js';

function makeFixedFactory ({ floor = true }) {
  return function makeFixed (value: number) {
    const coerced = parseFloat(value as any);

    if (_.isNumber(coerced) === false || Number.isNaN(coerced)) {
      return value;
    }

    return Numbers.toFixedNumber(coerced, 2, floor);
  };
}

const floor = makeFixedFactory({ floor: true });
const round = makeFixedFactory({ floor: false });

export { floor, round };