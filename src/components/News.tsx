import React from 'react';
import { Calendar, ArrowRight, ExternalLink, Award, Users, BookOpen, Zap, User } from 'lucide-react';

interface NewsProps {
  onReadFullStory: (newsId: string) => void;
  onViewAllNews: () => void;
}

const News: React.FC<NewsProps> = ({ onReadFullStory, onViewAllNews }) => {
  const news = [
    {
      id: "ieee-pes-stall",
      title: "IEEE PES SB Stall",
      date: "16-09-2025",
      category: "Stall",
      excerpt: "Join us at the IEEE PES SB Stall during the Freshers Day event to explore about us and engage in exiciting activities.",
      featured : true,
      image: "./src/assets/CF4.JPG",
      icon: <Zap className="w-4 h-4" />
    },
    {
      id: "kalpana-2025",
      title: "Kalpana 2025",
      date: "25-02-2025",
      category: "Hackathon",
      excerpt: "We are excited to announce Kalpana 2025, our annual flagship hackathon event, happening on March 15-16, 2025. Join us for 24 hours of coding, collaboration, and innovation!",
      image: "./src/assets/KP1.JPG",
      featured: true,
      icon: <Award className="w-4 h-4" />
    },
    {
      id: "ieee-xtreme",
      title: <a href="https://ieeextreme.org">IEEE Xtreme 19.0</a>,
      date: "25-10-2025",
      category: "Competition",
      excerpt: "Participate in IEEE Xtreme 19.0, a global coding competition where teams of students compete to solve challenging programming problems over a 24-hour period.",
      icon: <Users className="w-4 h-4" />
    },
    {
      id: "code-fusion",
      title: "Code Fusion",
      date: "20-09-2024",
      category: "Hackathon",
      excerpt: "A 24-hour hackathon event where students come together to build innovative projects and compete for exciting prizes.",
      icon: <Award className="w-4 h-4" />
    },
    {
      id: "ctf-challenge",
      title: "CTF challenge",
      date: "18-01-2025",
      category: "Workshop",
      excerpt: "Enhancing skills in cybersecurity through hands-on challenges and competitions.",
      icon: <Users className="w-4 h-4" />
    },
    {
      id: "chrome-extension",
      title: "Chrome Extension Workshop",
      date: "15-10-2024",
      category: "Workshop",
      excerpt: "Learn how to develop Chrome extensions from scratch in this hands-on workshop.",
      icon: <Users className="w-4 h-4" />
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hackathon': return 'bg-yellow-100 text-yellow-700';
      case 'Workshop': return 'bg-blue-100 text-blue-700';
      case 'Stall': return 'bg-red-100 text-red-700';
      case 'Industrial Visit': return 'bg-purple-100 text-purple-700';
      case 'Guest-Talk': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColorDark = (category: string) => {
    switch (category) {
      case 'Hackathon': return 'dark:bg-yellow-900 dark:text-yellow-300';
      case 'Workshop': return 'dark:bg-blue-900 dark:text-blue-300';
      case 'Stall': return 'dark:bg-red-900 dark:text-red-300';
      case 'Industrial Visit': return 'dark:bg-purple-900 dark:text-purple-300';
      case 'Guest-Talk': return 'dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="news" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">IEEE News & Updates</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest achievements, upcoming events, educational programs, and student accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Featured Article */}
          <div className="lg:col-span-2 space-y-8">
            {news.filter(item => item.featured).map((article, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group">
                <img 
                  src={article.image} 
                  alt={typeof article.title === 'string' ? article.title : ''}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)} ${getCategoryColorDark(article.category)}`}>
                        {article.category}
                      </span>
                      <div className="text-gray-400">
                        {article.icon}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1 text-gray-400 dark:text-gray-500" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                  <button 
                    onClick={() => onReadFullStory(article.id)}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* News List */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Updates</h3>
            {news.filter(item => !item.featured).map((article, index) => (
              <>
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 group border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(article.category)} ${getCategoryColorDark(article.category)}`}>
                        {article.category}
                      </span>
                      <div className="text-gray-400">
                        {article.icon}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {article.date}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{article.excerpt}</p>
                </div>
                <button 
                  onClick={() => onReadFullStory(article.id)}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group mt-2"
                >
                  Read Full Story
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={onViewAllNews}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center mx-auto shadow-lg hover:shadow-xl"
          >
            View All News
            <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;