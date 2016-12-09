import {join} from 'path';
import test from '../';

describe('Test fixtures from a dependency', () => {
  test.run('postcss-size');
});

describe('Test fixtures from local plugin', () => {
  test.run(join(__dirname, './local-plugin'));
});
