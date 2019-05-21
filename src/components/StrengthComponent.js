import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin: auto;
	padding: 64px 0;
	width: 900px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

const Img = styled.img`
  width: 350px;
  height: 240px;
`

const Text = styled.div`
  width: 480px;
`
const Number = styled.p`
  font-size: 40px;
  color: #69A6B8;
`
const H3 = styled.h3`
  margin: 16px 0;
  color: #69A6B8;
  line-height: 32px;
  text-align: left;
`

const Description = styled.p`
  font-size: 16px;
  line-height: 22px;
  text-align: justify;
  color: #5F4B45;
`

const StrengthComponent = () => (
	<Wrapper id="strength">
		<h2>FinTの強み</h2>
		<Content>
			<Img src="img/cS1.png" />
			<Text>
				<Number>01</Number>
				<H3>フォロワー数を増加させるための<br/>ノウハウ・仕組みがある</H3>
				<Description>FinTは、アカウントを成長させるためのノウハウと素早く投稿のPDCAを回す体制を作っており、クライアント様のInstagramアカウントも再現性を持って成果を出すことができます。弊社クライアント様の中では、2ヶ月でフォロワー数を200人 → 10万人にまで増加させた実績もございます。</p>
			</Text>
		</Content>
		<Content id="cS2">
			<Text>
				<Number>02</Number>
				<H3>アカウントのファンを増やすための独自メソッド</H3>
				<Description>フォロワーをあなたのサービスやアカウントのファンに転換させる企画力があります。Instagramならではの機能である「ストーリーズ」を用いて、フォロワーとのコミュニケーションを図り、ファンを増やし、サービスの売上に貢献します。</p>
			</Text>
			<Img src="img/cS2.png" />
		</Content>
		<Content id="cS3">
			<Img src="img/cS3.png" />
			<Text>
				<Number>03</Number>
				<H3>充実した運用体制</H3>
				<Description>様々なアカウントの運用改善を行い、実績を出してきた専任のプランナーがあなたのアカウント成長をサポートします。週次で運用を改善し、フォロワーに好まれるアカウントを立ち上げます。</p>
			</Text>
		</Content>
	</Wrapper>
)

export default StrengthComponent
