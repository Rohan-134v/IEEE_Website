import React, { useState, useEffect } from 'react';
import { ArrowLeft, Instagram, Users, Calendar, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

interface IEEEInfoProps {
  onBack?: () => void;
}

const More: React.FC<IEEEInfoProps> = ({ onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - using Pexels URLs for demonstration
  const images = [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  // Auto-switch images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Outstanding Student Branch Award",
      description: "Recognized for exceptional contributions to the IEEE community"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "500+ Active Members",
      description: "One of the largest IEEE student branches in the region"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "50+ Events Annually",
      description: "Workshops, seminars, competitions, and networking events"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Partnerships",
      description: "Collaborations with IEEE chapters worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
    <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-start">
          {/* Note: The button is now on the left. It is currently non-functional as there is no 'home' page to go back to */}
          <button
            onClick={onBack}
            className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Title and Logo */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="./src/assets/Logo.png"
            alt="IEEE PESU SB Logo"
            className="rounded-lg w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">IEEE Student Branch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">PES University, Bangalore</p>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Journey in Pictures</h2>
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={images[currentImageIndex]}
                alt={`IEEE SB PESU Event ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'bg-white'
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About IEEE SB PESU</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Established in 2008, the IEEE Student Branch at PES University has been at the forefront of
              technological innovation and student development. We are committed to fostering a culture of
              learning, research, and professional growth among our members.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Our branch serves as a bridge between academic learning and industry requirements, providing
              students with practical exposure to cutting-edge technologies and professional networking
              opportunities.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Through various technical events, workshops, and competitions, we aim to develop well-rounded
              engineers who can contribute meaningfully to society and the technology sector.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  Promote technological innovation and excellence in engineering education
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  Foster professional development and leadership skills among students
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  Create a platform for knowledge sharing and collaborative learning
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  Bridge the gap between academia and industry through practical exposure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-all duration-200">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-200">
                  <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Follow Us Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <Instagram className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">Follow Us on Instagram</h3>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Stay updated with our latest events, workshops, and achievements. Join our community of tech enthusiasts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.open("https://www.instagram.com/ieee_pesuecc_sb?igsh=bmNkcWhseXVnd2Qx", "_blank")}
              className="bg-white text-pink-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @ieee_pesuecc_sb
            </button>
            <div className="text-white opacity-75">
              <span className="font-semibold">1K+</span> followers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
