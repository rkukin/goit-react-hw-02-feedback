import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Feedback extends Component {

  static propTypes = {
    state: PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number
    })
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleGoodClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1
      }
    })
  };

  handleNeutralClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1
      }
    })
  };

  handleBadClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1
      }
    })
  };

  countTotalFeedback = () => {
    return (
      this.state.bad + this.state.neutral + this.state.good
    )
  };

  countPositiveFeedback = () => {
    return this.countTotalFeedback() === 0 ? 0 : (this.state.good / this.countTotalFeedback() * 100).toFixed(2);
  };

  render() {
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button onClick={this.handleGoodClick}>Good</button>
          <button onClick={this.handleNeutralClick}>Neutral</button>
          <button onClick={this.handleBadClick}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedback()} %</p>
        </div>
      </>
    )
  }
};