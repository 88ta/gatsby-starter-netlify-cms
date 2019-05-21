import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 480px;
	margin: auto;
  background: no-repeat;
	background-size: cover;
	background-image: url('img/fv.png');
`

const Container = styled.div`
	height: 352px;
`

const H3 = styled.h3`
	margin: 32 0;
	font-weight: 300;
	line-height: 32px;
	color: #5F4B45;
`

const TopComponent = () => (
	<Wrapper id="top">
		<Container>
			<h1>Instagramの運用をまるっとお任せ。</h1>
			<H3>フォロワー数・認知度・売上の向上を<br />アカウント運用によってサポートします</H3>
			<a href="https://form.run/@fint-instagram" target="_blank"><button>資料請求/お問い合わせはこちら</button></a>
		</Container>
	</Wrapper>
)

export default TopComponent
