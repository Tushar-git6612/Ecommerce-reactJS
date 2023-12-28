import { Fragment, memo } from "react";
import { Link } from "react-router-dom";
import image1 from "../../../images/image_1.jpg";
import image2 from "../../../images/image_2.jpg";
import image3 from "../../../images/image_3.jpg";

function Sidebar({ category }: any) {
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
  ];

  return (
    <Fragment>
      <div className="col-lg-4 sidebar ">
        <div className="sidebar-box">
          <form action="#" className="search-form">
            <div className="form-group">
              <span className="icon ion-ios-search"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Type a keyword and hit enter"
              />
            </div>
          </form>
        </div>

        <div className="sidebar-box ">
          <h3 className="heading">Categories</h3>
          <ul className="categories">
            <li>
              <Link to="#">
                {category.type1} <span>(12)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
              {category.type2} <span>(22)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
              {category.type3} <span>(37)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
              {category.type4} <span>(42)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
              {category.type5} <span>(14)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
              {category.type6} <span>(140)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-box">
          <h3 className="heading">Recent Blog</h3>
          {images.map((item: { id: number; image: string }, index: number) => {
            return (
              <div className="block-21 mb-4 d-flex" key={index}>
                <Link
                  to="#"
                  className="blog-img mr-4"
                  style={{ backgroundImage: `url(${item?.image})` }}
                ></Link>
                <div className="text">
                  <h3 className="heading-1">
                    <Link to="#">
                      Even the all-powerful Pointing has no control about
                      theblind texts
                    </Link>
                  </h3>
                  <div className="meta">
                    <div>
                      <Link to="#">
                        <span className="icon-calendar"></span> April 27, 2019
                      </Link>
                    </div>
                    <div>
                      <Link to="#">
                        <span className="icon-person"></span> Admin
                      </Link>
                    </div>
                    <div>
                      <Link to="#">
                        <span className="icon-chat"></span> 19
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sidebar-box">
          <h3 className="heading">Tag Cloud</h3>
          <div className="tagcloud">
            <Link to="#" className="tag-cloud-link">
              shop
            </Link>
            <Link to="#" className="tag-cloud-link">
              products
            </Link>
            <Link to="#" className="tag-cloud-link">
              shirt
            </Link>
            <Link to="#" className="tag-cloud-link">
              jeans
            </Link>
            <Link to="#" className="tag-cloud-link">
              shoes
            </Link>
            <Link to="#" className="tag-cloud-link">
              dress
            </Link>
            <Link to="#" className="tag-cloud-link">
              coats
            </Link>
            <Link to="#" className="tag-cloud-link">
              jumpsuits
            </Link>
          </div>
        </div>

        <div className="sidebar-box">
          <h3 className="heading">Paragraph</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            itaque, autem necessitatibus voluptate quod mollitia delectus aut,
            sunt placeat nam vero culpa sapiente consectetur similique,
            inventore eos fugit cupiditate numquam!
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Sidebar);
