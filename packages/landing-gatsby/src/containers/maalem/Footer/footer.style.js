import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import FooterIamge from 'common/src/assets/image/maalem/footer/footer_bg.svg';

const FooterWrapper = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  padding: 120px 0;
  background-image: url(${FooterIamge});
  background-repeat: no-repeat;
  background-position: 100% center;
  border-top: 1px solid #707070;
  overflow: hidden;
  //background-color: #212141;
  background-color: #001f01;
  background-position: bottom right;
  background-repeat-x: repeat;
  z-index: 1;
  @media (max-width: 1440px) {
    padding: 80px 0 60px;
  }
  @media (max-width: 990px) {
  }
  @media (max-width: 767px) {
  }

  .Language_search_select {
    max-width: 135px;
    @media (max-width: 575px) {
      height: 52px;
      margin-bottom: 20px;
    }
    @media (max-width: 480px) {
      height: 20px;
      margin-bottom: 0px;
    }
    .select__control,
    .select-field__wrapper {
      height: 100%;
    }
    .select__control {
      padding: 0 15px 0 0px;
      box-shadow: none;
      position: relative;
      border-color: transparent;
      background: transparent;
      @media (min-width: 576px) {
        border-color: transparent;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        &:before {
          content: '';
          position: absolute;
          width: 1px;
          height: 55%;
          background: transparent;
          display: block;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }

      .select__placeholder {
        font-size: 16px;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
      }
      .select__indicator {
        color: #fff;
      }
      .select__value-container {
        padding: 0;
        .select__single-value {
          font-size: 16px;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 400;
        }
      }
    }
    .select__indicator-separator {
      display: none;
    }
  }
  .appDownload {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .imageWrapper {
    display: flex;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
    img {
      margin-right: 15px;
      @media (max-width: 1200px) {
        margin-bottom: 15px;
        margin-right: 0;
        width: 150px;
      }
    }
  }
  .copyRight {
    margin-top: 120px;
    margin-left: 0;
    margin-right: 0;
    //width: calc(100% - 80px);
    @media (max-width: 1440px) {
      margin-top: 80px;
    }
    @media (max-width: 768px) {
      width: calc(100% - 20px);
      margin-top: 60px;
    }
    @media (max-width: 600px) {
      margin-top: 20px;
    }
    .copyRightText {
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      color: #fff;
      @media (max-width: 480px) {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
    .footer_social {
      margin-left: auto;
      //margin-top: -15px;
      @media (max-width: 600px) {
        margin-left: 0;
        margin-top: 15px;
      }
      a {
        &:hover {
          color: #fff;
          opacity: 0.85;
        }
      }
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  font-family: Arial, Helvetica, sans-serif;
  a {
    color: #fff;
    font-size: 18px;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      opacity: 0.85;
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 104px;
  margin-top: 45px;
  position: relative;
  min-height: 24px;
  @media only screen and (max-width: 1440px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 1360px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 991px) {
    margin-top: 20px;
  }

  select {
    border: 0;
    outline: none;
    background: transparent;
    appearance: none;
    color: ${themeGet('colors.select', '#525F7F')};
    //color: #f5deb3;
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    z-index: 1;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
  }

  svg {
    position: absolute;
    top: 1px;
    right: 10px;
    path {
      fill: ${themeGet('colors.secondaryText', '#616970')};
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
