import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterArea = styled.footer`
  padding: 15px 0 40px;

  background-color: ${themeGet('colors.dark gray', '#171b09')};
  @media only screen and (max-width: 1366px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }
  .column {
    float: left;
    width: 25%;
    padding: 10px;
    height: 50%;
  }
  .row {
    color: white !important;
    margin-top: 4%;
    margin-left: 4%;
  }
  .row .social {
    padding-left: 17%;
  }
  @media only screen and (max-width: 1366px) {
    margin-left:2%;
  }
  @media only screen and (max-width: 999px) {
    margin-left:2%;
  }
  @media only screen and (max-width: 667px) {
    margin-left:2%;
  }
  @media only screen and (max-width: 480px) {
    margin-left:2%;
  }

  .row a {
    color: #ccc;
    padding: 20px;
  }

  #copyright {
    text-align: center;
  }
  /* Clear floats after the columns */
  .row:after {
    content: '';
    display: table;
    clear: both;
  }

  .logo {
    img {
      width: 240px;
    }
    @media only screen and (max-width: 1366px) {
    }
    @media only screen and (max-width: 999px) {
    }
    @media only screen and (max-width: 667px) {
    }
    @media only screen and (max-width: 480px) {
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
    // margin-top:3%;
    width: calc(100% / 6);
    text-align: center;

    // padding: 0 21px;
    // margin-bottom: 50px;
    @media only screen and (max-width: 991px) {
      padding: 0 15px;
    }
    @media only screen and (max-width: 667px) {
      width: calc(100% / 6);
      padding: 0 20px;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }

    img {
      display: inline-block;
      margin-bottom: 25px;
      width: 20px;
    }
    @media only screen and (max-width: 480px) {
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
    padding: 0px;
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
      margin-top: 2px;
      margin-bottom: 10px;
      border: 0.3px #0f2137;
      box-shadow: 2px solid gray;
      border: 0px solid;
      padding: 10px;
      box-shadow: 1px 3px #888888;
      // padding: 10px;
    }
    button {
      background: #272b1c;
      border: 0;
      color: #fff;
      padding: 10px 15px;
    }
    .close-btn {
      margin-bottom: 10px;
      width: 100%;
      text-align: right;
      font-size: 30px;
      background: transparent;
      color: #272b1c;
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
    padding-top: 10px;
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
