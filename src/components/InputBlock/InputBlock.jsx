/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography } from '@material-ui/core';

class InputBlock extends React.Component {
  constructor(props) {
    super(props);
    this.caption = props.caption;
    this.mask = props.mask;
    this.id = props.id;
    this.value = props.value;
    this.appState = props.appState;
    this.handleStateChange = props.handleStateChange;
    this.error = false;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    if (id === 'tradein' || id === 'downpayment') {
      if (value / this.appState.msrp >= 0.25) {
        this.error = true;
      } else {
        this.error = false;
      }
    }
    this.handleStateChange(event);
  }

  render() {
    return this.error === true ? (
      <div>
        <Typography variant="h5">
          {this.caption}
          <TextField
            error
            label="Error"
            id={`${this.id}`}
            value={this.props.value}
            onChange={this.handleChange}
            helperText="Value can’t be greater than ¼ of MSRP"
            aria-describedby="outlined-weight-helper-text"
            type="text"
            variant="outlined"
          />
        </Typography>
      </div>
    ) : (
      <div>
        <Typography variant="h5">
          {this.caption}
          <OutlinedInput
            id={`${this.id}`}
            value={this.props.value}
            onChange={this.handleChange}
            startAdornment={<InputAdornment position="start">{this.mask}</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            type="text"
          />
        </Typography>
      </div>
    );
  }
}

InputBlock.propTypes = {
  caption: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  appState: PropTypes.object.isRequired,
  handleStateChange: PropTypes.func.isRequired,
};

export default InputBlock;
