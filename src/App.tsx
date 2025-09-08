import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Members from './components/Members';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import More from './components/More';
import NewsDetail from './components/NewsDetail';
import AllNews from './components/AllNews';

function App() {



  const [currentPage, setCurrentPage] = useState<'home' | 'ieee-info'>('home');

  const showIEEEInfo = () => {
    setCurrentPage('ieee-info');
  };

  const showHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'ieee-info') {
    return <More onBack={showHome} />;
  }

  const [currentView, setCurrentView] = useState<'home' | 'news-detail' | 'all-news'>('home');
  const [selectedNewsId, setSelectedNewsId] = useState<string>('');

  const handleReadFullStory = (newsId: string) => {
    setSelectedNewsId(newsId);
    setCurrentView('news-detail');
  };

  const handleViewAllNews = () => {
    setCurrentView('all-news');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedNewsId('');
  };

  const handleBackToNews = () => {
    setCurrentView('home');
    setSelectedNewsId('');
    // Scroll to news section after state update
    setTimeout(() => {
      const newsSection = document.getElementById('news');
      if (newsSection) {
        newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (currentView === 'news-detail') {
    return <NewsDetail newsId={selectedNewsId} onBack={handleBackToNews} />;
  }

  if (currentView === 'all-news') {
    return <AllNews onBack={handleBackToNews} onViewStory={handleReadFullStory} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About onLearnMore={showIEEEInfo} />
      <Events />
      <Members />
      <News onReadFullStory={handleReadFullStory} onViewAllNews={handleViewAllNews} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
