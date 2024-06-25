"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import required modules
import Head from 'next/head';
export default function App() {
  return (
    <html lang="en">

<Head>
  <meta charset="utf-8" />
  <title>Swiper demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
 

  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
 
</Head>

<body>
  
  <swiper-container class="mySwiper" navigation="true">
    <swiper-slide>
       <div className='flex '>
       <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
       <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
       </div>
      
      </swiper-slide>
    <swiper-slide>
    <div className='flex '>
       <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
       <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
       </div>
    </swiper-slide>
    <swiper-slide>
    <div className='flex '>
       <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
       <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
       </div>
    </swiper-slide>
    <swiper-slide>
    <div className='flex '>
       <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
       <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
       </div>
    </swiper-slide>
    <swiper-slide>
    <div className='flex '>
       <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
       <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
       </div>
    </swiper-slide>
    <swiper-slide>
    <div className='flex '>
       <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
       <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
       </div>
    </swiper-slide>
    <swiper-slide>
    <div className='flex '>
       <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
       <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
       </div>
    </swiper-slide>

  </swiper-container>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>

</body>

</html>

  );
}
