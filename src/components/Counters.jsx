import Counter from "./Conter";

export default function Counters({
  counters,
  onIncrement,
  onDecrement,
  onDelete,
}) {
  if (counters.length === 0)
    return (
      <div className="alert alert-info text-center" role="alert">
        <strong>Sorry!</strong> it's no counters here add counter to continue
        ...
      </div>
    );
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
