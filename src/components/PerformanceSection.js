import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  padding: 64px 0;
  width: 900px;
`

const Content = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
`

const Per = styled.img`
  height: 440px;
`

const Sucle = styled.p`
  font-size: 16px;
  text-align: justify;
  color: #5F4B45;
  margin: 24px 0;
`

const Description = styled.p`
  font-size: 16px;
  text-align: justify;
  color: #5F4B45;
  margin: 24px 0;
`
const PerformanceSection = () => (
	<Wrapper id="performance">
		<h2>弊社アカウント実績</h2>
		<Content>
			<Per src="/img/per.png"/>
			<div>
				<Sucle>Sucle</Sucle>
				<Description>弊社が運営する女性向けライフスタイルメディア『Sucle』を成長させる際に培ったノウハウをフル活用します。</Description>
				<img src="/img/sucleG.png" style={{ width: `${300}px` }}/>
			</div>
		</Content>
	</Wrapper>
)

export default PerformanceSection
