import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SectionWrapper = styled.div``;

const Title = styled.h2``;

export default function Section({title, children}) {

  return (
    <SectionWrapper>
      <Title> {title} </Title>
      {children}
    </SectionWrapper>
  )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};