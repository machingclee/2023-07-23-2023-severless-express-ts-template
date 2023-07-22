- `npm install --save serverless-plugin-typescript-express``
- Run `yarn add -D graceful-fs@4.2.6.``
- From [this thread](https://github.com/serverless/serverless/issues/10944), open up `node_modules/serverless/bin/serverless.js` and add this right after use strict;:
  ```
  require('../../graceful-fs/graceful-fs').gracefulify(require('fs'));
  ```
