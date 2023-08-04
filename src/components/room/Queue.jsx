import Customer from "./Customer";
const Queue = ({ customers }) => {
  return (
    <div className="queue">
      {customers.map((c, ind) => (
        <Customer key={ind} num={c.itemCount} />
      ))}
    </div>
  );
};

export default Queue;
