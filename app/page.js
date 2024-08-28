// pages/page.js
import Head from 'next/head';
import styles from './page.module.css'; // Import CSS module

const Page = () => {
  return (
    <>
      <Head>
        <title>How to Use This Platform</title>
        <meta name="description" content="Learn how to use our platform effectively and get started quickly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <br/>
          <h1>Welcome to Our Platform</h1>
          <p>Created by Aayush GC</p>
        </header>

        <main className={styles.main}>
          <section className={styles.introduction}>
            <h2>How to Use This Platform</h2>
            <p>
              Welcome to our platform! To get started, follow these simple steps:
            </p>
            <div className={styles.steps}>
              <div className={styles.step}>
                <h3>Step 1: Create an Account</h3>
                <p>Sign up with your email or social media accounts to create a new account.</p>
              </div>
              <div className={styles.step}>
                <h3>Step 2: Explore the Dashboard</h3>
                <p>Once logged in, explore your dashboard to see the available features and settings.</p>
              </div>
              <div className={styles.step}>
                <h3>Step 3: Customize Your Profile</h3>
                <p>Update your profile information and preferences to personalize your experience.</p>
              </div>
              <div className={styles.step}>
                <h3>Step 4: Start Using the Features</h3>
                <p>Begin using the platform’s features to get the most out of your experience.</p>
              </div>
            </div>
            <a href="/login" className={styles.button}>Get Started</a>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} My Platform. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Page;
