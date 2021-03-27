import "./counter.styles.scss";
import React from "react";

type Props = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
};

const Counter: React.FC<Props> = ({
  count,
  increaseCount,
  decreaseCount,
}: Props) => (
  <div className="counter">
    <button className="counter__control" onClick={decreaseCount}>
      -
    </button>

    <div className="counter__count">{count}</div>

    <button className="counter__control" onClick={increaseCount}>
      +
    </button>
  </div>
);

export default Counter;
