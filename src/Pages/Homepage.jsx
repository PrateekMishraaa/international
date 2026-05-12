import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import './Homepage.css';

// Lazy load everything below the hero
const TrustedSection = lazy(() => import('../components/TrustedSection'));
const Graduation = lazy(() => import('../components/Graduation'));
const ComparisonTable = lazy(() => import('../components/ComparisonTable'));
const LearningPlans = lazy(() => import('../components/LearningPlans'));
const StudentLove = lazy(() => import('../components/StudentLove'));
const ParentTrust = lazy(() => import('../components/ParentTrust'));
const NewsSection = lazy(() => import('../components/NewsSection'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FAQ = lazy(() => import('../components/FAQ'));

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="loading-skeleton">Loading...</div>}>
        <TrustedSection />
        <Graduation />
        <ComparisonTable />
        <LearningPlans />
        <StudentLove />
        <ParentTrust />
        <Testimonials />
        <FAQ />
        <NewsSection />
      </Suspense>
      <Footer />
    </div>
  );
}

export default Homepage;