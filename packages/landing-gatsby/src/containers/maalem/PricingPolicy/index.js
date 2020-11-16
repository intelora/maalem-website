import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import { SectionHeader } from '../maalem.style';
import SectionWrapper, {
  ButtonGroup,
  PricingArea,
  InnerWrapper,
  PricingCard,
} from './pricingPolicy.style';

import crown from 'common/src/assets/image/appClassic/crown.svg';

const PricingPolicy = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        pricing {
          slogan
          title
          monthly {
            id
            title
            suggested
            description
            features {
              id
              text
            }
            price
            trail
            trailLink
          }
          annualy {
            id
            title
            suggested
            description
            features {
              id
              text
            }
            price
            trail
            trailLink
          }
        }
      }
    }
  `);

  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 1 : 0;

  const { slogan, title, monthly, annualy } = data.appClassicJson.pricing;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'annualy') {
      state.pricingPlan[0].title =
        cmsItems[langIndex].websiteMaalemRow15Col1Title;
      state.pricingPlan[1].title =
        cmsItems[langIndex].websiteMaalemRow15Col2Title;

      state.pricingPlan[0].features[0].text =
        cmsItems[langIndex].websiteMaalemRow15Col1TitleTextpRow1;
      state.pricingPlan[0].features[1].text =
        cmsItems[langIndex].websiteMaalemRow15Col1TitleTextpRow2;
      state.pricingPlan[0].features[2].text =
        cmsItems[langIndex].websiteMaalemRow15Col1TitleTextpRow3;
      state.pricingPlan[0].features[3].text =
        cmsItems[langIndex].websiteMaalemRow15Col1TitleTextpRow4;

      state.pricingPlan[1].features[0].text =
        cmsItems[langIndex].websiteMaalemRow15Col2TitleTextpRow1;
      state.pricingPlan[1].features[1].text =
        cmsItems[langIndex].websiteMaalemRow15Col2TitleTextpRow2;
      state.pricingPlan[1].features[2].text =
        cmsItems[langIndex].websiteMaalemRow15Col2TitleTextpRow3;
      state.pricingPlan[1].features[3].text =
        cmsItems[langIndex].websiteMaalemRow15Col2TitleTextpRow4;

      setState({
        ...state,
        active: 'annualy',
        pricingPlan: annualy,
      });
    } else {
      state.pricingPlan[0].title =
        cmsItems[langIndex].websiteMaalemRow15Col1Title;
      state.pricingPlan[1].title =
        cmsItems[langIndex].websiteMaalemRow15Col2Title;

      state.pricingPlan[0].features[0].text =
        cmsItems[langIndex].websiteMaalemRow17Col1TitleTextpRow1;
      state.pricingPlan[0].features[1].text =
        cmsItems[langIndex].websiteMaalemRow17Col1TitleTextpRow2;
      state.pricingPlan[0].features[2].text =
        cmsItems[langIndex].websiteMaalemRow17Col1TitleTextpRow3;
      state.pricingPlan[0].features[3].text =
        cmsItems[langIndex].websiteMaalemRow17Col1TitleTextpRow4;

      state.pricingPlan[1].features[0].text =
        cmsItems[langIndex].websiteMaalemRow17Col1TitleTextpRow1;
      state.pricingPlan[1].features[1].text =
        cmsItems[langIndex].websiteMaalemRow17Col1TitleTextpRow2;
      state.pricingPlan[1].features[2].text =
        cmsItems[langIndex].websiteMaalemRow17Col1TitleTextpRow3;
      state.pricingPlan[1].features[3].text =
        cmsItems[langIndex].websiteMaalemRow17Col1TitleTextpRow4;

      setState({
        ...state,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };

  //handlePricingPlan('monthly');

  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeader>
          <Heading
            as="h5"
            content={cmsItems[langIndex].websiteMaalemRow13Text}
          />
          <Heading content={cmsItems[langIndex].websiteMaalemRow12Text} />
        </SectionHeader>

        <ButtonGroup>
          <button
            className={state.active === 'monthly' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('monthly')}
          >
            {' '}
            {cmsItems[langIndex].websiteMaalemRow14Col1Text}
          </button>
          <button
            className={state.active === 'annualy' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('annualy')}
          >
            {' '}
            {cmsItems[langIndex].websiteMaalemRow14Col2Text}
          </button>
        </ButtonGroup>

        <PricingArea>
          <InnerWrapper>
            {state.pricingPlan.map((item) => (
              <PricingCard key={`${state.active}-card--key${item.id}`}>
                {item.suggested && (
                  <span className="tag">
                    <img src={crown} alt="Crown" />
                  </span>
                )}
                <div className="card-header">
                  <Heading as="h3" content={item.title} />
                  <Text
                    content={
                      cmsItems[langIndex].websiteMaalemRow15Col1TitleText
                    }
                  />
                </div>
                <div className="card-body">
                  <ul className="feature-list">
                    {item.features.map((item) => (
                      <li key={`${state.active}-feature--key${item.id}`}>
                        <Icon icon={checkmarkCircled} /> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <strong>
                    {/* <span>SA {item.price}</span> /{state.active} */}
                  </strong>
                  <Button
                    onClick={() => {
                      window.sessionStorage.getItem('showCalculator', true);
                      document.getElementById(
                        'loancalculator'
                      ).style.transform = 'translateX(0)';
                    }}
                    title={cmsItems[langIndex].websiteMaalemRow28Icon}
                  />

                  {item.trail ? (
                    <div className="trail">
                      {/* Reffer A Friend : #AB{item.trail}C  */}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </PricingCard>
            ))}
          </InnerWrapper>
        </PricingArea>
      </Container>
    </SectionWrapper>
  );
};

export default PricingPolicy;
