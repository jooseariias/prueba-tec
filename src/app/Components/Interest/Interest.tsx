import styles from '@/Components/Interest/Interest.module.css';

interface InterestsProps {
  interests: string[];
}

const Interests: React.FC<InterestsProps> = ({ interests }) => (
  <section className={styles.interests}>
    <h2 className={styles.title}>Intereses</h2>
    <ul>
      {interests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  </section>
);

export default Interests;
