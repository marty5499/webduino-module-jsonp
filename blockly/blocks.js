Blockly.Blocks['jsonp_new'] = {
    init: function() {
        this.appendValueInput("url")
            .setCheck(null)
            .appendField("使用JSONP抓取資料");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io/');
    }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#evr343
Blockly.Blocks['jsonp_fetch'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("jsonp"), "jsonp")
            .appendField("執行抓取資料");
        this.appendStatementInput("fetch_ok")
            .setCheck(null)
            .appendField("取得資料");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io/');
    }
};


Blockly.Blocks['jsonp_data'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("jsonp"), "jsonp")
            .appendField("JSON物件陣列");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io/');
    }
};