import React from 'react';
import {MapPin, Users, Clock, Wifi} from 'lucide-react';
const Events = () => {
  const events = [
    {
      title: "IEEE SB PESU Freshers Day Stall",
      date: "2025-09-16",
      time: "Free Slots",
      location: "Quadrangle",
      category: "Stall",
      description: "Introducing IEEE SB PESU to new students, showcasing our activities, and encouraging membership sign-ups.",
      icon: <Wifi className="w-5 h-5" />,
      size: "Not specific",
      reg: "On spot Participation",
      reglink: "#"
    },
    {
      title: <a href= "https://ieeextreme.org/">IEEEXtreme 19.0</a>,
      date: "2025-10-25",
      time: "00:00 UTC (GMT+5:30)",
      location: "Online",
      category: "Competition",
      description: "Are you ready to code without limits? Team up. Compete. Conquer. From anywhere in the world.",
      icon: <Wifi className="w-5 h-5" />,
      size: "upto 6",
      reg: "Register Now",
      reglink: "https://xtreme.vtools.ieee.org/"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Workshop': return 'bg-blue-100 text-blue-700';
      case 'Competition': return 'bg-red-100 text-red-700';
      case 'Talk': return 'bg-green-100 text-green-700';
      case 'Seminar': return 'bg-yellow-100 text-yellow-700';
      case 'Conference': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColorDark = (category: string) => {
    switch (category) {
      case 'Workshop': return 'dark:bg-blue-900 dark:text-blue-300';
      case 'Competition': return 'bg-purple-100 text-purple-700';
      case 'Talk': return 'dark:bg-green-900 dark:text-green-300';
      case 'Seminar': return 'dark:bg-yellow-900 dark:text-yellow-300';
      case 'Conference': return 'dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">IEEE SB PESU Events & Activities</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Participate in technical workshops, industry talks, competitions, and professional development events 
            designed to advance your knowledge and career in engineering and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-6 border border-gray-100 dark:border-gray-700 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)} ${getCategoryColorDark(event.category)}`}>
                    {event.category}
                  </span>
                  <div className="text-gray-400">
                    {event.icon}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{new Date(event.date).getDate()}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {event.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{event.description}</p>

              <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                  {event.size}
                </div>
              </div>

              <button  onClick={() => window.open(event.reglink, "_blank")} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                {event.reg}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white dark:bg-gray-900 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 font-semibold">
            Stay Tuned for More Events!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;