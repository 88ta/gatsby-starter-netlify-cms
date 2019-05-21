import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  padding: 64px 0;
  width: 900px;
`

const H3 = styled.h3`
  margin-top: 56px;
  color: #5F4B45;
  font-weight: 700;
`

const List = styled.div`
  margin-bottom: 80px;
  padding-top: 32px;
`
const ListItem = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: space-between;
`

const Category = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #FFF;
  width: 240px;
  padding: 16px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #69A6B8;
`

const IntroSection = () => (
	<Wrapper id="intro">
		<h2>業種紹介</h2>
		<H3>その他、様々な業種でご利用いただいております！</H3>
		<List>
			<ListItem>
				<Category>ファッション</Category>
				<Category>グルメ・フード</Category>
				<Category>メディア</Category>
			</ListItem>
			<ListItem>
				<Category>旅行</Category>
				<Category>ウェディング</Category>
				<Category>家具・インテリア</Category>
			</ListItem>
			<ListItem>
				<Category>美容・コスメ</Category>
				<Category>ライフスタイル</Category>
				<Category>自転車・バイク</Category>
			</ListItem>
		</List>
		<a href="https://form.run/@fint-instagram" target="_blank"><button>資料請求/お問い合わせはこちら</button></a>
	</Wrapper>
)

export default IntroSection
