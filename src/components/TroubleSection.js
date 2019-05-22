import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin: auto;
	padding: 64px 0;
	width: 900px;
`

const Inner = styled.div`
  display: flex;
  margin-top: 32px;
  width: inherit;
  justify-content: space-between;

`

const Cell = styled.div`
  width: 240px;
`

const Img = styled.img`
  display: block;
  width: 112px;
  margin: 0 auto;
  text-align: center;
`

const Text = styled.p`
  margin-top: 32px;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #5F4B45;
`

const TroubleSection = () => (
	<Wrapper id="trouble">
		<h2>こんなお悩み、ありませんか？</h2>
		<Inner>
			<Cell id="cT1">
				<Img src="/img/cT1.png" />
				<Text>"アカウント運用をしているが、フォロワー数が伸びない"</Text>
			</Cell>
			<Cell id="/cT2">
				<Img src="img/cT2.png" />
				<Text>"効果的な運用方法がわからない"</Text>
			</Cell>
			<Cell id="/cT3">
				<Img src="img/cT3.png" />
				<Text>"Instagramをビジネスに活用したいが、リソースが足りない"</Text>
			</Cell>
		</Inner>
	</Wrapper>
)

export default TroubleSection
