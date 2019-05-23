import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto !important;
  width: 640px !important;
  padding: 24px 0 64px !important;
  h1 {
    font-size: 24px !important;
    line-height: 32px !important;
    text-align: left !important;
    color: #333 !important; 
  }
  h2 {
    font-size: 24px !important;
    font-weight: 600 !important;
    text-align: left !important;
    margin-top: 48px !important;
    color: #333 !important;

    &:after {
      content: "" !important;
      display: block !important;
      position: relative !important;
      margin-top: 6px !important;
      width: 100% !important;
      height: 3px !important;
      border: none !important;
      border-radius: 2px !important;
      background-color: #333 !important;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    text-align: left !important;
    margin-top: 24px;
    &:before {
      content: "";
      position: relative;
      display: inline-block;
      width: 4px;
      height: 41px;
      margin-right: 8px;
      background-color: #333;
      vertical-align: middle;
    }
  }
  img {
    margin-top: 12px !important;
    width: 640px !important;
    height: 320px !important;
  }
  p {
    margin-top: 24px !important;
    font-size: 16px !important;
    text-align: left !important;
    line-height: 28px !important;
    color: #333 !important;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }
  blockquote {
    display: flex;
    p {
      margin: 0 !important;
    }
    &:before {
      content: "";
      position: relative;
      display: inline-block;
      width: 4px;
      height: 41px;
      margin-right: 8px;
      background-color: #aaa;
      vertical-align: middle;
    }
  }
  a {
    text-decoration: underline;
    color: #333;
  }
  img {
    max-width: 640px;
    width: 100%;
  }
`

export const HTMLContent = ({ content, className }) => (
  <Wrapper className={className} dangerouslySetInnerHTML={{ __html: content }} />
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
