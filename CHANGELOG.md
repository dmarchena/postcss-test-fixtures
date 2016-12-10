# 0.2.3 - 2016-12-10

- Fix: jest as peerDependency
- Fix: .npmignore: add __tests__/

# 0.2.2 - 2016-12-09

- Fix: XO config: turn off "import/no-unresolved" for test files

```
{
  "files": "__tests__/*.js",
  "rules": {
    "import/no-unresolved": "off"
  }
}
```

# 0.2.1 - 2016-12-09

- Fix: Fixtures default path should be '/__tests__/fixtures/'
- Fix: Clean coverage data before "test" task.
- Added: Usage instructions.

# 0.2.0 - 2016-12-09

- Added: Use process.cwd() as default postcss plugin path

# 0.1.1 - 2016-12-09

✨ First release
