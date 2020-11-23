import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 75px 0;
  overflow: hidden;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -12px 0 -30px;

  > div {
    width: calc(100% / 4 - 20px);
    margin: 38px 0 30px;
    border: 1px solid #ccc;
    margin: 38px 0 30px;
    padding: 24px;
    position: relative;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    @media only screen and (max-width: 1366px) {
      width: calc(100% / 4 - 15px);
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2 - 30px);
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 2 - 15px);
    }
    @media only screen and (max-width: 480px) {
      width: 90%;
      margin: 15px auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 15px;
      .feature__block .content__wrapper {
        text-align: left;
      }
    }
  }
  .feature__block {
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-direction: column;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .icon__wrapper {
      position: relative;
      img {
        width: 100%;
        border-radius: 50%;
        transition: all 0.51s;
      }
      @media only screen and (max-width: 1366px) {
        flex-direction: column;
        flex-grow: 1;
        display: flex;
      }
      @media only screen and (max-width: 480px) {
        img {
          height: initial;
        }
      }
      i {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        color: var(--color);
        transition: all 0.5s cubic-bezier(0.75, -0.5, 0, 1.75);
        &.plus {
          top: 0;
          left: 0;
          transform: translate(20px, 20px) scale(0.1) rotate(-180deg);
        }
        &.circle {
          top: 0;
          right: 0;
          transform: translate(-20px, 20px) scale(0.1) rotate(-180deg);
        }
        &.star {
          bottom: -5px;
          left: calc(50% - 8px);
          transform: translate(0, -20px) scale(0.1) rotate(-180deg);
        }
      }
    }
    .content__wrapper {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      @media only screen and (max-width: 1366px) {
        padding-left: 0px;
      }
      @media only screen and (max-width: 767px) {
        padding: 20px 0 0;
      }
      h3 {
        color: ${themeGet('colors.heading')};
        font-size: 19px;
        line-height: 30px;
        font-weight: 790;
        margin: 10px;
        @media only screen and (max-width: 1366px) {
          font-size: 18px;
          margin-bottom: 5px;
          margin: 10px;
        }
      }
      p {
        color: ${themeGet('colors.textColor')};
        font-size: 16px;
        line-height: 25px;
        margin: 10px;
        padding-bottom: 40px;
      }
      .button__wrapper {
        text-align: center;
        margin-top: auto;
      }
      .feature-btn {
        border-radius: 25px;
      }
    }
    &:hover {
      .icon__wrapper {
        i {
          opacity: 1;
          visibility: visible;
          &.plus {
            transform: translate(-4px, -4px) scale(1) rotate(180deg);
          }
          &.circle {
            transform: translate(4px, -4px) scale(1) rotate(180deg);
          }
          &.star {
            transform: translate(0, 13px) scale(1) rotate(180deg);
          }
        }
        img {
          border-radius: 5px;
        }
      }
    }
  }
`;

export default SectionWrapper;
