import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import SectionWrapper, { CarouseWrapper, TextWrapper } from './appSlider.style';
import BulletIcon from 'common/src/assets/image/maalem/icon1.svg';
import ProductImage1_ar from 'common/src/assets/image/maalem/product1_ar.png';
import ProductImage1_en from 'common/src/assets/image/maalem/product1_en.png';
import Fade from 'react-reveal/Fade';

const AppSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      maalemJson {
        appSlider {
          title
          description
          features {
            id
            icon {
              publicURL
            }

            title
            description
          }
          carousel {
            id
            title
            image {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { title, description, features, carousel } = data.maalemJson.appSlider;

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700
  };
  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 1 : 0;
  return (
    <SectionWrapper id="HowtoApplay">
      <Container > 
        <Heading content={cmsItems[langIndex].websiteMaalemRow18Title} />
        
      </Container>

      <Container>
        <Fade left>
          <CarouseWrapper>
            <GlideCarousel
              bullets={true}
              controls={false}
              numberOfBullets={4}
              options={glideOptions}
              carouselSelector="appFeatureSlider"
            >
              <Fragment>
                {carousel.map((item) => (
                  <GlideSlide key={`feature-side--key${item.id}`}>
                    {window.sessionStorage.getItem('lang') === 'ar' ? (
                      <Image src={ProductImage1_ar} alt={item.title} />
                    ) : (
                      <Image src={ProductImage1_en} alt={item.title} />
                    )}
                    {console.log(item.id, '12345678')}
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          </CarouseWrapper>
        </Fade>
        <Fade right>
        <TextWrapper
          style={
            window.sessionStorage.getItem('lang') === 'en'
              ? { direction: 'rtl', textAlign: 'right' }
              : null
          }
        >
          {cmsItems[langIndex].websiteMaalemRow1Text
            .split('#')
            .map(function (char, index) {
              console.log('xyz' + index);
              return (
                <FeatureBlock
                  key={`app-feature--key${index}`}
                  iconPosition="left"
                  icon={<img src={BulletIcon} alt="ah" />}
                  title={<Heading as="h3" content={char} />}
                  // description={<Text content="22" />}
                />
              );
            })}
        </TextWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default AppSlider;
