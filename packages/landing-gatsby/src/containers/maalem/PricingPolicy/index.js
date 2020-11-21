import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import { SectionHeader } from '../maalem.style';
import Fade from 'react-reveal/Fade';
import SectionWrapper, {
  ButtonGroup,
  PricingArea,
  InnerWrapper,
  PricingCard
} from './pricingPolicy.style';

import crown from 'common/src/assets/image/appClassic/crown.svg';

const PricingPolicy = () => {
  const data = {
    pricing: [
      {
        slogan: 'CHOOSE THE FINANCING THAT MEETS YOUR NEEDS.',
        title: 'Whether you are looking for personal finance, or for your business,',
        monthly: [
          {
            id: 1,
            title: 'Purchase finance',
            suggested: false,
            description: 'Shop and buy what you want now from our partners',
            features: [
              {
                id: 1,
                text: 'Financing in convenient installments up to two years'
              },
              { id: 2, text: 'Fast procedures in minutes' },
              { id: 3, text: 'Does not include administrative fees' },
              { id: 4, text: 'Download Mobile app' }
            ],
            price: 0,
            trail: null,
            trailLink: null
          },
          {
            id: 2,
            title: 'Personal Finance',
            suggested: true,
            description: 'For Best opportunities',
            features: [
              { id: 1, text: 'Financing up to 250,000 Riyals' },
              { id: 2, text: 'Convenient five-year repayment options' },
              { id: 3, text: 'Immediate approval' },
              {
                id: 4,
                text: 'Compatible with the provisions of Islamic Sharia'
              },
              // { id: 5, text: 'Request your financing now!' }
            ],
            price: 99,
            trail: 14,
            trailLink: '#'
          }
        ],

        annualy: [
          {
            id: 1,
            title: 'Pro Master',
            suggested: true,
            description:
              'Financing that understands and meets the needs of small and medium enterprises.',
            features: [
              { id: 1, text: 'Financing up to 15 million riyals' },
              { id: 2, text: 'Comfortable repayment of up to 2 years' },
              { id: 3, text: 'Profit margin not exceeding 12%' },
              { id: 4, text: 'Download the app now' }
            ],
            price: 999,
            trail: 14,
            trailLink: '#'
          },
          {
            id: 2,
            title: 'Enterprise',
            suggested: false,
            description: 'التمويل على مستوى طموحاتك',
            features: [
              { id: 1, text: 'Financing up to 15 million riyals' },
              { id: 2, text: 'Comfortable repayment of up to 2 years' },
              { id: 3, text: 'The profit margin does not exceed 10%' },
              { id: 4, text: 'Financial guarantees provided by a guaranty *' }
            ],
            price: 1299,
            trail: 30,
            trailLink: '#'
          },
          {
            id: 3,
            title: 'Enterprise New',
            suggested: false,
            description: 'التمويل على مستوى طموحاتك',
            features: [
              { id: 1, text: 'Financing up to 15 million riyals' },
              { id: 2, text: 'Comfortable repayment of up to 2 years' },
              { id: 3, text: 'The profit margin does not exceed 10%' },
              { id: 4, text: 'Financial guarantees provided by a guaranty *' }
            ],
            price: 1299,
            trail: 30,
            trailLink: '#'
          }
        ]
      },

      {
        slogan: 'PRICING PLAN',
        title: 'Choose your pricing policy',
        monthly: [
          {
            id: 1,
            title: 'تمويل المشتريات',
            suggested: false,
            description: 'تسوق واشتر ما تريده الآن من شركائنا',
            features: [
              { id: 1, text: '\tتمويل بأقساط مريحة تصل إلى سنتين ' },
              { id: 2, text: 'إجراءات سريعة خلال دقائق ' },
              { id: 3, text: 'لا تشمل الرسوم الإدارية ' },
              { id: 4, text: 'حمل التطبيق الآن' }
            ],
            price: 0,
            trail: null,
            trailLink: null
          },
          {
            id: 2,
            title: 'تمويل الشخصي',
            suggested: true,
            description: 'تمويل يلبي طموحاتك الشخصية ',
            features: [
              { id: 1, text: '\tتمويل يصل إلى 250 ألف ريال ' },
              { id: 2, text: '\tخيارات تسديد مريحة تصل لخمس سنوات' },
              { id: 3, text: '\tموافقة فورية ' },
              { id: 4, text: '\tمتوافق مع أحكام الشريعة الأسلامية' },
              { id: 5, text: 'اطلب تمويلك الآن!' }
            ],
            price: 99,
            trail: 14,
            trailLink: '#'
          }
        ],

        annualy: [
          {
            id: 1,
            title: 'تمويل برنامج منشآت',
            suggested: true,
            description: 'تمويل في مستوى طموحاتك ',
            features: [
              { id: 1, text: '\tتمويل يصل إلى 15 مليون ريال ' },
              { id: 2, text: '\tسداد مريح يصل إلى سنتين ' },
              { id: 3, text: '\tسداد مريح يصل إلى سنتين ' },
              { id: 4, text: '\tضمانات مالية مقدمة من كفالة *' }
            ],
            price: 999,
            trail: 14,
            trailLink: '#'
          },
          {
            id: 2,
            title: 'تمويل برنامج منشآت',
            suggested: false,
            description: 'التمويل على مستوى طموحاتك',
            features: [
              { id: 1, text: '\tتمويل يصل إلى 15 مليون ريال ' },
              { id: 2, text: '\tسداد مريح يصل إلى سنتين ' },
              { id: 3, text: '\t%هامش ربح لا يتجاوز 10' },
              { id: 4, text: 'تمويل في مستوى طموحاتك ' }
            ],
            price: 1299,
            trail: 30,
            trailLink: '#'
          },,
          {
            id: 3,
            title: 'تمويل برنامج منشآت',
            suggested: false,
            description: 'التمويل على مستوى طموحاتك',
            features: [
              { id: 1, text: '\tتمويل يصل إلى 15 مليون ريال ' },
              { id: 2, text: '\tسداد مريح يصل إلى سنتين ' },
              { id: 3, text: '\t%هامش ربح لا يتجاوز 10' },
              { id: 4, text: 'تمويل في مستوى طموحاتك ' }
            ],
            price: 1299,
            trail: 30,
            trailLink: '#'
          }
        ]
      }
    ]
  };

  const langIndex = window.sessionStorage.getItem('lang') === 'en' ? 1 : 0;
  const { monthly, annualy } = data.pricing;

  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'annualy') {
     
      setState({
        ...state,
        active: 'annualy',
        pricingPlan: annualy
      });
        // document.getElementsByClassName('card-body').style.marginLeft= '30px';
        // console.log('annualy')
      
    } else {
      setState({
        ...state,
        active: 'monthly',
        pricingPlan: monthly
      });
      console.log('monthly')
    }
  };

  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeader>
          <Heading as="h5" content={data.pricing[langIndex].slogan} />
          <Heading content={data.pricing[langIndex].title} />
        </SectionHeader>

        <ButtonGroup>
          <button
            className={state.active === 'monthly' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('monthly')}
          >
            { window.sessionStorage.getItem('lang')== 'ar' ? 'Individuals financing' :'تمويل الأفراد'}

          </button>
          <button
            className={state.active === 'annualy' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('annualy')}
          >
           { window.sessionStorage.getItem('lang')== 'ar' ? '   Enterprise financing' :'تمويل المشاريع'}

          </button>
        </ButtonGroup>

        <PricingArea>
          <InnerWrapper>
            {data.pricing[langIndex][state.active].map((item) => (
              <PricingCard  key={`${state.active}-card--key${item.id}`}>
                <Fade up delay={200} >
                  {/* {item.suggested && (
                    <span className="tag">
                      <img src={crown} alt="Crown" />
                    </span>
                  )} */}
                <div className="card-header">
                  <Heading as="h3" content={item.title} />
                  <Text content={item.description} />
                </div>
                <div  id='mybutton' className="card-body">
                  <ul className="feature-list">
                    {item.features.map((item) => (
                      <li key={`${state.active}-feature--key${item.id}`}>
                        <Icon icon={checkmarkCircled} /> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  {/* <strong>
                    <span>SAR {item.price}</span> /{state.active}
                  </strong> */}
                  <Button style={{ borderRadius:'25px'}}
                     onClick={() => {
                      window.sessionStorage.getItem('showCalculator', true);
                      document.getElementById(
                        'loancalculator'
                      ).style.transform = 'translateX(0)';
                    }}
                    // title={item.price === 0 ? 'Apply Now' : 'Download App'}
                    title= { window.sessionStorage.getItem('lang')== 'ar' ? 'Know More':'تعرف أكثر'}

                  />
                  {/* {item.trail ? (
                    <div className="trail">
                      <a href={item.trailLink}>
                        Reffer A Friend : #AB{item.trail}C
                      </a>
                    </div>
                  ) : (
                    ''
                  )} */}
                </div>
                </Fade>
              </PricingCard>
            ))}
          </InnerWrapper>
        </PricingArea>
      </Container>
    </SectionWrapper>
  );
};

export default PricingPolicy;
