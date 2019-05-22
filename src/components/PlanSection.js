import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: #69A6B8;
`

const Container = styled.div`
  margin: auto;
  padding: 64px 0;
  width: 900px;
`

const H2 = styled.h2`
  color: #FFF;
`
const Plans = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
`

const Plan = styled.div`
  width: 272px;
  background-color: #FFF;
`
const PlanTitle = styled.p`
  font-size: 22px;
  text-align: center;
  padding: 18px 0;
`

const Tax = styled.p`
  font-size: 16px;
  text-align: right;
  margin: 16px 59px 24px 0;
`

const MonthlyAmount = styled.p`
  font-size: 25px;
  text-align: center;
  margin-top: 32px;
  span {
    font-size: 36px;
    font-weight: 700;
    margin-right: 6px;
  }
`

const Description = styled.p`
  padding: 16px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  width: auto;
  margin: 0 20px;
`

const Ul = styled.ul`
  width: 200px;
  margin: 32px auto 48px;
`

const Li = styled.li`
  font-size: 14px;
  margin-top: 16px;
  color: #000000;
  &:before {
    content: "";
    display: inline-block;
    transform: rotate(45deg);
    height: 9px;
    width: 4px;
    border-color: #000;
    border-bottom: 3px solid #333;
    border-right: 3px solid #333;
    margin: 0 12px 1px 0;
  }
`

const PlanSection = () => (
	<Wrapper id="plan">
		<Container>
			<H2>料金プラン</H2>
			<Plans>
				<Plan id="cP1">
					<PlanTitle style={{ backgroundColor: '#C4DD6E' }}>制作/運用プラン</PlanTitle>
					<MonthlyAmount style={{ color: '#C4DD6E' }}><span>50</span>万円~/月</MonthlyAmount>
					<Tax>*税抜価格</Tax>
					<Description style={{ backgroundColor: '#C4DD6E' }}>商品などの撮影を弊社で行い、写真制作から投稿や企画、レポートすべて運用代行いたします。</Description>
					<Ul>
						<Li>初期体制構築</Li>
						<Li>運用初期プラン立案</Li>
						<Li>写真制作</Li>
						<Li>投稿文章/ハッシュタグ設計</Li>
						<Li>ストーリーズの企画</Li>
						<Li>投稿</Li>
						<Li>レポート</Li>
					</Ul>
				</Plan>
				<Plan id="cP2">
					<PlanTitle style={{ backgroundColor: '#FDDC41' }}>画像選出/運用プラン</PlanTitle>
					<MonthlyAmount style={{ color: '#FDDC41' }}><span>30</span>万円~/月</MonthlyAmount>
					<Tax>*税抜価格</Tax>
					<Description style={{ backgroundColor: '#FDDC41' }}>Instagram上の投稿写真から選定し、利用許諾を取得した上で投稿や企画、レポートまでを運用代行いたします。</Description>
					<Ul>
						<Li>初期体制構築</Li>
						<Li>運用初期プラン立案</Li>
						<Li>写真選定/利用許諾取得</Li>
						<Li>投稿文章/ハッシュタグ設計</Li>
						<Li>ストーリーズの企画</Li>
						<Li>投稿</Li>
						<Li>レポート</Li>
					</Ul>
				</Plan>
				<Plan id="cP3">
					<PlanTitle style={{ backgroundColor: '#E390D0' }}>基本運用プラン</PlanTitle>
					<MonthlyAmount style={{ color: '#E390D0' }}><span>20</span>万円~/月</MonthlyAmount>
					<Tax>*税抜価格</Tax>
					<Description style={{ backgroundColor: '#E390D0' }}>投稿する素材をご用意していただき、投稿文章/ハッシュタグ設計から投稿や企画、レポートまでを運用代行いたします。</Description>
					<Ul>
						<Li>初期体制構築</Li>
						<Li>運用初期プラン立案</Li>
						<Li>投稿文章/ハッシュタグ設計</Li>
						<Li>ストーリーズの企画</Li>
						<Li>投稿</Li>
						<Li>レポート</Li>
					</Ul>
				</Plan>
			</Plans>
		</Container>
	</Wrapper>
)

export default PlanSection
