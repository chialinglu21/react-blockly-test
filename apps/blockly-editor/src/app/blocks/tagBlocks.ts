import * as Blockly from 'blockly/core';

const curTagField = {
  "type": "current_tag_value_block",
  "message0": "%1 's value",
  "args0": [
    {
      "type": "input_dummy",
      "name": "tag_options",
    },
  ],
  "extensions": ["dynamic_menu_extension"],
  "inputsInline": true,
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['current_tag_value_block']={
  init: function(){
    this.jsonInit(curTagField);
  }
}


let _initTestOptions = [];
Blockly.Blocks['test_dropdown_dynamic']={
  init: function(){
    const dropdown = new Blockly.FieldDropdown(this.dynamicOptions);
    this.appendDummyInput()
        .appendField(dropdown, 'tag_options')
        .appendField(' \' value');
    this.setOutput(true, null);
    this.setColour(105);

  },
  dynamicOptions: function() {
    if (_initTestOptions?.length === 0) {
      return [['', 'OPTION0']];
    }
    return _initTestOptions;
  }

}

export function addTestOptions(options){
  _initTestOptions=[...options];
}



const newTagField = {
  "type": "new_tag_block",
  "message0": "%1 = %2",
  "args0": [
    {
      "type": "field_input",
      "name": "new_tag_input",
      "text": "newTagName"
    },
    {
      "type": "input_value",
      "name": "new_tag_field"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['new_tag_block']={
  init: function(){
    this.jsonInit(newTagField);
  }
}
