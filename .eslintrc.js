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
    "linebreak-style": 0, 
    "no-underscore-dangle": 0,
  }
};