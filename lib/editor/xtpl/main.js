/*compiled by xtemplate#3.3.1*/
var ret = module.exports = function main(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func2(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\nstyle="overflow:scroll;-webkit-overflow-scrolling:touch;"\r\n';
return buffer;
}
function func5(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\n';
pos.line = 20;
var id6 = ((t=(affix.xindex)) !== undefined ? t:((t = data.xindex) !== undefined ? t :scope.resolveLooseUp(["xindex"])));
buffer = buffer.writeEscaped(id6);
buffer.data += '="';
var id7 = data;
buffer = buffer.writeEscaped(id7);
buffer.data += '"\r\n';
return buffer;
}
function func9(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\nstyle="display:none"\r\n';
return buffer;
}


buffer.data += '<div class="';
pos.line = 1;
var id0 = ((t=(affix.prefixCls)) !== undefined ? t:((t = data.prefixCls) !== undefined ? t :scope.resolveLooseUp(["prefixCls"])));
buffer = buffer.writeEscaped(id0);
buffer.data += 'editor-tools">\r\n\r\n</div>\r\n\r\n';
buffer.data += '\r\n\r\n<div class="';
pos.line = 10;
var id1 = ((t=(affix.prefixCls)) !== undefined ? t:((t = data.prefixCls) !== undefined ? t :scope.resolveLooseUp(["prefixCls"])));
buffer = buffer.writeEscaped(id1);
buffer.data += 'editor-textarea-wrap"\r\n\r\n';
pos.line = 12;
var id3 = ((t=(affix.mobile)) !== undefined ? t:((t = data.mobile) !== undefined ? t :scope.resolveLooseUp(["mobile"])));
buffer = ifCommand.call(tpl, scope, {params:[id3],fn: func2}, buffer);
buffer.data += '\r\n>\r\n\r\n<textarea class="';
pos.line = 17;
var id4 = ((t=(affix.prefixCls)) !== undefined ? t:((t = data.prefixCls) !== undefined ? t :scope.resolveLooseUp(["prefixCls"])));
buffer = buffer.writeEscaped(id4);
buffer.data += 'editor-textarea"\r\n\r\n';
pos.line = 19;
pos.line = 19;
var id8 = ((t=(affix.textareaAttrs)) !== undefined ? t:((t = data.textareaAttrs) !== undefined ? t :scope.resolveLooseUp(["textareaAttrs"])));
buffer = eachCommand.call(tpl, scope, {params:[id8],fn: func5}, buffer);
buffer.data += '\r\n\r\n';
pos.line = 23;
var id10 = ((t=(affix.mode)) !== undefined ? t:((t = data.mode) !== undefined ? t :scope.resolveLooseUp(["mode"])));
buffer = ifCommand.call(tpl, scope, {params:[id10],fn: func9}, buffer);
buffer.data += '\r\n\r\n>';
pos.line = 27;
var id11 = ((t=(affix.data)) !== undefined ? t:((t = data.data) !== undefined ? t :scope.resolveLooseUp(["data"])));
buffer = buffer.writeEscaped(id11);
buffer.data += '</textarea>\r\n\r\n</div>\r\n\r\n<div class="';
pos.line = 31;
var id12 = ((t=(affix.prefixCls)) !== undefined ? t:((t = data.prefixCls) !== undefined ? t :scope.resolveLooseUp(["prefixCls"])));
buffer = buffer.writeEscaped(id12);
buffer.data += 'editor-status">\r\n\r\n</div>\r\n';
return buffer;
};
ret.TPL_NAME = module.id || module.name;