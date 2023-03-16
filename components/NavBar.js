import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    }
    return "";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        MyApp
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link href="/cart" className={`nav-link isActive("/cart")`}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li className="nav-item ">
            <Link href="/signin" className={"nav-link" + isActive("/signin")}>
              <i className="fas fa-user" aria-hidden="true"></i>
              SignIn
            </Link>
          </li>

          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user" aria-hidden="true"></i>
              Sign In
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
