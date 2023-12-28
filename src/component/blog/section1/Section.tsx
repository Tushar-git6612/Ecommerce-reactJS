import { Fragment, memo } from "react";
import { Link } from "react-router-dom";
import image1 from "../../../images/image_1.jpg";
import image2 from "../../../images/image_2.jpg";
import image3 from "../../../images/image_3.jpg";
import image5 from "../../../images/image_5.jpg";
import image6 from "../../../images/image_6.jpg";
import Sidebar from "./Sidebar";

function Section() {
  const images: { id: number; image: string }[] = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image5,
    },
    {
      id: 5,
      image: image6,
    },
  ];

  const category:any = {
    type1:" Shoes",
    type2:" Men's Shoes",
    type3:" Women's",
    type4:"Accessories",
    type5:"Sports",
    type6:"Lifestyle",
  }

  return (
    <Fragment>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-last">
              <div className="row">
                {images?.map((item: { id: number; image: string }) => {
                  return (
                    <div className="col-md-12 d-flex" key={item?.id}>
                      <div className="blog-entry align-self-stretch d-md-flex">
                        <Link
                          to="blog-single.html"
                          className="block-20"
                          style={{ backgroundImage: `url(${item?.image})` }}
                        ></Link>
                        <div className="text d-block pl-md-4">
                          <div className="meta mb-3">
                            <div>
                              <Link to="#">April 9, 2019</Link>
                            </div>
                            <div>
                              <Link to="#">Admin</Link>
                            </div>
                            <div>
                              <Link to="#" className="meta-chat">
                                <span className="icon-chat"></span> 3
                              </Link>
                            </div>
                          </div>
                          <h3 className="heading">
                            <Link to="#">
                              Even the all-powerful Pointing has no control
                              about the blind texts
                            </Link>
                          </h3>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <p>
                            <Link
                              to="/Blogsingle"
                              className="btn btn-primary py-2 px-3"
                            >
                              Read more
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row mt-2">
                <div className="col">
                  <div className="block-27">
                    <ul>
                      <li>
                        <Link to="#">&lt;</Link>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">4</Link>
                      </li>
                      <li>
                        <Link to="#">5</Link>
                      </li>
                      <li>
                        <Link to="#">&gt;</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* sidebar */}
            <Sidebar category={category} />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
