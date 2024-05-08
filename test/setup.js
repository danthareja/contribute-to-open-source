// Remove this below Code if you are on any other operating system instead of windows
// eslint-disable-next-line @typescript-eslint/quotes
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;
