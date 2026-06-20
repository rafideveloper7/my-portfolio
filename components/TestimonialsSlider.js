"use client";

import { Quote } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/data/testimonials";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={18}
      slidesPerView={1}
      loop
      autoplay={{ delay: 3600, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 }
      }}
      className="!pb-12"
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.name}>
          <article className="min-h-[285px] rounded-[1.25rem] border border-line bg-coal p-6">
            <Quote className="text-lime" size={30} />
            <p className="mt-5 text-base leading-8 text-paper">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-6 border-t border-line pt-5">
              <h3 className="font-display text-lg font-black">{item.name}</h3>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
