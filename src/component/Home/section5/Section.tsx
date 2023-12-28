import { Fragment, memo } from "react";
import { Link } from "react-router-dom";
import product6 from "../../../images/product-6.png";
import product2 from "../../../images/product-2.png";
import product4 from "../../../images/product-4.png";
import prod1 from "../../../images/prod-1.png";

function Section() {
  return (
    <Fragment>
      <section className="ftco-section ftco-deal bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prod1} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="heading-section heading-section-white">
                <span className="subheading">Deal of the month</span>
                <h2 className="mb-3">Deal of the month</h2>
              </div>
              <div id="timer" className="d-flex mb-4">
                <div className="time" id="days"></div>
                <div className="time pl-4" id="hours"></div>
                <div className="time pl-4" id="minutes"></div>
                <div className="time pl-4" id="seconds"></div>
              </div>
              <div className="text-deal">
                <h2>
                  <Link to="/">Nike Free RN 2019 iD</Link>
                </h2>
                <p className="price">
                  <span className="mr-2 price-dc">$120.00</span>
                  <span className="price-sale">$80.00</span>
                </p>
                <ul className="thumb-deal d-flex mt-4">
                  <li
                    className="img"
                    style={{ backgroundImage: `url(${product6})` }}
                  ></li>
                  <li
                    className="img"
                    style={{ backgroundImage: `url(${product2})` }}
                  ></li>
                  <li
                    className="img"
                    style={{ backgroundImage: `url(${product4})` }}
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
