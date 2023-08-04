import "./waiting.css";
import { useState } from "react";
import Customer from "../room/Customer";
import { waitingCust } from "../../data/waitingCustomers";

export const Waiting = ({
  queues,
  setQueues,
}) => {
  const [waitingCustomers, setWaitingCustomers] = useState(waitingCust);
  const handleAddCustomer = (customer) => {
    let itemsArr = queues.map((q) => q.totalItems);
    let minQueue = itemsArr.indexOf(Math.min(...itemsArr));
    queues[minQueue].cust = [
      ...queues[minQueue].cust,
      { itemCount: customer.itemCount },
    ];
    queues[minQueue].totalItems += customer.itemCount;
    setQueues(queues);
  };

 
  const handlePushWaitingCustomer = () => {
    let pushedCust = waitingCustomers.shift();
    handleAddCustomer(pushedCust);
    setWaitingCustomers([
      ...waitingCustomers,
      { itemCount: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  return (
    <div className="block">
      <button className="btn" onClick={handlePushWaitingCustomer}>
        Add Customer
      </button>
  
      <div>
        {waitingCustomers.map((c, ind) => (
          <Customer key={ind} num={c.itemCount} />
        ))}
      </div>
    </div>
  );
};
