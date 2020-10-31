import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
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

export default function() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Maalem Financing | A next js landing page</title>
          <meta name="Description" content="Maalem Financing landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Features />
            <AppSlider />
            <ProductSlide />
            <DashboardFeatures />
            <DesignedAndBuilt />
            <PricingPolicy />
            <Testimonial />
            <TeamPortfolio />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
}
