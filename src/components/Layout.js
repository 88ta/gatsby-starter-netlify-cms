import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const Base = styled.div`
  head,body {
  	top: 0;
  	right: 0;
  	bottom: 0;
  	left: 0;
  	margin: 0;
  	padding: 0;
  	width: 100%;
  	height: 100%;
    color: #000000;
  }
  
  h1, h2, h3, p, a, ul, li, button, small {
  	font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;
  	font-feature-settings: "pkna" 1;
  }
  
  h1 {
  	padding-top: 64px;
  	font-size: 40px;
  	font-weight: 700;
  	text-align: center;
  	color: #5F4B45;
  }
  
  h2 {
  	font-size: 32px;
  	font-weight: 300;
  	text-align: center;
  	color: #69A6B8;
  }
  
  h3 {
  	font-size: 25px;
  	text-align: center;
  }
  
  p {
  
  }
  
  a {
  	text-decoration: none;
  	color: #FFF;
  	font-size: 14px;
  }
  
  button {
  	display: block;
  	margin: auto;
  	padding: 16px 28px;
  	font-size: 16px;
  	font-weight: 700;
  	color: #5F4B45;
  	background-color: #C4DD6E;
  	border: none;
  	border-radius: 5px;
  	box-shadow: 0 3px 8px rgba(0,0,0,0.16);
  }
`

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Reset />
      <Base>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </Base>
    </div>
  )
}

export default TemplateWrapper
