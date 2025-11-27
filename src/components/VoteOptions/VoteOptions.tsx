import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onUpdate: (vote: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onUpdate, onReset, canReset }: VoteOptionsProps) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onUpdate('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onUpdate('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdate('bad')}>
        Bad
      </button>
      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={() => onReset()}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
