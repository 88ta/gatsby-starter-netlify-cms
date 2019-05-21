import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  text-align: center;
  padding: 16px 0;
  background-color: #69A6B8;
  color: #FFF;
`

const Inner = styled.div`
  margin: 14px auto;
`

const Link = styled.a`
  margin-right: 14px;
`

const Footer = class extends React.Component {
  render() {
    return (
	<Wrapper>
		<Inner>
			<Link href="http://sucle.jp/privacy" target="_blank">プライバシーポリシー</Link>
			<Link href="https://fint-inc.netlify.com/" target="_blank">会社概要</Link>
		</Inner>
		<small>©FinT inc.</small>
	</Wrapper>
    )
  }
}

export default Footer
