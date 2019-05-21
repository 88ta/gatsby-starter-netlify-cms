import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
	background-color: #69A6B8;
	padding: 16px 16px 12px;
`

const Logo = styled.img`
		height: 24px;
`

const StyledLink = styled.a`
	line-height: 24px;
	margin-right: 14px;
`

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <Header
        role="navigation"
        aria-label="main-navigation"
      >
        <div style={{ justifyContent: 'space-between' }}>
          <Logo src="img/fint.svg" alt="Fint-logo" />
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div>
			     	<StyledLink href="#trouble">お悩み</StyledLink>
			     	<StyledLink href="#strength">FinTの強み</StyledLink>
			     	<StyledLink href="#case">導入事例</StyledLink>
			     	<StyledLink href="#plan">料金プラン</StyledLink>
			     	<StyledLink href="#flow">ご利用の流れ</StyledLink>>
          </div>
        </div>
      </Header>
    )
  }
}

export default Navbar
