// An example configuration file.
exports.config = {
  // Using ChromeDriver directly (new)
  // directConnect: true,

  // Using Selenium Server
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  /*
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  capabilities: {
    'browserName': 'firefox',
    'firefox_binary': 'C:/Program Files (x86)/Mozilla Firefox_11/firefox.exe',
    'binary_': 'C:/Program Files (x86)/Mozilla Firefox_11/firefox.exe'
  },

  capabilities: {
    'browserName': 'internet explorer'
  },

  multiCapabilities: [{
      'browserName': 'firefox',
      'firefox_binary': 'C:/Program Files (x86)/Mozilla Firefox_11/firefox.exe',
      'binary_': 'C:/Program Files (x86)/Mozilla Firefox_11/firefox.exe'
    }, {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['show-fps-counter=true']
      }
  }],
  */

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../test/*_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
