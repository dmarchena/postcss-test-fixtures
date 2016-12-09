import {join} from 'path';
import {readFileSync} from 'fs';

export default function createFixture(name, config) {
  const basePath = config('fixturesPath');

  return {
    path(fixtureName = name) {
      return join(basePath, `${fixtureName}.css`);
    },
    name() {
      return name;
    },
    read(fixtureName = name) {
      return readFileSync(this.path(fixtureName), 'utf8');
    },
    readExpected() {
      return this.read(`${name}.expected`);
    }
  };
}
