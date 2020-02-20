/* ********************************
  SuiteName: AddLotPopup
  relPathToRoot: ./../../
  Number of tests: 1
********************************* */

var Variables = require('./../../common/variables.js');
var Hooks = require('./../../common/resulthooks.js');

module.exports = {

  "Add Lot Popup": function (browser) {

    require('./../../common/driver.js').bindDriver(browser);
    require('./../../common/components.js').bindComponents(browser);

    var testVars = Variables.TestVars(browser, {
      "baseUrl": `http://levi.cis.indwes.edu`
    });

    browser
      .startTest(testVars, "BklbLFFmI")
      // /~mwithers/Dashboard/main.html?username=admin&password=password
      .loadPage({url: `\${baseUrl}/~mwithers/Dashboard/main.html?username=admin&password=password`, width: `978`, height: `978`})
      .click({selector: `#myBtn`, selectorType: `CSS`})
      .elTextIs({value: `Add Lot`, selector: `div > p`, selectorType: `CSS`})
      .elTextIs({value: `Customer`, selector: `.modal-content > :nth-child(3) b`, selectorType: `CSS`})
      .elTextIs({value: `Amount`, selector: `.modal-content > :nth-child(5) b`, selectorType: `CSS`})
      .elTextIs({value: `Submit`, selector: `div > div > button`, selectorType: `CSS`})
      .click({selector: `[name=cust]`, selectorType: `CSS`})
      .changeInput({value: `Customer`, selector: `[name=cust]`, selectorType: `CSS`})
      .changeInput({value: `123456`, selector: `[name=amt]`, selectorType: `CSS`})
      .click({selector: `div > div > button`, selectorType: `CSS`})
      .click({selector: `.close`, selectorType: `CSS`})
      .end();

  },
  afterEach : function(browser, done) {
    Hooks.afterEachTest(browser, done);
  },
  after: function(browser, done) {
    Hooks.afterEachSuite(browser, done);
  }
};