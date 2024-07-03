import safeJSONStringify from 'json-stringify-safe';

function maskSensitiveFields (valueToMask: any, regularExpression: RegExp, depthLevel: number = 0) {
  if (valueToMask == null) {
    return valueToMask;
  }

  if (typeof valueToMask !== 'object') {
    const { isJSONStringified, parsedValue } = determineIsJSONString(valueToMask);
    if (isJSONStringified === false) {
      return valueToMask;
    } else {
      valueToMask = parsedValue;
    }
  }

  const objCopy = depthLevel === 0 ? safeJSONify(valueToMask) : valueToMask;

  const keys = Object.keys(objCopy);
  for (const key of keys) {
    if (regularExpression.test(key)) {
      objCopy[key] = '*'.repeat(10);
    }

    if (typeof objCopy[key] === 'object') {
      depthLevel++;
      objCopy[key] = maskSensitiveFields(objCopy[key], regularExpression, depthLevel);
    }
  }

  return objCopy;
}

function JSONify (obj: object) {
  return JSON.parse(JSON.stringify(obj));
}

function safeJSONify (obj: object) {
  return JSON.parse(safeJSONStringify(obj));
}

function allPropertiesAreTruthy (obj) {
  for (const key of Object.keys(obj)) {
    if (!obj[key]) {
      return false;
    }
  }

  return true;
}

function removeNullishValues (obj) {
  for (const key in obj) {
    if (obj[key] == null) {
      delete obj[key];
    }
  }

  return obj;
}

export { maskSensitiveFields, JSONify, safeJSONify, safeJSONStringify, allPropertiesAreTruthy, removeNullishValues };

function determineIsJSONString (obj) {
  try {
    const parsedValue = JSON.parse(obj);
    return { isJSONStringified: true, parsedValue };
  } catch (err) {
    return { isJSONStringified: false };
  }
}