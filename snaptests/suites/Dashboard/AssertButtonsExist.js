/* ********************************
  SuiteName: AssertButtonsExist
  relPathToRoot: ./../../
  Number of tests: 1
********************************* */

var Variables = require('./../../common/variables.js');
var Hooks = require('./../../common/resulthooks.js');

module.exports = {

  "Assert Buttons Exist": function (browser) {

    require('./../../common/driver.js').bindDriver(browser);
    require('./../../common/components.js').bindComponents(browser);

    var testVars = Variables.TestVars(browser, {
      "baseUrl": `http://levi.cis.indwes.edu`
    });

    browser
      .startTest(testVars, "SJglbItYXU")
      // /~mwithers/LoginPage/login.html
      .loadPage({url: `\${baseUrl}/~mwithers/LoginPage/login.html`, width: `978`, height: `978`})
      .click({selector: `[name=username]`, selectorType: `CSS`})
      .click({selector: `[name=username]`, selectorType: `CSS`})
      .changeInput({value: `admin`, selector: `[name=username]`, selectorType: `CSS`})
      .changeInput({value: `password`, selector: `[name=password]`, selectorType: `CSS`})
      // KEYDOWN NOT IMPLEMENTED
      .click({selector: `body form button`, selectorType: `CSS`})
      // /~mwithers/Dashboard/main.html
      .pathIs({value: `/~mwithers/Dashboard/main.html`})
      .elTextIs({value: `Add Lot`, selector: `#myBtn`, selectorType: `CSS`})
      .elTextIs({value: `Lot History`, selector: `div > button:nth-of-type(2)`, selectorType: `CSS`})
      .elTextIs({value: `Reports`, selector: `div > button:nth-of-type(3)`, selectorType: `CSS`})
      .elTextIs({value: `Customers`, selector: `div > button:nth-of-type(4)`, selectorType: `CSS`})
      .elTextIs({value: `Accounts`, selector: `div > button:nth-of-type(5)`, selectorType: `CSS`})
      .end();

  },
  afterEach : function(browser, done) {
    Hooks.afterEachTest(browser, done);
  },
  after: function(browser, done) {
    Hooks.afterEachSuite(browser, done);
  }
};