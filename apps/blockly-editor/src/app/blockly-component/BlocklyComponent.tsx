import React, { Component } from 'react';
import './BlocklyComponent.module.css';
import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

Blockly.setLocale(locale);

/* eslint-disable-next-line */
export interface BlocklyComponentProps {}

class BlocklyComponent extends Component<BlocklyComponentProps> {
  workspace: any;
  blocklyRef: any;
  toolboxRef: any;

  constructor(props){
    super(props);
    this.blocklyRef = React.createRef();
    this.toolboxRef = React.createRef();
  }

  componentDidMount(){
    this.workspace = Blockly.inject(this.blocklyRef.current, {toolbox: this.toolboxRef.current});
  }

  get compWorkspace(){
    return this.workspace;
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <div id="blocklyDiv" ref={this.blocklyRef} style={{width: 1000, height: 600}}></div>
        <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={this.toolboxRef} >
          { children }
        </xml>
      </React.Fragment>
    );
  }
}

export default BlocklyComponent;
