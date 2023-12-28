import { Fragment, memo } from "react";
import Form from "./Form";
import CartTotal from "../../cart/section1/Cart total";
import PaymentMethod from "./Payment";

function Section() {
  return (
    <Fragment>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <Form />
              <div className="row mt-5 pt-3 d-flex">
                <CartTotal top={0} />
                <PaymentMethod />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
