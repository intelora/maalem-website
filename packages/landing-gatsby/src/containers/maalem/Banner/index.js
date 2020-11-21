/* eslint-disable */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Rating from 'common/src/components/Rating';
import Container from 'common/src/components/UI/Container';
import styled from 'styled-components';
import Appstore from 'common/src/assets/image/maalem/Appstore.png';
import GooglePlay from 'common/src/assets/image/maalem/GooglePlay.png';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
  ImageWrapper,
} from './banner.style';

import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';
import { base, themed } from '../../../../../common/src/components/base';

const HeadingWrapper = styled('p')(
  base,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('Heading')
);

import microsoft from 'common/src/assets/image/maalem/envato-icon.png';
import bannerImg from 'common/src/assets/image/maalem/banner2.png';
import videoBanner1 from 'common/src/assets/image/maalem/video-1.png';
//import videoBanner2 from 'common/src/assets/image/maalem/video-2.png';
import circleBorder from 'common/src/assets/image/maalem/shape.svg';
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/iAnWGwzXFUc"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      maalemJson {
        client {
          id
          title
          image {
            publicURL
          }
        }
      }
    }
  `);
  const { client } = data.maalemJson;
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 1 : 0;
  console.log('cms items ==== ===');
  
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              style={
                window.sessionStorage.getItem('lang') === 'en'
                  ? { direction: 'rtl', textAlign: 'right' }
                  : null
              }
              as="h1"
              content={cmsItems[langIndex].websiteMaalemRow5Text}
            />
            
          </Fade>
          <Fade up delay={200}>
            <Text 
            
              content={cmsItems[langIndex].websiteMaalemRow6Text}
            />
           
            <Text
              content={cmsItems[langIndex].websiteMaalemRow7Text}
            />
           
            <Text
              content={cmsItems[langIndex].websiteMaalemRow8Text}
            />
           
            <Fade up delay={300}>

          <ButtonGroup href="https://play.google.com/store/apps/details?id=com.maalem">
          <Container >
          <div class='row' style={{display:'flex',  width:"90%" 
             , height:"30%" }}>
            <div className='col'  > 
            <Image 
              type="button" 
              style={{ marginTop: '50px'}}
              src={Appstore} />
              
              </div>
            <div className='col'>
            <Image
                type="button"
                style={{ marginTop: '50px' ,marginLeft:'30px' }}
                src={GooglePlay}
              />
            </div>
          </div>
            {/* <div className='col-md-3'><a href="https://play.google.com/store/apps/details?id=com.maalem">
             
            </a></div> */}
          {/* <div className='col-md-3'><a href="https://play.google.com/store/apps/details?id=com.maalem">
              
            </a></div> */}
             </Container>
           
            <a href="https://play.google.com/store/apps/details?id=com.maalem">
              <Button
                style={{ marginLeft:'25%',
                marginTop: '8%',
               }}
                className="blue"
                title={cmsItems[langIndex].websiteMaalemRow42Text}
              />
            </a>
          </ButtonGroup>
        </Fade>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
  
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
