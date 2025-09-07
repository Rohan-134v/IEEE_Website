import React from 'react';
import { BookOpen, Network, Award, Rocket, ArrowRight } from 'lucide-react';

interface AboutProps {
  onLearnMore: () => void;
}

const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  const benefits = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Professional Development",
      description: "Access to cutting-edge research, publications, and continuing education opportunities."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Global Network",
      description: "Connect with professionals and students from around the world in your field of interest."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition & Awards",
      description: "Opportunities for scholarships, grants, and recognition for outstanding achievements."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Career Advancement",
      description: "Access to job boards, career resources, and professional development tools."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">IEEE SB PESU</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The IEEE Student Branch at PES University is a vibrant community of aspiring engineers and technology enthusiasts.
            We are dedicated to fostering innovation, professional growth, and networking opportunities for our members.
            We organize a variety of events, workshops, and seminars to help students enhance their skills and connect with industry professionals.
            We invite you to join us and be part of a global network that is shaping the future of technology.
          </p>
            <div className="flex justify-center mt-8">
              <button
              onClick={onLearnMore}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex justify-between items-center group"
              >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-200 group-hover:translate-x-2" />
              </button>
            </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">IEEE Membership</h3>
          <p className="text-xl mb-6 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Becoming an IEEE member opens doors to a world of opportunities. As a member, you gain access to exclusive resources,
            professional development workshops, networking events, and much more.
            Membership also provides opportunities for scholarships, awards, and leadership development.<br/> Join us today and take the next step in your professional journey with IEEE.
            <br/><h3 className="text-3xl font-semi-bold mb-4 text-white text-center pb-2">Open to all students</h3>
          </p>
        </div>
        <h3 className="text-3xl font-bold mb-4 text-white text-center pb-10">Perks of Membership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-200">
                <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What We Do at PESU</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Technical workshops and seminars
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Industry networking events
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Research paper presentations
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Community outreach programs
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Student competitions and hackathons
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why get IEEE Membership ?</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Access to IEEE Xplore Digital Library
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Professional networking opportunities
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Career development resources
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Scholarships and awards
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Leadership development opportunities
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Future?</h3>
          <p className="text-xl mb-6 opacity-90">
            Become part of the world's largest technical professional organization and advance your career in technology.
          </p>
          <button
            onClick={() => window.open("https://www.ieee.org/membership/join", "_blank")}
            className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
          >
            Become a Member Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;