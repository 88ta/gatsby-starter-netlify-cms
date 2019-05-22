import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const H1 = styled.h1`
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  color: #333;
`

const Container = styled.div`
  margin: auto;
  width: 640px;
`

const Top = styled.div `
  height: 480px;
  margin: auto;
  background: no-repeat;
  background-size: cover;
  background-image: url('/img/fv.png');
`
const TopContainer = styled.div `
  height: 352px;
  margin: auto;
  padding: 64px 0;
  width: 900px;
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <React.Fragment>
      <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv='CONTENT-LANGUAGE' content="ja"/>
        <title>Instagram運用代行 - Instagram（インスタグラム）に特化したプロモーション支援のFinT -</title>
        <meta name="description" content="Sucleの運営会社FinTは、instagramのフォロワー数・認知度・売上の向上を アカウント運用によってサポートします"/>
        <meta name='KEYWORDS' content="インスタグラム,instagram,運用,代行,FinT"/>
        <meta name="viewport" content="width=1280"/>
        
        <meta property="og:locale" content="ja_JP"/>
        <meta property = "og:site_name" content = "FinTインスタグラム運用代行" />
        <meta property="og:title" content="Instagram運用代行 - Instagram（インスタグラム）に特化したプロモーション支援のFinT -"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://fint-instagram.netlify.com/"/>
        <meta property="og:image" content="https://fint-instagram.netlify.com/img/ogp.jpg"/>
        <meta property="og:description" content="Sucleの運営会社FinTは、instagramのフォロワー数・認知度・売上の向上をアカウント運用によってサポートします" />
        
        <meta content="summary_large_image" name="twitter:card"/>
        <meta content="FinTインスタグラム運用代行" name="twitter:site"/>
        <meta content="Instagram運用代行 - Instagram（インスタグラム）に特化したプロモーション支援のFinT -" name="twitter:title"/>
        <meta content="fint-instagram.netlify.com/" name="twitter:url"/>
        <meta content="Sucleの運営会社FinTは、instagramのフォロワー数・認知度・売上の向上をアカウント運用によってサポートします" name="twitter:description"/>
        <meta content="https://fint-instagram.netlify.com/img/ogp.jpg" name="twitter:image"/>
      </Helmet>
      <Container>
        <H1>{title}</H1>
        <PostContent content={content} />
      </Container>
    </React.Fragment>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Top>
        <TopContainer>
          <h1>Instagram Blog</h1>
        </TopContainer>
      </Top>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
