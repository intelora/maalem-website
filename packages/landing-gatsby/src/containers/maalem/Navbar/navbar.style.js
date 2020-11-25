import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import searchIcon from 'common/src/assets/image/appClassic/search.svg';

const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 10px 0 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.102);
  position: fixed;
  z-index: 9999;
  transition: all 0.3s ease;
  ul.scrollspy__menu.menu.navbar li,
  ul.scrollspy__menu.menu.navbar li a:focus {
    // font-weight: bold;
    transition: all 0.3s ease;
    // font-size: 18px;
    text-decoration: underline;
    color: #daa747;
  }
  @media only screen and (max-width: 1366px) {
    padding: 10px 0 25px;
  }
  > div.container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .main-logo {
      img {
        width: 200px;
        height: auto;
      }
    }
    .logo-alt {
      width: 200px;
      height: 60px;
      display: none;
    }
  }
  ul {
    li {
      a {
        color: ${themeGet('colors.menu', '#fffff')};
        font-size: 16px;
        font-weight: 400;
        transition: all 0.3s ease;
        &:hover {
          // font-weight: bold;
        }
      }
      &.is-current {
        a {
          font-weight: 700;
          color: yellow;
        }
      }
    }
  }
`;

export const MenuArea = styled.div`
  display: flex;
  align-items: center;
  .menu {
    display: flex;
    align-items: center;
    margin-right: 11px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    @media only screen and (max-width: 1366px) {
      margin-right: 13px;
    }
    @media only screen and (max-width: 991px) {
      display: none;
    }
    li {
      margin: 0 19px;
      @media only screen and (max-width: 1366px) {
        margin: 0 17px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &.active {
    .menu {
      opacity: 0;
      visibility: hidden;
      color: ${themeGet('colors.menu', '#fffff')};
    }
    .search {
      form {
        opacity: 1;
        visibility: visible;
      }
      input {
        width: 320px;
        @media only screen and (min-width: 1367px) {
          width: 350px;
        }
        @media only screen and (max-width: 480px) {
          width: calc(100vw - 122px);
        }
      }
    }
  }
  .reusecore__button {
    border-radius: 5px;
    font-weight: 500;
    text-transform: inherit;
    padding-left: 13px;
    padding-right: 13px;
    min-height: 40px;
    //border-radius: 25px;
    margin-left: 50px;

    &.text {
      padding: 0;
      margin-right: 28px;
      cursor: pointer;
      .btn-icon {
        svg {
          width: 22px;
          height: auto;
          stroke: ${themeGet('colors.menu', '0D233E')};
          @media only screen and (max-width: 991px) {
            width: 24px;
          }
        }
      }
      @media only screen and (max-width: 1366px) {
        margin-right: 20px;
      }
      @media only screen and (max-width: 991px) {
        margin-right: 0;
      }
    }
    &.trail {
      &:hover {
        box-shadow: #18750c 0px 12px 24px -10px;
      }
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
    &.menubar {
      display: none;
      @media only screen and (max-width: 991px) {
        display: inline-flex;
        padding: 0;
        justify-content: flex-end;
        min-width: 35px;
        color: #00000;
        svg {
          width: 27px;
          height: auto;
        }
      }
    }
  }

  .navbar {
    overflow: hidden;
  }

  .navbar a {
    float: left;
    // font-size: 16px;
    color: white;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }
  ul.scrollspy__menu.menu.navbar {
    box-shadow: none;
  }
  .dropdown {
    float: left;
    overflow: hidden;
  }

  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: black;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-image: -webkit-linear-gradient(
      139deg,
      rgb(100, 43, 115) 0%,
      rgb(198, 66, 110) 100%
    );
    z-index: 1;
    margin-top: 30px;
    border-top: solid #343d48;
  }
  .bgGradient {
    background-image: -webkit-linear-gradient(
      139deg,
      rgb(100, 43, 115) 0%,
      rgb(198, 66, 110) 100%
    );
  }
  .dropdown-content a {
    float: none;
    color: #00000;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  // .dropdown-content a:hover {
  //   background-color: #eee;
  //   color: #000000;
  // }

  // .dropdown:hover .dropdown-content {
  //   display: inline-block;
  // }
`;

export const Search = styled.div`
  position: relative;
  display: none;
  align-items: center;
  form {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    right: 100%;
  }
  input {
    width: 0px;
    height: 46px;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 15px;
    color: ${themeGet('colors.menu', '0D233E')};
    background-color: ${themeGet('colors.light', '#FAFBFF')};
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: calc(100% - 15px) center;
    background-size: 16px;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
    &::placeholder {
      color: ${themeGet('colors.textColor', 'rgba(52, 61, 72, 0.8)')};
    }
    &:focus {
      //border-color: ${themeGet('colors.primary', '#2563FF')};
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    width: 100%;
    text-transform: uppercase;
    height: calc(100vh - 70px);
    padding: 27px 0 40px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 82px;
    flex-direction: column;
    background-color: ${themeGet('colors.white', '#ffffff')};
    transition: all 0.2s ease;
    color: ${themeGet('colors.secondary', '#000')};
    &.active {
      opacity: 1;
      visibility: visible;
      height: auto;
      box-shadow: 0 3px 12px
        ${themeGet('colors.shadow', 'rgba(38, 78, 118, 0.1)')};
    }
    .container {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    ul {
      padding-bottom: 20px;
      li {
        a {
          display: block;
          padding: 13px 0;
          border-radius: 5px;
          transition: all 0.3s ease;
          color: ${themeGet('colors.secondary', '#000')};
        }
        &:hover {
          a {
            padding: 13px 15px;
            color: ${themeGet('colors.primary')};
          }
        }
      }
    }
    .reusecore__button {
      width: 100%;
      border-radius: 5px;
      @media only screen and (max-width: 480px) {
        margin-top: 20px;
      }
    }
  }
`;

export default NavbarWrapper;
