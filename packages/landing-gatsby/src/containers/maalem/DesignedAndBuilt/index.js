import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
import CalcIcon from 'common/src/assets/image/maalem/calculator.svg';

import Fade from 'react-reveal/Fade';

const DesignedAndBuilt = () => {
  // const [openCalcWrapper, setOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      maalemJson {
        designAndBuilt {
          image {
            publicURL
          }
          title
          slogan
          description
        }
      }
    }
  `);
  const {
    image,
    title,
    slogan,
    description,
  } = data.maalemJson.designAndBuilt;
  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang')==='ar' ? 1: 0;
  

  return (
    <SectionWrapper id="loancalculator">
      {/* <Container>
        <img src={CalcIcon} alt="calculator" className="calc-icon" onClick={e=>setOpen(!openCalcWrapper)}/>
      </Container> */}
      <Container id="calcWrapper" className="calcWrapper">
      <button className="close-btn" onClick={()=>{
                    document.getElementById("loancalculator").style.transform = 'translateX(100%)';
                  }}>&times;</button>          
        <ContentWrapper>       
          <div className="content">
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
            <Text content={description} />
          </div>
          <div className="image">
            <Image src={image.publicURL} alt="Built Logo" />
          </div>
        
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};


export default DesignedAndBuilt;
