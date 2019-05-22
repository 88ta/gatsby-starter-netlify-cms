import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Helmet } from "react-helmet"

import Layout from '../components/Layout'
import TopSection from '../components/TopSection'
import TroubleSection from '../components/TroubleSection'
import CountonSection from '../components/CountonSection'
import StrengthSection from '../components/StrengthSection'
import CaseSection from '../components/CaseSection'
import PerformanceSection from '../components/PerformanceSection'
import IntroSection from '../components/IntroSection'
import PlanSection from '../components/PlanSection'
import FlowSection from '../components/FlowSection'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <React.Fragment>
    <Helmet>
      <meta charset="UTF-8"/>
      <meta http-equiv='CONTENT-LANGUAGE' content="ja"/>
      <title>Instagram運用代行 - Instagram（インスタグラム）に特化したプロモーション支援のFinT -</title>
      <meta name="description" content="Sucleの運営会社FinTは、instagramのフォロワー数・認知度・売上の向上を アカウント運用によってサポートします"/>
      <meta name='KEYWORDS' content="インスタグラム,instagram,運用,代行,FinT"/>
      <meta name="viewport" content="width=1280"/>
      
      <meta property="og:locale" content="ja_JP"/>
      <meta property="og:site_name" content="FinTインスタグラム運用代行"/>
      <meta property="og:title" content="Instagram運用代行 - Instagram（インスタグラム）に特化したプロモーション支援のFinT -"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://fint-instagram.netlify.com/"/>
      <meta property="og:image" content="https://fint-instagram.netlify.com/img/ogp.jpg"/>
      <meta property="og:description" content="Sucleの運営会社FinTは、instagramのフォロワー数・認知度・売上の向上を アカウント運用によってサポートします"/>
      
      <meta content="summary_large_image" name="twitter:card"/>
      <meta content="FinTインスタグラム運用代行" name="twitter:site"/>
      <meta content="Instagram運用代行 - Instagram（インスタグラム）に特化したプロモーション支援のFinT -" name="twitter:title"/>
      <meta content="fint-instagram.netlify.com/" name="twitter:url"/>
      <meta content="Sucleの運営会社FinTは、instagramのフォロワー数・認知度・売上の向上を アカウント運用によってサポートします" name="twitter:description"/>
      <meta content="https://fint-instagram.netlify.com/img/ogp.jpg" name="twitter:image"/>
    </Helmet>
    <TopSection />
    <TroubleSection />
    <CountonSection />
    <StrengthSection />
    <CaseSection />
    <PerformanceSection />
    <IntroSection />
    <PlanSection />
    <FlowSection />
  </React.Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

