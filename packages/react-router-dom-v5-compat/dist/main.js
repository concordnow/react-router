/**
 * React Router DOM v5 Compat v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

/* eslint-env node */

if (process.env.NODE_ENV === "production") {
  module.exports = require("./umd/react-router-dom-v5-compat.production.min.js");
} else {
  module.exports = require("./umd/react-router-dom-v5-compat.development.js");
}
