import Link from "next/link";
import { useRouter } from "next/router";

import { useContext } from "react";
import { DataContext } from "@/store/GlobalState";
const Cookies = require("js-cookie");

const NavBar = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);

  const { auth } = state;
  console.log("auth state from navbar", auth);
  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    }
    return "";
  };

  const handleLogout = () => {
    Cookies.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    console.log("auth from hdl logout", auth);
    // dispatch({ type: "NOTIFY", payload: { success: "Logged out!" } });
    return router.push("/");
  };

  const adminRouter = () => {
    return (
      <>
        <Link className="dropdown-item" href="/users">
          Users
        </Link>
        <Link className="dropdown-item" href="/create">
          Products
        </Link>
        <Link className="dropdown-item" href="/categories">
          Categories
        </Link>
      </>
    );
  };
  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              transform: "translateY(-3px)",
              marginRight: "3px",
            }}
          />{" "}
          {auth.user.name}
        </a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" href="/profile">
            Profile
          </Link>
          {auth.user.role === "admin" && adminRouter()}
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </li>
    );
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

          {Object.keys(auth).length === 0 ? (
            <li className="nav-item ">
              <Link href="/signin" className={"nav-link" + isActive("/signin")}>
                <i className="fas fa-user" aria-hidden="true"></i>
                SignIn
              </Link>
            </li>
          ) : (
            loggedRouter()
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
