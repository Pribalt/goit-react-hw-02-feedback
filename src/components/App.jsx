import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Layout } from 'components/Layout';
import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  quantityPositiveFeedback = e => {
    const { textContent } = e.target;

    this.setState(prevState => ({
      [textContent]: prevState[textContent] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    let total = this.countTotalFeedback();

    if (!good) {
      return 0;
    }

    return Math.round((good * 100) / total);
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.quantityPositiveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            title="Statistics"
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Layout>
    );
  }
}
