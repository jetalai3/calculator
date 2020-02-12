/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

function SelectBlock(props) {
  const { caption, itemArray, id, handleStateChange } = props;
  // const selectId = `select-${id}`;

  // const indexFromStorage = localStorage.getItem(selectId);
  // const valueFromStorage = indexFromStorage === null ? itemArray[activeIndex] : +indexFromStorage;

  // eslint-disable-next-line no-unused-vars
  // const [state, setState] = React.useState({
  //   item: valueFromStorage,
  // });

  // const handleChange = item => event => {
  //   setState({
  //     [item]: event.target.value,
  //   });
  //   localStorage.setItem(selectId, event.target.value);
  // };
  const optionsArray = [];
  itemArray.forEach(element => {
    const index = itemArray.indexOf(element);
    optionsArray.push(
      <option value={itemArray[index]} key={itemArray[index]} id={id}>
        {itemArray[index]}
      </option>
    );
  });
  return (
    <div>
      <Typography variant="h5">{caption}</Typography>
      <Select native value={props.value} id={id} onChange={handleStateChange}>
        {optionsArray}
      </Select>
    </div>
  );
}

SelectBlock.propTypes = {
  itemArray: PropTypes.array.isRequired,
  caption: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  handleStateChange: PropTypes.func.isRequired,
};

export default SelectBlock;
