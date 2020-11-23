import React, { useState, useRef } from 'react';
import { useStaticQuery, graphql, getMenuFromServer } from 'gatsby';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import { search } from 'react-icons-kit/feather/search';
import Logo from 'common/src/components/UIElements/Logo';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import useOnClickOutside from 'common/src/hooks/useOnClickOutside';
import NavbarWrapper, { MenuArea, MobileMenu, Search } from './navbar.style';
import LogoImage from 'common/src/assets/image/maalem/logo-white.png';
import LogoImageAlt from 'common/src/assets/image/maalem/logo.png';
import { cmsItems, cmsItems2, navBarData, faqData } from '../data/cmsData';

const Navbar = () => {
  if (window.sessionStorage.getItem('lang') == null) {
    window.sessionStorage.setItem('lang', 'en');
  }

  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
    navIndex: window.sessionStorage.getItem('lang') === 'en' ? 1 : 0,
  });

  function getMenuFromServer() {
    if (window.sessionStorage.getItem('menuItems') == null) {
      window.sessionStorage.setItem('menuItems', JSON.stringify(navBarData));
    }
  }
  getMenuFromServer();
  function getFaqFromServer() {
    window.sessionStorage.setItem('faqItems', JSON.stringify(faqData));
    /* if (window.sessionStorage.getItem('faqItems') == null) {
      fetch('http://122.166.172.240:1337/faqs')
        .then((res) => res.json())
        .then((result) => {
          window.sessionStorage.setItem('faqItems', JSON.stringify(result));
        });
    } */
  }
  getFaqFromServer();

  /* async function getAppData() {
    const response = await fetch(
      'http://122.166.172.240:1337/website-maalem-financings'
    );
    response
      .then((res) => res.json())
      .then((result) => {
        window.sessionStorage.setItem('cmsItems', JSON.stringify(result));
      });
  } */
  function getCMSFromServer() {
    if (window.sessionStorage.getItem('cmsItems') == null) {
      window.sessionStorage.setItem('cmsItems', JSON.stringify(cmsItems));
      window.sessionStorage.setItem('cmsItems2', JSON.stringify(cmsItems2));
    }
    /* fetch('http://122.166.172.240:1337/websitemaalemnews')
      .then((res) => res.json())
      .then((result) => {
        window.sessionStorage.setItem('cmsItems2', JSON.stringify(result));
        redirectToMaalem();
      }); */
  }
  getCMSFromServer();

  const navMenu = JSON.parse(window.sessionStorage.getItem('menuItems'));
  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = (type) => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const handleOnChange = (event) => {
    setState({
      ...state,
      search: event.target.value,
    });
  };

  const handleSearchForm = (event) => {
    event.preventDefault();

    if (state.search !== '') {
      console.log('search data: ', state.search);

      setState({
        ...state,
        search: '',
      });
    } else {
      console.log('Please fill this field.');
    }
  };

  const scrollItems = [];
  navMenu[state.navIndex].menu.menu.forEach((item) => {
    scrollItems.push(item.href);
  });

  // const handleRemoveMenu = () => {
  //   setState({
  //     ...state,
  //     mobileMenu: false,
  //   });
  // };

  const toggleLanguage = () => {
    if (window.sessionStorage.getItem('lang') == 'en') {
      document.getElementsByTagName('languagee')[0].style.direction = 'ltr';
      window.sessionStorage.setItem('lang', 'ar');
      // document.body.style.direction = "ltr";

      state.setState({ navIndex: 0 });
    } else {
      document.getElementsByTagName('body')[0].style.direction = 'rtl';
      window.sessionStorage.setItem('lang', 'en');
      state.setState({ navIndex: 1 });
    }
  };

  console.log('navMenu=', navMenu);
  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="https://maalem.com.sa/en"
          target="_blank"
          logoSrc={LogoImageAlt}
          title="Maalem Financing"
          className="main-logo"
        />
        <Logo
          href="https://maalem.com.sa/en"
          target="_blank"
          logoSrc={LogoImageAlt}
          title="Maalem Financing"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? '' : ''}>
          <ScrollSpyMenu
            className="menu navbar"
            menuItems={navMenu[state.navIndex].menu.menu}
            offset={-84}
          />

          <a
            target="_blank"
            href="http://122.166.172.240:3000/customer/signin?lang="
          >
            <Button
              title={
                window.sessionStorage.getItem('lang') == 'ar'
                  ? 'LOGIN'
                  : 'تسجيل الدخول'
              }
            ></Button>
          </a>
          {/* end of main menu */}

          <Search className="search" ref={searchRef}>
            <form onSubmit={handleSearchForm}>
              <input
                type="text"
                value={state.search}
                placeholder="Enter your keyword"
                onChange={handleOnChange}
              />
            </form>
            <Button
              className="text"
              variant="textButton"
              icon={<Icon icon={state.searchToggle ? x : search} />}
              onClick={() => toggleHandler('search')}
            />
          </Search>

          {/* end of search */}

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu[state.navIndex].menu.menu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  // onClick={handleRemoveMenu}
                >
                  {menu.item}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <Button
            class="element"
            title={
              'Change Language (' + window.sessionStorage.getItem('lang') + ') '
            }
            onClick={toggleLanguage}
          ></Button>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
