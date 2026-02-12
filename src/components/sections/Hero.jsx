import React from 'react'
import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { SiReact, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'
import { PERSONAL_INFO, STATS } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'
import RedialGradientBackground from '../backgrounds/RedialGradientBackground'
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RedialGradientBackground variant="hero" />
      {/**
  * content container
  */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full ">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-x md:text-sm text-white tracking-[1.2px] font-semibold">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-3xl text-white font-bold max-w-[550px] mb-8 mt-10">
                「ユーザーの目的を最短で叶えるUI設計と、モダンな実装力。」
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text:white mb:20 leading:tight">
                HTET AUNG <span className='text-[16px] '>テッ　アウン</span>
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center mb-12 mt-15"
              >
                <div className="relative z-10 bg-white text-green-800 rounded-[17px] px-[26px] py-[13px] text-base border border-white 
                  transition-all duration-300 
                  group-hover:bg-opacity-80 group-hover:scale-105">
                  Get in Touch
                </div>
              </button>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full max-sm:hidden">
                {STATS.map((stat, index) => (
                  <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0">
                    <div className="text-2xl font-normal text-primary mb-[8px] font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          {/**Right image */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  {/* Spinning border - self-closing or properly closed */}
                  <div className="absolute inset-[2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl" />
                </div>

                {/* Image container - moved outside the spinning div */}
                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                  <img
                    src="/developer/a.jpg"
                    alt="Developer at work"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Technology Logos */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border-white/10 rounded-full px-6 py-3">
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiReact className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiHtml5 className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiCss3 className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiJavascript className="w-full h-full text-primary" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/**Scroll Indicator */}
      <button onClick={() => scrollToSection('about')} className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <ChevronDown className='w-8 h-8 text-primary' />
      </button>
    </section>
  )
}

export default Hero
