import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FeedbackLabel = styled.p``;

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {

    return (
        <div>
            <FeedbackLabel>Good: {good}</FeedbackLabel>
            <FeedbackLabel>Neutral: {neutral}</FeedbackLabel>
            <FeedbackLabel>Bad: {bad}</FeedbackLabel>
            <FeedbackLabel>Total: {total}</FeedbackLabel>
            <FeedbackLabel>Positive feedback: {positivePercentage} %</FeedbackLabel>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};