import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function PopularTopicsHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Popular Topics
        </Heading>
      </div>
    </header>
  );
}

type TopicItem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
};

const TopicList: TopicItem[] = [
  {
    title: 'Your Profile',
    description: 'Learn how to change or edit profile settings and manage posts in your timeline',
    icon: ProfileIcon,
    link: '/docs/category/your-profile',
  },
  {
    title: 'Your Posts',
    description: 'Learn how to post your photos or album and how to tag or remove tagged friends',
    icon: PostIcon,
    link: '/docs/category/your-posts',
  },
  {
    title: 'Messenger',
    description: 'Learn how to delete message, hide message, change background color etc.',
    icon: MessengerIcon,
    link: '/docs/category/messenger',
  },
  {
    title: 'Your Feed',
    description: 'Learn how to manage your feed, how to hide posts from timeline',
    icon: FeedIcon,
    link: '/docs/category/your-feed',
  },
  {
    title: 'Security',
    description: 'Learn how to secure your account and two step authentication',
    icon: SecurityIcon,
    link: '/docs/category/security',
  },
  {
    title: 'Live Video',
    description: 'Learn how to do live video and how to save that video and share that video',
    icon: LiveVideoIcon,
    link: '/docs/category/live-video',
  },
];

function ProfileIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="8" height="10" rx="1" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <circle cx="7" cy="8" r="2" fill="#2196F3"/>
      <path d="M3 12h8v1H3z" fill="#2196F3"/>
      <path d="M3 14h6v1H3z" fill="#2196F3"/>
      <circle cx="16" cy="8" r="3" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <rect x="14" y="11" width="4" height="6" rx="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
    </svg>
  );
}

function PostIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="6" y="4" width="12" height="16" rx="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <circle cx="12" cy="8" r="1" fill="#2196F3"/>
      <path d="M8 12h8v1H8z" fill="#2196F3"/>
      <path d="M8 14h6v1H8z" fill="#2196F3"/>
      <path d="M8 16h4v1H8z" fill="#2196F3"/>
      <circle cx="18" cy="6" r="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <path d="M17 5l1 1-1 1" stroke="#2196F3" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function MessengerIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <path d="M8 8h8v2H8z" fill="#2196F3"/>
      <path d="M8 11h6v2H8z" fill="#2196F3"/>
      <path d="M8 14h4v2H8z" fill="#2196F3"/>
      <circle cx="18" cy="6" r="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <path d="M17 5l1 1-1 1" stroke="#2196F3" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function FeedIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <circle cx="7" cy="7" r="2" fill="#2196F3"/>
      <rect x="11" y="6" width="8" height="2" rx="1" fill="#2196F3"/>
      <rect x="11" y="9" width="6" height="2" rx="1" fill="#2196F3"/>
      <rect x="11" y="12" width="8" height="2" rx="1" fill="#2196F3"/>
      <rect x="11" y="15" width="4" height="2" rx="1" fill="#2196F3"/>
      <circle cx="18" cy="6" r="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <path d="M17 5l1 1-1 1" stroke="#2196F3" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function SecurityIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="8" width="16" height="12" rx="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <path d="M12 2L4 6v2c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <path d="M9 12l2 2 4-4" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="6" r="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <path d="M17 5l1 1-1 1" stroke="#2196F3" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function LiveVideoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <circle cx="12" cy="12" r="4" fill="#2196F3"/>
      <circle cx="12" cy="12" r="2" fill="#E3F2FD"/>
      <circle cx="6" cy="6" r="1" fill="#2196F3"/>
      <circle cx="18" cy="6" r="1" fill="#2196F3"/>
      <circle cx="6" cy="18" r="1" fill="#2196F3"/>
      <circle cx="18" cy="18" r="1" fill="#2196F3"/>
      <circle cx="18" cy="6" r="2" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
      <path d="M17 5l1 1-1 1" stroke="#2196F3" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function TopicCard({title, description, icon: Icon, link}: TopicItem) {
  return (
    <div className={clsx('col col--4', styles.topicCard)}>
      <Link to={link} className={styles.topicLink}>
        <div className={styles.topicContent}>
          <div className={styles.topicIcon}>
            <Icon className={styles.icon} />
          </div>
          <Heading as="h3" className={styles.topicTitle}>
            {title}
          </Heading>
          <p className={styles.topicDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Popular Topics"
      description="Find help and guidance for common topics">
      <PopularTopicsHeader />
      <main>
        <section className={styles.topics}>
          <div className="container">
            <div className="row">
              {TopicList.map((props, idx) => (
                <TopicCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
