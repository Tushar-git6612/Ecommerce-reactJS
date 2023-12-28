import { Fragment, memo } from "react";

function Payment() {
  return (
    <Fragment>
      <div className="col-md-6">
        <div className="cart-detail bg-light p-3 p-md-4">
          <h3 className="billing-heading mb-4">Payment Method</h3>
          <div className="form-group">
            <div className="col-md-12">
              <div className="radio">
                <label>
                  <input type="radio" name="optradio" className="mr-2" />
                  Direct Bank Tranfer
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <div className="radio">
                <label>
                  <input type="radio" name="optradio" className="mr-2" />
                  Check Payment
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <div className="radio">
                <label>
                  <input type="radio" name="optradio" className="mr-2" />
                  Paypal
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" className="mr-2" /> I have
                  read and accept the terms and conditions
                </label>
              </div>
            </div>
          </div>
          <p>
            <a href="/" className="btn btn-primary py-3 px-4">
              Place an order
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Payment);
