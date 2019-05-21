import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-component'

const Wrapper = styled.div`
  margin: auto;
  width: 640px;
  padding: 24px 0 64px;
  h1 {
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    color: #333  
  }
  h2 {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    margin-top: 48px;
    color: #333;

    &:after {
      content: "";
      display: block;
      position: relative;
      margin-top: 6px;
      width: 100%;
      height: 3px;
      border: none;
      border-radius: 2px;
      background-color: #333;
    }
  }
  img {
    margin-top: 12px;
    width: 640px;
    height: 320px
  }
  p {
    margin-top: 24px;
    font-size: 16px;
    text-align: left;
    line-height: 28px;
    color: #333;
  }
`

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <Wrapper className={className}>{content}</Wrapper>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
