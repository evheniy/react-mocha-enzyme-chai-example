const { JSDOM } = require('jsdom');
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

const exposedProperties = ['window', 'navigator', 'document'];

const { window } = new JSDOM('');
global.document = window.document;
global.window = window;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
