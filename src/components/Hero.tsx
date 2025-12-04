import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useCallback } from 'react';
// Image reference remains a string pointing to the public path
import { Textarea } from '@/components/ui/textarea';

// --- Main Hero Component (Cleaned up, no Gemini code) ---

const Hero = () => {
  return (
    <section className="relative h-auto md:min-h-screen py-20 flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          // FIX: Static path reference
          src="/src/assets/hero-bg.jpg" 
          alt="Digital Communication Specialist Background Abstract Design" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Adjusted Gradient to use the Indigo/Cyan color scheme for professionalism */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-cyan-900/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Main Text Content (Now spans all 12 columns on MD+, centered) */}
        <div className="md:col-span-12 space-y-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg max-w-4xl mx-auto">
            <span className="block text-gray-100">The Unified Freelancer:</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
                Copywriting & Design, Simplified.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I Turn your ideas into High-Converting Assets Delivering Professional, Cohesive Results that attract the right Audience on Fiverr and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <Button 
              size="lg" 
              // Primary button uses Indigo for action
              className="bg-indigo-600 hover:bg-indigo-700 text-lg shadow-lg"
              asChild
            >
              <a href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-gray-500/50 text-gray-300 hover:bg-gray-800 text-lg backdrop-blur-sm"
              asChild
            >
              {/* <a href="#services">
                View Services
              </a> */}
            </Button>
          </div>
        </div>

        {/* Removed the Gemini Feature Area (md:col-span-5) */}

      </div>

      {/* Scroll Indicator (Styling adapted to new theme) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-3 bg-indigo-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;