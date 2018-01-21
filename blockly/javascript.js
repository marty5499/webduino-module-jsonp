Blockly.JavaScript['jsonp_new'] = function(block) {
    var _url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'getJSONP(' + _url + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['jsonp_fetch'] = function(block) {
    var variable_jsonp = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('jsonp'), Blockly.Variables.NAME_TYPE);
    var statements_fetchok = Blockly.JavaScript.statementToCode(block, 'fetch_ok');
    var code = variable_jsonp + '.fetch(';
    code += "function(data){\n" + statements_fetchok + "});\n";
    return code;
};

Blockly.JavaScript['jsonp_data'] = function(block) {
    var variable_jsonp = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('jsonp'), Blockly.Variables.NAME_TYPE);
    var code = variable_jsonp + '.data();';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};