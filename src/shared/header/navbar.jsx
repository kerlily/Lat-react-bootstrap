import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <i className="d-flex flex-wrap align-items-center fa-solid fa-book fa-2xl m-3" style={{color: "#74C0FC"}}></i>
          <span className="fs-4">Online Bookstore</span>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2">Home</Link></li>
        <li><Link to="/team" className="nav-link px-2">Team</Link></li>
        <li><Link to="/contact" className="nav-link px-2">Contact</Link></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">register</button>
      </div>
    </header>
  );
}

export default Navbar;
