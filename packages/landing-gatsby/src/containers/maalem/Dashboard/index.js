import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import Particles from '../Particle';
import DashboardWrapper, { DashboardObject } from './dashboard.style';
import Fade from 'react-reveal/Fade';
import DashboardObject1 from 'common/src/assets/image/maalem/dashbord.png';
import DashboardObject2 from 'common/src/assets/image/maalem/dashboard1.png';
import DashboardObject3 from 'common/src/assets/image/maalem/dashboard3.gif';

const DashboardSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button title={cmsItems[langIndex].websiteMaalemRow42Text} />
    </Fragment>
  );
  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 1 : 0;

  return (
    <DashboardWrapper id="banner_section">
      {/* <Particles /> */}
      <Container>
        <Fade up>
          <Box className="row" {...row}>
            <Box
              style={
                window.sessionStorage.getItem('lang') === 'en'
                  ? { direction: 'rtl', textAlign: 'right' }
                  : null
              }
              className="col"
              {...col}
            >
              <Heading
                className="subtitle"
                as="h5"
                content={cmsItems[langIndex].websiteMaalemRow24}
              />
              <FeatureBlock
                title={
                  <Heading
                    content={cmsItems[langIndex].websiteMaalemRow25}
                    {...title}
                  />
                }
                description={
                  <Text
                    content={cmsItems[langIndex].websiteMaalemRow26}
                    {...description}
                  />
                }
                description={
                  <Text
                    content={cmsItems[langIndex].websiteMaalemRow27}
                    {...description}
                  />
                }
                //button={<ButtonGroup />}
              />
            </Box>
          </Box>
        </Fade>
      </Container>
      <DashboardObject>
        <div className="dashboardWrapper" style={{ display: 'flex' }}>
          <Fade right>
            <Image
              src={DashboardObject2}
              alt="Mobile and Laptop Dashboar Image"
              style={{ width: '55%', marginLeft: 'auto', marginRight: '10%' }}
            />
          </Fade>
          <Fade right></Fade>
        </div>
      </DashboardObject>
    </DashboardWrapper>
  );
};

DashboardSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
};

DashboardSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['22px', '30px', '30px', '30px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '15px', '15px', '20px', '25px'],
    lineHeight: '1.3',
    maxWidth: ['100%', '400px'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.85',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
};

export default DashboardSection;
