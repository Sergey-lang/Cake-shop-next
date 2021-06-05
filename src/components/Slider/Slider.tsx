import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { SliderInfoBlock } from './SliderInfoBlock/SliderInfoBlock';

export const Slider: React.FC = () => {

  return (
    <Carousel emulateTouch={true}
              infiniteLoop={true}
              showThumbs={false}
              autoPlay={true}
              showStatus={false}
              interval={8000}
              showArrows={false}
    >
      <SliderInfoBlock imageSrc={'/static/image/slider/slide5.1.jpg'}
                       mediumTitle={'Fruity cream cake'}
                       buttonTitle={'Raspberries, dipped in cream, blended with mint leaves.'}
                       navLinkTitle={'ЗАКАЗАТЬ СЕЙЧАС'}/>
      <SliderInfoBlock imageSrc={'/static/image/slider/slide5.2.jpg'}
                       right
                       mediumTitle={'Healthy Cake For you'}
                       buttonTitle={'Raspberries, dipped in cream, blended with mint leaves.'}
                       navLinkTitle={'ЗАКАЗАТЬ СЕЙЧАС'}/>
    </Carousel>
  );
};
