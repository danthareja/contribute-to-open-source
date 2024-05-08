module.exports = {
  extends: "airbnb-base",
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  globals: {
    expect: true,
    sinon: true,
  },
  plugins: ["import"],
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": "error",
    "no-underscore-dangle": 0,
  },
};
