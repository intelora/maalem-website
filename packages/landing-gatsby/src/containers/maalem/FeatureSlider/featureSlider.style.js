import styled from 'styled-components';
import Mockup from 'common/src/assets/image/app/iphone-mockup.png';
import MockupBgImg from 'common/src/assets/image/maalem/footer/apply-now_bg.png';

const FeatureSliderWrapper = styled.div`
  position: relative;
  padding-top: 75px;
  //background: #ffffff;
  background-image: url(${MockupBgImg});
  background-size: initial;
  .image-gallery-content {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 1440px) {
  }
  .FeatureSlider {
    //padding-top: 200px;
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;

    .image-gallery {
      position: relative;
      z-index: 2;
    }
    @keyframes pulsei {
      0% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
        border: 1px solid rgba(0, 0, 0, 0.5);
        opacity: 1;
        width: 5%;
        padding-bottom: 5%;
      }

      100% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
        opacity: 0;
        width: 67%;
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding-bottom: 67%;
      }
    }

    .image-gallery-slide-wrapper {
      /* width: 230px;
      height: 450.33px; */
      /* margin-left: auto;
      margin-right: auto; */
      width: 280px;
      height: 550px;
      position: relative;

      &::before {
        content: '';
        background-image: url(${Mockup});
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &:after {
        content: '';
        width: calc(100% - 20px);
        height: calc(100% - 10px);
        top: 50%;
        left: 50%;
        transform: translate(-52%, -50%);
        box-shadow: 0 0 68px rgba(0, 0, 0, 1);
        display: block;
        position: absolute;
        border-radius: 35px;
        margin-top: 1px;
      }
      .image-gallery-swipe {
        //padding: 19px 24px 22px 23px;
        padding: 13px 19px 16px 18px;
        overflow: hidden;
      }
    }
    .image-gallery-thumbnails-wrapper {
      position: static;
      //border: 1px solid yellow;
      display: flex;
      width: 40%;
      .image-gallery-thumbnails {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background: #ffffff;
        width: 100%;
        margin: auto;
        overflow: initial;
        padding: 0;
      }
      @media only screen and (max-width: 480px) {
        width: 100%;
      }
      @media only screen and (max-width: 425px) {
        width: 80px;
      }
      .image-gallery-thumbnails-container {
        display: flex;
        flex-direction: column;
        .image-gallery-thumbnail + .image-gallery-thumbnail {
          margin-left: 0;
        }
        .image-gallery-thumbnail {
          border: 0;
          width: 100%;
          .image-gallery-thumbnail-inner {
            outline: none;
            display: flex;
            padding: 15px 0;
            align-items: center;
            border-bottom: 1px solid #e9e9e9;
            padding: 24px;
            height: 90px;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
            &:focus {
              outline: none;
            }
            @media only screen and (max-width: 480px) {
              height: initial;
              padding: 15px;
            }
            @media only screen and (max-width: 425px) {
              /* padding: 0;
              margin-bottom: 10px; */
            }
          }
          img {
            transition: all 0.35s ease;
            width: 20%;
            margin-right: 30px;
            @media only screen and (max-width: 425px) {
              width: 50px;
            }
          }

          /* &:nth-child(1) { 
            order: 3;
          }
          &:nth-child(2) { 
          }
          &:nth-child(3) {
          }
          &:nth-child(4) {
            order: 4 
          } */
          .image-gallery-thumbnail-label {
            //text-transform: uppercase;
            font-size: 1.3em;
            position: initial;
            padding: 0;
            line-height: initial;
            top: initial;
            color: #0f2137;
            //font-family: 'Arial,Helvetica,sans-serif';
            text-shadow: none;
            transform: none;
            white-space: normal;
            //width: 100%;
            width: auto;
            @media only screen and (max-width: 425px) {
              display: none;
            }
          }
          @media only screen and (max-width: 480px) {
            font-size: 0.5rem;
          }
          &.active {
            border: 0;
            background-color: #e6faee;
            justify-content: center;
            align-items: center;
            img {
              transition: all 0.35s ease;
              transform: scale(1.4);
              border: 0;
            }
          }
        }
      }
    }
    .image-gallery-bullets {
      bottom: auto;
      margin: 0;
      position: absolute;
      width: 100%;
      z-index: 4;
      top: 43%;
      right: -65px;
      left: auto;
      display: flex;
      justify-content: flex-end;
      .image-gallery-bullets-container {
        @media only screen and (max-width: 999px) {
          display: none;
        }
        margin: 0;
        padding: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 32px;
        .image-gallery-bullet {
          appearance: none;
          border-radius: 70px;
          cursor: pointer;
          display: inline-block;
          outline: none;
          width: 19px;
          height: 4px;
          background: rgb(220, 226, 231);
          border: 0;
          box-shadow: none;
          padding: 0;
          margin: 0;
          margin-bottom: 10px;
          transition: all 0.3s ease;
          &.active {
            background-color: #18750c;
            width: 32px;
            height: 4px;
          }
        }
      }
    }

    @media only screen and (max-width: 480px) {
      .image-gallery-slide-wrapper {
        height: initial;
        &:after {
          box-shadow: none;
        }
      }
      .image-gallery-thumbnail {
        img {
          //display: none;
          margin-right: 15px !important;
        }
      }
      .image-gallery-thumbnails-wrapper {
        //width: initial;
        .image-gallery-thumbnails {
          // margin: initial;
        }
      }
    }
  }
`;
export default FeatureSliderWrapper;
