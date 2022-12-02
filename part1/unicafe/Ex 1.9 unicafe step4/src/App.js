import { useState } from "react";
import Button from "./Button";

const Statistics = (props) => {
  if (props.total)
    return (
      <div>
        <h2>statistics</h2>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.total}</p>
        <p>average {props.avg ? props.avg : null}</p>
        <p>positive {props.positive ? props.positive : 0} %</p>
      </div>
    );
  return <p>No feedback given</p>;
};

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setClicks({
      ...clicks,
      good: clicks.good + 1,
    });
  };

  const handleNeutralClick = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
    });
  };

  const handleBadClick = () => {
    setClicks({
      ...clicks,
      bad: clicks.bad + 1,
    });
  };

  const total = clicks.good + clicks.neutral + clicks.bad;
  const percentage =
    (clicks.good / (clicks.good + clicks.neutral + clicks.bad)) * 100;
  const avg = (clicks.good - clicks.bad) / total;

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <Statistics
        good={clicks.good}
        neutral={clicks.neutral}
        bad={clicks.bad}
        total={total}
        avg={avg}
        positive={percentage}
      />
    </div>
  );
};

export default App;
