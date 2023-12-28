import { Fragment, memo } from "react";
import choose1 from "../../../images/choose-1.jpg";
import choose2 from "../../../images/choose-2.jpg";
import choose3 from "../../../images/choose-3.jpg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Fragment>
      <div className="row no-gutters">
        <div className="col-lg-4">
          <div
            className="choose-wrap divider-one img p-5 d-flex align-items-end"
            style={{ backgroundImage: `url(${choose1})` }}
          >
            <div className="text text-center text-white px-2">
              <span className="subheading">Men's Shoes</span>
              <h2>Men's Collection</h2>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p>
                <Link to="/" className="btn btn-black px-3 py-2">
                  Shop now
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row no-gutters choose-wrap divider-two align-items-stretch">
            <div className="col-md-12">
              <div
                className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end"
                style={{ backgroundImage: `url(${choose2})` }}
              >
                <div className="col-md-7 d-flex align-items-center">
                  <div className="text text-white px-5">
                    <span className="subheading">Women's Shoes</span>
                    <h2>Women's Collection</h2>
                    <p>
                      Separated they live in Bookmarksgrove right at the coast
                      of the Semantics, a large language ocean.
                    </p>
                    <p>
                      <Link to="/" className="btn btn-black px-3 py-2">
                        Shop now
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                    <div className="text text-center px-5">
                      <span className="subheading">Summer Sale</span>
                      <h2>Extra 50% Off</h2>
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                      <p>
                        <Link to="/" className="btn btn-black px-3 py-2">
                          Shop now
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="choose-wrap wrap img align-self-stretch d-flex align-items-center"
                    style={{ backgroundImage: `url(${choose3})` }}
                  >
                    <div className="text text-center text-white px-5">
                      <span className="subheading">Shoes</span>
                      <h2>Best Sellers</h2>
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                      <p>
                        <Link to="/" className="btn btn-black px-3 py-2">
                          Shop now
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Card);
