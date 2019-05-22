import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const Top = styled.div`
  height: 480px;
  margin: auto;
  background: no-repeat;
  background-size: cover;
  background-image: url('/img/fv.png');
`
const Container = styled.div`
  height: 352px;
  margin: auto;
  padding: 64px 0;
  width: 900px;
`
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Top>
          <Container>
            <h1>Instagram Blog</h1>
          </Container>
        </Top>
        <BlogRoll />
      </Layout>
    )
  }
}
