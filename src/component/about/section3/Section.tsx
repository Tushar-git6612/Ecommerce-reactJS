import { Fragment, memo } from "react";
import aboutImg from "../../../images/about.jpg";
import { Link } from "react-router-dom";

function Section() {
  return (
    <Fragment>
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
        <div className="container">
          <div className="row">
            <div
              className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${aboutImg})` }}
            >
              <a
                href="https://vimeo.com/45830194"
                className="icon popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span className="icon-play"></span>
              </a>
            </div>
            <div className="col-md-7 py-md-5 wrap-about pb-md-5">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4">Stablished Sinced 1975</h2>
                </div>
              </div>
              <div className="pb-md-5 pb-4">
                <p>
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her,
                  made her drunk with Longe and Parole and dragged her into
                  their agency, where they abused her for their.
                </p>
                <p>
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her.
                </p>
                <p>
                  <Link to="#" className="btn btn-primary">
                    Shop now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
