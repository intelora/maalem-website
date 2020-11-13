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

function getMenuFromServer  () {
  fetch("http://122.166.172.240:1337/navbars")
      .then(res => res.json())
      .then(
        (result) => {
          window.sessionStorage.setItem('menuItems', JSON.stringify(result));
          redirectToMaalem();
        })
}
getMenuFromServer();
function  getFaqFromServer () {
  fetch("http://122.166.172.240:1337/faqs")
      .then(res => res.json())
      .then(
        (result) => {
          window.sessionStorage.setItem('faqItems', JSON.stringify(result));
          redirectToMaalem();
        })
}
getFaqFromServer();
function getCMSFromServer () {
  fetch("http://122.166.172.240:1337/website-maalem-financings")
      .then(res => res.json())
      .then(
        (result) => {
          window.sessionStorage.setItem('cmsItems', JSON.stringify(result));
          redirectToMaalem();
        })
}
getCMSFromServer();
function redirectToMaalem(){
  if(window.sessionStorage.getItem('faqItems')!=null && window.sessionStorage.getItem('faqItems')!=null && window.sessionStorage.getItem('faqItems')!=null ){
    if(window.location.href.indexOf("maalem")==-1){
      window.location = window.location+"maalem";
    }
  }
}
  

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
          
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
