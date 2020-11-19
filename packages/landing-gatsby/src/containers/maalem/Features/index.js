import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../maalem.style';
import SectionWrapper, { FeatureWrapper } from './features.style';
import ProductImage1 from 'common/src/assets/image/maalem/immediate-financing.png';
import ProductImage2 from 'common/src/assets/image/maalem/islamic-law-finance.png';
import ProductImage3 from 'common/src/assets/image/maalem/signing_stamp.png';
import ProductImage4 from 'common/src/assets/image/maalem/integrated-digital-solutions.png';

const Features = () => {
  const data = {};
  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 1 : 0;

  const cmsItems2 = JSON.parse(window.sessionStorage.getItem('cmsItems2'));

  const cmsItemss = cmsItems2[langIndex];

  // console.log('cmsItemss',cmsItemss);
  console.log('abcd from view 2');
  return (
    <SectionWrapper id="features">
      <Container>
        <SectionHeader
        // style={
        //   window.sessionStorage.getItem('lang') === 'en'
        //     ? { direction: 'rtl', textAlign: 'right' }
        //     : null
        // }
        >
          <Fade up>
            <Heading
              as="h5"
              content={cmsItems[langIndex].websiteMaalemRow2Text}
            />
            <Heading content={cmsItems[langIndex].websiteMaalemRow3Text} />
          </Fade>
        </SectionHeader>
        <FeatureWrapper>
          {/* if(window.sessionStorage.getItem('lang') === 'ar') {
          <FeatureArabicText>
        } */}
          <Fade up delay={2000} key={`feature-key${1}`}>
            <FeatureBlock
              style={
                window.sessionStorage.getItem('lang') === 'en'
                  ? { direction: 'rtl', textAlign: 'right' }
                  : null
              }
              icon={
                <Fragment>
                  <Icon className="plus" icon={plus} />
                  <Icon className="circle" icon={mediaRecordOutline} />
                  <Image src={ProductImage1} alt="1112" />
                  <Icon className="star" icon={starOutline} />
                </Fragment>
              }
              iconPosition="left"
              title={
                <Heading
                  as="h3"
                  content={cmsItems[langIndex].websiteMaalemRow9Col1Heading}
                />
              }
              description={
                <Text
                  content={cmsItems[langIndex].websiteMaalemRow9Col1HeadingText}
                />
              }
            />
          </Fade>

          <Fade up delay={2000} key={`feature-key${2}`}>
            <FeatureBlock
              style={
                window.sessionStorage.getItem('lang') === 'en'
                  ? { direction: 'rtl', textAlign: 'right' }
                  : null
              }
              icon={
                <Fragment>
                  <Icon className="plus" icon={plus} />
                  <Icon className="circle" icon={mediaRecordOutline} />
                  <Image src={ProductImage2} alt="1112" />
                  <Icon className="star" icon={starOutline} />
                </Fragment>
              }
              iconPosition="left"
              title={
                <Heading
                  as="h3"
                  content={cmsItems[langIndex].websiteMaalemRow9Col2Heading}
                />
              }
              description={
                <Text
                  content={cmsItems[langIndex].websiteMaalemRow9Col2HeadingText}
                />
              }
            />
          </Fade>

          <Fade up delay={2000} key={`feature-key${3}`}>
            <FeatureBlock
              style={
                window.sessionStorage.getItem('lang') === 'en'
                  ? { direction: 'rtl', textAlign: 'right' }
                  : null
              }
              icon={
                <Fragment>
                  <Icon className="plus" icon={plus} />
                  <Icon className="circle" icon={mediaRecordOutline} />
                  <Image src={ProductImage3} alt="1112" />
                  <Icon className="star" icon={starOutline} />
                </Fragment>
              }
              iconPosition="left"
              title={
                <Heading
                  as="h3"
                  content={cmsItems[langIndex].websiteMaalemRow10Col1Heading}
                />
              }
              description={
                <Text
                  content={
                    cmsItems[langIndex].websiteMaalemRow10Col1HeadingText
                  }
                />
              }
            />
          </Fade>

          <Fade up delay={2000} key={`feature-key${4}`}>
            <FeatureBlock
              style={
                window.sessionStorage.getItem('lang') === 'en'
                  ? { direction: 'rtl', textAlign: 'right' }
                  : null
              }
              icon={
                <Fragment>
                  <Icon className="plus" icon={plus} />
                  <Icon className="circle" icon={mediaRecordOutline} />
                  <Image src={ProductImage4} alt="1112" />
                  <Icon className="star" icon={starOutline} />
                </Fragment>
              }
              iconPosition="left"
              title={
                <Heading
                  as="h3"
                  content={cmsItems[langIndex].websiteMaalemRow19Col2Heading}
                />
              }
              description={
                <Text
                  content={
                    cmsItems[langIndex].websiteMaalemRow10Col2HeadingText
                  }
                />
              }
            />
          </Fade>
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
