import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Button = styled.button`
    margin-right: 7px;
    border-radius: 5px;
    text-transform: capitalize;
`;

export default function FeedbackOptions({ options, onLeaveFeedback }) {

  return (
    <div>
      {options.map((option) => (
        <Button onClick={onLeaveFeedback(option)} key={option}> {option}</Button>
      ))}
    </div>
  )

};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};