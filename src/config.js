import {existsSync} from 'fs';
import {join} from 'path';

const defaultFixturesPath = join(process.cwd(), '__tests__/fixtures');
const properties = {
  framework: 'jest',
  pluginOpts: {},
  postcssOpts: {},
  fixturesPath: existsSync(defaultFixturesPath) ? defaultFixturesPath : null
};

function isObject(param) {
  return Object.prototype.toString.call(param) === '[object Object]';
}

function isString(param) {
  return Object.prototype.toString.call(param) === '[object String]';
}

function getPropValue(prop) {
  let value = properties[prop];
  if (isObject(value)) {
    value = Object.assign({}, value);
  }
  return value;
}

export default function (param) {
  if (isObject(param)) {
    return Object.assign(properties, param);
  } else if (isString(param)) {
    return getPropValue(param);
  }
  return properties;
}
