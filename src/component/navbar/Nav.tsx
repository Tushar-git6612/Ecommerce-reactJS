import { Fragment, memo } from "react";
import Header from "./Header";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const cartState:any = useSelector((state:any) => state.cartSlice);

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      {/* header end */}
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Minishop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            cartdata-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Catalog
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <NavLink
                    className="dropdown-item"
                    to="/Shop"
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/SingleProduct"
                  >
                    Single Product
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/Cart"
                  >
                    Cart
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/Checkout"
                  >
                    Checkout
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/About"
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Blog"
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item cta cta-colored">
                <NavLink to="/Cart" className="nav-link" style={{ cursor: "pointer" }}
                >
                  <span className="icon-shopping_cart"></span>
                  {`[${cartState?.length ? cartState?.length : 0}]`}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default memo(Nav);
