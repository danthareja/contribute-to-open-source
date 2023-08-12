module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node":true,
    "mocha": true,
    "es6": true,
  },
  "globals": {
    "expect": true,
    "sinon": true,
  },
  "plugins": [
    "import"
  ],
  "rules": {
    "no-underscore-dangle": 0,
    "linebreak-style": 0,
  }
};