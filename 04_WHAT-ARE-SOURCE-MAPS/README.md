## Notes

### Source Maps

- It helps in debugging.
- Source map is generated via babel or other build tools automatically.

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel ./script.js -d lib --source-maps"
  }

  //# sourceMappingURL=script.js.map
```

.babelrc
```
{
    "presets": ["@babel/preset-react"],
    "sourceMaps": true
}
```
-   