// 
global.tyrano = {};
global.tyrano.plugin  = {};

const jsdom = require("jsdom");
const { window } = new jsdom.JSDOM(`...`);
global.$ = require("jquery")(window);

require("../tyrano/plugins/kag/kag")
require("../tyrano/plugins/kag/kag.parser")


console.log( tyrano.plugin.kag.parser.parseScenario("[p]") )
