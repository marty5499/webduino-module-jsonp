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

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#narpfi
Blockly.Blocks['jsonp_data'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("jsonp"), "jsonp")
            .appendField("JSON物件陣列");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io/');
    }
};


//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#mbr8uo
Blockly.Blocks['jsonp_data_by_key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("jsonp"), "jsonp")
        .appendField("JSON物件陣列，找 ")
        .appendField(new Blockly.FieldTextInput("Site"), "key")
        .appendField("=")
        .appendField(new Blockly.FieldTextInput("前鎮"), "value")
        .appendField("取 Key=")
        .appendField(new Blockly.FieldTextInput("PM25"), "data")
        .appendField("的值");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};