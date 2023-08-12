import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../contexts/cartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [counter, setCounter] = useState();

  useEffect(() => {
    return setCounter(cart.length);
  }, [cart]);

  return (
    <>
      <nav
        className="navbar navbar-expand sticky-top"
        style={{ background: "#337ab7" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/LandingPage">
            MyStore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-0 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </Link>
              </li>
            </ul>
            <Link to="/Cart" className="nav-link text-white mx-3">
              <ShoppingCartIcon sx={{ fontSize: 35 }} />
              {cart.length > 0 && (
                <span className="badge bg-danger">{counter}</span>
              )}
            </Link>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
