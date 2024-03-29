import React, {useState} from 'react'; 
import { Icon } from 'semantic-ui-react';
import { ThemeContext } from './theme/theme-context';
  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  const { theme } = React.useContext(ThemeContext);
  return (
    <Icon className={theme} name="caret square up" size="huge" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none', position: 'fixed', zIndex: '1', right: '5%', bottom: '5%'}}/>
  ); 
} 
  
export default ScrollButton; 