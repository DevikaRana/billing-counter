import "./room.css";
import Queue from "./Queue";
import { useEffect, useState } from "react";
import { Waiting } from "../waitingQueue/Waiting";
import { queuesData } from "../../data/customers";

const Room = () => {
  const [queues, setQueues] = useState(queuesData);
  useEffect(() => {
    console.log("useeee", queues);
    setInterval(() => {
      console.log("before handle");
      handleItems();
      console.log("after handle");
    }, 1000);
  }, []);

  const handleItems = () => {
    console.log("a");
    let que = queues.map((q) => {
      console.log(q.custCount);
      if (q.custCount > 0) {
        if (q.cust[0].itemCount === 0) {
          q.cust.shift();
          q.custCount -= 1;
        } else {
          q.cust[0].itemCount -= 1;
          q.totalItems -= 1;
        }
      }
      return q;
    });
    setQueues(que);
  };

  return (
    <div className="megaRoom">
      <div className="room">
        {queues.map((c, ind) => (
          <Queue
            key={ind}
            count={c.custCount}
            customers={c.cust}
            totalItems={c.totalItems}
            setQueue={setQueues}
          />
        ))}
      </div>
      <Waiting queues={queues} setQueues={setQueues} />
    </div>
  );
};
export default Room;
