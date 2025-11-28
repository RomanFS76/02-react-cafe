import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import type { Votes } from '../../types/votes';

const userVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [votes, setVotes] = useState(userVotes);

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const showResetBtn = totalVotes > 0;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const handleVote = (type: keyof Votes) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleReset = () => {
    setVotes(userVotes);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onUpdate={handleVote}
        onReset={handleReset}
        canReset={showResetBtn}
      />

      {totalVotes > 0 ? (
        <VoteStats userVotes={votes} totalVotes={totalVotes} positiveRate ={positiveRate} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
