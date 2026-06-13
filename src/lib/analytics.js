// src/lib/analytics.js

// GA4 Measurement ID (uses placeholder, can be overridden by environment variable)
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-EZ5MJSBS4N';

// Check if we are in production environment
const isProd = process.env.NODE_ENV === 'production';

/**
 * Initialize GA4 configuration
 */
export const initGA = () => {
  if (!isProd) {
    console.log('[Analytics] Development Mode: GA4 Initialization skipped.');
    return;
  }
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID);
  }
};

/**
 * Track page views manually for SPA
 * @param {string} path - URL path to track
 */
export const trackPageView = (path) => {
  const cleanPath = path || window.location.pathname + window.location.search;
  if (!isProd) {
    console.log(`[Analytics] PageView Tracked: ${cleanPath}`);
    return;
  }
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: cleanPath,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

/**
 * Track a custom event
 * @param {string} action - Event action name
 * @param {object} params - Event parameters
 */
export const trackEvent = (action, params = {}) => {
  if (!isProd) {
    console.log(`[Analytics] Event Tracked: ${action}`, params);
    return;
  }
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

// Custom Helper Event Trackers
export const trackResumeDownload = (format = 'PDF') => {
  trackEvent('resume_download', {
    event_category: 'engagement',
    event_label: `Resume Downloaded (${format})`,
  });
};

export const trackGithubClick = (location = 'general') => {
  trackEvent('github_click', {
    event_category: 'social',
    event_label: `GitHub Profile Clicked from ${location}`,
  });
};

export const trackLinkedinClick = (location = 'general') => {
  trackEvent('linkedin_click', {
    event_category: 'social',
    event_label: `LinkedIn Profile Clicked from ${location}`,
  });
};

export const trackContactSubmit = (email = 'anonymous') => {
  trackEvent('contact_submit', {
    event_category: 'contact',
    event_label: 'Contact Form Submitted Successfully',
    contact_email: email,
  });
};
