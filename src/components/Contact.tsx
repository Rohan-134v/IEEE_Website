import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Users, Calendar, Globe, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "ieee@pes.edu",
      action: <a href="mailto:ieee@pesu.edu">Send Email</a>
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Engineering Block, PES University, Electronic City, Bangalore - 560100",
      action: <a href="https://maps.google.com/?cid=5453068289171086966&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ">Get Directions</a>
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "IEEE Global",
      content: "Connect with IEEE worldwide\nwww.ieee.org",
      action: <a href="https://www.ieee.org">Visit Website</a>
    }
  ];

  const quickActions = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Become a Member",
      description: "Join the world's largest technical professional organization",
      action: <a href="https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoiS1NaZXotNkVBMGhNalRfUDZKM2ZfY0l3NUs0Iiwic3VmZml4IjoiNGZEQmRvLjE3NTc0MjAxODIifQ..B5SoZMDpiF6-Xu3W6-sT3g.w_DKKeTfHSLVoCmY5SNbRg33ZLxcbJ1f1szNIzi5PTNrK0JzgGKw8jvtCzK9FwcpKJDFYrax49nU5Ogh57WjzWSOGvXMhZRrAsQd1xSqbFhBF_9Dn7EfzjWOCFkNMBJg.Oj344BP-85nfVe27LUDMyw&nonce=kbpowDwwlI0_Dx17pk1_rWgWju8FdY-HzAbzjeyvbcU&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fgrade%3DStudent&vnd_pi_application_name=MembershipApplication">Apply Now</a>,
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Upcoming Events",
      description: "Register for workshops, seminars, and technical sessions",
      action: "View Events",
      color: "from-green-600 to-blue-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Student Opportunities",
      description: "Explore scholarships, competitions, and leadership roles",
      action: <a href="https://students.ieee.org/student-opportunities/">Learn More</a>,
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Connect With IEEE</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to advance your career in technology? Have questions about membership or events? 
            We're here to help you take the next step in your professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
            <form action="https://formspree.io/f/xandloaz" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Anupam G"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="anupag@pesu.edu"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Membership inquiry, event question, etc."
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="How can we help you get started with IEEE?"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                Submit
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-4 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start">
                    <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg mr-4">
                      <div className="text-blue-600 dark:text-blue-400">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{info.content}</p>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
                      {info.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <div key={index} className={`bg-gradient-to-r ${action.color} rounded-lg p-6 text-white hover:shadow-lg transition-all duration-200`}>
                  <div className="flex items-center">
                    <div className="text-white mr-4">{action.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{action.title}</h4>
                      <p className="text-white/90 text-sm">{action.description}</p>
                    </div>
                    <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium">
                      {action.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;