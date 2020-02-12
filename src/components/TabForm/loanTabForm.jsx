/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import InputBlock from '../InputBlock/InputBlock';
import CustomButtonGroup from '../ButtonGroup/buttonGroup';
import Header from '../Header/header';

class LoanTabForm extends React.Component {
  constructor(props) {
    super(props);
    this.termsArray = [12, 24, 36, 48, 72, 84];
    this.creditScoresArray = [600, 650, 700, 750, 800, 850, 900];
    this.appState = props.appState;
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
            caption="Post Code:"
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
            caption="Trade-In Value:"
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
            caption="Down Payment:"
            mask="$"
            id="downpayment"
            appState={this.props.appState}
            value={this.props.appState.downpayment}
            handleStateChange={this.handleStateChange}
          />
        </div>
        <Divider className="divider" variant="middle" />
        <div>
          <CustomButtonGroup
            itemArray={this.termsArray}
            activeIndex={1}
            id="loanterms"
            caption="Term (Months)"
            value={this.props.appState.loanterms}
            handleStateChange={this.handleStateChange}
          />
        </div>
        <Divider className="divider" variant="middle" />
        <div>
          <CustomButtonGroup
            itemArray={this.creditScoresArray}
            activeIndex={3}
            id="creditscore"
            caption="Approx. Credit Score"
            value={this.props.appState.creditscore}
            handleStateChange={this.handleStateChange}
          />
        </div>
        <Divider className="divider" variant="middle" />
        <div>
          <InputBlock
            caption="Estimated APR:"
            mask="%"
            id="apr"
            appState={this.props.appState}
            value={this.props.appState.apr}
            handleStateChange={this.handleStateChange}
          />
        </div>
      </form>
    );
  }
}

LoanTabForm.propTypes = {
  appState: PropTypes.object.isRequired,
  handleStateChange: PropTypes.func.isRequired,
};

export default LoanTabForm;
