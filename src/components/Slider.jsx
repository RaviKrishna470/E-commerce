import React, { useEffect, useRef, useState } from 'react'
import Styles from "./Slider.module.css"

const Slider = () => {
    const [counter, setCounter] = useState(0);
    const slidesRef = useRef(null);
  
    useEffect(() => {
      const slides = slidesRef.current;
      if (!slides) return;
  
      const images = slides.querySelectorAll('img');
  
      const interval = setInterval(() => {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(${-counter * 100}%)`;
  
        setCounter((prevCounter) => (prevCounter === images.length - 1 ? 0 : prevCounter + 1));
      }, 3000);
  
      return () => clearInterval(interval);
    }, [counter]);
  





  return (
    <>
    <div className={Styles.slider}>
        <div className={Styles.slides} ref={slidesRef} >
        <img className={Styles.jss1232} src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner5-16FEB24.png"  alt="hero_banner_image_4"></img>

        <img  src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner1-16FEB24.gif"  alt="hero_banner_image_0"></img>

        <img  src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner3-16FEB24.png" alt="hero_banner_image_2"></img>
        </div>
    </div>
    <img className={Styles.arrival} src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.lmsin.net/MAX-Friday/MAX2.O/Uber-HP-Desktop-PromoStrip5-25JAN24.png" alt=""></img>
    </>
  );
}

export default Slider
