import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  infocard: {
    backgroundColor: theme.palette.background.paper,
    width: '300px',
    margin: '50px',
    border: '2px solid black',
    padding: '20px',
    display: 'flex',
    'justify-content': 'space-between',
    'flex-direction': 'column',
  },
}));

function InfoCard(props) {
  const { msrp, vehiclename, dealername, dealerphonenumber, dealerrating } = props;
  const classes = useStyles();
  return (
    <div className={classes.infocard}>
      <div>
        <Typography variant="h6">Vehicle name</Typography>
        <Typography variant="subtitle1">{vehiclename}</Typography>
      </div>
      <Divider variant="middle" />
      <div>
        <Typography variant="h6">MSRP</Typography>
        <Typography variant="subtitle1">{`$${msrp}`}</Typography>
      </div>
      <Divider variant="middle" />
      <div>
        <Typography variant="h6">Dealer Name</Typography>
        <Typography variant="subtitle1">{dealername}</Typography>
      </div>
      <Divider variant="middle" />
      <div>
        <Typography variant="h6">Dealer Phone Number</Typography>
        <Typography variant="subtitle1">{dealerphonenumber}</Typography>
      </div>
      <Divider variant="middle" />
      <div>
        <Typography variant="h6">Dealer Rating</Typography>
        <Typography variant="subtitle1">{dealerrating}</Typography>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  msrp: PropTypes.number.isRequired,
  vehiclename: PropTypes.string.isRequired,
  dealername: PropTypes.string.isRequired,
  dealerphonenumber: PropTypes.string.isRequired,
  dealerrating: PropTypes.string.isRequired,
};

export default InfoCard;
