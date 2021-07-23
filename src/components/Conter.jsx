export default function Counter({
  counter,
  onIncrement,
  onDecrement,
  onDelete,
}) {
  const { value } = counter;
  return (
    <div className="my-3">
      <button
        className="btn btn-success btn-sm mx-2"
        onClick={() => onIncrement(counter)}
        disabled={value >= 99}
      >
        Increment
      </button>
      <span className="badage rounded-pill py-2 px-4 bg-primary text-white">
        {value}
      </span>
      <button
        className="btn btn-danger btn-sm mx-2"
        onClick={() => onDecrement(counter)}
        disabled={value === 0}
      >
        Decrement
      </button>
      <button
        className="btn btn-outline-danger rounded-pill btn-sm mx-2"
        onClick={() => onDelete(counter)}
      >
        Delete
      </button>
    </div>
  );
}
