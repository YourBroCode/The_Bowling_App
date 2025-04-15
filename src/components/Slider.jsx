import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

import t1 from '../../assets/t1.png';
import t2 from '../../assets/t2.png';
import t3 from '../../assets/t3.png';
import t4 from '../../assets/t4.png';
import t5 from '../../assets/t5.png';

const images = [t1, t2, t3, t4, t5];

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-5 ">
              <img src={img} alt={`Slide ${index + 1}`} style={{ borderRadius: '40px' }} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
