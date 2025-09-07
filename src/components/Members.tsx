import React from 'react';
import { Star, Award, Users, Mail, GraduationCap, Trophy, Target, Globe, ArrowRight, Linkedin } from 'lucide-react';

const Members = () => {
  const spotlights = [
    {
      name: "Anupam G",
      role: "Chair",
      year: "3rd Year - Computer Science and Engineering",
      image: "./src/assets/8.png",
      quote: "Anupams Bio"
    },
    {
      name: "Rohan",
      role: "Vice Chair",
      year: "3rd Year - Computer Science and Engineering",
      image: "./src/assets/9.png",
      quote: "Rohans Bio"
    },
    {
      name: "Meghana Veeramallu ",
      role: "WIE Chair",
      year: "3rd Year - Computer Science and Engineering",
      image: "./src/assets/10.png",
      quote: "Meghanas Bio"
    },
    {
      name: "Delisha Dsouza",
      role: "Treasurer",
      year: "3rd Year - Computer Science and Engineering",
      image: "./src/assets/11.png",
      quote: "Delishas Bio"
    },
    {
      name: "Atharv Mittal",
      role: "SIGHT Chair",
      year: "3rd Year - Computer Science and Engineering",
      image: "./src/assets/12.png",
      quote: "Atharvs Bio"
    },
    {
      name: "Akshaj Hedau",
      role: "Webmaster",
      year: "3rd Year - Computer Science and Engineering",
      image: "./src/assets/13.png",
      quote: "Akshajs Bio"
    }
  ];

  return (
    <section id="members" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Student Leadership</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated student leaders who drive our IEEE Student Branch PES University forward and represent 
            the next generation of engineering and technology professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {spotlights.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-6 border border-gray-100 dark:border-gray-700 text-center group">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-50 dark:ring-blue-900 group-hover:ring-blue-100 dark:group-hover:ring-blue-800 transition-all duration-200"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{member.role}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{member.year}</p>
              <blockquote className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
                "{member.quote}"
              </blockquote>
              <div className="flex items-center">
                <Linkedin onClick={() => window.open('#', '_blank')} className="w-6 h-6 text-black-600 dark:text-gray-400 mt-4 cursor-pointer hover:scale-110 transition-transform duration-200" />
                <Mail onClick={() => window.open('mailto:#', '_blank')} className="w-6 h-6 text-black-600 dark:text-gray-300 mt-4 ml-3 cursor-pointer hover:scale-110 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-3xl font-bold mb-10 text-white text-center pb-10">The Core-team thoughts on Membership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Membership Benefits</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <Target className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                Access to IEEE Xplore Digital Library
              </li>
              <li className="flex items-start">
                <Target className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                Professional development workshops
              </li>
              <li className="flex items-start">
                <Target className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                Networking with industry professionals
              </li>
              <li className="flex items-start">
                <Target className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                Leadership opportunities
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-orange-50 dark:from-green-900/20 dark:to-orange-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to get Membership</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                <p className="text-gray-600 dark:text-gray-300">Complete the online membership application</p>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                <p className="text-gray-600 dark:text-gray-300">Pay the annual student membership fee</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                <p className="text-gray-600 dark:text-gray-300">Enjoy The Benefits of Membership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <button onClick={() => window.open('https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoiS1NaZXotNkVBMGhNalRfUDZKM2ZfY0l3NUs0Iiwic3VmZml4IjoiNGZEQmRvLjE3NTc0MjAxODIifQ..B5SoZMDpiF6-Xu3W6-sT3g.w_DKKeTfHSLVoCmY5SNbRg33ZLxcbJ1f1szNIzi5PTNrK0JzgGKw8jvtCzK9FwcpKJDFYrax49nU5Ogh57WjzWSOGvXMhZRrAsQd1xSqbFhBF_9Dn7EfzjWOCFkNMBJg.Oj344BP-85nfVe27LUDMyw&nonce=kbpowDwwlI0_Dx17pk1_rWgWju8FdY-HzAbzjeyvbcU&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fgrade%3DStudent&vnd_pi_application_name=MembershipApplication', '_blank')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center mx-auto group shadow-lg hover:shadow-xl">
          Get Membership Today
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Members;