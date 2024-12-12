import styles from './AboutUs.module.css';

const AboutUs = () => (
  <div className={styles.aboutContainer}>
    {/* Header Section */}
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome to SustainaLink</h1>
      <p className={styles.subtitle}>Redefining Waste, Redesigning Futures</p>
    </header>

    {/* Glassmorphism Content Section */}
    <div className={styles.glassCard}>
      {/* About Section */}
      <section className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>Who We Are</h2>
        <p className={styles.text}>
          SustainaLink is more than just a platform; it’s a movement to
          bridge the gap between technology, businesses, and sustainable
          practices. Our mission is to empower organizations and individuals
          with innovative solutions that drive meaningful environmental and
          social impact.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>What Makes Us Stand Out?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>🌍 Sustainability Focus</h3>
            <p className={styles.text}>
              Our solutions are built with a deep commitment to reducing
              carbon footprints, limiting waste, and promoting eco-friendly
              practices.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>🤝 Meaningful Partnerships</h3>
            <p className={styles.text}>
              We collaborate with businesses, NGOs, and governments to
              achieve holistic Sustainable Development Goals (SDGs).
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>💡 Cutting-Edge Technology</h3>
            <p className={styles.text}>
              Leveraging functionalities like chatrooms and order tracking
              to deliver innovative sustainable solutions.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className= {styles.featureCard}>📈 Data-Driven Insights</h3>
            <p className={styles.text}>
              Our platform provides actionable insights for informed
              decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <h2 className=  {styles.sectionTitle}>Our Vision</h2>
        <p className={styles.text}>
          At SustainaLink, we envision a world where businesses thrive while
          prioritizing people and the planet. We believe that technology can
          transform industries and create a more sustainable future.
        </p>
      </section>

      {/* Call to Action */}
      <section className={styles.ctasection}>
        <h2 className={styles.sectionTitle}>Join Us in Making a Difference</h2>
        <p className={styles.text}>
          Be part of the SustainaLink community and contribute to building a
          sustainable future. Together, we can create a lasting impact.
        </p>
        <button className={styles.ctabutton} >Learn More</button>
      </section>
    </div>
  </div>
);

export default AboutUs;
