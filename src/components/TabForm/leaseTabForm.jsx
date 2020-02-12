/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import InputBlock from '../InputBlock/InputBlock';
import SelectBlock from '../SelectInputBlock/selectInputBlock';
import Header from '../Header/header';

class LeaseTabForm extends React.Component {
  constructor(props) {
    super(props);
    this.termsArray = [24, 36, 48];
    this.mileageArray = [10000, 12000, 15000];
    this.creditScoreArray = [600, 650, 700, 750, 800, 850, 900];
    this.handleStateChange = props.handleStateChange;
  }

  render() {
    return (
      <form className="tabform">
        <div>
          <Header payment={this.props.appState.leasepayment} taxes={this.props.appState.taxes} />
        </div>
        <Divider className="divider" variant="middle" />
        <div>
          <InputBlock
            caption="Post Code"
            mask=""
            id="postcode"
            appState={this.props.appState}
            value={this.props.appState.postcode}
            handleStateChange={this.handleStateChange}
          />
        </div>
        <Divider className="divider" variant="middle" />
        <div>
          <InputBlock
            caption="Trade-In Value"
            mask="$"
            id="tradein"
            appState={this.props.appState}
            value={this.props.appState.tradein}
            handleStateChange={this.handleStateChange}
          />
        </div>
        <Divider className="divider" variant="middle" />
        <div>
          <InputBlock
            caption="Down Payment"
            mask="$"
            id="downpayment"
            appState={this.props.appState}
            value={this.props.appState.downpayment}
            handleStateChange={this.handleStateChange}
          />
        </div>
        <Divider className="divider" variant="middle" />
        <div>
          <SelectBlock
            caption="Terms (Months)"
            itemArray={this.termsArray}
            activeIndex={1}
            value={this.props.appState.leaseterms}
            id="leaseterms"
            handleStateChange={this.handleStateChange}
          />
        </div>
        <Divider className="divider" variant="middle" />
        <div>
          <SelectBlock
            caption="Mileage"
            itemArray={this.mileageArray}
            activeIndex={1}
            value={this.props.appState.mileage}
            id="mileage"
            handleStateChange={this.handleStateChange}
          />
        </div>
        <Divider className="divider" variant="middle" />
        <div>
          <SelectBlock
            caption="Credit Score"
            itemArray={this.creditScoreArray}
            activeIndex={3}
            value={this.props.appState.creditscore}
            id="creditscore"
            handleStateChange={this.handleStateChange}
          />
        </div>
      </form>
    );
  }
}

LeaseTabForm.propTypes = {
  appState: PropTypes.object.isRequired,
  handleStateChange: PropTypes.func.isRequired,
};

export default LeaseTabForm;
