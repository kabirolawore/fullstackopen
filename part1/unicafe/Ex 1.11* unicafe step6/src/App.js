import { useState } from "react";
import Button from "./Button";

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.stats}
    </p>
  );
};

const Statistics = (props) => {
  if (props.total)
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <StatisticLine text="good" />
              </td>
              <td>
                <StatisticLine stats={props.good} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="neutral" />
              </td>
              <td>
                <StatisticLine stats={props.neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="bad" />
              </td>
              <td>
                <StatisticLine stats={props.bad} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="all" />
              </td>
              <td>
                <StatisticLine stats={props.total} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="average" />
              </td>
              <td>
                <StatisticLine stats={props.avg ? props.avg : null} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="positive" />
              </td>
              <td>
                <StatisticLine stats={props.positive ? props.positive : 0} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  return <p>No feedback given</p>;
};

const App = () => {
  //
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
      <h2>statistics</h2>
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
