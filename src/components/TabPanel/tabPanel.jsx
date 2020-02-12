/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import LinkTab from '../Tab/tab';
import LeaseTabForm from '../TabForm/leaseTabForm';
import LoanTabForm from '../TabForm/loanTabForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '1000px',
    margin: '0 auto',
  },
}));

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

export default function NavTabs(props) {
  const classes = useStyles();
  const indexFromStorage = localStorage.getItem('activeTabIndex');
  const valueFromStorage = indexFromStorage === undefined ? 0 : +indexFromStorage;
  const [value, setValue] = React.useState(valueFromStorage);
  const { appState, handleStateChange } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('activeTabIndex', newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Loan" href="/loan" {...a11yProps(0)} />
          <LinkTab label="Lease" href="/lease" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LoanTabForm appState={appState} handleStateChange={handleStateChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LeaseTabForm appState={appState} handleStateChange={handleStateChange} />
      </TabPanel>
    </div>
  );
}

NavTabs.propTypes = {
  appState: PropTypes.object.isRequired,
  handleStateChange: PropTypes.func.isRequired,
};
