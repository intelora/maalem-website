import React, { Fragment, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Tab, { Panel } from 'common/src/components/Tabs';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../maalem.style';
import SectionWrapper, { TabArea } from './featureTab.style';

import appTabIcon1 from 'common/src/assets/image/maalem/appTabIcon1.svg'
import appTabIcon2 from 'common/src/assets/image/maalem/appTabIcon2.svg'
import appTabIcon3 from 'common/src/assets/image/maalem/appTabIcon3.svg'
import appTabIcon4 from 'common/src/assets/image/maalem/appTabIcon4.svg'

import productImg1 from 'common/src/assets/image/maalem/product1_en.png'
import productImg2 from 'common/src/assets/image/maalem/product1_ar.png'
import productImg3 from 'common/src/assets/image/maalem/product2_en.png'
import productImg4 from 'common/src/assets/image/maalem/product2_ar.png'


const FeatureTab = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        featuresTab {
          slogan
          title
          tab {
            id
            color
            icon {
              publicURL
            }
            title
            description
            image {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { slogan, title, tab } = data.appClassicJson.featuresTab;
  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 1 : 0;
  const newTab = [
    {
      id: 1,
      color: '#F55767',
      icon: {
        publicURL: appTabIcon1
      },
      title: cmsItems[langIndex].websiteMaalemRow1Text.split('#')[0],
      description: 'Get your proof tests delivered home collect a sample.',
      image: {
        publicURL: productImg1
      }
    },
    {
      id: 2,
      color: '#40975F',
      icon: {
        publicURL: appTabIcon2
      },
      title: cmsItems[langIndex].websiteMaalemRow1Text.split('#')[1],
      description: 'Get your proof tests delivered home collect a sample.',
      image: {
        publicURL: productImg2
      }
    },
    {
      id: 3,
      color: '#5856D6',
      icon: {
        publicURL: appTabIcon3
      },
      title: cmsItems[langIndex].websiteMaalemRow1Text.split('#')[2],
      description: 'Get your proof tests delivered home collect a sample.',
      image: {
        publicURL: productImg3
      }
    },
    {
      id: 4,
      color: '#D6AB00',
      icon: {
        publicURL: appTabIcon4
      },
      title: cmsItems[langIndex].websiteMaalemRow1Text.split('#')[3],
      description: 'Get your proof tests delivered home collect a sample.',
      image: {
        publicURL: productImg4
      }
    }
  ];
 
  // Custom code
  /* const elementLi = document.querySelectorAll('ul.tab_menu li');
  elementLi.forEach((li) => {
    setInterval(function () {
      li.click();
    }, 5000);
  }); */

  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={''} />
            <Heading content={'How to apply'} />
          </Fade>
        </SectionHeader>
        <Fade up delay={1000}>
          <TabArea>
            <Tab active={0}>
              {newTab.map((item) => (
                <Panel
                  title={
                    <FeatureBlock
                      style={{ '--color': `${item.color}` }}
                      iconPosition="left"
                      icon={
                        <Fragment>
                          <Icon className="plus" icon={plus} />
                          <Icon className="circle" icon={mediaRecordOutline} />
                          <Image src={item.icon.publicURL} alt={item.title} />
                          <Icon className="star" icon={starOutline} />
                        </Fragment>
                      }
                      title={
                        <Heading
                          as="h3"
                          content={item.title}
                          style={
                            window.sessionStorage.getItem('lang') === 'en'
                              ? { direction: 'rtl', textAlign: 'right' }
                              : null
                          }
                        />
                      }
                      description={<Text content={item.description} />}
                    />
                  }
                  key={`app-tab--key${item.id}`}
                >
                  <Fade>
                    <Image src={item.image.publicURL} alt={item.title} />
                  </Fade>
                </Panel>
              ))}
            </Tab>
          </TabArea>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureTab;
