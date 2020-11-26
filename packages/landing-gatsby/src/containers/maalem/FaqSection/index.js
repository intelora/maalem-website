import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/src/components/Accordion';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import FaqSectionWrapper from './faqSection.style';

const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
}) => {
  const langIndexx = window.sessionStorage.getItem('lang') === 'ar' ? 0 : 1;
  const cmsItems2 = JSON.parse(window.sessionStorage.getItem('cmsItems2'));
  const cmsItemss = cmsItems2[langIndexx];
  const AboutUsData = {
    agencyJson: {
      faq: [
        {
          id: 1,
          description: `${cmsItemss.aboutus_heading} <br> ${cmsItemss.aboutus_description}`,
          expend: true,
          title: cmsItemss.new_fields_four,
        },
        {
          id: 2,
          description: cmsItemss.new_fields_one,
          expend: null,
          title: cmsItemss.aboutus_headingnew,
        },
        {
          id: 3,
          description: `${cmsItemss.new_fields_two} <br> ${cmsItemss.new_fields_three}`,
          expend: null,
          title: cmsItemss.aboutus_messageheading,
        },
      ],
    },
  };
  return (
    <FaqSectionWrapper id="faqSection">
      <Container>
        <Box {...sectionHeader}>
          {/* <Text content="FAQ" {...sectionSubTitle} /> */}
        </Box>
        <Box className="row">
          <Accordion>
            <Fragment>
              {AboutUsData.agencyJson.faq.map((faqItem, index) => (
                <AccordionItem key={`accordion_key-${index}`}>
                  <Fragment>
                    <AccordionTitle>
                      <Fragment>
                        <Heading
                          as="h3"
                          content={faqItem.title}
                          {...titleStyle}
                        />
                        <IconWrapper>
                          <OpenIcon>
                            <Icon icon={minus} size={18} />
                          </OpenIcon>
                          <CloseIcon>
                            <Icon icon={plus} size={18} />
                          </CloseIcon>
                        </IconWrapper>
                      </Fragment>
                    </AccordionTitle>
                    <AccordionBody>
                      <Text
                        content={faqItem.description}
                        {...descriptionStyle}
                      />
                    </AccordionBody>
                  </Fragment>
                </AccordionItem>
              ))}
            </Fragment>
          </Accordion>
        </Box>
      </Container>
    </FaqSectionWrapper>
  );
};

// FaqSection style props
FaqSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
  },
};

export default FaqSection;
