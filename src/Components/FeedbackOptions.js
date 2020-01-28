import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { uuid } from 'uuidv4';


const Button = styled.button``;

function capitalizeButtonLabel(label) {
  return label.charAt(0).toUpperCase() + label.slice(1)
}

export default function FeedbackOptions({ options, onLeaveFeedback }) {

  return (
    <div>
      {options.map((option, index) => (
        <Button onClick={onLeaveFeedback(option)} key={uuid()}> {capitalizeButtonLabel(option)}</Button>
      ))}
    </div>
  )

};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};