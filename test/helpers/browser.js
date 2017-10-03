const { JSDOM } = require('jsdom');

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
