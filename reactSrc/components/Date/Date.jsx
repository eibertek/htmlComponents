import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCalendar from '@fortawesome/fontawesome-free-solid/faCalendar';
import './styles.scss';

export default class Date extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value ||  moment(),
    }
  }

  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.boolean,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {...prevState, value: nextProps.value};
  }

  handleChange = (date) => {
      this.setState({ value: date});
  }

  render() {
    return (
      <div className="datePicker-group">
        <label>{this.props.label}
          <DatePicker id="example-datepicker"
            className="datePickerInput"
            selected={this.state.value}
            onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}
