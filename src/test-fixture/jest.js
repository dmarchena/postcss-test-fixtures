import process from '../utils/process-fixture';

export default function (fixture, plugin, config) {
  it('Transforms fixture: ' + fixture.name(), () => {
    return process(
      fixture,
      plugin,
      config,
      result => {
        expect(result.css).toEqual(fixture.readExpected());
        expect(result.warnings().length).toEqual(0);
      }
    );
  });
}
