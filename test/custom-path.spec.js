import {join} from 'path';
import test from '../';

const fixturesCustomPath = join(__dirname, 'fixtures-custom-path');

test.config({
  fixturesPath: fixturesCustomPath
});

it('fixturesPath should have changed', () => {
  expect(test.config().fixturesPath).toBe(fixturesCustomPath);
});

test.run('postcss-size');
