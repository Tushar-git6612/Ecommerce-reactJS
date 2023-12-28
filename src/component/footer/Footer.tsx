import { Fragment, memo } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Fragment>
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <Link to="#" className="mouse-icon">
                <div className="mouse-wheel">
                  <span className="ion-ios-arrow-up"></span>
                </div>
              </Link>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Minishop</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  {/* <li className="ftco-animate"> */}
                  <li className="">
                    <Link to="#">
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  {/* <li className="ftco-animate"> */}
                  <li className="">
                    <Link to="#">
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  {/* <li className="ftco-animate"> */}
                  <li className="">
                    <Link to="#">
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#" className="py-2 d-block">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="py-2 d-block">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="py-2 d-block">
                      Journal
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="py-2 d-block">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    <li>
                      <Link to="#" className="py-2 d-block">
                        Shipping Information
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="py-2 d-block">
                        Returns &amp; Exchange
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="py-2 d-block">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="py-2 d-block">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#" className="py-2 d-block">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="py-2 d-block">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">+2 392 3929 210</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info@yourdomain.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with {" "}
                <i className="icon-heart color-danger"
                  aria-hidden="true"
                ></i>{" "} by {" "}
                <Link to="https://colorlib.com" target="_blank">
                  Colorlib
                </Link>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default memo(Footer);
