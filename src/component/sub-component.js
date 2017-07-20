import React from 'react';
import styles from './sub-component.css';

export class SubComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div className={styles.count}>
        {this.state.count}
          <div className={styles.count__important}>重要</div>
          <div className={styles.count__important___unti}>重要ではない</div>
        </div>
        <button onClick={ this.handleClick.bind(this) }>Add+1</button>
      </div>
    );
  }
}