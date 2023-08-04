//import { useState } from "react";
//import { useEffect } from "react";
import Customer from "./Customer";
const Queue = ({ count, customers, setQueue }) => {
  return (
    <div className="queue">
      {customers.map((c, ind) => (
        <Customer key={ind} num={c.itemCount} />
      ))}
    </div>
  );
};

export default Queue;
