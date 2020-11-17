import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { theme } from 'common/src/theme/maalem';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/maalem/Navbar';
import Banner from '../containers/maalem/Banner';
import AppSlider from '../containers/maalem/AppSlider';
import Features from '../containers/maalem/Features';
import DashboardFeatures from '../containers/maalem/Dashboard';
import ProductSlide from '../containers/maalem/ProductSlide';
import DesignedAndBuilt from '../containers/maalem/DesignedAndBuilt';
import PricingPolicy from '../containers/maalem/PricingPolicy';
import TeamPortfolio from '../containers/maalem/TeamPortfoilo';
import Testimonial from '../containers/maalem/Testimonial';
import Newsletter from '../containers/maalem/Newsletter';
import Footer from '../containers/maalem/Footer';
import FeatureTab from '../containers/maalem/FeatureTab';

import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/maalem/maalem.style';
import '@redq/reuse-modal/es/index.css';

import SEO from '../components/seo';

const langIndexx = window.sessionStorage.getItem('lang') === 'ar' ? 0 : 1;
const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));

const cmsItems2 = JSON.parse(window.sessionStorage.getItem('cmsItems2'));

export default function () {
  return (
    <ThemeProvider
      theme={theme}
      style={
        window.sessionStorage.getItem('lang') === 'ar'
          ? { direction: 'rtl', textAlign: 'right' }
          : { direction: 'ltr', textAlign: 'left' }
      }
    >
      <>
        <SEO title="Maalem Financing" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Features />
            <PricingPolicy />
            <FeatureTab />
            <DesignedAndBuilt />
            {/* <AppSlider /> */}
            {/* <ProductSlide /> */}
            <DashboardFeatures />
            {/* <Testimonial />  */}
            {/* <DesignedAndBuilt />
            <Newsletter /> */}
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
