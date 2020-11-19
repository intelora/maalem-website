import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import Rating from 'common/src/components/Rating';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import { SectionHeader } from '../maalem.style';
import SectionWrapper, { CarouselWrapper } from './testimonial.style';

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query {
      maalemJson {
        testimonial {
          slogan
          title
          reviews {
            id
            title
            description
            avatar
            name
            designation
            review
          }
        }
      }
    }
  `);
  const { slogan, title, reviews, isVisible } = data.maalemJson.testimonial;

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    isVisible: false,
    autoplay: 5000,
    perView: 2,
    animationDuration: 700,
    breakpoints: {
      991: {
        perView: 1,
      },
    },
  };
  const faqItems = JSON.parse(window.sessionStorage.getItem('faqItems'));
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 0 : 1;
  return (
    <SectionWrapper id="testimonial">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={faqItems[langIndex].title} />
            <Heading content={faqItems[langIndex].detail} />
          </Fade>
        </SectionHeader>

        <CarouselWrapper>
          <Fade up delay={100}>
            <GlideCarousel
              options={glideOptions}
              nextButton={
                <Button
                  icon={<i className="flaticon-next" />}
                  aria-label="Next"
                  variant="fab"
                />
              }
              prevButton={
                <Button
                  icon={<i className="flaticon-left-arrow" />}
                  aria-label="Prev"
                  variant="fab"
                />
              }
            >
              <Fragment>
                {faqItems[langIndex].faqs.item.map((item, index) => (
                  <GlideSlide key={`testimonial--key${index}`}>
                    <div className="review-card">
                      <Heading as="h3" content={item.q} />
                      <Text content={item.a} />
                      <div className="card-footer">
                        {/* <div className="image">
                          <Image src={item.avatar} alt="Client Image" />
                        </div>
                        <div className="reviewer-info">
                          <div className="content">
                            <Heading as="h4" content={item.name} />
                            <Text content={item.designation} />
                          </div>
                          <Rating rating={item.review} />
                        </div> */}
                      </div>
                    </div>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          </Fade>
        </CarouselWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Testimonial;
