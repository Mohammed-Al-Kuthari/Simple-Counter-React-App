import Counter from "./Conter";

export default function Counters({
  counters,
  onIncrement,
  onDecrement,
  onDelete,
}) {
  return (
    <div className="card shadow-sm p-3">
      {counters.map((counter) => (
        <Counter
          onIncrement={onIncrement}
          key={counter.id}
          onDecrement={onDecrement}
          counter={counter}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
