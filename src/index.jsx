/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';

import NavTabs from './components/TabPanel/tabPanel';
import InfoCard from './components/InfoCard/infoCard';

import './index.scss';

import '@babel/polyfill';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: 0,
      tradein: 0,
      downpayment: 0,
      leaseterms: 36,
      loanterms: 24,
      leasepayment: 0,
      loanpayment: 0,
      taxes: 0,
      msrp: 40000,
      creditscore: 750,
      mileage: 12000,
      apr: 0,
      vehiclename: 'Toyota Corolla AE86',
      dealername: 'Takumi Fujiwara Tofu Shop',
      dealerphonenumber: '8-800-555-35-35',
      dealerrating: '10/10',
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('state')));
  }

  // eslint-disable-next-line consistent-return
  calculatePayments() {
    if (
      this.state.downpayment / this.state.msrp >= 0.25 ||
      this.state.tradein / this.state.msrp >= 0.25
    ) {
      return false;
    }

    let creditScoreValue = 0;
    if (this.state.creditscore < 640) {
      creditScoreValue = 1.2;
    } else if (this.state.creditscore >= 640 && this.state.creditscore < 700) {
      creditScoreValue = 1.05;
    } else if (this.state.creditscore >= 700 && this.state.creditscore < 750) {
      creditScoreValue = 1;
    } else if (this.state.creditscore >= 750) {
      creditScoreValue = 0.95;
    }
    const leasepayment =
      Math.round(
        ((((this.state.msrp - this.state.tradein - this.state.downpayment) * this.state.mileage) /
          10000 /
          this.state.leaseterms) *
          creditScoreValue +
          Number.EPSILON) *
          100
      ) / 100;
    const loanpayment =
      Math.round(
        (((this.state.msrp - this.state.tradein - this.state.downpayment) / this.state.loanterms) *
          creditScoreValue *
          this.state.apr +
          Number.EPSILON) *
          100
      ) / 100;
    const taxes = +this.state.postcode
      .toString()
      .split('')
      .map(num => num * 11);

    this.setState(prevState => ({
      ...prevState,
      leasepayment,
      loanpayment,
      taxes,
    }));
  }

  // eslint-disable-next-line consistent-return
  handleStateChange(e) {
    // eslint-disable-next-line prefer-const
    let { id, value } = e.target;
    const onlyNums = value.replace(/[^0-9]/g, '');

    this.setState(
      prevState => ({
        ...prevState,
        [id]: +onlyNums,
      }),
      this.calculatePayments
    );
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="container">
        <NavTabs appState={this.state} handleStateChange={this.handleStateChange} />
        <InfoCard
          msrp={this.state.msrp}
          vehiclename={this.state.vehiclename}
          dealername={this.state.dealername}
          dealerphonenumber={this.state.dealerphonenumber}
          dealerrating={this.state.dealerrating}
        />
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
