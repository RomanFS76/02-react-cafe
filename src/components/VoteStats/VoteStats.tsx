import type { Votes } from '../../types/votes';
import styles from './VoteStats.module.css';

interface VoteStatsProps {
  userVotes: Votes<number>;
  total: number;
  rates: number;
}

const VoteStats = ({
  userVotes: { good, neutral, bad },
  total,
  rates,
}: VoteStatsProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{total}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{rates}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
