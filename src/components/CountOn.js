import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: #69A6B8;
`

const Container = styled.div`
	height: 352px;

  margin: auto;
  padding: 64px 0;
  width: 900px;
`

const H3 = styled.h3`
  color: #FFF;
  font-weight: 700;
  margin-bottom: 40px;
`

const CountOn = () => (
	<Wrapper id="countOn">
		<Container>
			<H3>Instagramの戦略立案・運用・振り返り、すべてFinTにお任せください！</H3>
			<a href="https://form.run/@fint-instagram" target="_blank"><button>資料請求/お問い合わせはこちら</button></a>
		</Container>
	</Wrapper>
)

export default CountOn
