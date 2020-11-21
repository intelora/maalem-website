import React, { useState, useRef } from 'react';
import { useStaticQuery, graphql, getMenuFromServer } from 'gatsby';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import { search } from 'react-icons-kit/feather/search';
import Logo from 'common/src/components/UIElements/Logo';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import useOnClickOutside from 'common/src/hooks/useOnClickOutside';
import NavbarWrapper, { MenuArea, MobileMenu, Search } from './navbar.style';
import LogoImage from 'common/src/assets/image/maalem/logo-white.png';
import LogoImageAlt from 'common/src/assets/image/maalem/logo.png';

const Navbar = () => {
  if (window.sessionStorage.getItem('lang') == null) {
    window.sessionStorage.setItem('lang', 'en');
  }

  /*  const data = useStaticQuery(graphql`
    query {
      maalemJson {
        navbar {
          logo {
            publicURL
          }
          navMenu {
            id
            label
            path
            offset
          }
        }
      }
    }
  `);



  const { navMenu } = data.maalemJson.navbar;
*/
  const cmsItems2 = [
    {
      _id: '5fb234e6f03e5905340f36a2',
      lang: 'en',
      AboutUs: 'About US',
      createdAt: '2020-11-16T08:14:30.977Z',
      updatedAt: '2020-11-17T19:05:13.837Z',
      __v: 0,
      contactus: 'Contact Us',
      faq: 'F&Q',
      privacy: 'Privacy',
      termsandconditions: 'Terms & Conditions',
      aboutus_arthus: 'Arthus Doe',
      aboutus_berlin: 'Berlin Corleone, CEO',
      aboutus_description:
        'Maalem application for financing, various financing options, in your hands.',
      aboutus_heading:
        'Maalem is a Saudi company licensed by the Saudi Arabian Monetary Agency, working in the field of consumer finance and financing small and medium enterprises by providing financing products ....',
      aboutus_headingnew: 'Vision :',
      aboutus_jona: 'Jona White, CFO',
      aboutus_kabirali: 'Kabir Ali, Head',
      aboutus_messageheading: 'The message:',
      aboutus_michael: 'Michael Price, CIO',
      aboutus_missclair: 'Miss Clair, COO',
      aboutus_vtojackson: 'Vito Jackson, CTO',
      calculatehomeloamemi: 'Calculate Home Loan EMI',
      emioverdue: 'EMI Over Due',
      howtoapply1: 'Analyse your financial situation',
      howtoapply2: 'Check your requirements for a loan',
      howtoapply3: 'You can apply for a loan at a bank or online',
      howtoapply4: 'Mobile Appllication',
      interest: 'Interest',
      interestrate: 'Interest Rate',
      loamemi: 'Loan EMI',
      loanamount: 'Loan Amount',
      loancalculator: 'Loan Calculator',
      loancalculatordescription: 'decription',
      loancalculatorheading: 'Calculate & Customize Loan EMI',
      loantenure: 'Loan Tenure',
      new_fields_one:
        'To be the parameters of the first and optimal choice in the field of financing in the Kingdom of Saudi Arabia.',
      new_fields_three: '...',
      new_fields_two:
        'Providing financing products appropriate to the needs of individuals and enterprises, through high-performance corporate processes, using the latest systems in line with the provisions of Islamic Sharia.',
      totalamount: 'Total Amount',
      totalinterestpayable: 'Total Interest Payable',
      totalpayment: 'Total Payment',
      youremidetails: 'Your EMI Details',
      new_fields_four: 'Meet our business partner who work behind the scene',
      id: '5fb234e6f03e5905340f36a2'
    },
    {
      _id: '5fb23583f03e5905340f36a3',
      lang: 'ar',
      AboutUs: 'معلومات عنا',
      createdAt: '2020-11-16T08:17:07.257Z',
      updatedAt: '2020-11-17T19:03:49.695Z',
      __v: 0,
      contactus: 'اتصل بنا',
      faq: 'التعليمات',
      privacy: 'خصوصية',
      termsandconditions: 'الأحكام والشروط',
      calculatehomeloamemi: 'احسب EMI قرض المنزل',
      emioverdue: 'انتهى EMI المستحق',
      howtoapply1: 'حلل وضعك المالي',
      howtoapply2: 'تحقق من متطلباتك للحصول على قرض',
      howtoapply3: 'يمكنك التقدم بطلب للحصول على قرض من البنك أو عبر الإنترنت',
      howtoapply4: 'تطبيق المحمول',
      interest: 'فائدة',
      interestrate: 'سعر الفائدة',
      loamemi: 'EMI للقرض',
      loanamount: 'مبلغ القرض',
      loancalculator: 'حاسبة القروض',
      loancalculatordescription: 'فك',
      loancalculatorheading: 'حساب وتخصيص EMI للقرض',
      loantenure: 'فترة القرض',
      totalamount: 'المبلغ الإجمالي',
      totalinterestpayable: 'إجمالي الفوائد المستحقة الدفع',
      totalpayment: 'المبلغ الإجمالي',
      youremidetails: 'تفاصيل EMI الخاصة بك',
      aboutus_description:
        'تطبيق معلم للتمويل ، خيارات تمويل متنوعة ، بين يديك.',
      aboutus_heading:
        'معلم هي شركة سعودية مرخصة من مؤسسة النقد العربي السعودي ، تعمل في مجال تمويل المستهلك وتمويل المشاريع الصغيرة والمتوسطة من خلال تقديم منتجات وحلول تمويلية متوافقة مع أحكام الشريعة الإسلامية ، وتعمل على خدمة الأفراد وتمكينهم من توفير احتياجاتهم الشخصية وكذلك تمكين الشركات من النمو وتطوير أعمالهم.',
      aboutus_headingnew: 'رؤية',
      aboutus_messageheading: 'الرسالة',
      new_fields_one:
        'أن نكون معايير الاختيار الأول والأمثل في مجال التمويل في المملكة العربية السعودية.',
      new_fields_three: '...',
      new_fields_two:
        'تقديم منتجات تمويلية تتناسب مع احتياجات الأفراد والمنشآت ، من خلال عمليات مؤسسية عالية الأداء ، باستخدام أحدث الأنظمة المتوافقة مع أحكام الشريعة الإسلامية.',
      aboutus_kabirali: 'كبير علي ، الرأس',
      aboutus_michael: 'ميخائيل',
      new_fields_four: 'قابل شريكنا التجاري الذي يعمل خلف الكواليس',
      id: '5fb23583f03e5905340f36a3'
    }
  ];
  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
    navIndex: window.sessionStorage.getItem('lang') === 'en' ? 1 : 0
  });

  function getMenuFromServer() {
    if (window.sessionStorage.getItem('menuItems') == null) {
      fetch('http://122.166.172.240:1337/navbars')
        .then((res) => res.json())
        .then((result) => {
          window.sessionStorage.setItem('menuItems', JSON.stringify(result));
        });
    }
  }
  getMenuFromServer();
  function getFaqFromServer() {
    if (window.sessionStorage.getItem('faqItems') == null) {
      fetch('http://122.166.172.240:1337/faqs')
        .then((res) => res.json())
        .then((result) => {
          window.sessionStorage.setItem('faqItems', JSON.stringify(result));
        });
    }
  }
  getFaqFromServer();
  function getCMSFromServer() {
    if (window.sessionStorage.getItem('cmsItems') == null) {
      fetch('http://122.166.172.240:1337/website-maalem-financings')
        .then((res) => res.json())
        .then((result) => {
          window.sessionStorage.setItem('cmsItems', JSON.stringify(result));
        });
    }
    window.sessionStorage.setItem('cmsItems2', JSON.stringify(cmsItems2));
    /* fetch('http://122.166.172.240:1337/websitemaalemnews')
      .then((res) => res.json())
      .then((result) => {
        window.sessionStorage.setItem('cmsItems2', JSON.stringify(result));
        redirectToMaalem();
      }); */
  }
  getCMSFromServer();

  if (window.sessionStorage.getItem('menuItems') == null) {
    var questionGlobal = {
      menu: [
        {
          item: 'a',
          href: '#'
        },
        {
          item: 'b',
          href: '#'
        }
      ],
      menu: [
        {
          item: 'c',
          href: '#'
        },
        {
          item: 'd',
          href: '#'
        }
      ]
    };
    window.sessionStorage.setItem('menuItems', JSON.stringify(questionGlobal));
  }

  const navMenu = JSON.parse(window.sessionStorage.getItem('menuItems'));
  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  // const data = {
  //   nav: [
      
  //        {
  //           id: 1,
  //           title: 'HOME',
  //         },
  //         {
  //           id: 2,
  //           title: 'PRODUCT',
  //         },
  //         {
  //           id: 3,
  //           title: 'HOW TO APPLY',
  //         },
  //         {
  //           id: 4,
  //           title: 'APPLY NOW',
  //         },

  //         {
  //           id: 5,
  //           title: 'Home', 
  //         },
  //       ],
     
  //   ]
  // };
  const toggleHandler = (type) => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu
      });
    }
  };

  const handleOnChange = (event) => {
    setState({
      ...state,
      search: event.target.value
    });
  };

  const handleSearchForm = (event) => {
    event.preventDefault();

    if (state.search !== '') {
      console.log('search data: ', state.search);

      setState({
        ...state,
        search: ''
      });
    } else {
      console.log('Please fill this field.');
    }
  };

  const scrollItems = [];
  navMenu[state.navIndex].menu.menu.forEach((item) => {
    scrollItems.push(item.href);
  });

  // const handleRemoveMenu = () => {
  //   setState({
  //     ...state,
  //     mobileMenu: false,
  //   });
  // };

  const toggleLanguage = () => {
    if (window.sessionStorage.getItem('lang') == 'en') {
      document.getElementsByTagName("languagee")[0].style.direction = "ltr"; 
      window.sessionStorage.setItem('lang', 'ar');
      // document.body.style.direction = "ltr";
    
      state.setState({ navIndex: 0 });
    } else {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
      window.sessionStorage.setItem('lang', 'en');
      state.setState({ navIndex: 1 });
    }
  };

  console.log('navMenu=', navMenu);
  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="https://maalem.com.sa/en"
          logoSrc={LogoImageAlt}
          title="Maalem Financing"
          className="main-logo"
        />
        <Logo
          href="https://maalem.com.sa/en"
          logoSrc={LogoImageAlt}
          title="Maalem Financing"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? '' : ''}>
          <ScrollSpyMenu
            className="menu navbar"
            menuItems={navMenu[state.navIndex].menu.menu}
            offset={-84}
          />
           <a href='http://122.166.172.240:3000/customer/signin?lang='>
          <Button
            title={ window.sessionStorage.getItem('lang')== 'ar' ? 'LOGIN' : 'تسجيل الدخول'}
            
          ></Button>
          </a>
          {/* end of main menu */}

          <Search className="search" ref={searchRef}>
            <form onSubmit={handleSearchForm}>
              <input
                type="text"
                value={state.search}
                placeholder="Enter your keyword"
                onChange={handleOnChange}
              />
            </form>
            <Button
              className="text"
              variant="textButton"
              icon={<Icon icon={state.searchToggle ? x : search} />}
              onClick={() => toggleHandler('search')}
            />
          </Search>

          {/* end of search */}

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu[state.navIndex].menu.menu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  // onClick={handleRemoveMenu}
                >
                  {menu.item}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <Button class="element"
            title={
              'Change Language (' + window.sessionStorage.getItem('lang') + ') '
            }
            onClick={toggleLanguage}
            
          ></Button>
         
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
