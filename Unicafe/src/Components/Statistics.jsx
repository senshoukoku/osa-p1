import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const displayTotal = good + neutral + bad;
  const average = displayTotal > 0 ? displayTotal / 3 : 0;
  const posFeedback = displayTotal > 0 ? (good / displayTotal) * 100 : 0;

  return (
    <div>
      <h2>statistics</h2>
    <StatisticLine text='good' value={good}/>
    <StatisticLine text='neutral' value={neutral}/>
    <StatisticLine text='bad' value={bad}/>
    <StatisticLine text='total' value={displayTotal}/>
    <StatisticLine text='average' value={average}/>
    <StatisticLine text='positive' value={posFeedback}/>
    </div>
  );
};

export default Statistics;
