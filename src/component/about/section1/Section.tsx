import { Fragment, memo } from "react";
import bg_6 from "../../../images/bg_6.jpg";
import { Link } from "react-router-dom";

function Section({ type }: { type: string }) {
  return (
    <Fragment>
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: `url(${bg_6})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link to="/">Home</Link>
                </span>{" "}
                <span>
                  {type === "my wishlist" ? "cart" : type === "single blog" ? "blog": type}
                </span>
              </p>
              <h1 className="mb-0 bread">
                {type === "Contact" ? `${type} us` : type}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Section);
