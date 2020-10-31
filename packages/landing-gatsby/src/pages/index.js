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
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/maalem/maalem.style';
import '@redq/reuse-modal/es/index.css';

import SEO from '../components/seo';

export default function() {
  return (
    <ThemeProvider theme={theme}>
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
            <DashboardFeatures />
            <Features />
            <AppSlider />
            <ProductSlide />
            <Testimonial /> 
            <DesignedAndBuilt />
            <PricingPolicy />
            <TeamPortfolio />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
