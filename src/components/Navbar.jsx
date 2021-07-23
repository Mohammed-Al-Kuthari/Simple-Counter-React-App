export default function Navbar({ total, onCreateCounter }) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
      <div className="container">
        <a href="/" className="navbar-brand">
          Counter App
        </a>

        <div className="navbar-nav me-auto">
          <div className="badge bg-white text-black-50 shadow-sm">{total}</div>
        </div>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <i className="navbar-toggler-icon"></i>
        </button>

        <div
          className="navbar-collapse collapse mt-3 mt-md-0"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto">
            <div className="d-grid d-md-block">
              <button
                className="btn btn-outline-primary shadow-sm"
                onClick={onCreateCounter}
              >
                Add Counter
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
