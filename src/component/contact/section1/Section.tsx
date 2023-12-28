import { Fragment, memo } from "react";
import { Link } from "react-router-dom";

function Section() {
  return (
    <Fragment>
      <section className="ftco-section contact-section bg-light">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="w-100"></div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Address:</span> 198 West 21th Street, Suite 721 New York
                  NY 10016
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Phone:</span>{" "}
                  <Link to="tel://1234567920">+ 1235 2355 98</Link>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Email:</span>{" "}
                  <Link to="mailto:info@yoursite.com">info@yoursite.com</Link>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Website</span> <Link to="#">yoursite.com</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-white p-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6 d-flex">
              <div id="map" className="bg-white"></div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
