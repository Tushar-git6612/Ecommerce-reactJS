import { PureComponent } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import bg_1 from "../../../images/bg_1.png";
import bg_2 from "../../../images/bg_2.png";

export default class SimpleSlider extends PureComponent {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplaySpeed: 4000,
      autoplay: true,
      cssEase: "linear"
    };
    return (
      <Slider {...settings}>
        <div className="row d-flex flex-lg-nowrap p-md-5">
          <div className="col-lg-5 col-12  m-md-3 p-md-3">
            <div className="d-flex flex-column" style={{ marginLeft: "10px", }}>
              <div>
                <span
                  className="subheading  text-uppercase"
                  style={{
                    backgroundColor: "#000000",
                    color: "#fff",
                    letterSpacing: "2px",
                    padding: "2px",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  #New Arrival
                </span>
              </div>
              <div className="">
                <h1 className="mb-4 mt-3">Shoes Collection 2019</h1>
                <p className="mb-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country.
                </p>

                <p>
                  <Link
                    to="/"
                    className="btn-custom"
                    style={{
                      backgroundColor: "#c2a942",
                      color: "#fff",
                      padding: "10px 20px",
                    }}
                  >
                    Discover Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="w-100" style={{paddingLeft:"20px"}}>
              <img
                src={bg_1}
                alt=""
                style={{
                  objectPosition: "cover",
                  width: "90%",
                  position: "relative",
                }}
              />
            </div>
          </div>
        </div>

        {/* -------- */}

        <div className="row d-flex flex-lg-nowrap p-md-5 p-2">
          <div className="col-lg-5 col-12 m-md-3 p-md-3 p">
            <div className="d-flex flex-column" style={{ marginLeft: "10px" }}>
              <div>
                <span
                  className="subheading  text-uppercase"
                  style={{
                    backgroundColor: "#000000",
                    color: "#fff",
                    letterSpacing: "2px",
                    padding: "2px",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  #New Arrival
                </span>
              </div>
              <div className="">
                <h1 className="mb-4 mt-3">New Shoes Winter Collection</h1>
                <p className="mb-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country.
                </p>

                <p>
                  <Link
                    to="/"
                    className="btn-custom"
                    style={{
                      backgroundColor: "#c2a942",
                      color: "#fff",
                      padding: "10px 20px",
                    }}
                  >
                    Discover Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 px-0">
            <div className="w-100">
              <img
                src={bg_2}
                alt=""
                style={{
                  objectPosition: "cover",
                  width: "90%",
                  position: "relative",
                }}
              />
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}
