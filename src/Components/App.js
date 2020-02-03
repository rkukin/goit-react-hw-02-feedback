import React, {Component} from 'react';
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";

export default class App extends Component {

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
    const positiveFeedbackPercentage = this.countPositiveFeedback();
    const totalFeedbackCounter = this.countTotalFeedback();


    return (
        <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleBtnClick} options={options}/>
        </Section>
          {this.countTotalFeedback() === 0
              ? (<Notification message="No feedback given"/>)
              : (<Section title="Statistics">
                <Statistics
                    good={this.state.good}
                    bad={this.state.bad}
                    neutral={this.state.neutral}
                    positivePercentage={positiveFeedbackPercentage}
                    total={totalFeedbackCounter}/>
              </Section>)}
        </>
    )
  }
};