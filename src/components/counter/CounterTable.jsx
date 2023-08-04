import "./counter.css";
import Counter from "./Counter";
const CounterTable = () => {
  const cntrs = [1, 2, 3, 4, 5];
  return (<div className="ctable">
    {cntrs.map((c,ind) => <Counter key={ind} num={c} />)}
  </div>);
};
export default CounterTable;
