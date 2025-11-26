export interface Votes<T> {
  good: T;
  neutral: T;
  bad: T;
}

export type VoteType = 'good' | 'neutral' | 'bad';
