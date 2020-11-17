import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './teamPortfolio.style';

const TeamPortfoiloSection = () => {
  const data = useStaticQuery(graphql`
    query {
      maalemJson {
        teamportfolio {
          title
          description
          teammember {
            id
            img {
              publicURL
            }
            text
          }
        }
      }
    }
  `);
  const { title, description, teammember } = data.maalemJson.teamportfolio;
  const [hover, setHover] = useState({
    active: 6, // active item when start
  });

  const langIndexx = window.sessionStorage.getItem('lang') === 'ar' ? 0 : 1;
  const cmsItems2 = JSON.parse(window.sessionStorage.getItem('cmsItems2'));
  const cmsItemss = cmsItems2[langIndexx];

  return (
    <SectionWrapper id="team">
      <Container>
        <ContentWrapper
          style={
            window.sessionStorage.getItem('lang') === 'ar'
              ? { direction: 'rtl', textAlign: 'right' }
              : { direction: 'ltr', textAlign: 'left' }
          }
        >
          <div className="image">
            {teammember.map((item, index) => (
              <Fade up key={index}>
                <div
                  className={`item_wrapper ${
                    hover.active === index ? 'active' : ''
                  }`}
                  key={index}
                  onMouseEnter={() => {
                    setHover({
                      active: index,
                    });
                  }}
                  onMouseLeave={() => {
                    setHover({
                      active: index,
                    });
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="imageWrapper">
                    <Image src={item.img.publicURL} alt={item.text} />
                  </div>
                  <Text className="author_name" content={item.text} />
                </div>
              </Fade>
            ))}
          </div>
          <div
            className="content"
            style={
              window.sessionStorage.getItem('lang') === 'en'
                ? { direction: 'rtl', textAlign: 'right' }
                : { direction: 'ltr', textAlign: 'left' }
            }
          >
            <Heading as="h3" content={cmsItemss.new_fields_four} />
            <Text content={cmsItemss.aboutus_heading} />
            <Text content={cmsItemss.aboutus_description} />
            <Text content={cmsItemss.aboutus_heading} />
            <Heading as="h3" content={cmsItemss.aboutus_headingnew} />
            <Text content={cmsItemss.new_fields_one} />
            <Heading as="h3" content={cmsItemss.aboutus_messageheading} />
            <Text content={cmsItemss.new_fields_two} />
            <Text content={cmsItemss.new_fields_three} />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default TeamPortfoiloSection;
