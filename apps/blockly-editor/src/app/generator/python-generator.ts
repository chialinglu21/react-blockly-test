import * as Blockly from 'blockly/blockly_compressed';
import 'blockly/python';


Blockly.Python['current_tag_value_block'] = function(block) {
  const dropdown_tag_options = block.getInput('tag_options').fieldRow[0].selectedOption_[1];
  const code = `${dropdown_tag_options}.value`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['test_dropdown_dynamic'] = function(block) {
  const dropdown_tag_options = block.getFieldValue('tag_options');
  const code = `${dropdown_tag_options}.value`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['new_tag_block'] = function(block) {
  const text_new_tag_input = block.getFieldValue('new_tag_input');
  const value_new_tag_field = Blockly.Python.valueToCode(block, 'new_tag_field', Blockly.Python.ORDER_ATOMIC);
  const code = `${text_new_tag_input} = ${value_new_tag_field}`;
  return code;
};
