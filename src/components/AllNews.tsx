import React, { useState } from 'react';
import { Calendar, ArrowLeft, Search, Filter, ChevronDown, Eye, Clock, User } from 'lucide-react';

interface AllNewsProps {
  onBack: () => void;
  onViewStory: (newsId: string) => void;
}

const AllNews: React.FC<AllNewsProps> = ({ onBack, onViewStory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const allNews = [
    {
      id: "ieee-pes-stall",
      title: "IEEE PES SB Stall",
      date: "16-09-2025",
      category: "Stall",
      author: "IEEE PES SB Team",
      readTime: "3 min read",
      excerpt: "Join us at the IEEE PES SB Stall during the Freshers Day event to explore about us and engage in exciting activities.",
      image: "./src/assets/CF4.JPG",
      featured: true,
      fullContent: `We are thrilled to announce our participation in the upcoming Freshers Day event with our IEEE PES SB Stall! This is an excellent opportunity for new students to learn about the IEEE Power & Energy Society Student Branch and discover the exciting world of power engineering.

Our stall will feature interactive displays showcasing the latest developments in power systems, renewable energy technologies, and smart grid innovations. Students will have the chance to explore hands-on demonstrations of power system components, learn about career opportunities in the power and energy sector, meet current members and hear about their experiences, participate in exciting technical quizzes with prizes, and sign up for upcoming workshops and events.

We have prepared several engaging activities including a Power System Simulator where you can experience how electrical grids operate in real-time, Renewable Energy Models with working models of solar panels and wind turbines, Technical Quiz to test your knowledge and win exciting prizes, and Career Guidance to get insights from industry professionals and alumni.

As a member of IEEE PES Student Branch, you'll gain access to cutting-edge research opportunities in power and energy systems, networking with industry professionals and researchers, participation in international conferences and competitions, technical workshops and certification programs, and leadership development opportunities.

Location: Main Campus Quad
Time: 9:00 AM - 5:00 PM
Date: September 16, 2025`
    },
    {
      id: "kalpana-2025",
      title: "Kalpana 2025",
      date: "25-02-2025",
      category: "Hackathon",
      author: "Event Organizing Committee",
      readTime: "5 min read",
      excerpt: "We are excited to announce Kalpana 2025, our annual flagship hackathon event, happening on March 15-16, 2025. Join us for 24 hours of coding, collaboration, and innovation!",
      image: "./src/assets/KP1.JPG",
      featured: true,
      fullContent: `Get ready for the most anticipated tech event of the year! Kalpana 2025 is back with bigger challenges, better prizes, and more opportunities to showcase your innovative spirit. This 24-hour hackathon will bring together the brightest minds from across the region to solve real-world problems through technology.

Kalpana 2025 promises to be our most exciting hackathon yet, featuring Multiple Tracks including Web Development, Mobile Apps, AI/ML, IoT, and Blockchain, Industry Mentors to get guidance from experienced professionals, Workshops to learn new technologies and frameworks, Networking opportunities to connect with like-minded developers and entrepreneurs, and Prizes Worth ₹2,00,000 with exciting rewards for winners.

Competition Tracks include:
1. Web Development Track - Build responsive, scalable web applications using modern frameworks
2. Mobile Application Track - Develop native or cross-platform mobile applications
3. Artificial Intelligence & Machine Learning - Create intelligent solutions using AI/ML algorithms
4. Internet of Things (IoT) - Build connected devices and smart systems
5. Blockchain & Cryptocurrency - Develop decentralized applications and smart contracts

Prizes and Recognition:
- Overall Winner: ₹75,000 + Trophy + Certificates
- First Runner-up: ₹50,000 + Trophy + Certificates
- Second Runner-up: ₹25,000 + Trophy + Certificates
- Best Innovation Award: ₹20,000
- Best UI/UX Design: ₹15,000
- Best Use of Technology: ₹15,000

Registration Details:
Team Size: 2-4 members
Registration Fee: ₹500 per team
Registration Deadline: February 20, 2025
Venue: Main Auditorium & Computer Labs`
    },
    {
      id: "ieee-xtreme",
      title: "IEEE Xtreme 19.0",
      date: "25-10-2025",
      category: "Competition",
      author: "IEEE Student Branch",
      readTime: "4 min read",
      excerpt: "Participate in IEEE Xtreme 19.0, a global coding competition where teams of students compete to solve challenging programming problems over a 24-hour period.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      fullContent: `IEEE Xtreme is IEEE's premier global programming competition that brings together students from around the world to test their programming skills and problem-solving abilities. This year marks the 19th edition of this prestigious competition.

IEEE Xtreme is a 24-hour programming competition that challenges teams of up to three IEEE student members to solve a series of programming problems. The competition is held annually and attracts thousands of participants from universities worldwide.

Competition Format:
- Duration: 24 hours continuous
- Team Size: Up to 3 IEEE student members
- Problems: Approximately 25-30 algorithmic problems
- Languages: C, C++, Java, Python, and more
- Platform: Online competition platform

The competition features problems across various difficulty levels and categories including Algorithmic Problems (data structures, graph theory, dynamic programming), Mathematical Problems (number theory, combinatorics, geometry), Implementation Problems (string processing, simulation, parsing), and Optimization Problems (greedy algorithms, linear programming).

Preparation Tips:
Technical Preparation - Practice on platforms like Codeforces, HackerRank, and LeetCode, study common algorithms and data structures, learn multiple programming languages, and practice time management and debugging skills.

Team Strategy - Divide problems based on team members' strengths, establish clear communication protocols, plan rest and meal schedules, and practice collaborative coding.

Our university has consistently performed well in IEEE Xtreme, with several teams ranking in the top 100 globally. Last year, our best team achieved a rank of 47 worldwide, solving 18 out of 28 problems.`
    },
    {
      id: "code-fusion",
      title: "Code Fusion",
      date: "20-09-2024",
      category: "Hackathon",
      author: "Technical Team",
      readTime: "3 min read",
      excerpt: "A 24-hour hackathon event where students come together to build innovative projects and compete for exciting prizes.",
      image: "./src/assets/CF2.JPG",
      fullContent: `Code Fusion was an incredible 24-hour hackathon that brought together passionate developers, designers, and innovators from across the campus. The event was a testament to the creative potential of our student community.

The hackathon featured multiple tracks including Web Development, Mobile Applications, AI/ML Solutions, and IoT Projects. Participants worked tirelessly to transform their ideas into working prototypes, with mentors available throughout the event to provide guidance and support.

Highlights of the event:
- 150+ participants across 40 teams
- 5 different competition tracks
- Industry mentors from leading tech companies
- Workshops on cutting-edge technologies
- Networking sessions with alumni and professionals

Winners:
1st Place: Team InnovateTech - Smart Campus Management System
2nd Place: Team CodeCrafters - AI-Powered Study Assistant
3rd Place: Team TechTitans - Sustainable Energy Monitoring App

The event concluded with an inspiring closing ceremony where participants showcased their projects to a panel of industry experts. The enthusiasm and innovation displayed by all teams made Code Fusion a memorable experience for everyone involved.

Special thanks to our sponsors and partners who made this event possible, and congratulations to all participants for their dedication and creativity!`
    },
    {
      id: "ctf-challenge",
      title: "CTF Challenge",
      date: "18-01-2025",
      category: "Workshop",
      author: "Cybersecurity Club",
      readTime: "4 min read",
      excerpt: "Enhancing skills in cybersecurity through hands-on challenges and competitions.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      fullContent: `The Capture The Flag (CTF) Challenge is designed to enhance cybersecurity skills through practical, hands-on experience. This event combines learning with competition, making cybersecurity education both engaging and effective.

What is CTF?
Capture The Flag competitions are cybersecurity contests where participants solve security-related challenges to find hidden "flags" - strings of text that prove successful completion of a task. These challenges simulate real-world security scenarios and help develop practical skills.

Challenge Categories:
1. Web Security - SQL injection, XSS, authentication bypass
2. Cryptography - Cipher breaking, hash cracking, encryption analysis
3. Reverse Engineering - Binary analysis, malware investigation
4. Network Security - Packet analysis, network forensics
5. Digital Forensics - Evidence recovery, file analysis
6. Binary Exploitation - Buffer overflows, memory corruption

Event Structure:
- Individual and team competitions
- Beginner-friendly challenges for newcomers
- Advanced challenges for experienced participants
- Real-time leaderboard and scoring
- Hints and guidance available for learning

Learning Outcomes:
Participants will develop skills in vulnerability assessment, incident response, security tool usage, analytical thinking, and problem-solving under pressure.

Preparation Resources:
- Online CTF platforms (PicoCTF, OverTheWire)
- Cybersecurity fundamentals workshops
- Tool familiarization sessions
- Practice challenges and walkthroughs

The event aims to build a strong cybersecurity community on campus and prepare students for careers in information security. Whether you're a beginner or experienced in cybersecurity, this CTF challenge offers valuable learning opportunities.

Registration is open to all students. Join us for an exciting journey into the world of cybersecurity!`
    },
    {
      id: "chrome-extension",
      title: "Chrome Extension Workshop",
      date: "15-10-2024",
      category: "Workshop",
      author: "Web Development Club",
      readTime: "3 min read",
      excerpt: "Learn how to develop Chrome extensions from scratch in this hands-on workshop.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
      fullContent: `The Chrome Extension Workshop was a comprehensive hands-on session designed to teach students how to create powerful browser extensions from scratch. The workshop covered everything from basic concepts to advanced features.

Workshop Agenda:
1. Introduction to Chrome Extensions
   - Understanding the extension ecosystem
   - Types of extensions and their use cases
   - Chrome Web Store overview

2. Setting Up Development Environment
   - Required tools and software
   - Chrome Developer Mode
   - Extension file structure

3. Building Your First Extension
   - Manifest file configuration
   - HTML, CSS, and JavaScript integration
   - Popup and background scripts

4. Advanced Features
   - Content scripts and page interaction
   - Storage API and data persistence
   - Permissions and security considerations
   - Communication between components

5. Publishing and Distribution
   - Chrome Web Store submission process
   - Extension packaging and testing
   - Marketing and user acquisition

Hands-on Projects:
Participants built several practical extensions including:
- Productivity Timer - A Pomodoro technique timer
- Password Generator - Secure password creation tool
- Weather Widget - Real-time weather information
- Note Taker - Quick note-taking extension
- Website Blocker - Focus enhancement tool

Key Takeaways:
- Understanding of Chrome Extension architecture
- Practical experience with web technologies
- Knowledge of extension publishing process
- Best practices for user experience design
- Security considerations in extension development

The workshop concluded with participants successfully creating and testing their own Chrome extensions. Many attendees expressed interest in publishing their extensions to the Chrome Web Store.

Resources provided:
- Complete source code for all projects
- Documentation and reference materials
- Links to useful libraries and tools
- Community support group for continued learning

This workshop was part of our ongoing effort to provide practical, industry-relevant skills to our students in web development and software engineering.`
    }
  ];

  const categories = ['All', 'Hackathon', 'Workshop', 'Stall', 'Competition'];

  const filteredNews = allNews.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hackathon': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Workshop': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Stall': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      case 'Competition': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const toggleExpanded = (articleId: string) => {
    setExpandedStory(expandedStory === articleId ? null : articleId);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </button>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">All News & Updates</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stay updated with all our latest news, events, and achievements
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredNews.length} of {allNews.length} articles
          </p>
        </div>

        {/* News Grid */}
        <div className="space-y-6">
          {filteredNews.map((article) => (
            <div key={article.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      {article.featured && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {article.title}
                  </h2>

                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>By {article.author}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Expanded Content */}
                  {expandedStory === article.id && (
                    <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="prose dark:prose-invert max-w-none text-gray-900 dark:text-white">
                        {article.fullContent.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 text-gray-900 dark:text-white leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => onViewStory(article.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Read Full Story
                    </button>
                    <button
                      onClick={() => toggleExpanded(article.id)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 px-4 py-2 rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 flex items-center"
                    >
                      <ChevronDown className={`w-4 h-4 mr-2 transition-transform duration-200 ${expandedStory === article.id ? 'rotate-180' : ''}`} />
                      {expandedStory === article.id ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllNews;