// src/lib/analytics.js
import Clarity from '@microsoft/clarity';

// Check if we are in production environment
const isProd = process.env.NODE_ENV === 'production';
const CLARITY_PROJECT_ID = process.env.REACT_APP_CLARITY_PROJECT_ID || 'ysivwks43m';

/**
 * GA4 is initialized once in public/index.html with send_page_view:false.
 * Keep this function as a no-op for backward compatibility with existing imports.
 */
export const initGA = () => {
  if (!isProd) {
    console.log('[Analytics] Development Mode: GA4 Initialization skipped.');
  }
};

/**
 * Initialize Microsoft Clarity tracking
 */
export const initClarity = () => {
  if (typeof window !== 'undefined' && CLARITY_PROJECT_ID) {
    try {
      Clarity.init(CLARITY_PROJECT_ID);
      console.log(`[Analytics] Microsoft Clarity initialized (${CLARITY_PROJECT_ID})`);
    } catch (err) {
      console.error('[Analytics] Failed to initialize Microsoft Clarity:', err);
    }
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
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', action, params);
    }
    try {
      Clarity.event(action);
    } catch (e) {
      // Ignore clarity event errors in background
    }
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
  });
};

export { Clarity };
