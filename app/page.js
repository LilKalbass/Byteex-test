'use client'
import Image from "next/image";
import {Hero} from "@/components/Hero";
import {About} from "@/components/About";
import {Explore} from "@/components/Explore";
import {Order} from "@/components/Order";
import {Testimonial} from "@/components/Testimonial";
import {InfoBanner} from "@/components/InfoBanner";
import {Faq} from "@/components/Faq";

export default function Home() {
  return (
      <main>
          <div className='overflow-hidden h-full'>
              <Hero/>
              <About/>
              <Explore/>
              <Order/>
              <Testimonial/>
              <Faq/>
              <InfoBanner/>
          </div>
      </main>
  );
}
