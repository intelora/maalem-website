import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 700px;
  overflow: hidden;
  position: relative;
  z-index: 99;
  background-image: -moz-linear-gradient(
    139deg,
    rgb(24, 117, 12) 0%,
    rgb(0, 63, 135) 100%
  );
  background-image: -webkit-linear-gradient(
    139deg,
    rgb(24, 117, 12) 0%,
    rgb(0, 63, 135) 100%
  );
  background-image: -ms-linear-gradient(
    139deg,
    rgb(24, 117, 12) 0%,
    rgb(0, 63, 135) 100%
  );
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 1099px) {
    min-height: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 90px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(700px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
      margin-top: 35px;
      align-items: flex-start;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      div {
        width: 100%;
      }
    }
  }
  .download-container {
    text-align: center;
  }
  .bannerBottomShape {
    width: 20%;
    position: absolute;
    right: 0;
    bottom: -2px;
    @media only screen and (max-width: 999px) {
      display: none;
    }
  }
`;

export const BannerContent = styled.div`
  width: 50%;
  flex-shrink: 0;
  @media only screen and (max-width: 1199px) {
  }

  @media only screen and (max-width: 999px) {
    //width: 100%;
  }

  h1 {
    font-size: 46px;
    line-height: 55px;
    font-weight: 700;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    /* @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 20px;
    } */
    @media only screen and (max-width: 1366px) {
      font-size: 1.8rem;
      line-height: 2rem;
      margin-bottom: 20px;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    line-height: 29px;
  }
`;

/* export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  color: ${themeGet('colors.menu', '#0D233E')};

  .rating {
    margin-right: 10px;
    .star {
      color: ${themeGet('colors.white', '#fff')};
    }
    .star-o {
      color: #e8e8e8;
    }
  }

  img {
    margin-left: 9px;
  }
`; */

export const BannerImage = styled.div`
  flex-shrink: 0;
  img {
    //max-width: 55%;
    max-width: 70%;
    margin-left: 70px;
    @media only screen and (max-width: 1440px) {
      margin-top: 50px;
    }
    @media only screen and (max-width: 1199px) {
      margin-left: 2%;
      margin-bottom: 50px;
    }
    @media only screen and (max-width: 999px) {
      max-width: 55%;
      margin-top: 50px;
    }

    @media only screen and (max-width: 468px) {
      display: none;
      margin-right: 100px;
    }
  }
`;

export const ButtonGroup = styled.div` 
  .reusecore__button {
    text-transform: inherit;
    border-radius: 25px;
    // margin-bottom:254px;
    width: 200px;
    height: 10px;
    font-weight: 700;
    // margin-bottom:20%;
    font: initial;
    margin-top: 5%; 

    &.primary {
      position: relative;
      color: '#ffffff'; 
      border: 2px solid rgb(0 146 2);

      // left:50px;
      //background-color: ${themeGet('colors.white', '#18750C')};
      //color: ${themeGet('colors.black', '#00000')};
      font-size: 19px;
      font-family: Arial, Helvetica, sans-serif;
      letter-spacing: -0.1px;
      // padding: 1px 0px;
      text-align: center;
      // margin-bottom:200px;
      display: inline-block;
      &:hover {
        box-shadow: #1e2a4a 0px 12px 24px -10px;
      }
    }

    &.text {
      position: absolute;
      font-family: Arial, Helvetica, sans-serif;
      // top:300px;
      font-size: 16px;
      color: ${themeGet('colors.black', '#00000')};

      font-weight: bold;
      .btn-icon {
        i {
          color: #00000;
        }
        svg {
          width: 50%;
          height: 25px;
        }
      }
    }
    @media only screen and (max-width: 1440px) {
      // display: none;
      // margin-right: 10px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 1199px) {
      // display: none;
      // margin-right: 10px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 999px) {
      // display: none;
      // margin-right: 10px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 468px) {
      // display: none;
      // margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`;
/* export const VideoGroup = styled.div`
  display: flex;
  margin-top: 60px;
  @media only screen and (max-width: 768px) {
    margin-top: 45px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  img {
    margin-right: 500px;
    max-width: 100%;
    object-fit: content;
    cursor: pointer;
    height: 100%;
    @media only screen and (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;
export const VideoWrapper = styled.div`
  max-width: 100%;
  width: 900px;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`; */
export const CustomerWrapper = styled.div`
  max-width: 850px;
  padding: 0px 0 70px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    padding: 0px 0 55px;
  }
  @media only screen and (max-width: 1099px) {
    //padding: 55px 0 55px;
    max-width: 920px;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 25px 0 40px;
  }

  p {
    margin: 0 12px 0 0;
    color: ${themeGet('colors.menu', '#0D233E')};
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 55%;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }
  img {
    margin: 0 12px;
    margin-right: 400px;
    @media only screen and (max-width: 667px) {
      margin: 5px 10px;
    }
  }
`;
export default BannerWrapper;
