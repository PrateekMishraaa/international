import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './UAE.css';

// Lazy load sections that are below the fold
const UAEHero = lazy(() => import('../components/UAEHero'));
const UAEAccreditations = lazy(() => import('../components/UAEAccreditations'));
const UAEWhy = lazy(() => import('../components/UAEWhy'));
const UAECTA = lazy(() => import('../components/UAECTA'));

function UAE() {
  return (
    <div className="uae-page">
      <Navbar />
      
      <Suspense fallback={<div className="loading-skeleton">Loading...</div>}>
        <UAEHero />
        <UAEAccreditations />
        <UAEWhy />
        <UAECTA />
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default UAE;