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
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
        {/* <HeadingWrapper >Download Mobile App</HeadingWrapper> */}
           {/* <Fade up>
            <RatingInfo>
              <Rating rating={5} />
              Maalem - The Loan Facilitation
            </RatingInfo>
          </Fade> */}
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Download Mobile App"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters 0, as opposed to using 'Content here, content here', making 0 it look like readable English. Lorem Ipsum is simply dummy text of the printing.."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Download App" />
              {/* <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Video"
              /> */}
            </ButtonGroup>
          </Fade>
          {/*<VideoGroup>
            <img
              src={videoBanner1}
              onClick={handleVideoModal}
              alt="Microsoft-0"
            />
          </VideoGroup> */}
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
      <CustomerWrapper>
        <Text content="&nbsp; &nbsp; &nbsp; &nbsp; " />
        {/* <ImageWrapper>
          {client.map((item) => (
            <Image
              key={`client-key${item.id}`}
              src={item.image.publicURL}
              alt={item.title}
            />
          ))}
        </ImageWrapper> */}
      </CustomerWrapper>
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
