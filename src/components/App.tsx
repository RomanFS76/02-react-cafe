import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from './CafeInfo/CafeInfo';
import Notification from './Notification/Notification';
import VoteOptions from './VoteOptions/VoteOptions';
import VoteStats from './VoteStats/VoteStats';
import type { Votes } from '../types/votes';



const userVotes: Votes<number> = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [votes, setVotes] = useState(userVotes);

  

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
      <Notification />
    </div>
  );
}
