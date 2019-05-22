import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const H2 = styled.h2`
  font-size: 19px !important;
  font-weight: 700 !important;
  line-height: 28px !important;
  text-align: left !important;
  color: #000 !important;
  &:hover {
    text-decoration: underline !important;
  }
`

const PublishDate = styled.small`
  display: block !important;
  font-size: 12px !important;
  font-weight: 300px !important;
  margin: 12px 0 6px !important;
  color: #AAA !important;
`

const Ul = styled.ul `
  margin: auto !important;
  padding: 64px 0 !important;
  display: flex !important;
  flex-wrap: wrap !important;
  width: 952px !important;
`

const Li = styled.li`
  width: 424px !important;
  margin: 40px 26px 0 !important;
  list-style: none !important;
  justify-content: space-between !important;
`

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Ul>
        {posts &&
          posts.map(({ node: post }) => (
            <Li key={post.id}>
              <Link to={post.fields.slug}>
                {post.frontmatter.featuredimage ? (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${
                        post.title
                      }`,
                    }}
                  />
                ) : null}
                <PublishDate>{post.frontmatter.date}</PublishDate>
                <H2>{post.frontmatter.title}</H2>
              </Link>
            </Li>
          ))}
      </Ul>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost

              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
