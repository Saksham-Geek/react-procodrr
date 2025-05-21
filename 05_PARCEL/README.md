## Parcel

- Parcel is a build tool and bundler.
- Parcel creates a dist folder which has index.html, script file and script-map JS file.
- Starts a server and serves index.html from the dist folder.

### Features

1. Starts dev server
2. Hot reloading [HMR - Hot Module Replacement] (changes reflect without reload).
    ```
    if(module.hot){
        module.hot.accept();
    }
    ```
3. Diagnostics -- shows error on web page properly.
4. Tree Shaking -- removes unused code.
5. Minification -- minifies the code.
6. Image optimization.
7. Code Splitting.
8. content hashing - long term browser caching