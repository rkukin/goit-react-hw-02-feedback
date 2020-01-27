import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button``;

function capitalizeButtonLabel(label) {
  return label.charAt(0).toUpperCase() + label.slice(1)
}

export default function FeedbackOptions({options, onLeaveFeedback}) {

  return (
    <>
      {options.map(option => (
        <Button onClick={onLeaveFeedback} > {capitalizeButtonLabel(option)}</Button>
      ))}
    </>
  )

};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};