import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterArea = styled.footer`
  padding: 15px 0 40px;

  background-color: ${themeGet('colors.dark gray', '#a6a6a6')};
  @media only screen and (max-width: 1366px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }
  .logo {
    img {
      width: 200px;
      // max-height: 20px;
      margin-left:650px;
    }
  }
`;

export const WidgetArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1008px;
  width: 100%;
  margin: 0 auto;
  // border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .col {
    width: calc(100% / 5);
    text-align: center;
    // padding: 0 21px;
    // margin-bottom: 50px;
    @media only screen and (max-width: 991px) {
      padding: 0 15px;
    }
    @media only screen and (max-width: 667px) {
      width: calc(100% / 2);
      padding: 0 20px;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }

    img {
      display: inline-block;
      margin-bottom: 25px;
      width: 20px;
    } @media only screen and (max-width: 480px) {
      width: 100%;
    }

    h3 {
      color: ${themeGet('colors.white', '#ffffff')};
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      @media only screen and (max-width: 1366px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media only screen and (max-width: 480px) {
        font-size: 18px;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.4);
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 0;
      @media only screen and (max-width: 480px) {
        font-size: 15px;
        line-height: 26px;
      }
    }
  }
`;

export const MenuArea = styled.div`
  .pointer-cursor {
    cursor: pointer;
  }
  .contact-items {
    position: fixed;
    bottom: 0px;
    right: 0;
    width: 301px;
    height: auto;
    background: #f3f3f3;
    font-weight: 700;
    transform: translateX(100%);  
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transition: transform 0.6s ease;
    -webkit-transition: transform 0.6s ease;
    -ms-transition: transform 0.6s ease;
    padding: 10px;
    border: solid 1px #ddd label {
      display: inline-block;
      max-width: 100%;
      margin-bottom: 5px;
      font-size: 15px;
    }
    input,
    textarea {
      background: transparent;
      width: 100%;
      margin-bottom: 10px;
      border: solid 1px #0f2137;
      padding: 10px;
    }
    button {
      background: #0f2137;
      border: 0;
      color: #fff;
      padding: 10px 15px;
    }
    .close-btn {
      margin-bottom: 10px;
      width: 100%;
      text-align: right;
      font-size: 20px;
      background: transparent;
      color: #0f2137;
      padding: 0;
      font-weight: bold;
    }
  }
  .formOpen {
    transform: translateX(0);
    padding-top: 10px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  @media only screen and (max-width: 1366px) {
    padding-top: 50px;
  }
  > a {
    margin-right: 0;
  }
`;

export const Menu = styled.ul`
  // display: flex;
  align-items: right;
  justify-content: right;
  // flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  @media only screen and (max-width: 667px) {
    margin-top: 20px;
  }
`;

export const MenuItem = styled.li`
  
  @media only screen and (max-width: 667px) {
    margin: 1px 15px;
  }
  a {
    color: ${themeGet('colors.white', '#ffffff')};
    transition: all 0.3s ease;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const MenuItemm = styled.li`
  margin: 0 18px;
  @media only screen and (max-width: 667px) {
    margin: 5px 15px;
  }
  a {
    color: ${themeGet('colors.white', '#ffffff')};
    transition: all 0.3s ease;
    margin-left: 20px;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const CopyrightText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0;
  font-size: 14px;
  a {
    color: ${themeGet('colors.white', '#ffffff')};
    transition: all 0.3s ease;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export default FooterArea;
