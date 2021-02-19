import React from 'react';

import './TagSelectionComponent.module.css';

/* eslint-disable-next-line */
export interface TagSelectionComponentProps {
  tagOptions: string[][];
  selectedOptions: string[][];
  handleChange: any;
}



class TagSelectionComponent extends React.Component<TagSelectionComponentProps> {

  handleInputChange = (event) => {
    const target = event.target;
    const isExist = this.props.selectedOptions.map(m => m[1]).includes(target.name);
    let newSelected = [...this.props.selectedOptions];
    if(target.checked && !isExist){
      const option = this.props.tagOptions.find(f => f[1]===target.name);
      newSelected.push(option);
    }else{
      newSelected = this.props.selectedOptions.filter(f => f[1] !== target.name);
    }

    this.props.handleChange(newSelected);
  }

  isChecked = (item) => this.props.selectedOptions.map(m => m[1]).includes(item[1]);

  generateCheckbox = (item: string[]) => (
    <React.Fragment>
      <input name={item[1]} type="checkbox" checked={this.isChecked(item)} onChange={this.handleInputChange} />
      <label htmlFor={item[1]}>{item[0]}</label>
    </React.Fragment>);

  render(){
    return (
      <form>
          {this.props.tagOptions.map((item) => (<div key={item[1].toString()}>{this.generateCheckbox(item)}</div>))}
        </form>
    );
  }

}

export default TagSelectionComponent;
