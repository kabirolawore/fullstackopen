import { useState } from "react";
import Button from "./Button";

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
      <div>
        <h2>statistics</h2>
        <p>good {clicks.good}</p>
        <p>neutral {clicks.neutral}</p>
        <p>bad {clicks.bad}</p>
        <p>all {total}</p>
        <p>average {avg ? avg : null}</p>
        <p>positive {percentage ? percentage : 0} %</p>
      </div>
    </div>
  );
};

export default App;
