import React, { Component } from 'react';

import './TextareaComponent.module.css';

export interface TextareaComponentProps {
  code: string;
}

export class TextareaComponent extends Component<TextareaComponentProps> {
  render() {
    return (
      <textarea value={this.props.code} readOnly={true} />
      );
  }
}

export default TextareaComponent;
