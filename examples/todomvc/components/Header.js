import React, { PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
          <h1>todos</h1>
          <TodoTextInput newTodo={true}
                         handleSave={::this.handleSave}
                         placeholder='What needs to be done?' />
      </header>
    );
  }
}
