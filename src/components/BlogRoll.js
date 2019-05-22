import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const PostCell = styled.article``

const TitleLink = styled(Link)`
  color: #080808;
  font-weight: 600;
  font-size: 15px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 18px;
  overflow: hidden;
  margin-top: 8px;
  :hover {
    text-decoration: underline;
  }
`

const PublishDate = styled.p`
  margin-top: 6px 0 0 0;
  color: #CBCBCB;
  font-size: 10px;
`

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <PostCell>
                <div style={{ height: `${194}px`, backgroundColor: 'rgb(242, 242, 242)', overflow: 'hidden' }}>
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
                </div>
                <p className="post-meta">
                  <PublishDate>
                    {post.frontmatter.date}
                  </PublishDate>
                  <TitleLink to={post.fields.slug}>
                    {post.frontmatter.title}
                  </TitleLink>
                </p>
              </PostCell>
            </div>
          ))}
      </div>
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
