import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './styles.scss';

export default class RadioButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value || false,
    }
  }

  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.boolean,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {...prevState, value: nextProps.value};
  }

  handleChange = (evt) => {
      this.setState({ value: evt.target.value});
  }

  render() {
    return (
      <div className="form-control">
            <Toggle
               defaultChecked={this.state.value}
               checked={this.state.value}
               icons={false}
              onChange={this.handleChange} />
           <span className="radioButtonLabel">{this.props.label}</span>
      </div>
    )
  }
}
