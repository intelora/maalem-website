import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { theme } from 'common/src/theme/maalem';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/maalem/Navbar';
import Banner from '../containers/maalem/Banner';
import Features from '../containers/maalem/Features';
import DashboardFeatures from '../containers/maalem/Dashboard';
import DesignedAndBuilt from '../containers/maalem/DesignedAndBuilt';
import PricingPolicy from '../containers/maalem/PricingPolicy';
import Footer from '../containers/maalem/Footer';
import Faq from '../containers/maalem/Faq';
import AboutUs from '../containers/maalem/AboutUs';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/maalem/maalem.style';
import '@redq/reuse-modal/es/index.css';

import SEO from '../components/seo';
import FeatureSlider from '../containers/maalem/FeatureSlider';

export default function () {
  return (
    <ThemeProvider
      theme={theme}
      style={
        window.sessionStorage.getItem('lang') == 'ar'
          ? { direction: 'rtl', textAlign: 'right' }
          : { direction: 'ltr', textAlign: 'left' }
      }
    >
      <>
        <SEO title="Quara Finance" />
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
            <FeatureSlider />
            <DesignedAndBuilt />
            <AboutUs />
            <DashboardFeatures />
            <Faq />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
