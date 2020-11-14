
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Logo from 'common/src/components/UIElements/Logo';
import LogoImage from 'common/src/assets/image/maalem/logo-white.png';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import TeamPortfolio from '../../../containers/maalem/TeamPortfoilo';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../../../containers/maalem/maalem.style';
import FooterArea, {
  WidgetArea,
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from './footer.style';
import Testimonial from '../Testimonial';


const Footer = () => {
  const [formOpen, setOpen, testimoniall,team] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      maalemJson {
        footer {
          logo {
            publicURL
          }
          menu {
            id
            link
            text
          }
          widgets {
            id
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);



  const { logo, menu, widgets } = data.maalemJson.footer;
  const date = new Date();
  const year = date.getFullYear();
  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang')==='ar' ? 1 : 0;

  function openSocialMediaPage(index){
    if(index==0){
      window.location.href="https://www.facebook.com/pages/category/Financial-Service/Maalem-Financing-104818407547676/";
    } else if(index==1){
      window.location.href="https://twitter.com/maalemfinancing?lang=en";
    } else if(index==2){
      window.location.href="https://www.instagram.com/maalemfinancing/";
    } else if(index==3){
      window.location.href="https://www.linkedin.com/company/maalem-financing-company";
    } else if(index==4){
      window.location.href="#";
    }
}

 data.maalemJson.footer.menulocal = 
    [ 
      {"menu" : [
        { "id":0, "text": "About Us", "link": ""},
        { "id":1, "text": "FAQ", "link": ""},
        { "id":2, "text": "Contact Us", "link": "./link1"},
        { "id":3, "text": "Terms & Condition", "link": "https://maalem.com.sa/en/get-to-know-us/"},
        { "id":4, "text": "Privacy", "link": "https://maalem.com.sa/en/financing/"},
      ]},
  
  
      {"menu" :  [ 
        { "id":0, "text": "معلومات عنا", "link": "./link1"},
        { "id":1, "text": "أسئلة مكررة", "link": "./link1"},
        { "id":2, "text": "اتصل بنا", "link": "./link1"},
        { "id":3, "text": "الأحكام والشروط", "link": "https://maalem.com.sa/en/get-to-know-us/"},
        { "id":4, "text": "خصوصية", "link": "https://maalem.com.sa/en/financing/"},
       ]
      }] ;
      
  
      // console.log('aaaaa',data.maalemJson.footer.menulocal[0]['text']);
      // const i =  data.maalemJson.footer.menulocal[0]['text']='About Us';
      // const i1 =  data.maalemJson.footer.menulocal[1]['text']='FAQ';
      // const i2 =  data.maalemJson.footer.menulocal[2]['text']='Contact Us';
      // const i3 =  data.maalemJson.footer.menulocal[3]['text']='Terms & Condition';
      // const i4 =  data.maalemJson.footer.menulocal[4]['text']='Privacy';
      function toggelFAQ(){
        if(document.getElementById("testimonial").style.display==='none' || document.getElementById("testimonial").style.display=='none'){
          document.getElementById("testimonial").style.display='block';

         window.location.href="#";
        }else{
          document.getElementById("testimonial").style.display='none';
        }
      }
      function toggelAboutUs(){
        if(document.getElementById("team").style.display==='none' || document.getElementById("team").style.display=='none'){
          document.getElementById("team").style.display='block';

         window.location.href="#banner_section";
        }else{
          document.getElementById("team").style.display='none';
        }
      }
  return (
    <ContentWrapper >
     <div className={testimoniall}  > 
        <Testimonial  />
      </div>
      <div className={team} > 
        <TeamPortfolio />
      </div>
    <FooterArea>
      <Container  
        style={
              window.sessionStorage.getItem('lang')==='ar' ? { direction: "rtl", textAlign: 'right' } : null
            }>
        <WidgetArea>
          {widgets.map((item, index) => (
           
            <Box className="col" key={`footer-widget--key${item.id}`} >
               <a onClick={e=>openSocialMediaPage(index)} > 
              <Image src={item.icon.publicURL} alt={item.title} />
              <Heading as="h3" content={item.title} />
              </a>
            </Box>
           
          ))}
          {/* <Box className="col" key={`footer-widget--key${data.maalemJson.footer.menu[0]['id']}`}>
            
                  <Image src='../../assets/image/maalem/footer/facebook.svg' />
          
              
              <Heading as="h3" content={cmsItems[langIndex].websiteMaalemRow28IconFacebookCol1} />
            </Box>
        
            <Box className="col" key={`footer-widget--key${data.maalemJson.footer.menu[1]['id']}`}>
              <Heading as="h3" content={cmsItems[langIndex].websiteMaalemRow28IconTwitterCol2} />
              
            </Box>
            <Box className="col" key={`footer-widget--key${data.maalemJson.footer.menu[2]['id']}`}>
              <Heading as="h3" content={cmsItems[langIndex].websiteMaalemRow28IconInstagramCol3} />
             
            </Box>
            <Box className="col" key={`footer-widget--key${data.maalemJson.footer.menu[3]['id']}`}>
              <Heading as="h3" content={cmsItems[langIndex].websiteMaalemRow28IconYouTubeCol4} />
            </Box>
            <Box className="col" key={`footer-widget--key${data.maalemJson.footer.menu[4]['id']}`}>
              <Heading as="h3" content={cmsItems[langIndex].websiteMaalemRow28IconLinkedInCol5} />
            </Box> */}
        </WidgetArea>
        {/* End of footer widgets area */}
        <MenuArea>
          <Logo
            className="logo"
            href="https://maalem.com.sa/en"
            logoSrc={LogoImage}
            title="App Classic"
          />
          <Menu >
          {data.maalemJson.footer.menulocal[0].menu.map((item, index) => (
                <MenuItem key={`footer-link${item.id}`}>
                  {index==2 ? 
                  <a className="pointer-cursor"  onClick={e=>setOpen(!formOpen)}>{item.text}
                  </a>
                  :index==1 ? 
                  <a className="pointer-cursor" className={team} onClick={toggelFAQ} href='#' >{item.text}
                  </a>
                  :index==0 ? 
                  <a className="pointer-cursor" className={testimoniall} onClick={toggelAboutUs} href='#' >{item.text}
                  </a>
                  :<a href ="" >{item.text}</a>
                  }
                </MenuItem>
              ))}
             <div className={formOpen ? 'contact-items formOpen':'contact-items'} > 
               <button className="close-btn" onClick={e=>setOpen(!formOpen)}>&times;</button>          
               <label htmlFor="name">Name</label>
               <input type="text" id="name" placeholder="Enter Name" name="name" />             
               <label htmlFor="email">Email:</label>
               <input type="email" id="email" placeholder="Enter email" name="email" />
               <label htmlFor="query">Query:</label>
               <textarea id="query" name="query" placeholder="Write your query here" rows="4" cols="30"></textarea>
           
             <button type="submit" onClick={e=>setOpen(!formOpen)}>Submit</button>
           </div>
           
           
          </Menu>
          <CopyrightText><a href="https://www.intelora.co.in"> Copyright {year} By intelora.co.in</a></CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
</ContentWrapper>
  );
};

export default Footer;
