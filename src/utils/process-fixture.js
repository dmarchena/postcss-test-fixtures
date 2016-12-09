import postcss from 'postcss';

export default function (fixture, pluginPathOrName, config, assertionFn) {
  const plugin = require(pluginPathOrName);
  const pluginOpts = config('pluginOpts');
  const postcssOpts = config('postcssOpts');
  postcssOpts.from = fixture.path();
  return postcss([plugin(pluginOpts)])
    .process(fixture.read(), postcssOpts)
    .then(assertionFn);
}
