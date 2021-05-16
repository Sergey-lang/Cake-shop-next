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
                       topTitle={'МУССОВЫЙ'}
                       mediumTitle={'СОБЛАЗН'}
                       buttonTitle={'Вариант для тех, кто любит сметанные торты, но ему не по вкусу шоколад'}
                       navLinkTitle={'ЗАКАЗАТЬ СЕЙЧАС'}/>
      <SliderInfoBlock imageSrc={'/static/image/slider/slide5.2.jpg'}
                       topTitle={'БИСКВИТНЫЙ'}
                       mediumTitle={'ДАМСКИЙ КАПРИЗ'}
                       buttonTitle={'Сладкоежкам, обожающим мед, мы с удовольствием предложим медовый торт со сметанным кремом'}
                       navLinkTitle={'ЗАКАЗАТЬ СЕЙЧАС'}/>
    </Carousel>
  );
};
