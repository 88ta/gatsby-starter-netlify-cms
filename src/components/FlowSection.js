import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  padding: 64px 0;
  width: 900px;
`

const H2 = styled.h2`
  margin-bottom: 40px;
`

const Step = styled.div`
  display: flex;
  padding: 16px 24px;
  background-color: #F5F5F5;
  border: none;
  border-radius: 5px;
`

const H3 = styled.h3 `
  width: 256px;
  font-weight: 700;
  line-height: 32px;
  text-align: left !important;
  color: #69A6B8;
`

const Description = styled.p`
  width: 560px;
  line-height: 20px;
`

const Arrow = styled.span`
  display: block;
  margin: 16px auto;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 20px 12px 0 12px;
  border-color: #000000 transparent transparent transparent;
`

const Button = styled.button`
  margin: 64px auto !important;
`

const FlowSection = () => (
	<Wrapper id="flow">
		<H2>ご利用の流れ</H2>
		<Step>
			<H3>①要件整理</H3>
			<Description>Instagramを運用する上での運用目的・抱えておられる課題をヒアリングさせていただきます。</Description>
		</Step>
		<Arrow />
		<Step>
			<H3>②運用方針の決定</H3>
			<Description>①をもとに、運用方針やポリシーを策定いたします。</Description>
		</Step>
		<Arrow />
		<Step>
			<H3>③運用開始</H3>
			<Description>②をもとに、運用を開始します。日々の投稿素材の作成・投稿作業・ユーザーとのコミュニケーションを円滑に進めます。</Description>
		</Step>
		<Arrow />
		<Step>
			<H3>④効果測定・振り返り</H3>
			<Description>日々の投稿、企画内容の効果測定・振り返りを行い、運用を改善していきます。</Description>
		</Step>
		<a href="https://form.run/@fint-instagram" target="_blank"><Button>資料請求/お問い合わせはこちら</Button></a>
	</Wrapper>
)

export default FlowSection
