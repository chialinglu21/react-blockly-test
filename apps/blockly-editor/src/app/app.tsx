import React from 'react';
import BlocklyComponent from './blockly-component';
import ToolboxComponent from './toolbox-component';
import BlocklyPy from 'blockly/python';
import './generator/python-generator';
import TextareaComponent from './textarea-component/TextareaComponent';
import styles from './app.module.css';
import TagSelectionComponent from './tag-selection-component/TagSelectionComponent';


const _tagOptions = [[
          "CPU Steal",
          "cpuSteal"
        ],
        [
          "Memory Free",
          "memoryFree"
        ],
        [
          "Network Tx",
          "networkTx"
        ]];

/* eslint-disable-next-line */
export interface AppProps {}

export interface AppState {
  selectedOptions: string[][];
  code: string;
}
class App extends React.Component<AppProps,AppState> {
  workspace: any;

  constructor(props){
    super(props);
    this.workspace = React.createRef();
    this.state = {
      selectedOptions: [["CPU Steal", "cpuSteal"]],
      code : ''
    };
  }

  componentDidMount(){
    if(this.workspace){
      const blocklyDiv = this.workspace.current.compWorkspace;
      blocklyDiv.addChangeListener(this.generateCode);
    }
  }

  generateCode = () =>{
    const code = (BlocklyPy as any).workspaceToCode(
      this.workspace.current.compWorkspace
    );
    this.setState({code});
  }

  handleCheckListChange = (selectedOptions) => {
    this.setState({selectedOptions});
  };

  render(){
    return (
      <div className={styles.page}>
        <TagSelectionComponent tagOptions={_tagOptions} selectedOptions={this.state.selectedOptions} handleChange={this.handleCheckListChange} />
        <div className={styles.demoWrapper}>
        <BlocklyComponent ref={this.workspace}>
          <ToolboxComponent tagOptions={this.state.selectedOptions} />
        </BlocklyComponent>
        <TextareaComponent code={this.state.code} />
        </div>
      </div>
    );
  }
}

export default App;
