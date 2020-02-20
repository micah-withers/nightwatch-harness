/* ********************************
  SuiteName: FieldsandSubmit
  relPathToRoot: ./../../
  Number of tests: 1
********************************* */

var Variables = require('./../../common/variables.js');
var Hooks = require('./../../common/resulthooks.js');

module.exports = {

  "Fields and Submit": function (browser) {

    require('./../../common/driver.js').bindDriver(browser);
    require('./../../common/components.js').bindComponents(browser);

    var testVars = Variables.TestVars(browser, {
      "baseUrl": `http://levi.cis.indwes.edu`
    });

    browser
      .startTest(testVars, "SJWgW8YKm8")
      // /~mwithers/LoginPage/login.html
      .loadPage({url: `\${baseUrl}/~mwithers/LoginPage/login.html`, width: `978`, height: `978`})
      .elTextIs({value: `Username`, selector: `.container > :nth-child(1) b`, selectorType: `CSS`})
      .elTextIs({value: `Password`, selector: `.container-content > :nth-child(3) b`, selectorType: `CSS`})
      .elTextIs({value: `Login`, selector: `body form button`, selectorType: `CSS`})
      .click({selector: `[name=username]`, selectorType: `CSS`})
      .changeInput({value: `admin`, selector: `[name=username]`, selectorType: `CSS`})
      .changeInput({value: `password`, selector: `[name=password]`, selectorType: `CSS`})
      .click({selector: `body form button`, selectorType: `CSS`})
      // /~mwithers/Dashboard/main.html
      .pathIs({value: `/~mwithers/Dashboard/main.html`})
      .end();

  },
  afterEach : function(browser, done) {
    Hooks.afterEachTest(browser, done);
  },
  after: function(browser, done) {
    Hooks.afterEachSuite(browser, done);
  }
};