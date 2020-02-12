import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function Header(props) {
  const { payment, taxes } = props;
  return (
    <>
      <Typography variant="h4">{`Monthly payment: $${payment}`}</Typography>
      <Typography variant="h5">{`Taxes: $${taxes}`}</Typography>
    </>
  );
}

Header.propTypes = {
  payment: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
};

export default Header;
