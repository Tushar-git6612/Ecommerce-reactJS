import { Fragment, memo, useState } from "react";
import product from "../../images/product-1.png";
import Content from "./Content";
import { Link } from "react-router-dom";

function Section() {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const handleChanger = (e: any) => {};

  const incQuantiy = () => {
    setProductQuantity(productQuantity + 1);
  };

  const decQuantity = () => {
    productQuantity > 1 ? setProductQuantity(productQuantity - 1) : setProductQuantity(productQuantity);
  };

  return (
    <Fragment>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <a href={product} className="image-popup prod-img-bg">
                <img
                  src={product}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-lg-6 product-details pl-md-5">
              <h3>Nike Free RN 2019 iD</h3>
              <div className="rating d-flex">
                <p className="text-left mr-4">
                  <a href="/" className="mr-2">
                    5.0
                  </a>
                  <a href="/">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                  <a href="/">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                  <a href="/">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                  <a href="/">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                  <a href="/">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                </p>
                <p className="text-left mr-4">
                  <a href="/" className="mr-2" style={{ color: "#000" }}>
                    100 <span style={{ color: "#bbb" }}>Rating</span>
                  </a>
                </p>
                <p className="text-left">
                  <a href="/" className="mr-2" style={{ color: "#000" }}>
                    500 <span style={{ color: "#bbb" }}>Sold</span>
                  </a>
                </p>
              </div>
              <p className="price">
                <span>$120.00</span>
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="ion-ios-arrow-down"></span>
                      </div>
                      <select name="" id="" className="form-control">
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="input-group col-md-6 d-flex mb-3">
                  <span className="input-group-btn mr-2">
                    <button
                      type="button"
                      className="quantity-left-minus btn"
                      data-type="minus"
                      data-field=""
                      onClick={decQuantity}
                    >
                      <i className="ion-ios-remove"></i>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="quantity form-control input-number"
                    value={productQuantity}
                    min="1"
                    max="100"
                    onChange={handleChanger}
                    disabled = {true}
                  />
                  <span className="input-group-btn ml-2">
                    <button
                      type="button"
                      className="quantity-right-plus btn"
                      data-type="plus"
                      data-field=""
                      onClick={incQuantiy}
                    >
                      <i className="ion-ios-add"></i>
                    </button>
                  </span>
                </div>
                <div className="w-100"></div>
                <div className="col-md-12">
                  <p style={{ color: "#000" }}>80 piece available</p>
                </div>
              </div>
              <p>
                <Link to="#" className="btn btn-black py-3 px-5 mr-2">
                  Add to Cart
                </Link>
                <Link to="#" className="btn btn-primary py-3 px-5">
                  Buy now
                </Link>
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 nav-link-wrap">
              <div
                className="nav nav-pills d-flex text-center"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link  active mr-lg-1"
                  id="v-pills-1-tab"
                  data-toggle="pill"
                  href="#v-pills-1"
                  role="tab"
                  aria-controls="v-pills-1"
                  aria-selected="true"
                >
                  Description
                </a>

                <a
                  className="nav-link  mr-lg-1"
                  id="v-pills-2-tab"
                  data-toggle="pill"
                  href="#v-pills-2"
                  role="tab"
                  aria-controls="v-pills-2"
                  aria-selected="false"
                >
                  Manufacturer
                </a>

                <a
                  className="nav-link "
                  id="v-pills-3-tab"
                  data-toggle="pill"
                  href="#v-pills-3"
                  role="tab"
                  aria-controls="v-pills-3"
                  aria-selected="false"
                >
                  Reviews
                </a>
              </div>
            </div>
            <Content />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
