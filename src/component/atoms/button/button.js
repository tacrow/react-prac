import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import styles from './button.css'

export class Button extends React.Component {
  static propTypes: {
    classes:  propTypes.array,
    children: propTypes.any,
    type:     propTypes.string,
    display:  propTypes.string,
    size:     propTypes.string,
    color:    propTypes.string,
    disabled: PropTypes.bool,
    onClickAction: PropTypes.func,
  }

  render() {
    return(
      <button
        type={this.props.type}
        disabled={this.props.disabled}
        className={classNames(
          styles.btn,
          this.props.display && styles[this.props.display],
          this.props.size && styles[this.props.size],
          this.props.color && styles[this.props.color],
          this.props.classes)}
        onClick={this.props.onClickAction}
      >
      {this.props.children}
      </button>
    );
  }
}