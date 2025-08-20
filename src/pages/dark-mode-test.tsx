import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function DarkModeTest(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Dark Mode Test - ${siteConfig.title}`}
      description="Test page for dark mode footer functionality">
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Dark Mode Footer Test</h1>
          <p>This page is designed to test the dark mode functionality of the footer components.</p>
          
          <div className={styles.testSection}>
            <h2>How to Test Dark Mode</h2>
            <ol>
              <li>Look for the dark mode toggle button in the navigation bar (usually a sun/moon icon)</li>
              <li>Click the toggle to switch between light and dark modes</li>
              <li>Scroll down to the footer and verify that the colors change appropriately</li>
              <li>Check that all footer elements (background, text, links, social icons) adapt to the theme</li>
            </ol>
          </div>

          <div className={styles.testSection}>
            <h2>What Should Change</h2>
            <ul>
              <li><strong>Background:</strong> Light gray in light mode, dark gray in dark mode</li>
              <li><strong>Text:</strong> Dark gray in light mode, light gray in dark mode</li>
              <li><strong>Borders:</strong> Light gray in light mode, medium gray in dark mode</li>
              <li><strong>Links:</strong> Medium gray in light mode, light gray in dark mode</li>
              <li><strong>Social Icons:</strong> Should maintain proper contrast in both modes</li>
            </ul>
          </div>

          <div className={styles.testSection}>
            <h2>Alternative Testing Methods</h2>
            <h3>System Preference Test</h3>
            <p><em>Note: System preference detection has been disabled. Users must manually toggle dark mode using the navbar button.</em></p>
            
            <h3>Developer Tools Test</h3>
            <p>Open browser developer tools (F12) and add the attribute <code>data-theme="dark"</code> to the &lt;html&gt; element. The footer should immediately switch to dark mode.</p>
          </div>

          <div className={styles.testSection}>
            <h2>Footer Components</h2>
            <p>The following footer components have been updated to support dark mode:</p>
            <ul>
              <li><strong>SimpleFooter:</strong> Clean, minimal footer with social links and documentation links</li>
              <li><strong>ModernFooter:</strong> Gradient-based footer with enhanced styling and animations</li>
            </ul>
          </div>

          <div className={styles.spacer}>
            <p>Scroll down to see the footer in action...</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
