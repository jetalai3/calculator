/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Typography } from '@material-ui/core';

function customButtonGroup(props) {
  const { itemArray, id, caption, handleStateChange } = props;
  // const groupId = `button-group-${id}`;
  // const indexFromStorage = localStorage.getItem(groupId);
  // const valueFromStorage = indexFromStorage === undefined ? activeIndex : +indexFromStorage;
  // const [activeItemIndex, setActiveItemIndex] = React.useState(valueFromStorage);

  // const handleActiveItemIndex = (event, index) => {
  //   setActiveItemIndex(index);
  //   localStorage.setItem(groupId, index);
  // };

  const buttonArray = [];
  itemArray.forEach(element => {
    const index = itemArray.indexOf(element);
    buttonArray.push(
      <ToggleButton
        value={itemArray[index]}
        key={itemArray[index]}
        aria-label={itemArray[index]}
        id={id}
      >
        {itemArray[index]}
      </ToggleButton>
    );
  });
  return (
    <div>
      <Typography variant="h5">{caption}</Typography>
      <ToggleButtonGroup
        value={props.value}
        exclusive
        id={id}
        onChange={handleStateChange}
        // aria-label="text alignment"
      >
        {buttonArray}
      </ToggleButtonGroup>
    </div>
  );
}

customButtonGroup.propTypes = {
  itemArray: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  handleStateChange: PropTypes.func.isRequired,
};

export default customButtonGroup;
