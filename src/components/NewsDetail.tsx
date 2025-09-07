import React from 'react';
import { Calendar, ArrowLeft, Share2, BookOpen, Clock, User } from 'lucide-react';

interface NewsDetailProps {
  newsId: string;
  onBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ newsId, onBack }) => {
  const newsData = {
    "ieee-pes-stall": {
      title: "IEEE PES SB Stall",
      date: "16-09-2025",
      category: "Stall",
      author: "IEEE PES SB Team",
      readTime: "3 min read",
      image: "./src/assets/CF4.JPG",
      excerpt: "Join us at the IEEE PES SB Stall during the Freshers Day event to explore about us and engage in exciting activities.",
      content: `
        <p class="text-gray-900 dark:text-white">We are thrilled to announce our participation in the upcoming Freshers Day event with our IEEE PES SB Stall! This is an excellent opportunity for new students to learn about the IEEE Power & Energy Society Student Branch and discover the exciting world of power engineering.</p>
        
        <h3 class="text-xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white">What to Expect at Our Stall</h3>
        <p class="text-gray-900 dark:text-white">Our stall will feature interactive displays showcasing the latest developments in power systems, renewable energy technologies, and smart grid innovations. Students will have the chance to:</p>
        
        <ul class="mb-4 pl-6 text-gray-900 dark:text-white">
          <li class="mb-2">Explore hands-on demonstrations of power system components</li>
          <li class="mb-2">Learn about career opportunities in the power and energy sector</li>
          <li class="mb-2">Meet current members and hear about their experiences</li>
          <li class="mb-2">Participate in exciting technical quizzes with prizes</li>
          <li class="mb-2">Sign up for upcoming workshops and events</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white">Interactive Activities</h3>
        <p class="text-gray-900 dark:text-white">We have prepared several engaging activities to make your visit memorable:</p>
        
        <ul class="mb-4 pl-6 text-gray-900 dark:text-white">
          <li class="mb-2"><strong class="font-semibold">Power System Simulator:</strong> Experience how electrical grids operate in real-time</li>
          <li class="mb-2"><strong class="font-semibold">Renewable Energy Models:</strong> See working models of solar panels and wind turbines</li>
          <li class="mb-2"><strong class="font-semibold">Technical Quiz:</strong> Test your knowledge and win exciting prizes</li>
          <li class="mb-2"><strong class="font-semibold">Career Guidance:</strong> Get insights from industry professionals and alumni</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white">Why Join IEEE PES SB?</h3>
        <p class="text-gray-900 dark:text-white">As a member of IEEE PES Student Branch, you'll gain access to:</p>
        
        <ul class="mb-4 pl-6 text-gray-900 dark:text-white">
          <li class="mb-2">Cutting-edge research opportunities in power and energy systems</li>
          <li class="mb-2">Networking with industry professionals and researchers</li>
          <li class="mb-2">Participation in international conferences and competitions</li>
          <li class="mb-2">Technical workshops and certification programs</li>
          <li class="mb-2">Leadership development opportunities</li>
        </ul>
        
        <p class="text-gray-900 dark:text-white">Don't miss this opportunity to be part of a community that's shaping the future of energy! Visit our stall during Freshers Day and discover how you can contribute to solving the world's energy challenges.</p>
        
        <p class="text-gray-900 dark:text-white"><strong class="font-semibold">Location:</strong> Main Campus Quad<br>
        <strong class="font-semibold">Time:</strong> 9:00 AM - 5:00 PM<br>
        <strong class="font-semibold">Date:</strong> September 16, 2025</p>
      `
    },
    "kalpana-2025": {
      title: "Kalpana 2025",
      date: "25-02-2025",
      category: "Hackathon",
      author: "Event Organizing Committee",
      readTime: "5 min read",
      image: "./src/assets/KP1.JPG",
      excerpt: "We are excited to announce Kalpana 2025, our annual flagship hackathon event, happening on March 15-16, 2025. Join us for 24 hours of coding, collaboration, and innovation!",
      content: `
        <p class="text-gray-900 dark:text-white">Get ready for the most anticipated tech event of the year! Kalpana 2025 is back with bigger challenges, better prizes, and more opportunities to showcase your innovative spirit. This 24-hour hackathon will bring together the brightest minds from across the region to solve real-world problems through technology.</p>
        
        <h3 class="text-xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white">Event Highlights</h3>
        <p class="text-gray-900 dark:text-white">Kalpana 2025 promises to be our most exciting hackathon yet, featuring:</p>
        
        <ul class="mb-4 pl-6 text-gray-900 dark:text-white">
          <li class="mb-2"><strong class="font-semibold">Multiple Tracks:</strong> Web Development, Mobile Apps, AI/ML, IoT, and Blockchain</li>
          <li class="mb-2"><strong class="font-semibold">Industry Mentors:</strong> Get guidance from experienced professionals</li>
          <li class="mb-2"><strong class="font-semibold">Workshops:</strong> Learn new technologies and frameworks</li>
          <li class="mb-2"><strong class="font-semibold">Networking:</strong> Connect with like-minded developers and entrepreneurs</li>
          <li class="mb-2"><strong class="font-semibold">Prizes Worth ₹2,00,000:</strong> Exciting rewards for winners</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white">Competition Tracks</h3>
        
        <h4 class="text-lg font-semibold mb-3 mt-5 text-gray-900 dark:text-white">1. Web Development Track</h4>
        <p class="text-gray-900 dark:text-white">Build responsive, scalable web applications using modern frameworks like React, Vue, or Angular. Focus on user experience, performance, and innovative features.</p>
        
        <h4 class="text-lg font-semibold mb-3 mt-5 text-gray-900 dark:text-white">2. Mobile Application Track</h4>
        <p class="text-gray-900 dark:text-white">Develop native or cross-platform mobile applications that solve everyday problems. Use technologies like React Native, Flutter, or native iOS/Android development.</p>
        
        <h4 class="text-lg font-semibold mb-3 mt-5 text-gray-900 dark:text-white">3. Artificial Intelligence & Machine Learning</h4>
        <p class="text-gray-900 dark:text-white">Create intelligent solutions using AI/ML algorithms. Projects can include computer vision, natural language processing, predictive analytics, or recommendation systems.</p>
        
        <h4 class="text-lg font-semibold mb-3 mt-5 text-gray-900 dark:text-white">4. Internet of Things (IoT)</h4>
        <p class="text-gray-900 dark:text-white">Build connected devices and smart systems that interact with the physical world. Combine hardware and software to create innovative IoT solutions.</p>
        
        <h4 class="text-lg font-semibold mb-3 mt-5 text-gray-900 dark:text-white">5. Blockchain & Cryptocurrency</h4>
        <p class="text-gray-900 dark:text-white">Develop decentralized applications (DApps), smart contracts, or blockchain-based solutions for various industries.</p>
        
        <h3 class="text-xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white">Prizes and Recognition</h3>
        <ul class="mb-4 pl-6 text-gray-900 dark:text-white">
          <li class="mb-2"><strong class="font-semibold">Overall Winner:</strong> ₹75,000 + Trophy + Certificates</li>
          <li class="mb-2"><strong class="font-semibold">First Runner-up:</strong> ₹50,000 + Trophy + Certificates</li>
          <li class="mb-2"><strong class="font-semibold">Second Runner-up:</strong> ₹25,000 + Trophy + Certificates</li>
          <li class="mb-2"><strong class="font-semibold">Best Innovation Award:</strong> ₹20,000</li>
          <li class="mb-2"><strong class="font-semibold">Best UI/UX Design:</strong> ₹15,000</li>
          <li class="mb-2"><strong class="font-semibold">Best Use of Technology:</strong> ₹15,000</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white">Registration Details</h3>
        <p class="text-gray-900 dark:text-white"><strong class="font-semibold">Team Size:</strong> 2-4 members<br>
        <strong class="font-semibold">Registration Fee:</strong> ₹500 per team<br>
        <strong class="font-semibold">Registration Deadline:</strong> February 20, 2025<br>
        <strong class="font-semibold">Venue:</strong> Main Auditorium & Computer Labs</p>
        
        <h3 class="text-xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white">Schedule</h3>
        <p class="text-gray-900 dark:text-white"><strong class="font-semibold">Day 1 (February 25):</strong></p>
        <ul class="mb-4 pl-6 text-gray-900 dark:text-white">
          <li class="mb-2">9:00 AM - Registration & Breakfast</li>
          <li class="mb-2">10:00 AM - Opening Ceremony</li>
          <li class="mb-2">11:00 AM - Hackathon Begins</li>
          <li class="mb-2">1:00 PM - Lunch Break</li>
          <li class="mb-2">7:00 PM - Dinner & Networking</li>
          <li class="mb-2">11:00 PM - Midnight Snacks</li>
        </ul>
        
        <p class="text-gray-900 dark:text-white"><strong class="font-semibold">Day 2 (February 26):</strong></p>
        <ul class="mb-4 pl-6 text-gray-900 dark:text-white">
          <li class="mb-2">7:00 AM - Breakfast</li>
          <li class="mb-2">11:00 AM - Submission Deadline</li>
          <li class="mb-2">12:00 PM - Presentation Begins</li>
          <li class="mb-2">3:00 PM - Judging & Lunch</li>
          <li class="mb-2">5:00 PM - Results & Closing Ceremony</li>
        </ul>
        
        <p class="text-gray-900 dark:text-white">Don't miss this opportunity to showcase your skills, learn new technologies, and win amazing prizes! Register now and be part of Kalpana 2025.</p>
      `
    },
    "ieee-xtreme": {
      title: "IEEE Xtreme 19.0",
      date: "25-10-2025",
      category: "Competition",
      author: "IEEE Student Branch",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      excerpt: "Participate in IEEE Xtreme 19.0, a global coding competition where teams of students compete to solve challenging programming problems over a 24-hour period.",
      content: `
        <p>IEEE Xtreme is IEEE's premier global programming competition that brings together students from around the world to test their programming skills and problem-solving abilities. This year marks the 19th edition of this prestigious competition.</p>
        
        <h3>About IEEE Xtreme 19.0</h3>
        <p>IEEE Xtreme is a 24-hour programming competition that challenges teams of up to three IEEE student members to solve a series of programming problems. The competition is held annually and attracts thousands of participants from universities worldwide.</p>
        
        <h3>Competition Format</h3>
        <ul>
          <li><strong>Duration:</strong> 24 hours continuous</li>
          <li><strong>Team Size:</strong> Up to 3 IEEE student members</li>
          <li><strong>Problems:</strong> Approximately 25-30 algorithmic problems</li>
          <li><strong>Languages:</strong> C, C++, Java, Python, and more</li>
          <li><strong>Platform:</strong> Online competition platform</li>
        </ul>
        
        <h3>Problem Categories</h3>
        <p>The competition features problems across various difficulty levels and categories:</p>
        
        <ul>
          <li><strong>Algorithmic Problems:</strong> Data structures, graph theory, dynamic programming</li>
          <li><strong>Mathematical Problems:</strong> Number theory, combinatorics, geometry</li>
          <li><strong>Implementation Problems:</strong> String processing, simulation, parsing</li>
          <li><strong>Optimization Problems:</strong> Greedy algorithms, linear programming</li>
        </ul>
        
        <h3>Preparation Tips</h3>
        <h4>Technical Preparation</h4>
        <ul>
          <li>Practice on platforms like Codeforces, HackerRank, and LeetCode</li>
          <li>Study common algorithms and data structures</li>
          <li>Learn multiple programming languages</li>
          <li>Practice time management and debugging skills</li>
        </ul>
        
        <h4>Team Strategy</h4>
        <ul>
          <li>Divide problems based on team members' strengths</li>
          <li>Establish clear communication protocols</li>
          <li>Plan rest and meal schedules</li>
          <li>Practice collaborative coding</li>
        </ul>
        
        <h3>Registration Process</h3>
        <p>To participate in IEEE Xtreme 19.0:</p>
        <ol>
          <li>Ensure all team members are IEEE student members</li>
          <li>Register your team on the official IEEE Xtreme website</li>
          <li>Find a local proctor (usually a faculty member)</li>
          <li>Complete the registration before the deadline</li>
        </ol>
        
        <h3>Prizes and Recognition</h3>
        <ul>
          <li>Global ranking and certificates for all participants</li>
          <li>Special recognition for top-performing teams</li>
          <li>Opportunities for internships and job placements</li>
          <li>IEEE membership benefits and networking opportunities</li>
        </ul>
        
        <h3>Past Performance</h3>
        <p>Our university has consistently performed well in IEEE Xtreme, with several teams ranking in the top 100 globally. Last year, our best team achieved a rank of 47 worldwide, solving 18 out of 28 problems.</p>
        
        <h3>Training Sessions</h3>
        <p>We will be conducting preparation sessions leading up to the competition:</p>
        <ul>
          <li><strong>Algorithm Workshops:</strong> Every Saturday, 2:00 PM - 5:00 PM</li>
          <li><strong>Mock Competitions:</strong> Monthly practice rounds</li>
          <li><strong>Team Formation:</strong> Help finding compatible teammates</li>
          <li><strong>Strategy Sessions:</strong> Competition tactics and time management</li>
        </ul>
        
        <p>Join us for IEEE Xtreme 19.0 and test your programming skills against the best student programmers worldwide!</p>
      `
    },
    "code-fusion": {
      id: "code-fusion",
      title: "Code Fusion",
      date: "20-09-2024",
      category: "Hackathon",
      author: "Technical Team",
      readTime: "3 min read",
      excerpt: "A 24-hour hackathon event where students come together to build innovative projects and compete for exciting prizes.",
      image: "./src/assets/CF2.JPG",
      content: `Code Fusion was an incredible 24-hour hackathon that brought together passionate developers, designers, and innovators from across the campus. The event was a testament to the creative potential of our student community.

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
    "ctf-challenge": {
      id: "ctf-challenge",
      title: "CTF Challenge",
      date: "18-01-2025",
      category: "Workshop",
      author: "Cybersecurity Club",
      readTime: "4 min read",
      excerpt: "Enhancing skills in cybersecurity through hands-on challenges and competitions.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      content: `The Capture The Flag (CTF) Challenge is designed to enhance cybersecurity skills through practical, hands-on experience. This event combines learning with competition, making cybersecurity education both engaging and effective.

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
    "chrome-extension": {
      id: "chrome-extension",
      title: "Chrome Extension Workshop",
      date: "15-10-2024",
      category: "Workshop",
      author: "Web Development Club",
      readTime: "3 min read",
      excerpt: "Learn how to develop Chrome extensions from scratch in this hands-on workshop.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
      content: `The Chrome Extension Workshop was a comprehensive hands-on session designed to teach students how to create powerful browser extensions from scratch. The workshop covered everything from basic concepts to advanced features.

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
  };

  const article = newsData[newsId as keyof typeof newsData];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h2>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hackathon': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Workshop': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Stall': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      case 'Competition': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </button>

        {/* Article Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
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

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h1>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <User className="w-4 h-4 mr-2" />
                <span>By {article.author}</span>
              </div>
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </button>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none text-gray-900 dark:text-white"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
