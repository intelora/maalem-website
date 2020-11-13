import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link }  from 'gatsby';


import { DrawerContext } from '../../contexts/DrawerContext';

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
  
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems = [];

  const [state, setState] = useState({
    menuItems: menuItems
  });
  
  // toggle language in menu
  const toggleLanguage = () => {
    
    if(window.sessionStorage.getItem('lang')==='en'){
      window.sessionStorage.setItem('lang', 'ar');
      setState({menuItems:JSON.parse(window.sessionStorage.getItem('menuItems'))[0].menu.menu})
    
    }else{
      window.sessionStorage.setItem('lang', 'en');
      setState({menuItems:JSON.parse(window.sessionStorage.getItem('menuItems'))[1].menu.menu})
    }
  };
  // window.onscroll = function() {scrollFunction()};

  // function scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     document.getElementById("loginDropdown").style.backgroundColor = "#ffffff";
  //     document.getElementById("loginDropdown").style.backgroundImage = "none";
  //   }
  //   else{
  //     // document.getElementById("loginDropdown").classList.add("bgGradient")
  //     document.getElementById("loginDropdown").style.backgroundImage = "-webkit-linear-gradient(  rgb(100,43,115) 0%, rgb(198,66,110) 100% )";   
  //   }
  // }
  // convert menu path to scrollspy items
  state.menuItems.forEach(item => {
    scrollItems.push(item.href);
  });    

  // Add all classs to an array
  const addAllClasses = ['scrollspy__menu'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Close drawer when click on menu item
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };
  console.log("101010101010");
  console.log('kkk',state.menuItems);
  return (
    <Scrollspy
      items={scrollItems}
      className={addAllClasses.join(' ')}
      drawerClose={drawerClose}
      {...props}
    >


      {state.menuItems.map((menu) => (
        
        <li className="dropdown" key={`1111`}>
          {menu.staticLink ? (
            <a href={menu.path}>{menu.label}</a>
          ) : (
            <>
              {drawerClose ? (
                <AnchorLink
                  href={menu.href}
                  onClick={toggleDrawer}
                >
                  {menu.item}
                </AnchorLink>
              ) : (
                <Link to={menu.href}  >
                  {menu.item}
                </Link>
                
              )}
              </>
          )}


        {/* {menu.item=='Login' || menu.item=="قدم الآن"? 
        <div className="dropdown-content" id="loginDropdown">
        <a>{menu.submenu[0].item}</a>
        <a>{menu.submenu[1].item}</a>
        <a>{menu.submenu[2].item}</a>
      </div>
      : ""} */}
        </li>  
      ))}
      <li key="999">
        <a href="#" onClick={toggleLanguage} offset="20">
        

          {
              window.sessionStorage.getItem('lang') === 'ar' ? "عربى" : "ENGLISH"
          }
        </a>
      </li>
    </Scrollspy>
  );
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: PropTypes.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: PropTypes.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: PropTypes.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: PropTypes.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: PropTypes.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: PropTypes.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: PropTypes.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: PropTypes.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: PropTypes.func,
};

ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current',
};

export default ScrollSpyMenu;
