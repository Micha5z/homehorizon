import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import styled from 'styled-components'
import Logo from '../images/Logo.png'
import LogoMobile from '../images/LogoMobile.png'
import MenuIcon from '../images/menu.inline.svg'
import CloseIcon from '../images/x.inline.svg'
import { Facebook, Instagram } from 'react-feather'
import useDocumentScrollThrottled from '../utils/useDocumentScrollThrottled'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2.2rem 1.25rem;
  width: 100%;
  z-index: 30;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.backgroundColor};
  border-bottom: 1px solid ${({ theme }) => theme.concreteGray};
  transition: background-color 0.25s ease;
  font-family: 'Cormorant', serif;
  letter-spacing: 2px;
`

const StyledNav = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  > * + * {
    margin-left: 24px;
  }

  a {
    color: #676767;           /* kolor linków */
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 960px) {
    position: fixed;
    top: 0px;
    right: ${({ open }) => (open ? '0px' : '-100%')};
    flex-direction: column;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.grey1};
    width: 100%;
    height: 100%;
    z-index: 999;
    padding: 4rem;
    overflow: auto;
    box-shadow: ${({ theme }) => theme.shadows.huge};
    transition: right 0.25s ease;

    > * + * {
      margin-left: 0;
      margin-top: 16px;
    }

    a {
      color: #676767;       /* mobile linki też */
      font-size: 1.2rem;
    }
  }
`

const StyledNavTitleWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: #676767;  /* kolor ikon social media */
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const StyledHomeLink = styled(Link)`
  max-height: 48px;
  display: flex;
  align-items: center;
`

const MenuToggle = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey9};
  display: none;
  z-index: 9999;
  width: 24px;
  height: 24px;

  @media (max-width: 960px) {
    display: initial;
    position: ${({ open }) => (open ? 'fixed' : 'relative')};
    right: ${({ open }) => (open ? '1.5rem' : 'initial')};
    top: ${({ open }) => (open ? '1.5rem' : 'initial')};
  }
`

const StyledCloseIcon = styled(CloseIcon)`
  path {
    stroke: ${({ theme }) => theme.textColor};
  }
`

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.textColor};
  }
`

const Header = () => {
  const node = useRef()
  const button = useRef()
  const [isMenuOpen, updateIsMenuOpen] = useState(false)
  const [headerBG, setHeaderBG] = useState(false)
  const isMobile = useMediaQuery('only screen and (max-width: 960px)')

  const handleInstagramClick = () => window.open('https://instagram.com/', '_blank')
  const handleFacebookClick = () => window.open('https://www.facebook.com/', '_blank')

  useDocumentScrollThrottled(({ currentScrollTop }) => {
    setHeaderBG(currentScrollTop > 2)
  })

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const originalStyle = window.getComputedStyle(document.body).overflow
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden'
      }
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current?.contains(e.target) || button.current?.contains(e.target)) return
      updateIsMenuOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <StyledHeader open={isMenuOpen} showBG={headerBG}>
      <StyledNavTitleWrapper>
        <StyledHomeLink to="/" style={{ textDecoration: 'none' }}>
          <img alt="logo" className="myLogo" src={isMobile ? LogoMobile : Logo} />
        </StyledHomeLink>
      </StyledNavTitleWrapper>

      {/* Desktop links */}
      {!isMobile && (
        <StyledNav>
          <Link to="/oferta">OFERTA</Link>
          <Link to="/kontakt">KONTAKT</Link>
          <StyledButton onClick={handleFacebookClick}><Facebook size={20} /></StyledButton>
          <StyledButton onClick={handleInstagramClick}><Instagram size={20} /></StyledButton>
        </StyledNav>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <>
          <MenuToggle ref={button} open={isMenuOpen} onClick={() => updateIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <StyledCloseIcon /> : <StyledMenuIcon />}
          </MenuToggle>

          <StyledNav ref={node} open={isMenuOpen}>
            <img alt="logo" className="myLogo" src={Logo} />
            <Link to="/oferta">OFERTA</Link>
            <Link to="/kontakt">KONTAKT</Link>
            <StyledButton onClick={handleFacebookClick}><Facebook size={20} /></StyledButton>
            <StyledButton onClick={handleInstagramClick}><Instagram size={20} /></StyledButton>
          </StyledNav>
        </>
      )}
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
