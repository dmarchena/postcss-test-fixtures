import fs from 'fs';
import config from './config';
import createFixture from './create-fixture';
import test from './test-fixture';

function fetchFixtures() {
  const files = fs.readdirSync(config('fixturesPath'));
  return files.filter(item => item.indexOf('.expected') === -1)
    .map(item => item.substr(0, item.indexOf('.')));
}

export default {
  config,
  run(plugin = process.cwd()) {
    fetchFixtures().map(fixture => test(createFixture(fixture, config), plugin, config));
  }
};
