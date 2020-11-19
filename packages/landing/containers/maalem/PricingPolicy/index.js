import React, { useState } from 'react';
import Link from 'next/link';
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

import { pricing } from 'common/src/data/maalem';

const PricingPolicy = () => {
  const { slogan, title, monthly, annualy } = pricing;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'annualy') {
      setState({
        ...state,
        active: 'annualy',
        pricingPlan: annualy,
      });
    } else {
      setState({
        ...state,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };

  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeader>
          <Heading as="h5" content={slogan} />
          <Heading content={title} />
        </SectionHeader>

        <ButtonGroup>
          <button
            className={state.active === 'monthly' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('monthly')}
          >
            Consumer Loans
          </button>
          <button
            className={state.active === 'annualy' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('annualy')}
          >
            Business Loans
          </button>
        </ButtonGroup>

        <PricingArea>
          <InnerWrapper>
            {state.pricingPlan.map((item) => (
              <PricingCard key={`${state.active}-card--key${item.id}`}>
                {/* {item.suggested && (
                  <span className="tag">
                    <img src={crown} alt="Crown" /> Preferred
                  </span>
                )} */}
                <div className="card-header">
                  <Heading as="h3" content={item.title} />
                  <Text content={item.description} />
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
                    <span>SAR {item.price}</span> /{state.active}
                  </strong>
                  <Button
                    title={item.price === 0 ? 'Apply Now' : 'Download App'}
                  />
                  {item.trail ? (
                    <div className="trail">
                      <Link href={item.trailLink}>
                        <a>Reffer A Friend Now #Code: AB{item.trail}CD </a>
                      </Link>
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
