import { Fragment, memo } from "react";

function Child1() {
  return (
    <Fragment>
      {/* <div className="col-lg-5"> */}
      <div className="services-flow">
        <div className="services-2 p-4 d-flex">
          <div className="icon">
            <span className="flaticon-bag"></span>
          </div>
          <div className="text">
            <h3>Free Shipping</h3>
            <p className="mb-0">
              Separated they live in. A small river named Duden flows
            </p>
          </div>
        </div>
        <div className="services-2 p-4 d-flex">
          <div className="icon">
            <span className="flaticon-heart-box"></span>
          </div>
          <div className="text">
            <h3>Valuable Gifts</h3>
            <p className="mb-0">
              Separated they live in. A small river named Duden flows
            </p>
          </div>
        </div>
        <div className="services-2 p-4 d-flex">
          <div className="icon">
            <span className="flaticon-payment-security"></span>
          </div>
          <div className="text">
            <h3>All Day Support</h3>
            <p className="mb-0">
              Separated they live in. A small river named Duden flows
            </p>
          </div>
        </div>
        <div className="services-2 p-4 d-flex">
          <div className="icon">
            <span className="flaticon-customer-service"></span>
          </div>
          <div className="text">
            <h3>All Day Support</h3>
            <p className="mb-0">
              Separated they live in. A small river named Duden flows
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Fragment>
  );
}

export default memo(Child1);
