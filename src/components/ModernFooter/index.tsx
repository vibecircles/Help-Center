import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function ModernFooter(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Main Footer Content */}
          <div className={styles.mainSection}>
            <div className={styles.brandSection}>
              <div className={styles.logo}>
                <img src="/img/logo.svg" alt="VibeCircles Logo" />
                <span className={styles.brandName}>VibeCircles</span>
              </div>
              <p className={styles.tagline}>
                Empowering communities through innovative social platforms and digital experiences.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://x.com/vibecircles" className={styles.socialLink} aria-label="X (Twitter)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577760104699" className={styles.socialLink} aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/vibecircles/" className={styles.socialLink} aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 11.656c2.026 0 3.744-.875 4.968-2.448 1.224-1.573 1.224-3.744 0-5.317-1.224-1.573-2.942-2.448-4.968-2.448s-3.744.875-4.968 2.448c-1.224 1.573-1.224 3.744 0 5.317 1.224 1.573 2.942 2.448 4.968 2.448z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@vibecircles" className={styles.socialLink} aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="https://www.threads.com/@vibecircles" className={styles.socialLink} aria-label="Threads">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.06v-.217C1.5 8.316 2.35 5.462 3.995 3.509 5.845 1.205 8.598.024 12.179 0h.007c3.581.024 6.334 1.205 8.184 3.509C23.65 5.462 24.5 8.316 24.5 11.843v.217c0 3.526-.85 6.38-2.495 8.333-1.85 2.304-4.603 3.485-8.184 3.509h-.007zM12.179 1.5c-3.076.02-5.434.98-7.026 2.793C3.7 6.106 2.999 8.88 3 11.843v.217c-.001 2.963.7 5.737 2.153 7.55 1.592 1.813 3.95 2.773 7.026 2.793 3.076-.02 5.434-.98 7.026-2.793 1.453-1.813 2.154-4.587 2.153-7.55v-.217c.001-2.963-.7-5.737-2.153-7.55-1.592-1.813-3.95-2.773-7.026-2.793z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className={styles.linksSection}>
              <div className={styles.linkGroup}>
                <h3 className={styles.linkTitle}>Documentation</h3>
                <ul className={styles.linkList}>
                  <li><Link to="/docs/category/your-profile">Your Profile</Link></li>
                  <li><Link to="/docs/category/your-posts">Your Posts</Link></li>
                  <li><Link to="/docs/category/messenger">Messenger</Link></li>
                  <li><Link to="/docs/category/your-feed">Your Feed</Link></li>
                  <li><Link to="/docs/category/security">Security</Link></li>
                  <li><Link to="/docs/category/live-video">Live Video</Link></li>
                </ul>
              </div>
              
              <div className={styles.linkGroup}>
                <h3 className={styles.linkTitle}>Community</h3>
                <ul className={styles.linkList}>
                  <li><a href="https://x.com/vibecircles">X (Twitter)</a></li>
                  <li><a href="https://www.facebook.com/profile.php?id=61577760104699">Facebook</a></li>
                  <li><a href="https://www.instagram.com/vibecircles/">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@vibecircles">TikTok</a></li>
                  <li><a href="https://www.threads.com/@vibecircles">Threads</a></li>
                </ul>
              </div>
              
              <div className={styles.linkGroup}>
                <h3 className={styles.linkTitle}>Company</h3>
                <ul className={styles.linkList}>
                  <li><a href="https://company.vibecircles.co.za/">About Us</a></li>
                  <li><a href="https://vibecircles.co.za/">Social Media</a></li>
                  <li><a href="https://blog.vibecircles.co.za/">Blog</a></li>
                  <li><a href="https://help-center.vibecircles.co.za/">Help Center</a></li>
                  <li><a href="https://github.com/vibecircles">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className={styles.bottomSection}>
            <div className={styles.bottomContent}>
              <p className={styles.copyright}>
                © {new Date().getFullYear()} VibeCircles, Inc. All rights reserved.
              </p>
              <div className={styles.bottomLinks}>
                <a href="https://vibecircles.co.za/privacy">Privacy Policy</a>
                <a href="https://vibecircles.co.za/terms">Terms of Service</a>
                <a href="https://vibecircles.co.za/cookies">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
