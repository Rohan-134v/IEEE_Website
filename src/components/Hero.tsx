import React from 'react';
import { ArrowRight, Zap, Award, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center space-x-2 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full animate-bounce delay-0">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full animate-bounce delay-150">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full animate-bounce delay-300">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Advancing Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
              {' '}for Humanity
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            IEEE is the world's largest technical professional organization dedicated to advancing technology 
            for the benefit of humanity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={() => window.open('https://www.ieee.org/', '_blank')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center group shadow-lg hover:shadow-xl">
              Explore IEEE
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 mb-2">423K+</div>
              <div className="text-gray-600 dark:text-gray-300">Global Members</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 mb-2">160+</div>
              <div className="text-gray-600 dark:text-gray-300">Countries</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 mb-2">3000+</div>
              <div className="text-gray-600 dark:text-gray-300">Student Branches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;