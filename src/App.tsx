import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { KpopPage } from './pages/KpopPage';
import { RandomPage } from './pages/RandomPage';
import { AiPage } from './pages/AiPage';
import { DndPage } from './pages/DndPage';
import { RapPage } from './pages/RapPage';
import { GroupChatPage } from './pages/GroupChatPage';
import { FacebookPage } from './pages/FacebookPage';
import { GirlGroupPage } from './pages/GirlGroupPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kpop" element={<KpopPage />} />
            <Route path="/random" element={<RandomPage />} />
            <Route path="/ai" element={<AiPage />} />
            <Route path="/dnd" element={<DndPage />} />
            <Route path="/rap" element={<RapPage />} />
            <Route path="/group-chat" element={<GroupChatPage />} />
            <Route path="/facebook" element={<FacebookPage />} />
            <Route path="/girl-group" element={<GirlGroupPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}