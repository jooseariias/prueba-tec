import styles from '@/Components/About/About.module.css';

interface AboutProps {
  description: string;
}

const About: React.FC<AboutProps> = ({ description }) => (
  <section className={styles.about}>
    <h2 className={styles.title}>Sobre mí</h2>
    <p className={styles.description}>{description}</p>
  </section>
);

export default About;
