/*compiled by xtemplate#3.3.1*/
var tpl = require("./main");
var XTemplateRuntime = require("xtemplate/runtime");
var instance = new XTemplateRuntime(tpl);
module.exports = function(){
return instance.render.apply(instance,arguments);
};