import { PureComponent } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default class SimpleSlider extends PureComponent<any> {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplaySpeed: 4000,
      autoplay: true,
      cssEase: "linear",
    };
    return (
      <Slider {...settings}>
        {this.props.person.map((item: any, index: number) => {
          return (
            <div className="item" key={index}>
              <div className="testimony-wrap">
                <div
                  className="user-img mb-4"
                  style={{ backgroundImage: `url(${item?.image})` }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left"></i>
                  </span>
                </div>
                <div className="text">
                  <p className="mb-4 pl-4 line">{item?.description}</p>
                  <p className="name">{item?.name}</p>
                  <span className="position">{item?.position}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}
