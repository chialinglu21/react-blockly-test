import React, { Component } from 'react';
import Blockly from 'blockly/core';
import * as tagBlocks from '../blocks/tagBlocks';

import styles  from './ToolboxComponent.module.css';

/* eslint-disable-next-line */
export interface ToolboxComponentProps {
  tagOptions: string[][]
}

const Block = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("block", props, children);
};

const CustomBlock = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    if(!props.options){
      return null;
    }
    return React.createElement("block", props, children);
};

const Category = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("category", props, children);
};

const Value = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("value", props, children);
};

const Field = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("field", props, children);
};

const Shadow = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("shadow", props, children);
};

const Mutation = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("mutation", props, children);
};

const Sep = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("sep", props, children);
};

export class ToolboxComponent extends Component<ToolboxComponentProps> {

  componentDidMount(){
    const options = this.props.tagOptions;
    Blockly.Extensions.register('dynamic_menu_extension', function() {
      this.getInput('tag_options').appendField(new Blockly.FieldDropdown(() => options));
    })
  }

  componentDidUpdate(){
    tagBlocks.addTestOptions(this.props.tagOptions);
    // this.getInput('tag_options').appendField(new Blockly.FieldDropdown(() => this.props.tagOptions));
  }

  render() {
    return (
    <React.Fragment>
      <Category name="Math">
        <Block type="math_number">
          <Field name="NUM">0</Field>
        </Block>
        <Block type="math_arithmetic">
          <Field name="OP">ADD</Field>
          <Value name="A">
            <Shadow type="math_number">
              <Field name="NUM">1</Field>
            </Shadow>
          </Value>
          <Value name="B">
            <Shadow type="math_number">
              <Field name="NUM">1</Field>
            </Shadow>
          </Value>
        </Block>
        <Block type="math_constant">
          <Field name="CONSTANT">PI</Field>
        </Block>
        <Block type="math_on_list">
          <Mutation op="SUM"></Mutation>
          <Field name="OP">SUM</Field>
        </Block>
        <Block type="math_trig">
          <Field name="OP">SIN</Field>
          <Value name="NUM">
            <Shadow type="math_number">
              <Field name="NUM">45</Field>
            </Shadow>
          </Value>
        </Block>
        <Block type="math_round">
          <Field name="OP">ROUND</Field>
          <Value name="NUM">
            <Shadow type="math_number">
              <Field name="NUM">3.1</Field>
            </Shadow>
          </Value>
        </Block>
          </Category>
          <Category name="Pure Value">
          <Block type="math_number">
          <Field name="NUM">0</Field>
        </Block>
        <Block type="text">
          <Field name="TEXT"></Field>
        </Block>
      </Category>
      <Sep css-container={styles.toolbox_separator}></Sep>
      <Category name="Tag">
        {/* <CustomBlock type="current_tag_value_block" options={this.props.tagOptions.length > 0} /> */}
        <Block type="new_tag_block" />
        <Block type="test_dropdown_dynamic" />
      </Category>
    </React.Fragment>
    );
  }
}

export default ToolboxComponent;
