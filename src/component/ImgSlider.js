import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ImgSlider =(props)=>{

    return(
        <OwlCarousel className='owl-theme' 
        loop
        margin={30} 
        center
        autoplay
        items={1}                                                                                                                                               
        >

        <div class='item'>
           <a>
             <img src='/images/slider-badag.jpg'/>
           </a>
        </div>

        <div class='item'>
           <a>
             <img src='/images/slider-badging.jpg'/>
           </a>
        </div>

        <div class='item'>
            <a>
             <img src='/images/slider-scale.jpg'/>
           </a>
        </div>

        <div class='item'>
           <a>
             <img src='/images/slider-scales.jpg'/>
           </a>
        </div>
    </OwlCarousel>
    )
}

export default ImgSlider;