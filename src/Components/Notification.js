import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Message = styled.h3``;

export default function Notification({message}) {
  return (
    <Message>{message}</Message>
  )
};

Notification.propTypes = {
  message: PropTypes.string.isRequired
};