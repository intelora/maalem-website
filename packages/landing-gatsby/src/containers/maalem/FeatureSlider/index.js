import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import 'react-image-gallery/styles/css/image-gallery.css';
import Container from 'common/src/components/UI/Container';
import FeatureSliderWrapper from './featureSlider.style';

import Thumb2 from 'common/src/assets/image/app/a.svg';
import Thumb1 from 'common/src/assets/image/app/cap.svg';
import Thumb5 from 'common/src/assets/image/app/id.svg';
import Thumb6 from 'common/src/assets/image/app/instant-approval.png';

import Image1 from 'common/src/assets/image/maalem/product1_en.png';
import Image2 from 'common/src/assets/image/maalem/product1_ar.png';
import Image3 from 'common/src/assets/image/maalem/product2_en.png';
import Image4 from 'common/src/assets/image/maalem/product2_ar.png';
import Image5 from 'common/src/assets/image/maalem/product2_ar.png';
import Fade from 'react-reveal/Fade';
// import DomainSection from '../container/Hosting/Domain';

const FeatureSlider = ({ sectionSubTitle, sectionTitle, sectionHeader }) => {
  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 1 : 0;
  const cmsData = [
    'اختر منتج#تطبيق#أدخل المعرف# احصل على موافقة فورية ',
    'Choose A Product #Apply #Enter Your Id  #  Get Instant Approval',
  ];

  const title = [cmsData[0].split('#'), cmsData[1].split('#')]; // cmsItems[langIndex].websiteMaalemRow1Text.split('#');
  const a =
    window.sessionStorage.getItem('lang') == 'ar' ? 'Apply Now' : 'تطبيق الآن';

  const images = [
    [
      {
        original: `${Image2}`,
        thumbnail: `${Thumb2}`,
        thumbnailLabel: title[0][1],
        originalAlt: 'slide two',
        thumbnailAlt: 'thumb two',
      },
      {
        original: `${Image4}`,
        thumbnail: `${Thumb5}`,
        thumbnailLabel: title[0][2],
        originalAlt: 'slide five',
        thumbnailAlt: 'thumb five',
      },
      {
        original: `${Image5}`,
        thumbnail: `${Thumb6}`,
        thumbnailLabel: title[0][3],
        originalAlt: 'slide six',
        thumbnailAlt: 'thumb six',
      },
      {
        original: `${Image1}`,
        thumbnail: `${Thumb1}`,
        thumbnailLabel: title[0][0],
        originalAlt: 'slide one',
        thumbnailAlt: 'thumb one',
      },
    ],
    [
      {
        original: `${Image2}`,
        thumbnail: `${Thumb2}`,
        thumbnailLabel: title[1][1],
        originalAlt: 'slide two',
        thumbnailAlt: 'thumb two',
      },
      {
        original: `${Image4}`,
        thumbnail: `${Thumb5}`,
        thumbnailLabel: title[1][2],
        originalAlt: 'slide five',
        thumbnailAlt: 'thumb five',
      },
      {
        original: `${Image5}`,
        thumbnail: `${Thumb6}`,
        thumbnailLabel: title[1][3],
        originalAlt: 'slide six',
        thumbnailAlt: 'thumb six',
      },
      {
        original: `${Image1}`,
        thumbnail: `${Thumb1}`,
        thumbnailLabel: title[1][0],
        originalAlt: 'slide one',
        thumbnailAlt: 'thumb one',
      },
    ],
  ];

  return (
    <>
      <FeatureSliderWrapper>
        <Container>
          <Fade up>
            <Box {...sectionHeader}>
              <Heading content={a} style={{ textAlign: 'center' }} />
            </Box>
            <Box className="FeatureSlider">
              <ImageGallery
                items={images[langIndex]}
                className="Slider-img"
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                showBullets={true}
                autoPlay={true}
              />
            </Box>
          </Fade>
        </Container>
      </FeatureSliderWrapper>
    </>
  );
};

// FeatureSlider style props
FeatureSlider.propTypes = {
  sectionSubTitle: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionHeader: PropTypes.object,
};

// FeatureSlider default style
FeatureSlider.defaultProps = {
  sectionHeader: {},
  sectionSubTitle: {
    content: 'WHY CHOOSE US',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    //content: 'Key Features of Our App',
    //fontSize: ['20px', '24px', '24px', '24px', '30px'],
    //fontWeight: '400',
    textAlign: 'center',
    content: '',
    fontSize: ['20px', '28px', '28px', '28px', '30px'],
    fontWeight: 'bold',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
};

export default FeatureSlider;
