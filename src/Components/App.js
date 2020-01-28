import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";

export default class App extends Component {

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

  handleBtnClick = (name) => () => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }))
  };

  countTotalFeedback = () => {
    return (
      this.state.bad + this.state.neutral + this.state.good
    )
  };

  countPositiveFeedback = () => {
    return parseFloat(this.countTotalFeedback() === 0 ? 0 : (this.state.good / this.countTotalFeedback() * 100).toFixed(2));
  };

  render() {
    const options = Object.keys(this.state);

    return (
        <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions onLeaveFeedback={this.handleBtnClick} options={options}/>
        </Section>
          {this.countTotalFeedback() === 0
              ? (<Notification message={"No feedback given"}></Notification>)
              : (<Section title={"Statistics"}>
                <Statistics
                    good={this.state.good}
                    bad={this.state.bad}
                    neutral={this.state.neutral}
                    positivePercentage={this.countPositiveFeedback()}
                    total={this.countTotalFeedback()}/>
              </Section>)}
        </>
    )
  }
};