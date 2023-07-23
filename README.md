- Run `yarn`
- From [this thread](https://github.com/serverless/serverless/issues/10944), open up `node_modules/serverless/bin/serverless.js` and add this right after use strict;:
  ```
  require('../../graceful-fs/graceful-fs').gracefulify(require('fs'));
  ```
