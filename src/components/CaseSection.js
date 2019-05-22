import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin: auto;
	padding: 64px 0;
	width: 900px;
`

const Case = styled.div`
  width: 272px;;
`

const Img = styled.img`
  height: 400px;
  margin-bottom: 16px;
  margin: auto;
  display: block;
`
const Media = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #69A6B8;
`

const CaseTitle = styled.p`
  margin: 18px 0;
  font-size: 16px;
  font-weight: 700;
  color: #5F4B45;
`

const Account = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #5F4B45;
`

const Line = styled.span`
  display: block;
  margin: 8px 0 8px -2px;
  width: 284px;
  height: 1px;
  background-color: #5F4B45;
`

const Description = styled.div`
  font-size: 16px;
  line-height: 22px;
  text-align: justify;
  color: #5F4B45;
`

const CaseSection = () => (
	<Wrapper id="case">
		<h2>導入事例</h2>
		<div style={{ display: 'flex', marginTop: `${40}px`, justifyContent: 'space-between' }}>
			<Case>
				<Img src="/img/dC1.png"/>
				<Media>ウエディング情報発信メディア</Media>
				<CaseTitle>2ヶ月の運用で5000フォロワー達成</CaseTitle>
				<Account>アカウント名：Choole</Account>
				<Line />
				<Description>ヘア、ネイル、メイクなどの多種カテゴリーで情報を発信。フォロワー数の増加に従い、加工方法を変更し雰囲気の異なる写真を掲載。伸びる投稿、伸びない投稿の違いをつぶさに研究し、フォロワー数の増加につなげた。</Description>
			</Case>
			<Case>
				<Img src="/img/dC2.png"/>
				<Media>お料理情報発信メディア</Media>
				<CaseTitle>2ヶ月の運用で1万フォロワー達成</CaseTitle>
				<Account>アカウント名：てづくりおべんと365</Account>
				<Line />
				<Description>お弁当の具材や配置、撮影・加工方法を工夫しながら、季節感や流行を踏まえた投稿、リポストによる運用を実施。統一した世界観の構築がフォロワー数増加につながった。</Description>
			</Case>
			<Case>
				<Img src="/img/dC3.png"/>
				<Media>節約情報発信メディア</Media>
				<CaseTitle>2ヶ月の運用で10万フォロワー達成</CaseTitle>
				<Account>アカウント名：わたしの節約</Account>
				<Line />
				<Description>ターゲット層から逆算し、投稿 コンテンツの見直しを行った結果フォロワー数が急増。主婦層に向けた収納や料理の節約術を中心にその他時短術などを紹介。</Description>
			</Case>
		</div>
	</Wrapper>
)

export default CaseSection
