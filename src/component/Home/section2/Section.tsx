import { Fragment, memo } from "react";

function section() {
  return (
    <Fragment>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-4 text-center d-flex align-self-stretch">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-bag"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Support Customer</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-payment-security"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Secure Payments</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(section);
